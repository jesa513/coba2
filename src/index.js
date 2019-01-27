import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './support/css/agency.css';
import './support/fontawesome-free/css/fontawesome.min.css';
import './support/fontawesome-free/css/all.css';
import { BrowserRouter } from 'react-router-dom'; 
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from'./reducers';
import ReduxThunk from 'redux-thunk';


const store=createStore (reducers, {}, applyMiddleware(ReduxThunk));

ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();




