import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Main from './pages/index'
import Posts from './pages/posts'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
  },
  {
    path: "/posts",
    element: <Posts/>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);