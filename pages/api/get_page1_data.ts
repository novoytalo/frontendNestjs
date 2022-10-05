import axios from "axios";
// const axios = require('axios');
import { NextApiRequest, NextApiResponse } from "next";
import callAxios from "../../utils/axios";

// solution for "CORS" issue to nextjs: https://stackoverflow.com/questions/65058598/nextjs-cors-issue
export default async function handler( req:NextApiRequest, res: NextApiResponse) {
    // try {
    //     const data = await axios.post('http://localhost:3000/grandetabela', {param: req.body.param}, headers)
    //     res.status(200).json(data)
    // } catch (error) {
    //     console.error(error)
    //     return res.status(error.status || 500).end(error.message)
        
    // }
    console.log (req.body)
    const data2 = await callAxios.get('http://localhost:8080/grandetabela/')
        .then((resp:any)=>{
            return resp.data
            // console.log('fora2: '+resp.data)
            // resp.send()
    // console.log('test inside api')
            })
    try {
        //172.20.50.1 is the ip configured at docker compose back end to fix it.
        const data = await axios.get('http://localhost:8080/grandetabela/')
        // const data = await axios.get('https://jsonplaceholder.typicode.com/todos')
        .then((resp:any)=>{
            // console.log('reps dentro do try'+resp.data)
            
        
            return [...resp.data]
            // return resp.data
            })
        console.log('data dentro da api grandetabela'+data)
        // console.log('data fora do get dentro api'+data)
        res.status(200).json(data)
    } catch (error) {
        console.error(error.response.data); 
        // console.error(error)
        // res.status(502).json({error:`error on sever request4 olha o link http://localhost:8080/grandetabela/: saída ${data2}`})
        // return res.status(error.status || 500).end(error.message)
        
    }
}