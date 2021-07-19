import React from 'react';
import ReactDOM from 'react-dom';
import { Dashboard } from './pages/Dashboard';
import { CreateGlobalStyle } from './styles/global';
import { ToastContainer } from 'react-toastify';

ReactDOM.render(
  <React.StrictMode>
    <CreateGlobalStyle />
    <ToastContainer />
    <Dashboard />
  </React.StrictMode>,
  document.getElementById('root')
);
