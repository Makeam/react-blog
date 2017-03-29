// index.js

import React from 'react';
import ReactDOM from 'react-dom';

import moment from 'moment';
import { AppContainer } from 'react-hot-loader';
import App from './app';

moment.locale('ru');

const rootEl = document.getElementById('App');

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default;

    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      rootEl
    );
  });
}
