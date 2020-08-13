import React from 'react';
import ReactDOM, { render } from 'react-dom';

//redux ----------------------------------------------------
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './reducers';
//----------------------------------------------------------
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



//创建store,将根Reducer传入store中。redux应用只有一个单一的store
const store = createStore(rootReducer);

render(
  <Provider store = {store}> 
  <App />
  </Provider>,
  document.getElementById('id')
)




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
