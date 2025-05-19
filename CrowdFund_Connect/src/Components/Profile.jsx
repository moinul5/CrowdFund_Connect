import React, { useContext, useEffect, useRef, useState } from "react";
import profile from "../assets/profile.png";
import { Link } from "react-router-dom";
import { GiTwoCoins } from "react-icons/gi";
import { IoIosPerson } from "react-icons/io";
import { BsDatabaseAdd } from "react-icons/bs";
import { CoinContex } from "./Coins/CoinContex";



export default function Profile() {
  const [open, setOpen] = useState(false);
  const {coin} = useContext(CoinContex)

  const profileRef =useRef()
  const meanRef = useRef()

  window.addEventListener('click',(e)=>{
    if(e.target !== meanRef.current && e.target !== profileRef.current){
      setOpen(false)
    }
  })

  return (
    <div>
      <div className="relative">
        <img
          ref={profileRef}
          src={profile}
          onClick={() => setOpen(!open)}
          alt=""
          className="h-10 md:mr-20 mr-0 cursor-pointer "
        />

        {open && (
          <div ref={meanRef} className="absolute bg-[#8989fb]  p-2 w-35 shadow-lg font-semibold mt-3 -left-6   rounded-2xl" >
            <div class="absolute -top-2 left-9 w-4 h-4 bg-[#8989fb] rotate-45"></div>

            <ul onClick={() => setOpen(!open)} className="text-white px-2" >
              <li><IoIosPerson className="inline"/> Moinul</li>
               <li><GiTwoCoins className="inline"/> Coin: {coin}</li>
              <li className="hover:bg-[#7373d0] cursor-pointer">
                <Link to={"/AddCoin"} className="flex items-center gap-1"><BsDatabaseAdd className="inline"/> <span>Add Coin</span></Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
