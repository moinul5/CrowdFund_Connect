import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main_Layout from "./Layout/Main_Layout";
import Home from "./Components/Home";
import About from "./Components/About";
import './index.css'
import News from "./Components/News";
import Contact_Us from "./Components/Contact_Us";
import Addcoins from "./Components/Addcoins";
import Notfound from "./Components/Notfound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main_Layout />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/news",
        element: <News/>
      },
      {
        path: "/contact_us",
        element: <Contact_Us/>
      },
      {
        path: "/addcoin",
        element: <Addcoins/>
      },
      {
        path: "*",
        element: <Notfound/>
      },
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
