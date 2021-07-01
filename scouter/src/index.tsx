import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Amplify from 'aws-amplify';
import {currentConfig} from './amplifyConfig'
Amplify.configure(currentConfig);
import { createStore, Store } from 'redux';
import {logINReducer as reducers} from './Redux/Reducers'
import {IAppState} from './Redux/State'
import {IAppActions} from './Redux/Actions'

const w:any = window;
const store: Store<IAppState,IAppActions> = createStore(reducers, w.__REDUX_DEVTOOLS_EXTENSION__ && w.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
