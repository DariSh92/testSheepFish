import { combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import  productReducer  from './productReducers';


const rootReducer = combineReducers({ 
    products: productReducer });
// const Store = createStore(rootReducer, applyMiddleware(thunk));


const store = configureStore({
    reducer: rootReducer, 
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(thunk).concat(),
    devTools: process.env.NODE_ENV !== 'products', 
  });
  
  export default store;