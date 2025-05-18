import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Fixed_Components/Navbar";
import Footer from "../Fixed_Components/Footer";

export default function Main_Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Outlet />
      <div className="flex flex-grow items-center"></div>
      <Footer />
    </div>
  );
}
