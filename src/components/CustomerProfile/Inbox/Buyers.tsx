import React from "react";
import "../ndex.css";
type Props = {};

const Buyers = (props: Props) => {
  return (
    <>
      <div>
        <div className="px-2 rounded-lg grid grid-cols-8 items-center gap-4 w-full cursor-pointer shadow-md bg-white smm:py-6 py-2">
          <div className="col-span-6 space-y-2">
            <div className="flex items-center space-x-2">
              <img src="/images/buyers_001.png" />
              <div className="ml-2">
                <p className="smm:font-semibold  font-medium smm:line-clamp-2 line-clamp-1 mb-2">
                  TATIANA EVEREST
                </p>
                <h1 className="smm:font-bold font-medium smm:line-clamp-2 line-clamp-1 mb-2">
                  10kg Brown Choco
                </h1>
                <p className="text-[#515151] text-sm smm:text-base smm:line-clamp-2 line-clamp-1">
                  Lorem ipsum dolor sit amet consectetur. Et sapien et a mauris
                  nam adipiscing. onsectetur. Et sapien...
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-2 place-self-end  text-[#515151]">
            <p>15:34</p>
            <p>2/03/2023</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Buyers;
