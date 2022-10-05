const axios = require('axios');
// const api = process.env.NEXT_PUBLIC_API
const callAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
  timeout: 2000,
  // headers: {
  //   'Content-Type': 'application/json',
  //   //'Authorization': 'token <your-token-here> -- https://docs.GitHub.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token'
  // }
});

// callAxios.interceptors.request.use(async config => {
//   // Declaramos um token manualmente para teste.
//   const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9";

//   if (token) {
//     callAxios.defaults.headers.authorization = `Bearer ${token}`;
//   }

//   return config;
// });
export default callAxios