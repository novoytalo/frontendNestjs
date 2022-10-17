import { Formik } from "formik";
import useSWR from "swr"
const fetcher = (url: string) => fetch(url).then((res)=>res.json())
export default function Pgtest2(props:any) {

//   useSWR('https://jsonplaceholder.typicode.com/todos', fetcher, {
//     onSuccess:(data,key,config)=>{
//     //   setData(data)
//       console.log(data)
//     }
//   })
  // useSWR('http://localhost:8080/grandetabela/', fetcher, {
  //   console.log('nest api: '+process.env.NEXT_PRIVATE_API)
  //   useSWR(`${process.env.NEST_PRIVATE_API}/grandetabela/interval_id/0/100`, fetcher, {
  //   onSuccess:(data,key,config)=>{
  //   //   setData(data)
  //     console.log([...data])
  //   }
  // })
  function myfunction(data:any){
    console.log(data)
  }


return (
<div>
     <h1>Anywhere in your app!</h1>
     <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
           <input
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           />
           {errors.email && touched.email && errors.email}
           <input
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           />
           {errors.password && touched.password && errors.password}
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>
   </div>






//     <div >
// <form >
//   <div className="form-group">
//     <label placeholder="exampleInputEmail1">Email address</label>
//     <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
//     <small id="emailHelp" className="form-text text-muted">Well never share your email with anyone else.</small>
//   </div>
//   <div className="form-group">
//     <label placeholder="exampleInputPassword1">Password</label>
//     <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
//   </div>
//   <div className="form-check">
//     <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
//     <label className="form-check-label" placeholder="exampleCheck1">Check me out</label>
//   </div>
//   <button type="submit" className="btn btn-primary" onSubmit={(data)=>myfunction(data)}>Submit</button>
// </form>

//     </div>
)
}