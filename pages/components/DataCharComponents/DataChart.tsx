//to sove problems types
//yarn add --dev @types/react
import Head from "next/head";
import useSWR from "swr";
import axios from "axios";
import React, { useEffect, useState } from "react";
import callAxios from "../../../utils/axios";
//datapicker
// import "react-datepicker/dist/react-datepicker.css";

import "react-datepicker/dist/react-datepicker.css";
const fetcher = (url: string) => fetch(url).then((res) => res.json());
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

import { Bar, Line, Scatter, Bubble } from "react-chartjs-2";
import Datapicker from "../Datapicker";
import condensedataFunction from "../../../utils/condensedata";
import { getdatabyDateInterval, getdatabyid } from "../../../scripts/data_db";
import prohetQuantytotalData from "../../../scripts/prophetdata/quantytotal";
import dateConvertFunc from "../../../utils/dateConverter";
import { eventListeners } from "@popperjs/core";
// import Chart from 'chart.js/auto';

interface DataGrandeTabela_Quantity {
  id: number;
  Order_Date: Date;
  Quantity: number;
}
interface DataGrandeTabela_Quantity_Prohet {
  // id: number;
  ds: Date,
  yhat: number,
 yhat_lower: number,
yhat_upper:number
  // Order_Date: Date;
  // Quantity: number;
}
interface converteedValues {
  x:string,
  y:number
}

// export function dataConversion (date:string){
//   const newStringDate= date.split("/").reverse().join("/")
//   // const dataConverted = new Date ('22/01/22')
//   //  const dataConverted = typeof(newStringDate)
//   return newStringDate
// }

//if you need to sove cors problem
// const optionsAxios ={
//   // method: 'GET',
//   // mode: 'no-cors',
//   headers: {
//     'Access-Control-Allow-Origin': '*',
//     'Content-Type': 'application/json',
//   },
//   timeout: 30000,
//   // withCredentials: true,
//   // credentials: 'same-origin',
// }

