import React from "react";
import ManufacturersProfileLayoutComp from "../../components/General/manufacturers/profile/LayoutComp";

interface RewardsProps {}

const RewardsComponent: React.FC<RewardsProps> = () => {
  return (
    <ManufacturersProfileLayoutComp>
      <div className="flex w-full h-full justify-center items-center mt-[40%]">
        <p className="font-baloo font-semibold text-[40px] text-[#B3B7BB]">
          Coming soon
        </p>
      </div>
    </ManufacturersProfileLayoutComp>
  );
};

export default RewardsComponent;
