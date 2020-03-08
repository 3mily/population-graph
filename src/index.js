// Modules
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from "redux-thunk";
import { Provider } from "react-redux";

// Redux
import reducers from "./redux/reducers";

// App root
import AppRoot from './AppRoot';
import './index.css';

// Setup Redux Dev Tools
const devTools = process.env.NODE_ENV === "development"
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
  : x => x;

// Create App
const App = (
  <Provider store={store}>
    <AppRoot />
  </Provider>
);

ReactDOM.render(
  App,
  document.getElementById("root")
);
