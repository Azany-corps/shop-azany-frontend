import { IconButton } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Dropdown from "../../Core/Dropdown";
import RadioButtonsGroup from "../../Core/Radio";
import BasicRating from "../../Core/Rating";
import Radio from "@mui/material/Radio";
import RadioWithRating from "../../Core/RadioWithRating";

const options = [
  { label: "All", value: 10 },
  { label: "Electronics", value: 20 },
  { label: "Fashion", value: 30 },
  { label: "Software", value: 40 },
  { label: "Industrial", value: 40 },
  { label: "Home and Kitchen", value: 40 },
  { label: "Automative", value: 40 },
  { label: "Art", value: 40 },
  { label: "Smart Home", value: 40 },
  { label: "Computers", value: 40 },
  { label: "Politics", value: 40 },
  { label: "Movies", value: 40 },
  { label: "Agriculture", value: 40 },
  { label: "Luggage", value: 40 },
  { label: "Beauty", value: 40 },
];

const vendor = [
  { label: "All", value: 10 },
  { label: "Merchants", value: 20 },
];

const score = [
  { label: "80% or more", value: "10" },
  { label: "60% or more", value: "20" },
  { label: "40% or more", value: "30" },
  { label: "20% or more", value: "40" },
];

const AzanyExpress = [{ value: "azany", label: "Azany Express" }];

const Manufacturers = [
  { label: "Chukwudi Imports", value: "Chukwudi" },
  { label: "Dangote", value: "Dangote" },
  { label: "Panasonic", value: "Panasonic" },
  { label: "Philips Hue", value: "Philips" },
];

const Filter: React.FC = () => {
  const [category, setcategory] = useState<number>(10);

  const [Option, setOption] = React.useState("female");

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOption(event.target.value);
  };

  const handleCategory = (value: number) => {
    setcategory(value);
  };

  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className=" w-200 bg-white p-10 rounded-lg xs:hidden">
      <div className="flex flex-col gap-8">
        <div>
          <p>CATEGORY</p>
          <p className="font-small text-gray-700 ">Electronics</p>
        </div>

        <Dropdown
          label="SUBCATEGORY"
          options={vendor}
          value={category}
          onChange={handleCategory}
        />
        <RadioButtonsGroup
          label="EXPRESS DELIVERY"
          options={AzanyExpress}
          defaultValue={Option}
          name="Option"
          onChange={handleOptionChange}
        />
        {/* <p>VENDORS</p> */}
        <div className="flex space-x-2 items-center">
          <input
            className="py-3 px-8 rounded-[4px] w-[100%] border border-[#C4C4C4]"
            placeholder="Search Vendors"
          />
          <div className="bg-[#E51B48] text-white p-2 rounded-[4px]">
            <SearchIcon fontSize="large" />
          </div>
        </div>
        <RadioButtonsGroup
          label=""
          options={Manufacturers}
          defaultValue={Option}
          name="Option"
          onChange={handleOptionChange}
        />
        {/* <div className="flex flex-col gap-2">
          <p className="text-black text-opacity-60">PRODUCT RATING</p>
          <div className=" flex flex-col gap-3">
            <div className="flex flex-row gap-2 items-center">
              <Radio checked={selectedValue === "a"} onChange={handleChange} value="a" name="radio-buttons" inputProps={{ "aria-label": "A" }} />
              <BasicRating 
 rating={2}/>
            </div>

            <BasicRating 
 rating={2}/>
            <BasicRating 
 rating={2}/>
            <BasicRating 
 rating={2}/>
            <BasicRating 
 rating={2}/>
          </div>
        </div> */}
        <RadioWithRating label="PRODUCT RATING" />

        <RadioButtonsGroup
          label="VENDORS SCORE"
          options={score}
          defaultValue={Option}
          name="Option"
          onChange={handleOptionChange}
        />
      </div>
    </div>
  );
};

export default Filter;
