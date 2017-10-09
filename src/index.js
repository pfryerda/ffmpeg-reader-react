import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { browserHistory } from 'react-router';
import './index.css';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById('root')
);
