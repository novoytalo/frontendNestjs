import useSWR from "swr"
const fetcher = (url: string) => fetch(url).then((res)=>res.json())
export default function Pgtest(props:any) {

//   useSWR('https://jsonplaceholder.typicode.com/todos', fetcher, {
//     onSuccess:(data,key,config)=>{
//     //   setData(data)
//       console.log(data)
//     }
//   })
  // useSWR('http://localhost:8080/grandetabela/', fetcher, {
    console.log('nest api: '+process.env.NEXT_PUBLIC_API)
    useSWR(`${process.env.NEST_PUBLIC_API}/grandetabela/interval_id/0/100`, fetcher, {
    onSuccess:(data,key,config)=>{
    //   setData(data)
      console.log([...data])
    }
  })
  
return (
    <div>Teste Pag</div>
)
}