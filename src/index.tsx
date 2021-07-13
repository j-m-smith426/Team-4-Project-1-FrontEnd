import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Amplify from 'aws-amplify';
import {currentConfig} from './amplifyConfig'
import { createStore, Store } from 'redux';
import {Reducer} from './Redux/Reducers'
import {IAppState} from './Redux/State'
import {IAppActions} from './Redux/Actions'
import {Provider} from 'react-redux'


Amplify.configure(currentConfig);
const w:any = window;
export const store: Store<IAppState,IAppActions> = createStore(Reducer, w.__REDUX_DEVTOOLS_EXTENSION__ && w.__REDUX_DEVTOOLS_EXTENSION__());
export type RootState = ReturnType<typeof store.getState>;
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
