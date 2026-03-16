import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './layouts/App';
import registerServiceWorker from './registerServiceWorker';

const renderApp = Component => {
  ReactDOM.render(<Component />, document.getElementById('root'));
}

if (module.hot) {
  module.hot.accept('./layouts/App', () => {
    const NextApp = require('./layouts/App').default;
    renderApp(NextApp);
  });
}

renderApp(App);
registerServiceWorker();
