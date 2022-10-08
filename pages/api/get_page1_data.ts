import axios from "axios";
// const axios = require('axios');
import { NextApiRequest, NextApiResponse } from "next";
import callAxios from "../../utils/axios";

// solution for "CORS" issue to nextjs: https://stackoverflow.com/questions/65058598/nextjs-cors-issue
export default async function handler( req:NextApiRequest, res: NextApiResponse) {


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

    if (req.method === 'GET') {
        // Process a GET request
        try {
            //172.20.50.1 is the ip configured at docker compose back end to fix it.
            // in the local network on pc dev use host.docker.internal 
            // const data = await axios.get('http://host.docker.internal:3000/grandetabela/interval_id/0/100')
            // const data = await axios.get('http://54.232.76.194:3000/grandetabela/interval_id/0/100')
  
           
            const  data  = await axios.get(`${process.env.NEST_PRIVATE_API}/grandetabela/interval_id/0/100`)
            .then((resp:any)=>{
                // console.log('reps dentro do try'+resp.data)
                
                // console.log('data dadadada dada'+resp)
                // console.log('data na api', resp)
                // console.log('data na api typo: ', typeof(resp))
                // res.status(200).json(resp.data)
                return [...resp.data]
                // return resp.data
                })
            // console.log('data dentro da api grandetabela'+data)
            // console.log('data fora do get dentro api'+data)
            // console.log('data na api', data)
            //     console.log('data na api typo: ', typeof(data))

            res.status(200).json(data)
           
        } catch (error) {
            
            res.status(502).json({error:`error on sever request4 olha o link 7`})
           
        }
      } else {
        // Handle any other HTTP method
      }
    
    
    
}