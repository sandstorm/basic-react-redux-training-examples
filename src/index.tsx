import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createEpicMiddleware } from 'redux-observable';
import { configureStore } from 'redux-starter-kit'

import { rootReducer, rootEpic, RootAction, RootState } from './Redux/Store'

import * as serviceWorker from './serviceWorker';

import App from './App';
import './index.css';

const epicMiddleware = createEpicMiddleware<RootAction, RootAction, RootState>();

const store = configureStore({
  reducer: rootReducer,
  middleware: [epicMiddleware],
})

epicMiddleware.run(rootEpic)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
