import React from "react";
import ManufacturersProfileLayoutComp from "../../../components/General/manufacturers/profile/LayoutComp";

interface RecentlyViewedProps {}

const RecentlyViewedComponent: React.FC<RecentlyViewedProps> = () => {
  return (
    <ManufacturersProfileLayoutComp>
      <div className="pt-[80px] font-public-sans">
        <p className="capitalize text-xl font-semibold font-baloo">
          Recently viewed
        </p>
        <p className="text-xl font-baloo font-normal text-[#B3B7BB]">
          Revisit all the product you have viewed recently{" "}
        </p>
        <p>No recently viewed items</p>
      </div>
    </ManufacturersProfileLayoutComp>
  );
};

export default RecentlyViewedComponent;
