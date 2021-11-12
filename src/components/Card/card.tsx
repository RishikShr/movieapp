import React from "react";
import './card.css'
import {useEffect } from "react";
import cardList from "../../model/cardList";
//import { Api } from "../../api_calls/dataApi";
//import { AxiosResponse } from "axios";
import { RootState } from "../../store/reducers";
//import postReducer from "../../store/reducers/postReducer";

import { useDispatch , useSelector} from "react-redux";
//import { log } from "console";
import { getPost } from "../../store/actions/postAction";



const Card =()=>{

   //  const baseURL="https://reqres.in/api/users?page=1"

   // const [state,setState]=useState<Array<cardList>>([])

    const myState  = useSelector((state: RootState )=> state.postReducer)
    console.log("mystate",myState)
    const dispatch = useDispatch()

    

   //  const getData = ()=>{
   //    axios.get(baseURL).then((response:AxiosResponse<any>)=>{
   //       console.log("response",response);
   //       setState(response.data)
      
         
   //    }).catch((error)=>{
   //       console.log('error',error);
         
   //    })

   //  }

  

      //  useEffect(()=>{
      //     axios.get(baseURL).then((response:AxiosResponse<any>)=>{
      //        //console.log("response",response);
      //        setState(response.data.data)
      //        console.log('respondata',response.data);
             

          
             
      //     }).catch((error)=>{
      //        console.log('error',error);
             
      //     })
      //  },[])
       

      //   ____!Api call_____


      // useEffect(()=>{
      //    Api().then((response:AxiosResponse<any>)=>{
      //       setState(response.data.data)
      //    }).catch((error)=>{
      //       console.log("error",error);
            
      //    })
      // },[])

      // useEffect(()=>{

         
      //    Api().then((response:any)=>{
      //       console.log("response_card_component",response);
            
      //       setState(response)
      //    }).catch((error)=>{
      //       console.log("error",error);
            
      //    })
      // },[])


      
      //    useEffect(()=>{   
         
      //    const getPost = async ()=>{
      //       try{
      //           const response:any=await Api()
      //           setState(response)
      //        }
      //       catch(error){
      //             console.log('error',error);
      //        }
      //     }

      //    getPost()
      // },[])

      //!!===Redux===

      useEffect(()=>{
      dispatch(getPost)
         //console.log('getPost',getPost);
        

      },[dispatch])

    

      //  useEffect(()=>{
      //    axios.get(baseURL).then((response:<any>()=>{}) => {
      //        console.log('response',Response)
      //       setState(response);
      //      });
      //  })
    return(
        <div className='cards'>
         

             {myState.data.map((element:cardList,index:number)=>{
                console.log("element",element);
                
                return(
                <div className='card'>
                <img src={element.avatar}   alt='mypic' className='card-img'/>
                 <div className='card-info'>
                 <h3 className='card-title'>{element.first_name}</h3>
                 <span className='card-price'>{element.last_name}</span>

                       </div>
              </div>

               
                
              ) } )}
             
            


            
            

            
             {/* <div className='card'>
                <img src={myState.items.}   alt='mypic' className='card-img'/>
                 <div className='card-info'>
                 <h3 className='card-title'>{myState}</h3>
                 <span className='card-price'>{myState}</span>

                       </div>
              </div>
             */}

             

            
             
          </div>
    )

}


export default Card