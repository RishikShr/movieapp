import { combineReducers } from "redux";

import postReducer from './postReducer'

 const rootreducer =  combineReducers({
    postReducer
})
export type RootState = ReturnType<typeof rootreducer>  //!--
export default rootreducer



