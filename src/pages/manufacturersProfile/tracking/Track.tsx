import React from "react";
import ManufacturersProfileLayout from "../../../components/General/manufacturers/profile/Layout";

const Tracking = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <ManufacturersProfileLayout>
        <div className="p-8 xs:p-0 w-full">
          <div className="w-full">
            <div className="bg-white smm:ml-0 -ml-2 smm:w-full w-[calc(100%+16px)] smm:px-0 py-2 px-2">
              <h1 className="text-[40px] xs:text-[22px] mb-1 font-[500]">
                Track Orders
              </h1>
              <p className="smm:text-base text-sm font-light ">
                Lorem ipsum dolor sit amet consectetur.onsectetur. Et sapien...
              </p>
            </div>
            <div className="py-5 w-full flex flex-col gap-20 xs:gap-8">
              <div className="bg-white smm:ml-0 -ml-2 smm:w-full w-[calc(100%+16px)] smm:px-0 py-2 px-2">
                <div className="w-full flex flex-col relative gap-2">
                  <label className="font-[500]">Tracking Number</label>
                  <div className="flex flex-row gap-4">
                    <input
                      placeholder="Input Tracking Number"
                      className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
                    />
                    <button className="bg-[#1B7CFC] text-white rounded-md p-4 xs:p-2 xs:w-[140px] w-[218px]">
                      Track
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col smm:gap-4 gap-2">
                <label className="font-[500]">Recently Tracked</label>
                <div className="rounded-lg bg-white smm:p-4 p-2 justify-between flex shadow-md">
                  <div className="flex flex-col gap-2">
                    <p className="font-medium">Order #5344</p>
                    <p className="text-[#515151] text-sm">
                      Expected Arrival: 11/12/2023
                    </p>
                  </div>
                  <div>
                    <p className="text-sm whitespace-nowrap">
                      Tracking code 674H36AY85953
                    </p>
                  </div>
                </div>
                <div className="rounded-lg bg-white smm:p-4 p-2 justify-between flex shadow-md">
                  <div className="flex flex-col gap-2">
                    <p className="font-medium">Order #5344</p>
                    <p className="text-[#515151] text-sm">
                      Expected Arrival: 11/12/2023
                    </p>
                  </div>
                  <div>
                    <p className="text-sm whitespace-nowrap">
                      Tracking code 674H36AY85953
                    </p>
                  </div>
                </div>
                <div className="rounded-lg bg-white smm:p-4 p-2 justify-between flex shadow-md">
                  <div className="flex flex-col gap-2">
                    <p className="font-medium">Order #5344</p>
                    <p className="text-[#515151] text-sm">
                      Expected Arrival: 11/12/2023
                    </p>
                  </div>
                  <div>
                    <p className="text-sm whitespace-nowrap">
                      Tracking code 674H36AY85953
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ManufacturersProfileLayout>
    </div>
  );
};

export default Tracking;
