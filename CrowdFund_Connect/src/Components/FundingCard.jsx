import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function FundingCard({
  id,
  Title,
  description,
  goalAmount,
  raisedAmount,
  showButton = true,
  height = "280px",
  showStatus = false,
  status,
}) {
  const percentage = Math.min((raisedAmount / goalAmount) * 100, 100);

  return (
    <div className="w-full max-w-sm">
      <div
        className="flex flex-col hover:bg-gray-200 p-6 bg-white border border-[#8989fb] rounded-lg shadow-sm"
        style={{ height }}
      >
        <h1 className="text-xl mb-2 text-gray-800 font-semibold ">{Title}</h1>
        <p className="text-gray-600  mb-2 line-clamp-3">{description}</p>

        <div className="mb-2">
          <p className="text-sm text-gray-700 ">Goal: ${goalAmount}</p>
          <p className="text-sm text-gray-700 ">Raised: ${raisedAmount}</p>
          {showStatus && (
            <p className="text-sm text-gray-700 ">Status: <b>{status}</b></p>
          )}
        </div>

        <div className="w-full h-3 bg-gray-300 rounded-full  mb-4">
          <div
            className="h-3 bg-[#8989fb]  rounded-full "
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        {showButton && (
          <div className="mt-auto pt-4 flex justify-center">
            <Link to={`/donation/${id}`}>
              <button className="bg-[#8989fb] hover:bg-[#6a6ae0] active:bg-[#4e4ebf] text-white font-bold rounded-lg px-6 py-2 uppercase text-sm">
                Donation
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
