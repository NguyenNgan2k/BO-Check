import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import './index.css';

import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import App from './App';
import DefaultLayout from './containers/defaultLayout';

ReactDOM.render(

  <Router>
    <React.Suspense>
      <Switch>
        <Route path="/" component={App}>
          <Route
            path="/home"
            component={() => (
              <DefaultLayout />
            )}
          />
          <Redirect from="/" to="/home" />
        </Route>
      </Switch>
    </React.Suspense>
  </Router>,
  document.getElementById('root')
);

