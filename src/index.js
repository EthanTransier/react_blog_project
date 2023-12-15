import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Profile from './Pages/Profile';
import Create from './Pages/Create';
import Home from './Pages/Home';
import ImageGenerator from './Components/ImageGenerator';
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
        <ImageGenerator />
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/create' Component={Create} />
          <Route path='/profile' Component={Profile} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);