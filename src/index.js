import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import './index.css';


import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import App from './App';
import DefaultLayout from './containers/defaultLayout';
import LayoutCash from './containers/defaultLayout/LayoutCash';
import IndexSagas from './sagas';
import IndexReducer from './reducers';

import WebSocketProvider from '../src/containers/socket/webSocket';
import { WindowContextProvider } from './containers/windowActive';

const sagaMiddleware = createSagaMiddleware();

const composeSetup =
  process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const store = createStore(
  IndexReducer,
  composeSetup(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(IndexSagas);

let consoleHolder = console;
function debug(bool) {
  if (!bool) {
    consoleHolder = console;
    console = {};
    Object.keys(consoleHolder).forEach(function (key) {
      console[key] = function () { };
    });
  } else {
    console = consoleHolder;
  }
}

debug(process.env.NODE_ENV !== 'production');

ReactDOM.render(
  <Provider store={store}>
    <WindowContextProvider>
      <WebSocketProvider store={store}>
        <Router basename={process.env.PUBLIC_URL}>
          <React.Suspense>
            <Route path="/" component={App}>
              <Switch>
                <Route
                  path={
                    [
                      "/bang-gia",

                    ]
                  }
                  component={() => (
                    <DefaultLayout store={store} />
                  )}
                />
                <Route
                  path="/cash"
                  component={() => (
                    <LayoutCash store={store} />
                  )}
                />
                <Redirect from="/" to="/bang-gia" />
              </Switch>
            </Route>
          </React.Suspense>
        </Router>
      </WebSocketProvider>
    </WindowContextProvider>
  </Provider>,
  document.getElementById('root')
);

