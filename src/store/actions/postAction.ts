import { LOAD_SUCCESS } from './actionTypes'
import {Api} from '../../api_calls/dataApi'
import { Dispatch } from "redux";
//import { log } from 'console';


export const getPost = async(dispatch:Dispatch)=>{
    try{
        const response=await Api()
                    dispatch({
                        type: LOAD_SUCCESS,
                        payload:response,
                    })
                  
                  console.log('response',response)
    }
    catch(error){
        console.log(error,'error');
        
    }


}


// export const fetchPosts = ()=> (dispatch:any) =>{
//     const getPost = async ()=>{
//         try{
//             const response:any=await Api()
//             dispatch({
//                 type: FETCH_POST,
//                 payload:response
//             })
           

//         }
//         catch(error){
//               console.log('error',error);
              

//         }

        

//      }

// }