import { LOAD_SUCCESS,LOAD_ERROR,LOAD_REQUEST } from "../actions/actionTypes";
import { Actions } from "../types/actionTypes";
import { MoviesState } from "../types/types";
//import { item } from "../types/storeType";

// interface InitialState{
//     id:number | string
//     avatar:string
//     first_name:string
//     last_name:string

// }
// interface Items{
//     items:[]
// }



const InitialState:MoviesState={
    data:[],
    error:false,
    loading:false
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state=InitialState,action:Actions){
    // switch(action.type){
    //    case LOAD_SUCCESS: 
    //    return{
    //        ...state,
    //        items:action.payload
         
           
    //    }{
    switch(action.type){
        case LOAD_REQUEST:
            return {
              ...state,
              data: [],
              loading: true,
              error: false,
            };
          case LOAD_SUCCESS:
            return {
              ...state,
              data: action.payload,
              loading: false,
              error: false,
            };
          case LOAD_ERROR:
            return {
              ...state,
              data: [],
              loading: false,
              error: true,
            };
            default : return state
    }

       
    }
