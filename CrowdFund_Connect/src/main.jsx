import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main_Layout from "./Layout/Main_Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import './index.css'
import News from "./pages/News";
import Contact_Us from "./pages/Contact_Us";
import Addcoins from "./Components/Coins/Addcoins";
import Notfound from "./pages/Notfound";
import CoinsProvider from "./Components/Coins/CoinsProvider";

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
    <CoinsProvider>
    <RouterProvider router={router} />
    </CoinsProvider>
  </React.StrictMode>
);
