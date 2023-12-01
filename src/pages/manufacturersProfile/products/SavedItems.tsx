import React from "react";
import ManufacturersProfileLayoutComp from "../../../components/General/manufacturers/profile/LayoutComp";

interface SavedItemsProps {}

const SavedItemsComponent: React.FC<SavedItemsProps> = () => {
  return (
    <ManufacturersProfileLayoutComp>
      <div className="pt-[80px] font-public-sans">
        <p className="capitalize text-xl font-semibold font-baloo">
          Saved items
        </p>
        <p className="text-xl font-baloo font-normal text-[#B3B7BB]">
          View your saved product
        </p>
        <p>No saved items</p>
      </div>
    </ManufacturersProfileLayoutComp>
  );
};

export default SavedItemsComponent;
