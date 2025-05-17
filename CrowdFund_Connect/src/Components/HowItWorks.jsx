import React from "react";
import { GiTwoCoins } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";

export default function HowItWorks() {
  return (
    <div className="max-w-7xl mx-auto my-12 p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#8989fb]">
        How It Works
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="p-4 border-2 border-[#8989fb] rounded-2xl hover:bg-gray-200 transition duration-200">
          <GiTwoCoins className="text-5xl text-[#8989fb] mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Add Coins</h3>
          <p className="text-gray-600">
            Top up your account with virtual coins to start supporting projects.
          </p>
        </div>

        <div className="p-4 hover:bg-gray-200 border-2 border-[#8989fb] rounded-2xl hover:shadow-md transition duration-200">
          <FaSearch className="text-5xl text-[#8989fb] mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Browse Projects</h3>
          <p className="text-gray-600">
            Explore a variety of community-driven campaigns and projects.
          </p>
        </div>

        <div className="p-4 hover:bg-gray-200 border-2 border-[#8989fb]  hover:shadow-md transition rounded-2xl duration-200">
          <FaHandHoldingHeart className="text-5xl text-[#8989fb] mx-auto mb-4" />

          <h3 className="text-xl font-semibold mb-2">Donate Coins</h3>
          <p className="text-gray-600">
            Use your coins to contribute and make a difference in the campaigns
            you care about.
          </p>
        </div>
      </div>
    </div>
  );
}
