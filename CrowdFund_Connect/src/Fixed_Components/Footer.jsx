import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bottom-0 left-0 w-full bg-[#8989fb] z-50 h-20 md:h-20 flex items-center px-5 md:px-8  text-white">
      <div className="flex justify-between items-center w-full font-semibold">
        <div className="flex md:gap-6 gap-4 text-sm md:text-lg">
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/contact_us" className="hover:underline">Contact Us</Link>
          <Link to="/donate" className="hover:underline">Donate</Link>
        </div>

        <div className="text-sm font-semibold md:block hidden">
          © 2025 Made by Moinul Islam
        </div>

        <div className="flex md:gap-4 text-lg gap-2 md:text-xl">
          <a href="https://github.com/moinul5" target="_blank" rel="noreferrer" className="hover:text-gray-300">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/_moinul_islam._/" target="_blank" rel="noreferrer" className="hover:text-gray-300">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/moinul216/" target="_blank" rel="noreferrer" className="hover:text-gray-300">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}
