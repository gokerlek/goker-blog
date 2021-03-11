import React from 'react';
import { render } from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

const _JSXStyle = require('styled-jsx/style').default;
if (typeof global !== 'undefined') {
  Object.assign(global, { _JSXStyle });
}

const renderApp = (AppComponent) => {
  render(
    <React.StrictMode>
      <AppComponent />
    </React.StrictMode>,
    document.getElementById('root'),
  );
};

renderApp(App);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    renderApp(NextApp);
  });
}
