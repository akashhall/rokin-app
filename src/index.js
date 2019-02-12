import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom'
// import { createStore, combineReducers } from 'redux';
// import { Provider } from 'react-redux';
// import { browseReducer } from './components/Pages/BrowsePage/reducer';
import App from "./components/App.js";

// const allReucer = combineReducers({ homeReducer: browseReducer })
// const store = createStore(allReucer);

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById("root"));