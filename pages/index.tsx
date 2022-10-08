
import Head from 'next/head';
import useSWR from 'swr';
import axios from 'axios';
import { useEffect, useState } from 'react';
import  callAxios  from '../utils/axios';
const fetcher = (url: string) => fetch(url).then((res)=>res.json())
//chart imports
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend,
  Filler,
  Tooltip,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend

);

import {Bar, Line, Scatter, Bubble} from "react-chartjs-2";
// import Chart from 'chart.js/auto';

interface DataGrandeTabela_Quantity {
  id: number;
  Order_Date: Date;
  Quantity: number;

}

interface diaData {
  
}


export function dataConversion (date:string){
  const newStringDate= date.split("/").reverse().join("/")
  // const dataConverted = new Date ('22/01/22')
  //  const dataConverted = typeof(newStringDate)
  return newStringDate
}



// export default function Home(props) {
export default function Home( props:any) {
  const dataBuysById:DataGrandeTabela_Quantity[] = props.data
  dataBuysById.map(value => console.log(value.id))
  console.log('props: ',props.data)
  
  // const [stateData, setstateData]=useState(true)
  //  const [stateData, setstateData]=useState(true)
  //  setstateData
  // useEffect(() => {
    
  // }, [stateData])
  

  // const inicialState=[
  //   {
  //     id: 1,
  //     Order_Date: new Date ('2014/01/03'),
  //     Quantity: 2
  //   },
  //   {
  //     id: 2,
  //     Order_Date: new Date ('2014/01/04'),
  //     Quantity: "3"
  //   }
  // ]
  // if (dataBuysById=== null || dataBuysById = undefined={}){
  //   dataBuysById
  // }
  
  // useEffect()

  
//   // const {data, error}=useSWR('https://jsonplaceholder.typicode.com/todos', fetcher, {
//   // useSWR('https://jsonplaceholder.typicode.com/todos', fetcher, {
//   //   onSuccess:(data,key,config)=>{
//   //     setData(data)
//   //     // console.log(data)
//   //   }
//   // })

//   // NEST_PUBLIC_API


//   //server query backend. Return a list A

//   //Get on Prophet backend. Take the list A an return a list B.
//   //repted values need to go!
 
//   const dataGraficValues = extractProps.map((value:any)=>value.Quantity)
//   const dataDate = extractProps.map((value:any)=>dataConversion(value.Order_Date) )
//   // const dataGrafic = [...extractProps.values("Quantity")]
//   console.log('dataDate2'+dataDate)
//  const dataChart={
//   // labels:["January", "February","March", "April", "May", "May"],
//   labels:[...dataDate],
//   datasets:[
//     {
//       label: 'Prophet',
//       data:[{x: '14-06-01', y: 1 }, {x:'14-06-01',y:0.4}, {x:'14-06-01',y:0.2}],
//       // labels:["January", "February","March", "April", "May", "May"],
//       fill: false,
//       borderColor: 'rgb(75,192,192)',
//       tension:0.1,
 
//     },
//     {
//       label:'Data Original',
      
//       data:[...dataGraficValues],
//       fill: false,
//       borderColor: 'rgb(20,100,150)',
//       tension:0.1,
//       // backgoundColor: "rgba(47,97,68, 0.3)",
//     },
//   ],
//  };

// const dataDate = dataBuysById.map((value)=>value.Order_Date )
const dataExtractXY = dataBuysById.map((value)=>({x:value.Order_Date, y:value.Quantity}) )
// console.log('XYdata: ',dataExtractXY)

// cut repeated data



const sumEqualDataExtractXY:{
  x: Date;
  y: number;
}[] = Object.values(dataExtractXY.reduce((r:any, o:any) => {
  r[(o.x)] = r[o.x] || {x: o.x, y : 0};
  r[o.x].y += +o.y;
  return r;
},{}));

const valuesEspt = sumEqualDataExtractXY.map((value)=>({x:new Date(value.x), y:value.y}))
const dataDate = valuesEspt.map((value)=>value.y)
const dataSet2= sumEqualDataExtractXY.map((value)=>({x:new Date(value.x), y:value.y/2}))
console.log(valuesEspt)

 const dataChart={
  
  // labels:["2012/01/01", "2012/01/02","2012/01/04", "2012/01/05", "2012/01/10", "2012/01/15","2012/01/20","2012/01/21","2012/01/22"],
  labels:[...dataDate],
  datasets:[
    {
      label: 'Prophet',
      // data:[{x: '2012/01/01', y: 1 }, {x:'2012/01/15',y:0.4}, {x:'2012/01/20',y:0.2}],
      data: valuesEspt,
      // labels:["January", "February","March", "April", "May", "May"],
      // fill: false,
      borderColor: 'rgb(75,192,192)',
      tension:0.1,
 
    },
    {
      label:'Data Original',
      
      // data:[0.1, 0.2, 0.3, 0.4, 0.7, 0.7,0.9,0.10],
      data: dataSet2,
      
      // fill: false,
      borderColor: 'rgb(20,100,150)',
      tension:0.1,
      // backgoundColor: "rgba(47,97,68, 0.3)",
    },
  ],
 };

 const option ={
    plugin:{
      legend:{
        display: false,
      },
    },
    ///
    element:{
      line:{
        tension:0,
        borderWidth: 2,
        borderColor: "rgba(47,97,68,1)",
        fill: "start",
        backgoundColor: "rgba(47,97,68, 0.3)",
      },
      point:{
        radius: 0,
        hitRadius: 0,
      },
    },
    ///
    scales:{
      xAxis:{
        offset:true,
        // type: "time",      
      },
        
        // display: false,
      
      yAxis:{
        // display: false,
      },
    },
 };
 

  return (
    <main className='d-flex flex-column min-vh-100'>
      <Head>
        <title>Next.js + Bootstrap ❤️</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>THIS GIT IS FOR TESTING, FOR NOW!!! </h1>
      
      {dataBuysById&&<h2>Server On</h2>}
      {(dataBuysById==null||dataBuysById==undefined)&&<h2>Server OFF</h2>}
      <div className='px-4 py-5 my-5 text-center flex-grow-1'>
        <h1 className='display-5 fw-bold'>Next.js + Bootstrap 22❤️</h1>
        <div className='col-lg-6 mx-auto'>
          <p className='lead mb-4'>
            Quickly design and customize responsive mobile-first sites with
            Bootstrap, the world’s most popular front-end open source toolkit,
            featuring Sass variables and mixins, responsive grid system,
            extensive prebuilt components, and powerful JavaScript plugins.
          </p>
          {/* chart */}
          <div>
            <Line data={dataChart} width={100} height={100} options={option} ></Line>
          </div>
          <div>

            {/* {props.map((value)=> <div key={value.id}>{value.Quantity}</div>)} */}
            {/* {props.data.map((value:any)=> <div key={value.id}>{value.title}</div>)} */}
          </div>
          <div className='d-grid gap-2 d-sm-flex justify-content-sm-center'>
            <button type='button' className='btn btn-primary btn-lg px-4 gap-3'>
              Primary button
            </button>
            <button
              type='button'
              className='btn btn-outline-secondary btn-lg px-4'
            >
              Secondary
            </button>
          </div>
        </div>
      </div>
      
    </main>
  );
}

export async function getServerSideProps() {
  // const server = process.env.NEST_PUBLIC_API
  // const data = await callAxios.get('https://jsonplaceholder.typicode.com/todos')
   const data = await callAxios.get('/api/get_page1_data', {timeout: 10000})
   .then((resp:any)=>{  
    // console.log('resposta api'+resp.data)
    // const dataConcat = [...resp.data]
    // console.log('no front resposta recebida'+resp[0])
    // console.log(resp)
    // console.log(typeof(resp))
    return [...resp.data]
  }
   ).catch((reserror:any)=>console.log(reserror))
  // console.log('saída ',data)
  return {
    props: {
      data,
    },
  };

}


