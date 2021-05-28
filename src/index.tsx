import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {CreateGlobalStyle} from './styles/global';


ReactDOM.render(
  <React.StrictMode>
    <CreateGlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


