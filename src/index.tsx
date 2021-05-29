import React from 'react';
import ReactDOM from 'react-dom';
import {Dashboard} from './pages/Dashboard';
import {CreateGlobalStyle} from './styles/global';


ReactDOM.render(
  <React.StrictMode>
    <CreateGlobalStyle />
    <Dashboard />
  </React.StrictMode>,
  document.getElementById('root')
);