// export default function Home(props) {
export default function DataChart() {
  //all axios
  //db data
  

  const [propsvalues, setPropsvalues] = useState([
    { id: 1, Order_Date: new Date("2014/01/03"), Quantity: 2 },
    { id: 2, Order_Date: new Date("2014/01/04"), Quantity: 3 },
  ]);

  const [getIdsIntervalData, setgetIdsIntervalData] = useState({
    pinitialPag: 0,
    finalPag2: 200,
  });


  const [getIntervalDate, setgetIntervalDate] = useState({
    interval_date_start: new Date().toISOString(),
    interval_date_end: new Date().toISOString(),
  });
//interval of datapicker 
  const [getIntervalDateProphet, setgetIntervalDateProphet] = useState({
    interval_date_start: new Date().toISOString(),
    interval_date_end: new Date().toISOString(),
  });
//prophet
  const [propsvaluesprophetToFit, setpropsvaluesprophetToFit] = useState([
    {  Order_Date: new Date("2014/01/03"), Quantity: 5 },
    {  Order_Date: new Date("2014/01/04"), Quantity: 6 },
  ]);

  const [propsvaluesprophet, setpropsvaluesprophet] = useState([
    {  Order_Date: new Date("2014/01/07"), Quantity: 5 },
    {  Order_Date: new Date("2014/01/08"), Quantity: 6 },
  ]);

  const [propsvaluesprophetFinal, setpropsvaluesprophetFinal] = useState([
    // {  Order_Date: new Date("2014/01/03"), Quantity: 5 },
    // {  Order_Date: new Date("2014/01/04"), Quantity: 6 },
    {
          ds: new Date('2014-10-30T00:00:00.000'),
           yhat: 1.6049256543,
          yhat_lower: -12.3855498002,
         yhat_upper: 15.2055622741
      },
   {
    ds: new Date('2014-10-31T00:00:00.000'),
   yhat: 17.2906448695,
     yhat_lower: 2.7527368604,
       yhat_upper: 30.4361170338
    },

  ]);


  // prohetQuantytotalData()

  



  // useEffect(() => {
  //   // callprops

  //   console.log(propsvalues);
  // }, [propsvalues, propsvaluesprophet]);
//////////////////////////////////////////////////////////////////////////
  const dataBuysById2: DataGrandeTabela_Quantity[] = propsvalues;

console.log("props pos type: ", dataBuysById2);
console.log("tipo de quantity: ", typeof dataBuysById2[0].Quantity);
// NOTE TRY TO CHANGE ON SERVER SIDE THE QUANTITY TYPE TO NUMBER...
const dataBuysById = dataBuysById2.map((value) => ({
  id: value.id,
  Order_Date: value.Order_Date,
  Quantity: Number(value.Quantity),
}));
console.log("tipo de quantity: ", typeof dataBuysById[0].Quantity);
console.log("props pos type: ", dataBuysById);

const dataExtractXY = dataBuysById.map((value) => ({
  x: value.Order_Date,
  y: value.Quantity,
}));
console.log("XYdata: ", dataExtractXY);
  
//////////////////////////////////////////////

const dataBuysByIdProphet: DataGrandeTabela_Quantity_Prohet[] = propsvaluesprophetFinal;
const dataExtractXYProphet = dataBuysByIdProphet.map((value) => ({
  x:  dateConvertFunc(value.ds),
  y: value.yhat,
}));
const dataExtractXYProphetYhat_lower = dataBuysByIdProphet.map((value) => ({
  x:  dateConvertFunc(value.ds),
  y: value.yhat_lower,
}));
const dataExtractXYProphetYhat_upper = dataBuysByIdProphet.map((value) => ({
  x:  dateConvertFunc(value.ds),
  y: value.yhat_upper,
}));
const dataDatePro = dataBuysByIdProphet.map((value) => ({
  x: value.ds
  // y: value.yhat,
}));

const dataDateProExtractObject = dataDatePro.map(value => value.x)

// console.log("props pos type: ", dataBuysByIdProphet);
// console.log("tipo de quantity: ", typeof dataBuysByIdProphet[0].Quantity);
// // NOTE TRY TO CHANGE ON SERVER SIDE THE QUANTITY TYPE TO NUMBER...
// const dataBuysByIdPro = dataBuysByIdProphet.map((value) => ({
//   // id: value.id,
//   Order_Date: value.Order_Date,
//   Quantity: Number(value.Quantity),
// }));
// console.log("tipo de quantity: ", typeof dataBuysById[0].Quantity);
// console.log("props pos type: ", dataBuysById);

// const dataExtractXYProphet = dataBuysByIdPro.map((value) => ({
//   x: value.Order_Date,
//   y: value.Quantity,
// }));
// console.log("XYdata: ", dataExtractXYProphet);
  






  const {dataDate, valuesEspt,dataSet2} = condensedataFunction(dataExtractXY)
  // const {dataDate:dataDatePro, valuesEspt:valuesEsptPro,dataSet2:dataSetPro} = condensedataFunction(dataExtractXYProphet)
  // const lastDateReferenceForProphetfirst=dataDate.at(0)
  // const lastDateReferenceForProphetlast=dataDate.at(-1)
  const valuesEsptConverted:{x:string,y:number}[]=valuesEspt.map(value => {
    const x= dateConvertFunc(value.x);
    const y=value.y;
    return {
     x:x,
     y:y
    }
  })

  const concatDates = [...dataDate.map(value => dateConvertFunc(value)), ...dataDateProExtractObject.map(value=>dateConvertFunc(value))];
  let concatDateUniqueArray = concatDates
    // .map(function (date) {
    //   return date.getTime();
    // })
    .filter( (date, i, array)=> {
      return array.indexOf(date) === i;
    })
    .map((time)=> {
      // return new Date(time).toISOString();
      return time;
    });

const soreUnicDateconcat = concatDateUniqueArray.sort()
useEffect(() => {
  console.log('Data Updated!')
}, [valuesEsptConverted,dataExtractXYProphet,valuesEspt, propsvaluesprophetFinal])


////////////////////////////////////////////////
  const dataChart = {
    // labels:["2012/01/01", "2012/01/02","2012/01/04", "2012/01/05", "2012/01/10", "2012/01/15","2012/01/20","2012/01/21","2012/01/22"],
    // labels: dataDate,
    labels:soreUnicDateconcat,
    datasets: [
      {
        label: "Original Data",
        // data:[{x: '2012/01/01', y: 1 }, {x:'2012/01/15',y:0.4}, {x:'2012/01/20',y:0.2}],
        // data: valuesEspt,
        data: valuesEsptConverted,
        // labels:["January", "February","March", "April", "May", "May"],
        // fill: false,
        borderColor: "rgb(75,192,192)",
        // cubicInterpolationMode: 'monotone',
        tension: 0.1,
      },
      {
        label: "Prophet",

        // data:[0.1, 0.2, 0.3, 0.4, 0.7, 0.7,0.9,0.10],
        // data: dataSet2,
        data:dataExtractXYProphet,
        // cubicInterpolationMode: 'monotone',
        // fill: false,
        
        borderColor: "rgb(20,100,150)",
        tension: 0.1,
        // backgoundColor: "rgba(47,97,68, 0.3)",
      },
      {
        label: "Yhat_lower",
        data:dataExtractXYProphetYhat_lower,
        // cubicInterpolationMode: 'monotone',
        borderColor: "rgb(191, 64, 191)",
        
        tension:0.1,

      },
      {
        label: "Yhat_lower",
        data:dataExtractXYProphetYhat_upper,
        borderColor: "rgb(191, 64, 191)",
        // cubicInterpolationMode: 'monotone',
        backgroundColor: "rgb(191, 64, 191)",
        tension:0.1,
        fill: '-1',

      },
    ],

  };

  const option = {
    plugin: {
      legend: {
        display: false,
      },
    },
    ///
    element: {
      line: {
        tension: 0,
        borderWidth: 2,
        borderColor: "rgba(47,97,68,1)",
        fill: "start",
        backgoundColor: "rgba(47,97,68, 0.3)",
      },
      point: {
        radius: 0,
        hitRadius: 0,
      },
    },
    ///
    scales: {
      xAxis: {
        offset: true,
        // type: "time",
      },

      // display: false,

      yAxis: {
        // display: false,
      },
    },
  };
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <main className="d-flex flex-column min-vh-100">
      <Head>
        <title>Next.js + Bootstrap ❤️</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>THIS GIT IS FOR TESTING, FOR NOW!!! </h1>

      {/* {dataBuysById&&<h2>Server On</h2>}
      {(dataBuysById==null||dataBuysById==undefined)&&<h2>Server OFF</h2>} */}
      <div className="px-4 py-5 my-5 text-center flex-grow-1">
        <h1 className="display-5 fw-bold">Next.js + Bootstrap 22❤️</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Quickly design and customize responsive mobile-first sites with
            Bootstrap, the world’s most popular front-end open source toolkit,
            featuring Sass variables and mixins, responsive grid system,
            extensive prebuilt components, and powerful JavaScript plugins.
          </p>
          {/* chart */}
          {/* <div>{propsvalues.map((value)=> <div key={value.id}>{value.Quantity}</div>)}</div> */}
          <div className="d-flex flex-row  align-items-center justify-content-around">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 gap-3"
              onClick={() => {
                // callProps();
                getdatabyid({getIdsIntervalData,setPropsvalues})
                
              }}
            >
              Atualizar By Id range
            </button>
            <Datapicker setgetIntervalDate={setgetIntervalDate} getIntervalDate={getIntervalDate} />
            
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 gap-3"
              onClick={() => {
                // callPropsByDateInterval();
                getdatabyDateInterval({getIntervalDate,setPropsvalues})
              }}
            >
              Atualizar By Date
            </button>
          </div>
          <div>
            <Line
              data={dataChart}
              width={100}
              height={100}
              options={option}
            //  onClick={(eventListeners)=>{console.log(eventListeners)}}
              // onClick={()=>{console.log(dataChart.datasets[0].data)}}
            ></Line>

            {/* <input type="range" className="form-range" id="customRange1" /> */}
            {/* {props.map((value)=> <div key={value.id}>{value.Quantity}</div>)} */}
            {/* {props.data.map((value:any)=> <div key={value.id}>{value.title}</div>)} */}
          </div>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <div>Prophet Interval</div>
          <Datapicker setgetIntervalDate={setgetIntervalDateProphet} getIntervalDate={getIntervalDateProphet} />
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3"
            onClick={()=>{prohetQuantytotalData({getIntervalDateProphet,propsvaluesprophetToFit,setpropsvaluesprophet,setpropsvaluesprophetToFit, setpropsvaluesprophetFinal})}}>
              Fit 
            </button>

          </div>
        </div>
      </div>
    </main>
  );
}

// function callprops() {
//   throw new Error('Function not implemented.');
// }
//on develop have no problem... in versel, call in build time getServerSideProps inside api on the same site cause error 500
//solution call as function or call direct server or on body
// export async function getServerSideProps() {

//   // const server = process.env.NEST_PUBLIC_API
//   // const data = await callAxios.get('https://jsonplaceholder.typicode.com/todos')
//    const response = await axios.get('/api/get_page1_data', {timeout: 2})

//   const valeutoprops = await response.data
//   return {
//     props: {
//       server: response.data,
//     },
//   };

// }
