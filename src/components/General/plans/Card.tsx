import React from "react";
import { Icon } from "@iconify/react";

interface PlansCardProps {
  price: string;
  module: string;
  recommended?: boolean;
  onClick?: () => void;
  selected?: boolean;
}

const PlansCard = ({ price, module, recommended, onClick, selected }: PlansCardProps) => {
  return (
    <div onClick={onClick} className={`w-[340px] h-[362px] flex flex-col gap-4 p-4 rounded-md ${selected ? "bg-blue-400 text-white" : "bg-white"}`}>
      {recommended && (
        <div className="flex items-center text-[#EC6F29]">
          <Icon icon="fluent:star-20-filled" />
          <p className="text-sm font-semibold ml-1">RECOMMENDED</p>
        </div>
      )}
      <div className="flex flex-col items-center">
        <p className="text-xs">{module}</p>
        <p className="text-[34px] font-bold">{price}</p>
        <p className="text-gray-600 text-xs">Per month</p>
      </div>
      <div className="flex-col flex gap-4 items-center">
        <div className="flex flex-row gap-2 items-center">
          <Icon icon="material-symbols:check-circle-outline" color="#1b7cfc" />
          <p className="group-hover:text-white">Lorem ipsum dolor sit amet .</p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <Icon icon="material-symbols:check-circle-outline" color="#1b7cfc" />
          <p className="group-hover:text-white">Lorem ipsum dolor sit amet .</p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <Icon icon="material-symbols:check-circle-outline" color="#1b7cfc" className="group-hover:white" />{" "}
          <p className="group-hover:text-white">Lorem ipsum dolor sit amet .</p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <Icon icon="material-symbols:check-circle-outline" /> <p className="group-hover:text-white">Lorem ipsum dolor sit amet .</p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <Icon icon="ph:x-circle" /> <p className="group-hover:text-white">Lorem ipsum dolor sit amet .</p>
        </div>
      </div>
    </div>
  );
};

export default PlansCard;
