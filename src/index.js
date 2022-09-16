import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from 'react-router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider>
    <Router>
      <React.Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/" component={App}>
            <Route
              path="/"
            />
          </Route>
        </Switch>
      </React.Suspense>
    </Router>
  </Provider>
);
reportWebVitals();
