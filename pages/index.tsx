//to sove problems types
//yarn add --dev @types/react
import Head from "next/head";
import useSWR from "swr";
import axios from "axios";
import React, { useEffect, useState } from "react";
import callAxios from "../utils/axios";
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
import Datapicker from "./components/Datapicker";
import condensedataFunction from "../utils/condensedata";
// import Chart from 'chart.js/auto';

interface DataGrandeTabela_Quantity {
  id: number;
  Order_Date: Date;
  Quantity: number;
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
export default function Home(props: DataGrandeTabela_Quantity[]) {
  //all axios
  //db data
  const [propsvalues, setPropsvalues] = useState([
    { id: 1, Order_Date: new Date("2014/01/03"), Quantity: 2 },
    { id: 2, Order_Date: new Date("2014/01/04"), Quantity: 3 },
  ]);
  ///////
  //Prophet data
  //the serve can recive id two... no problem
  const [propsvaluesprophet, setpropsvaluesprophet] = useState([
    {  Order_Date: new Date("2014/01/03"), Quantity: 2 },
    {  Order_Date: new Date("2014/01/04"), Quantity: 3 },
  ]);
  
  // depends on the strateg
  // let endpoints = [
  //   '/api/get_page1_data',
  //   '/api/prophet',

  // ];

  // axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
  //   axios.spread((user, repos) => {
  //     console.log({ user, repos });
  //   })
  // );

  const [getIdsIntervalData, setgetIdsIntervalData] = useState({
    pinitialPag: 0,
    finalPag2: 200,
  });
  //  function passDrilling (idsObject:any) {
  //    setgetIdsIntervalData(idsObject)
  //  }
  // axios.post(url, data, {headers : {'X-Requested-With': 'XMLHttpRequest'} })
  async function callProps() {
    //on develop... localy use localhost.
    const response = await axios
      .post(
        `http://localhost:3010/api/bddata/interval_id`,
        getIdsIntervalData,
        { timeout: 20000 }
      )
      .then((resp: any) => {
        resp.data === []
          ? console.log("escolha outro valor de ids")
          : setPropsvalues(resp.data);
        console.log(resp.data);
      });

    //in vercel deploy use direct path
    // const response = await axios.get('/api/bddata/interval_id', optionsAxios).then((resp:any)=>{setPropsvalues(resp.data); console.log(resp.data)})
    //vercel
    // const response = await axios.get('/api/bddata/interval_id').then((resp:any)=>{setPropsvalues(resp.data); console.log(resp.data)})
  }

  const [getIntervalDate, setgetIntervalDate] = useState({
    interval_date_start: new Date().toISOString(),
    interval_date_end: new Date().toISOString(),
  });
  async function callPropsByDateInterval() {
    //on develop... localy use localhost.
    const response = await axios
      .post(
        "http://localhost:3010/api/bddata/bydateinterval",
        getIntervalDate,
        { timeout: 20000 }
      )
      .then((resp: any) => {
        resp.data === []
          ? console.log("picke other dates!")
          : setPropsvalues(resp.data);
        // if (resp.data==[]) {return (
        //   <div className="alert alert-danger" role="alert">
        //     Danger Alert
        //   </div>)}
        console.log("date datapicker: ", getIntervalDate);
      });
    //in vercel deploy use direct path
  }

  useEffect(() => {
    // callprops

    console.log(propsvalues);
  }, [propsvalues]);


  const dataBuysById2: DataGrandeTabela_Quantity[] = propsvalues;
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

  const {dataDate, valuesEspt,dataSet2} = condensedataFunction(dataExtractXY)
 
//valuesEspt is in another config 
// valuesEspt===[]? console.log('need data to Prophet') : callForecastProhet()
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // FORECAST PROPHET
  const horizon = 10;
  const prophetStartData={valuesEspt,horizon}
  async function callForecastProhet() {
    //on develop... localy use localhost.
    const response = await axios
      .post(
        `http://localhost:3010/api/prohet/forecastprophet`,
        prophetStartData,
        { timeout: 20000 }
      )
      .then((resp: any) => {
        valuesEspt === []
          ? console.log("no data to Prophet!")
          : setpropsvaluesprophet(resp.data);
      });
    //in vercel deploy use direct path like /api/prohet/forecastprophet not local host
  }
  console.log('future date from server side output: ',propsvaluesprophet)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 

  const dataChart = {
    // labels:["2012/01/01", "2012/01/02","2012/01/04", "2012/01/05", "2012/01/10", "2012/01/15","2012/01/20","2012/01/21","2012/01/22"],
    labels: dataDate,
    datasets: [
      {
        label: "Prophet",
        // data:[{x: '2012/01/01', y: 1 }, {x:'2012/01/15',y:0.4}, {x:'2012/01/20',y:0.2}],
        data: valuesEspt,
        // labels:["January", "February","March", "April", "May", "May"],
        // fill: false,
        borderColor: "rgb(75,192,192)",
        tension: 0.1,
      },
      {
        label: "Data Original",

        // data:[0.1, 0.2, 0.3, 0.4, 0.7, 0.7,0.9,0.10],
        data: dataSet2,

        // fill: false,
        borderColor: "rgb(20,100,150)",
        tension: 0.1,
        // backgoundColor: "rgba(47,97,68, 0.3)",
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
                callProps();
              }}
            >
              Atualizar By Id range
            </button>
            <Datapicker setgetIntervalDate={setgetIntervalDate} />

            <button
              type="button"
              className="btn btn-primary btn-lg px-4 gap-3"
              onClick={() => {
                callPropsByDateInterval();
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
            ></Line>

            <input type="range" className="form-range" id="customRange1" />
            {/* {props.map((value)=> <div key={value.id}>{value.Quantity}</div>)} */}
            {/* {props.data.map((value:any)=> <div key={value.id}>{value.title}</div>)} */}
          </div>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
              Primary button
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Secondary
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
