
//import axios from "axios";

import { AxiosResponse } from 'axios';
import  axiosinstance from '../instance/axiosinstance'




// export const Api = axiosinstance.get('/?page=1')
//                   .then((response:AxiosResponse<any>)=>{
//                     //console.log("response",response);
//                     return response.data.data;
//                     // console.log('respondata',response.data);
//                     }).catch((error)=>{
//                     console.log('error',error);
    
//  })

export const Api = async()=>{
  
    try{
        const response:AxiosResponse<any> =  await axiosinstance.get('/?page=1')
        console.log('response',response.data);
        return response.data.data
       
    }catch(error){
        console.log('error',error);
    }

}










// export const Api = ()=>{
//     const baseURL="https://reqres.in/api/users?page=1"

//     return axios.get(baseURL)

// }
// export const Api =()=>{
//     const baseURL="https://reqres.in/api/users?page=1"

//     return axios.get(baseURL).then((response:AxiosResponse<any>)=>{
//         return response?.data?.data
//     }).catch((error)=>{
//         console.log("error",error);
        
//     })

// }
