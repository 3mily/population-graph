// Modules
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

// Redux
import reducers from "./redux/reducers";
import { getPrefectures } from './redux/actions/prefecture.action';

// App root
import AppRoot from './AppRoot';
import './index.css';

// Setup Redux Dev Tools
const devTools = process.env.NODE_ENV === "development"
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
  : x => x;

// Initialize Redux Store
const store = createStore(
  reducers,
  compose(applyMiddleware(thunk), devTools),
);

store.dispatch(getPrefectures());

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
