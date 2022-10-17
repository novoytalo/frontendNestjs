import axios from "axios";
interface getdatabyidProps {
    getIdsIntervalData:any
    setPropsvalues:any
}
interface getdatabyintervalProps {
    getIntervalDate:any
    setPropsvalues:any
}


export async function getdatabyid ({getIdsIntervalData,setPropsvalues}:getdatabyidProps){
    // async function callProps() {
        //on develop... localy use localhost.
        // console.log('data_db ',getIdsIntervalData,setPropsvalues)
        const response = await axios
          .post(
            `http://localhost:3010/api/bddata/interval_id`,
            getIdsIntervalData,
            { timeout: 20000 }
          )
          .then((resp: any) => {
            !resp.data.length || resp.data === undefined
              ? console.log("escolha outro valor de ids")
              : setPropsvalues(resp.data);
            console.log(resp.data);
          });
    
        //in vercel deploy use direct path
        // const response = await axios.get('/api/bddata/interval_id', optionsAxios).then((resp:any)=>{setPropsvalues(resp.data); console.log(resp.data)})
        //vercel
        // const response = await axios.get('/api/bddata/interval_id').then((resp:any)=>{setPropsvalues(resp.data); console.log(resp.data)})
    //   }
}
export async function getdatabyDateInterval ({getIntervalDate,setPropsvalues}:getdatabyintervalProps){
    // async function callPropsByDateInterval() {
        //on develop... localy use localhost.
        const response = await axios
          .post(
            "http://localhost:3010/api/bddata/bydateinterval",
            getIntervalDate,
            { timeout: 20000 }
          )
          .then((resp: any) => {
            !resp.data.length || resp.data === undefined
              ? console.log("picke other dates!")
              : setPropsvalues(resp.data);
            // if (resp.data==[]) {return (
            //   <div className="alert alert-danger" role="alert">
            //     Danger Alert
            //   </div>)}
            console.log("date datapicker: ", getIntervalDate);
          });
        //in vercel deploy use direct path
    //   }
}

export async function getdataToFit ({getIntervalDate,setPropsvalues}:getdatabyintervalProps){
    // async function callPropsByDateInterval() {
        //on develop... localy use localhost.
        const response = await axios
          .post(
            "http://localhost:3010/api/bddata/bydateinterval",
            getIntervalDate,
            { timeout: 20000 }
          )
          .then((resp: any) => {
            !resp.data.length || resp.data === undefined
              ? console.log("picke other dates!")
              : setPropsvalues(resp.data);
            // if (resp.data==[]) {return (
            //   <div className="alert alert-danger" role="alert">
            //     Danger Alert
            //   </div>)}
            console.log("date datapicker: ", getIntervalDate);
          });
        //in vercel deploy use direct path
    //   }
}

  ///////
  //Prophet data
  //the serve can recive id two... no problem

  
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


  //  function passDrilling (idsObject:any) {
  //    setgetIdsIntervalData(idsObject)
  //  }
  // axios.post(url, data, {headers : {'X-Requested-With': 'XMLHttpRequest'} })


  



  
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
