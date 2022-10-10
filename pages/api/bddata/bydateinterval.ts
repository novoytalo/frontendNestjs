import axios from "axios";

// const axios = require('axios');
import { NextApiRequest, NextApiResponse } from "next";
import callAxios from "../../../utils/axios";

// solution for "CORS" issue to nextjs: https://stackoverflow.com/questions/65058598/nextjs-cors-issue
export default async function handler( req:NextApiRequest, res: NextApiResponse) {


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
                interval_date_start: body.interval_date_start,
                interval_date_end: body.interval_date_end
            })
          
            req.body
            const  response  = await axios.post(`${process.env.NEST_PRIVATE_API}/grandetabela/interval_date`, data, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
  
            res.status(200).json(response.data)
           
        } catch (error) {
            
            res.status(502).json({error:`error on sever request4 olha o link 7`})
           
        }
    //   } else {
    //     // Handle any other HTTP method
    //   }
    
    
    
}