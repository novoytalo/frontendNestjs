import axios from "axios";

// const axios = require('axios');
import { NextApiRequest, NextApiResponse } from "next";
import callAxios from "../../../utils/axios";

// solution for "CORS" issue to nextjs: https://stackoverflow.com/questions/65058598/nextjs-cors-issue
export default async function handlerprophet( req:NextApiRequest, res: NextApiResponse) {


    const body =req.body
    
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
            let data = JSON.stringify({
                Order_Date: body.valuesEspt.x,
                Quantity: body.valuesEspt.y
            })
            console.log('body api prophet',body.horizon,body.valuesEspt.x,body.valuesEspt.y)
            const horizon=req.body.horizon
            const  response  = await axios.post(`${process.env.NEST_PRIVATE_PROPHET}/forecast_json/${horizon}`, data, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            console.log('data send: ', data)
            console.log('response inside api interval_id',response.data)
            res.status(200).json(response.data)
           
        } catch (error) {
            
            res.status(502).json({error:`error on sever request4 olha o link 7`})
           
        }
    //   } else {
    //     // Handle any other HTTP method
    //   }
    
    
    
}