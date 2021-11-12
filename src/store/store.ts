import { createStore ,applyMiddleware,compose } from "redux";
import thunk from "redux-thunk";
import rootreducer from "./reducers";
//import { composeWithDevTools } from 'redux-devtools-extension';
const initialState = {}

const middleware = [ thunk ]

// const composeEnhancers =
//   typeof window === 'object' &&
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      
//     }) : compose;

const composeEnhancers = (window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;

    const enhancer = composeEnhancers(
        applyMiddleware(...middleware),
        // other store enhancers if any
      );

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootreducer ,initialState,enhancer
);

export  default store

