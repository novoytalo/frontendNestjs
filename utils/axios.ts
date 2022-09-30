const axios = require('axios');
const api = process.env.NEST_PUBLIC_API
const callAxios = axios.create({
  baseURL: api,
  timeout: 2000,
  // headers: {
  //   'Content-Type': 'application/json',
  //   //'Authorization': 'token <your-token-here> -- https://docs.GitHub.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token'
  // }
});

export default callAxios