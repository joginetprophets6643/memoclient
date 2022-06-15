import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {createStore,applyMiddleware,compose} from 'redux';
import {reducers} from './reducers/'
import thunk from 'redux-thunk';
const store = createStore(reducers, compose(applyMiddleware(thunk)));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
reportWebVitals();
