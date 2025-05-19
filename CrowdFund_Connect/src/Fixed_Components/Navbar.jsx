import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Crowd_Fund.png";
import Profile from "../Components/Profile";
import { IoMdMenu } from "react-icons/io";
import { RxCrossCircled } from "react-icons/rx";

export default function Navbar() {
  const [ismenu, setismenu] = useState(false);
  const handlemenu = () => {
    setismenu((prev) => !prev);
  };

  return (
    <div className="m-3 h-5 sm:h-10">
      <section className="flex items-center justify-between flex-row">
        <div className="px-10 md:px-20">
          {/* logo */}
          <Link to="/">
            <img src={logo} alt="logo" className="h-10" />
          </Link>
        </div>
        <div>
          <ul className="md:flex items-center gap-5 hidden ">
            <li className="text-gray-500 hover:text-black font-bold duration-200 hover:decoration-sky-500 hover:underline cursor-pointer">
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

        <div className="flex items-center gap-4">
          <Profile />
          <IoMdMenu
            aria-label="Open menu"
            className="text-3xl md:hidden cursor-pointer "
            onClick={handlemenu}
          />
        </div>

        {/* responsive */}
        {ismenu && (
          <div
            className="absolute inset-0 bg-[#8989fb] flex flex-row md:hidden w-full  transition-all duration-500 ease-in-out 
    animate-slideIn z-50"
          >
            <div className="w-full">
              <div className="flex flex-row items-center justify-between">
                <div className="px-5">
                  {/* logo */}
                  <Link to="/">
                    <img
                      src={logo}
                      alt="logo"
                      className="h-10 mt-5"
                      onClick={handlemenu}
                    />
                  </Link>
                </div>
                <RxCrossCircled
                  className="text-3xl md:hidden cursor-pointer mr-4"
                  onClick={handlemenu}
                />
              </div>
              <ul className="flex flex-col gap-5 m-10">
                <li className="text-white hover:text-black font-bold duration-200 hover:decoration-sky-500 hover:underline cursor-pointer">
                  <Link to={"/"} onClick={handlemenu}>
                    Home
                  </Link>
                </li>
                <li className="text-white hover:text-black font-bold duration-200 hover:underline hover:decoration-sky-500 cursor-pointer">
                  <Link to={"/about"} onClick={handlemenu}>
                    About
                  </Link>
                </li>
                <li className=" text-white hover:text-black font-bold duration-200 hover:underline hover:decoration-sky-500 cursor-pointer">
                  <Link to={"/news"} onClick={handlemenu}>
                    News
                  </Link>
                </li>
                <li className=" text-white hover:text-black font-bold duration-200 hover:underline hover:decoration-sky-500 cursor-pointer">
                  <Link to={"/contact_us"} onClick={handlemenu}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
