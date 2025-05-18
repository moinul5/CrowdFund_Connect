import React from "react";
import { IoAddCircle } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function NotEnoughCoinsModal() {
  return (
    <div className="flex m-6 justify-center flex-col items-center mt-20 ">
      <h1 className="text-4xl font-bold text-red-600 mb-4">
        You don't have enough coin!
      </h1>
      <h1>To add coin click the button</h1>
      <button
        type="submit"
        className="bg-[#8989fb] hover:bg-[#6a6ae0] mt-3 active:bg-[#4e4ebf] flex items-center justify-center gap-1 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm cursor-pointer"
      >
        <div className="flex flex-row justify-center items-center">
          <IoAddCircle />

<Link to={'/AddCoin'}>

          <span>Add Coins</span>
</Link>
        </div>
      </button>
    </div>
  );
}
