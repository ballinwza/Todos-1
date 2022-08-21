import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/output.css'; 
import App from './App'
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {rootReducer} from './redux/reducers/rootReducer'
import {composeWithDevTools} from 'redux-devtools-extension'

const middleWare = [thunk]
const myStore = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleWare)))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={myStore}> 
    <App /> 
  </Provider>
  
); 