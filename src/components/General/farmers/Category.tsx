import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const FCategory = () => {
  return (
    <div className="block bg-white ">
      <p className="font-semibold px-4 py-2 mdm:text-[18px] text-base whitespace-nowrap">
        Farmer's Category
      </p>
      <div className="bg-white flex smm:flex-col flex-row flex-wrap text-[#132A13]  p-4 gap-6">
        <Link to="/farmers/category">
          <div className="flex smm:flex-row flex-col smm:gap-2 gap-1 items-center">
            <Icon icon="typcn:leaf" width="20" height="20" />
            <p>Vegetables</p>
          </div>
        </Link>
        <Link to="/farmers/category">
          <div className="flex smm:flex-row flex-col smm:gap-2 gap-1 items-center">
            <Icon icon="bx:bowl-rice" width="20" height="20" />
            <p>Rice</p>
          </div>
        </Link>
        <Link to="/farmers/category">
          <div className="flex smm:flex-row flex-col smm:gap-2 gap-1 items-center">
            <Icon icon="lucide:wheat" width="20" height="20" />
            <p>Wheat</p>
          </div>
        </Link>
        <Link to="/farmers/category">
          <div className="flex smm:flex-row flex-col smm:gap-2 gap-1 items-center">
            <Icon
              icon="fluent-emoji-high-contrast:poultry-leg"
              width="20"
              height="20"
            />
            <p>Poultry</p>
          </div>
        </Link>
        <Link to="/farmers/category">
          <div className="flex smm:flex-row flex-col smm:gap-2 gap-1 items-center">
            <Icon icon="tabler:grain" width="20" height="20" />
            <p>Grain</p>
          </div>
        </Link>
        <div className="flex smm:flex-row flex-col smm:gap-2 gap-1 items-center">
          <Icon icon="mdi:fruit-grapes-outline" width="20" height="20" />{" "}
          <p>Fruits</p>
        </div>
        <div className="flex smm:flex-row flex-col smm:gap-2 gap-1 items-center">
          <Icon icon="mdi:sugar-cube-off" width="20" height="20" />
          <p>Sugar Substitute</p>
        </div>
        <div className="flex smm:flex-row flex-col smm:gap-2 gap-1 items-center">
          <Icon icon="ic:outline-breakfast-dining" width="20" height="20" />
          <p>Cereal</p>
        </div>
        <div className="flex smm:flex-row flex-col smm:gap-2 gap-1 items-center">
          <Icon icon="ic:outline-breakfast-dining" width="20" height="20" />
          <p>SeaFood</p>
        </div>
        <div className="flex smm:flex-row flex-col smm:gap-2 gap-1 items-center">
          <Icon icon="icon-park-outline:cattle" width="20" height="20" />
          <p>Cattle</p>
        </div>
        <div className="flex smm:flex-row flex-col smm:gap-2 gap-1 items-center">
          <Icon icon="tabler:pig" width="20" height="20" />
          <p>Pigs</p>
        </div>
        <div className="flex smm:flex-row flex-col smm:gap-2 gap-1 items-center">
          <Icon icon="mdi:snail" width="20" height="20" />
          <p>Snails</p>
        </div>
        {/* <div className="flex smm:flex-row flex-col smm:gap-2 gap-1 items-center">
        <Icon icon="game-icons:sugar-cane" width="20" height="20" />
        <p>Sugar Cane</p>
      </div> */}
      </div>
    </div>
  );
};

export default FCategory;
