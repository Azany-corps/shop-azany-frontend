import React, { useState } from "react";

const StockCheckbox = () => {
  const [isChecked, setIsChecked] = useState(true); // Set the initial state based on your requirement

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="relative inline-flex items-center me-5 cursor-pointer">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <div class="w-32 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all  peer-checked:bg-red-300">
        <span class="ms-3 text-sm font-medium text-gray-900 general-font">
          {isChecked ? "In Stock" : "Not Stocked"}
        </span>
      </div>
    </label>
  );
};

export default StockCheckbox;
