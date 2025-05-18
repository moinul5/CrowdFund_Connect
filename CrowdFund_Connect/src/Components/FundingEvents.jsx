import React, { useState } from "react";
import { useFunding } from "./FundingContext";
import FundingCard from "./FundingCard";

export default function FundingEvents() {
  const { fundingData, loading } = useFunding();
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = ["ongoing", "Recent", "ended"];

  // Filter data based on selected category
  const filteredData = selectedCategory
    ? fundingData.filter((item) => item.status.toLowerCase() === selectedCategory.toLowerCase())
    : fundingData;

  return (
    <div className="max-w-7xl mx-auto my-12 p-6 border-2 border-[#8989fb] rounded-xl shadow-lg">

      {/* Category Buttons */}
      <div className="flex justify-center gap-4 mb-8">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() =>
              setSelectedCategory(selectedCategory === cat ? "" : cat)
            }
            className={`px-4 py-2 border rounded ${
              selectedCategory === cat
                ? "bg-[#8989fb] text-white"
                : "bg-white text-black"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="grid place-items-center grid-cols-1 md:grid-cols-3 sm:mt-5 gap-6">
        {filteredData.length === 0 && (
          <p className="col-span-3 text-gray-500">No funding events found.</p>
        )}
        {filteredData.map((data) => (
          <FundingCard
            id={data.id}
            key={data.id}
            Title={data.title}
            description={data.description}
            goalAmount={data.goal}
            raisedAmount={data.raised}
            showButton={true}
          />
        ))}
      </div>
    </div>
  );
}
