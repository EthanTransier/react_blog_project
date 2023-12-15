import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../css/styles.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Profile from './Pages/Profile';
import Create from './Pages/Create';
import Home from './Pages/Home';
import ImageGenerator from './Components/ImageGenerator';
// import "bootstrap/dist/css/bootstrap.css";
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {socials} from './utils/consts';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/create', element: <Create/> },
  { path: '/profile', element: <Profile /> },
  { path: '*', element: <Error /> },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);