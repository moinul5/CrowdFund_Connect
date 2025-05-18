import React, { useState, useContext } from "react";
import { useFunding } from "./FundingContext";
import { FaDonate } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import FundingCard from "./FundingCard";
import { toast } from "sonner";
import { CoinContex } from "./Coins/CoinContex";
import CoinModal from "./Coins/ToasterMessage";
import NotEnoughCoinsModal from "./NotEnoughCoinsModal";

export default function FundingDetails() {
  const { id } = useParams();
  const [SubmitData, setSubmitData] = useState("");
  const [checkError, setCheckError] = useState("");
  const { fundingData, setfundingData, loading } = useFunding();
  const { coin, setCoin } = useContext(CoinContex);
  const navigate = useNavigate()

  const FundingDetails = fundingData.find((e) => e.id === parseInt(id));

  //   const updatedFunding = fundingData.map((item) => {
  //     if (item.id === id) {
  //       return {
  //         ...item,
  //         raised: item.raised + amount
  //       };
  //     }
  //     return item;
  //   });

  //   setFundingData(updatedFunding);
  // };

  if (!FundingDetails) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="rounded-full h-15 w-20 bg-[#8989fb] animate-ping"></div>
      </div>
    );
  }
  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="rounded-full h-15 w-20 bg-[#8989fb] animate-ping"></div>
      </div>
    );
  const handleChange = (e) => {
    setSubmitData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validate(SubmitData);

    if (error) {
      setCheckError(error);
    } else {
      //   setCoin(Number(coin)+Number(fromValue));
      setCheckError("");
      if (parseInt(coin) >= parseInt(SubmitData) && (FundingDetails.status === "ongoing" || FundingDetails.status === "Recent")) {
        setCoin(parseInt(coin) - parseInt(SubmitData));
        toast.success("The fund has been successfully given.");
      } else if (parseInt(coin) < parseInt(SubmitData) && (FundingDetails.status === "ongoing" || FundingDetails.status === "Recent")) {
        navigate("/notenoughcoin")
      }
      else if(FundingDetails.status === "ended"){
        toast.error("The funding has ended");
      }

      setSubmitData("");
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
      <CoinModal />
      <form onSubmit={handleSubmit}>
        <div className="flex w-full justify-center mt-40 mb-10 md:mt-20">
          <div className="flex flex-col gap-4 bg-gray-250 p-6 rounded-lg w-full max-w-sm shadow-md border-1 border-[#8989fb]">
            <div>
              <FundingCard
                id={FundingDetails.id}
                key={FundingDetails.id}
                Title={FundingDetails.title}
                description={FundingDetails.description}
                goalAmount={FundingDetails.goal}
                raisedAmount={FundingDetails.raised}
                showButton={false}
                showStatus={true}
                status={FundingDetails.status}
                height={"240px"}
              />
              <input
                type="text"
                value={SubmitData}
                className="ring-1 mt-3 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#8989fb] "
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
              <FaDonate />
              <span>Donate</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
