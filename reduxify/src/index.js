import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {Provider} from 'react-redux'

import store from './store'
import App from './containers/App';
ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();




// const myLogger =(store)=>(next)=>(action)=>{
//   console.log("Logged Action",action);
//   next(action)
// }
//
//
//
// store.subscribe(()=>{
//   // console.log("store updated!",store.getState()); // myLogger,
// })



// store.dispatch({
//   type:'ADD',
//   payload:100
// })
// store.dispatch({
//   type:'SET_NAME',
//   payload:'ivan'
// })
//
// store.dispatch({
//   type:'ADD',
//   payload:100
// })
//
// store.dispatch({
//   type:'SET_AGE',
//   payload:28
// })
// store.dispatch({
//   type:'ADD',
//   payload:100
// })
// store.dispatch({
//   type:'SUBSTRACT',
//   payload:100
// })
