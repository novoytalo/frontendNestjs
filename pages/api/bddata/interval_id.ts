import axios from "axios";

// const axios = require('axios');
import { NextApiRequest, NextApiResponse } from "next";
import callAxios from "../../../utils/axios";

// solution for "CORS" issue to nextjs: https://stackoverflow.com/questions/65058598/nextjs-cors-issue
export default async function handlerids( req:NextApiRequest, res: NextApiResponse) {
    const body =req.body
   
    // const { id, id2 } = req.query
    // console.log('id e id2: ',id, id2)
  //if you need to solve a cors problem 
  // const { method } = req;
//   // Preflight
//   if (method === "OPTIONS") {
//     return res.status(200).send("ok");
//   }
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   res.setHeader('Access-Control-Allow-Credentials', 'true');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, OPTIONS, DELETE');

// //---- other code

// //Preflight CORS handler
//   if(req.method === 'OPTIONS') {
//       return res.status(200).json(({
//           body: "OK"
//       }))
//   }
 
 
 

    
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
            // const { id, id2 } = req.query


            const  response  = await axios.get(`${process.env.NEST_PRIVATE_API}/grandetabela/interval_id/${body.pinitialPag}/${body.finalPag2}`)
            
            res.status(200).json(response.data)
           
        } catch (error) {
            
            res.status(502).json({error:`error on sever request4 olha o link 7`})
           
        }
    //   } else {
    //     // Handle any other HTTP method
    //   }
    
    
    
}