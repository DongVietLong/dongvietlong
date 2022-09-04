import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import AppHeader from './header/AppHeader';

import AppMain from './main/Appmain';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div id="loading" className="loading"><i className="fa fa-refresh fa-spin"></i>  Loading ... !!!</div>
    <div id="err" className="none">  Bạn đang gặp lỗi: </div>
    <AppHeader />
    <AppMain/>
  </React.StrictMode>
)
