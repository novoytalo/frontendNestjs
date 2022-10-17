import axios from "axios";
import condensedataFunction from "../../utils/condensedata";

interface prophetprops {

  getIntervalDateProphet: any;
  setpropsvaluesprophet: any;
  setpropsvaluesprophetToFit: any;
  propsvaluesprophetToFit: any;
  setpropsvaluesprophetFinal: any;
  // horizon:number;
}

export default async function prohetQuantytotalData({
  getIntervalDateProphet,
  setpropsvaluesprophet,
  setpropsvaluesprophetToFit,
  propsvaluesprophetToFit,
  setpropsvaluesprophetFinal,
  // horizon,
}: prophetprops) {
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // async function callPropsByDateInterval() {
  //on develop... localy use localhost.
  const response = await axios
    .post(
      "http://localhost:3010/api/bddata/bydateinterval",
      getIntervalDateProphet,
      {
        timeout: 20000,
      }
    )
    .then((resp: any) => {
      // if(!resp.data.length || resp.data === undefined){
      //   setpropsvaluesprophetToFit(resp.data);
      //   setPropsvalues(resp.data)
      // } else { console.log("picke other dates Prophet!")}
      !resp.data.length || resp.data === undefined
        ? console.log("picke other dates Prophet!")
        : setpropsvaluesprophetToFit(resp.data);

    })
    .then(async () => {
      // Take inicial date
      // FORECAST PROPHET data get
      const horizon = 10;

      // NOTE TRY TO CHANGE ON SERVER SIDE THE QUANTITY TYPE TO NUMBER...
      const dataOrderDatePro = propsvaluesprophetToFit.map((value: any) => ({
        // id: value.id,
        Order_Date: value.Order_Date,
        Quantity: Number(value.Quantity),
      }));

      const dataExtractXYProphet = dataOrderDatePro.map((value:any) => ({
        x: value.Order_Date,
        y: value.Quantity,
      }));
      // const { valuesEspt, dataDate } = condensedataFunction(dataOrderDatePro);
      const sumEqualDataExtractXY: {
        x: Date;
        y: number;
      }[] = Object.values(
        dataExtractXYProphet.reduce((r: any, o: any) => {
          r[o.x] = r[o.x] || { x: o.x, y: 0 };
          r[o.x].y += +o.y;
          return r;
        }, {})
      );
      
      const valuesEspt = sumEqualDataExtractXY.map((value) => ({
        Order_Date: value.x,
        Quantity: value.y,
      }));

      const prophetStartData = { valuesEspt, horizon };
      // async function callForecastProhet() {
      //on develop... localy use localhost.
      const response = await axios
        .post(
          `http://localhost:3010/api/prophet/forecastprophet`,
          prophetStartData,
          { timeout: 20000 }
        )
        .then((resp: any) => {
          !resp.data.length || resp.data === undefined
            ? console.log("no data to Prophet!")
            : setpropsvaluesprophetFinal(resp.data);
        });
      //in vercel deploy use direct path like /api/prohet/forecastprophet not local host
      // }
      // console.log("future date from server side output: ", propsvaluesprophet);
    });
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}
