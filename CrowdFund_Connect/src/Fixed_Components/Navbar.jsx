import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Crowd_Fund.png";
import Profile from "../Components/Profile";

export default function Navbar() {
  return (
    <div className="m-3 h-5 sm:h-10">
      <section className="flex items-center justify-between flex-col md:flex-row">
        <div className="px-20">
          {/* logo */}
          <Link to="/">
            <img src={logo} alt="logo" className="h-10" />
          </Link>
        </div>
        <div>
          <ul className="flex items-center gap-5">
            <li className="text-gray-500 hover:text-black font-bold duration-200 hover:underline hover:decoration-sky-500 cursor-pointer">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="text-gray-500 hover:text-black font-bold duration-200 hover:underline hover:decoration-sky-500 cursor-pointer">
              <Link to={"/about"}>About</Link>
            </li>
            <li className=" text-gray-500 hover:text-black font-bold duration-200 hover:underline hover:decoration-sky-500 cursor-pointer">
              <Link to={"/news"}>News</Link>
            </li>
            <li className=" text-gray-500 hover:text-black font-bold duration-200 hover:underline hover:decoration-sky-500 cursor-pointer">
              <Link to={"/contact_us"}>Contact Us</Link>
            </li>
          </ul>
        </div>
        <div>
          <Profile/>
        </div>
      </section>
    </div>
  );
}
