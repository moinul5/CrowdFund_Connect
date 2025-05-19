import React from "react";
import { Link } from "react-router-dom";

export default function CoinModal() {
  return (
    <div className="flex m-6 justify-center flex-col items-center mt-20 ">
      <h1 className="text-4xl font-bold text-green-600 mb-4">
        You have been successfully add coin in your balance
      </h1>
      <h1>To donate click the button</h1>
      <button
        type="submit"
        className="bg-[#8989fb] hover:bg-[#6a6ae0] mt-3 active:bg-[#4e4ebf] flex items-center justify-center gap-1 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm cursor-pointer"
      >
        <div className="flex flex-row justify-center items-center">
          <Link to={"/donate"}>Donate</Link>
        </div>
      </button>
    </div>
  );
}
