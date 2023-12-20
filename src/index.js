import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/styles.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Profile from './Pages/Profile';
import Create from './Pages/Create';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Landing from './Pages/Landing';
import CreateBlogs from './Pages/CreateBlog'

const router = createBrowserRouter([
  { path: '/', element: <Landing/> },
  { path: '/home', element: <Home /> },
  { path: '/create', element: <Create/> },
  { path: '/signup', element: <Signup/> },
  { path: '/login', element: <Login/> },
  { path: '/profile', element: <Profile /> },
  {path: '/createblog', element: <CreateBlogs/>}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);