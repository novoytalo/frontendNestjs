import axios from "axios";

// const axios = require('axios');
import { NextApiRequest, NextApiResponse } from "next";
import callAxios from "../../../utils/axios";

// solution for "CORS" issue to nextjs: https://stackoverflow.com/questions/65058598/nextjs-cors-issue
export default async function handlerprophet( req:NextApiRequest, res: NextApiResponse) {


    const body =req.body
    







//  const data = body.sumEqualDataExtractXY

    // let data = JSON.stringify({
    //     Order_Date: body.valuesEspt.x,
    //     Quantity: body.valuesEspt.y
    // })
    // console.log('body prohet api prophet',body.horizon,body.valuesEspt.x,body.valuesEspt.y)
    // const horizon=body.horizon
    // let data = JSON.stringify(body.sumEqualDataExtractXY)
    // const  response  = await axios.post(`${process.env.NEST_PRIVATE_PROPHET}/forecast_json/${horizon}`, data, {
    //     headers: {
    //         'Content-Type': 'application/json',
    //     }
    // })
    // console.log('qual é o buG?',response.data)



    // switch (req.method) {
    //     case 'GET':
            
    //         break;
    //     case 'POST':
            
    //         break;
    //     case '':
            
    //         break;
        
    
    //     default:
    //         break;
    // }

    // if (req.method === 'GET') {
        // Process a GET request

        try {
            // let data = JSON.stringify({
            //     Order_Date: body.valuesEspt.x,
            //     Quantity: body.valuesEspt.y
            // })
            // const data = body.sumEqualDataExtractXY.map((value:any)=>{Order_Date:value.x; Quantity:value.y})
            // let data = JSON.stringify(datacorrect)
            const data = body.valuesEspt
            // console.log('body prohet api prophet',body.horizon,body.valuesEspt.x,body.valuesEspt.y)
            const horizon=body.horizon
            const  response  = await axios.post(`${process.env.NEST_PRIVATE_PROPHET}/forecast_json/${horizon}`, data, {
                headers: {
                    'Content-Type': 'application/json',
                },
                timeout: 20000 
            })
            // console.log('data send prohet 2: ', data)
            console.log('data send prohet 2 pass: ', body)
            console.log('response inside api interval_id prohet',response.data)
            res.status(200).json(response.data)
           
        } catch (error) {
            
            console.log('data send prohet 2 error: ', body)
            console.error('real erro O.o : ',error)
            res.status(502).json({error:`error on sever request4 olha o link 7`})
           
        }
    //   } else {
    //     // Handle any other HTTP method
    //   }
    
    
    
}