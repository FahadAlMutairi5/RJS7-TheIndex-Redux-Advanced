import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

import App from "./App";

import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'; //STEP 1
import authors from './store/reducers/authors'; //STEP 2
import author from './store/reducers/author'; // STEP 2

//STEP 3
const rootReducer = combineReducers({
    authors: authors,
    author: author,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk))); //STEP 4

ReactDOM.render(<BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
