import qs from 'query-string';
require('dotenv').config()
const api_key = process.env.REACT_APP_API ;
const BaseUrl = "https://api.themoviedb.org/3";

const Api=(searchpath, params)=>{
    console.log(api_key)
    const searchApi = qs.stringify({api_key, ...params});
    
     const initialUrl = `${BaseUrl}${searchpath}`;
     return [initialUrl, searchApi].join('?');
}

export default Api;