import React, { useContext, useState } from "react";
import { IoAddCircle } from "react-icons/io5";
import { toast, Toaster } from "sonner";
import { CoinContex } from "./CoinContex";
import { useNavigate } from "react-router-dom";

export default function Addcoins() {
  const [fromValue, setfromValue] = useState("");
  const [checkError, setCheckError] = useState("");
  const { coin, setCoin } = useContext(CoinContex);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setfromValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validate(fromValue);

    if (error) {
      setCheckError(error);
    } else {
      setCoin(Number(coin) + Number(fromValue));
      toast.success("The coin has added");
      setCheckError("");
      setfromValue("");
      navigate("/coin-modal");
    }
  };

  const validate = (value) => {
    if (value.trim() === "") {
      return "Value is required";
    } else if (isNaN(value)) {
      return "Please enter a valid number";
    }
    return "";
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex w-full justify-center mt-40 mb-10 md:mt-20">
          <div className="flex flex-col gap-4 bg-gray-250 p-6 rounded-lg w-full max-w-sm shadow-md border-1 border-[#8989fb]">
            <div>
              <label className="block mb-1 font-medium">Number of coins</label>
              <input
                type="text"
                value={fromValue}
                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#8989fb]"
                placeholder="Enter the amount"
                onChange={handleChange}
              />
              {checkError && (
                <p className="text-red-600 text-sm mt-1">{checkError}</p>
              )}
            </div>

            <button
              type="submit"
              className="bg-[#8989fb] hover:bg-[#6a6ae0] active:bg-[#4e4ebf] flex items-center justify-center gap-1 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm cursor-pointer"
            >
              <IoAddCircle />
              <span>Add Coins</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
