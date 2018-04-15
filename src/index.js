import React from 'react';
import ReactDOM from 'react-dom';
// import 'materialize-css/dist/js/materialize.min.js';

import App from './components/App';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

module.hot.accept();
