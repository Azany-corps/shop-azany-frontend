import React, { useState } from "react";
import ManufacturersProfileLayout from "../../components/General/manufacturers/profile/Layout";
import Switches from "../../components/Core/Switches";

const MLogin = () => {
  return (
    <div className="bg-[#F5F5F5] flex flex-col justify-between min-h-screen">
      <ManufacturersProfileLayout>
        <div className="p-8 xs:p-2 smm:bg-[#F5F5F5] bg-white w-full rounded-lg flex-grow">
          <div className="w-full ">
            <h1 className="text-[40px] font-[500] xs:text-[22px]">
              Login & Security
            </h1>
            <div className="py-5 w-full">
              <div className="xs:flex xs:flex-col grid grid-cols-2 gap-8 items-start w-full">
                <div className="w-full relative flex flex-col items-start">
                  <label className="font-normal text-sm text-gray-600">
                    FIRST NAME
                  </label>
                  <input
                    placeholder="John"
                    className="px-4 xs:w-full py-3 w-4/5 rounded-md border border-gray-300 bg-[#F5F5F5]"
                  />
                  {/* <p className="absolute right-24 top-8 cursor-pointer text-[#E51B48]">Edit</p> */}
                </div>
                <div className="w-full  flex flex-col relative items-start">
                  <label className="font-normal text-sm text-gray-600">
                    LAST NAME
                  </label>
                  <input
                    placeholder="Clinton"
                    className="px-4 xs:w-full w-4/5 py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
                  />
                  {/* <p className="absolute right-24 top-8 cursor-pointer text-[#E51B48]">Edit</p> */}
                </div>
                <div className="w-full flex flex-col items-start relative">
                  <label className="font-normal text-sm text-gray-600">
                    PHONE
                  </label>
                  <input
                    placeholder="+234"
                    className="px-4 xs:w-full w-4/5 py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
                  />
                  {/* <p className="absolute right-24 top-8 cursor-pointer text-[#E51B48]">Edit</p> */}
                </div>
                <div className="w-full relative flex flex-col items-start">
                  <label className="font-normal text-sm text-gray-600">
                    EMAIL
                  </label>
                  <input
                    placeholder=""
                    className="px-4 w-4/5 xs:w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
                  />
                  {/* <p className="absolute right-24 top-8 cursor-pointer text-[#E51B48]">Edit</p> */}
                </div>
                <div className="w-full flex flex-col items-start relative">
                  <label className="font-normal text-sm text-gray-600">
                    PASSWORD
                  </label>
                  <input
                    placeholder="**********"
                    type="password"
                    className="px-4 xs:w-full w-4/5 py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="my-10 border border-gray-300 flex flex-row justify-between xs:p-4 p-10 rounded-md">
            <div className="gap-2 flex flex-col">
              <h1 className="font-medium text-2xl xs:text-[20px]">
                Transaction Pin
              </h1>
              <p className="text-[#515151]">
                Add a layer of security for transaction
              </p>
            </div>

            <div className="flex xs:flex-col items-center justify-center">
              <Switches label="" />
              <p>Set Up</p>
            </div>
          </div>
          <div className="my-10 border border-gray-300 flex flex-row justify-between xs:p-4 p-10 rounded-md">
            <div className="gap-2 flex flex-col">
              <h1 className="font-medium text-2xl xs:text-[20px]">
                Security Question
              </h1>
              <p className="text-[#515151]">
                What is the name of your first pet?
              </p>
            </div>
            <div className="flex items-center xs:flex-col">
              <Switches label="" />
              <p>Set Up</p>
            </div>
          </div>
          <button className="bg-[#E51B48] text-white w-full p-2 rounded-md">
            Save
          </button>
        </div>
      </ManufacturersProfileLayout>
    </div>
  );
};

export default MLogin;
