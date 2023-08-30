import React from "react";
import ManufacturersProfileLayout from "../../../components/General/manufacturers/profile/Layout";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Subscription = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <ManufacturersProfileLayout>
        <div className="flex flex-col gap-6">
          <div className="bg-[#1B7CFC] rounded-md p-6 smm:flex hidden justify-between items-center">
            <div className="flex flex-col gap-4 justify-between whitespace-nowrap">
              <p className="text-white font-medium smm:text-[30px] text-sm">
                14 day trial
              </p>
              <p className="text-white font-bold">Basic Plan</p>
            </div>
            <div className="flex flex-col gap-4 items-end">
              <div className="flex flex-row gap-4 items-center">
                <p className="text-white font-medium smm:text-[30px] text-sm">
                  13:18:53:21
                </p>
                <button className="bg-white text-[#E51B48] p-2 rounded-md">
                  Cancel Trial
                </button>
              </div>
              <div>
                <p className="text-white text-[12px]">
                  Note: Canceling your free trial will limit your account access
                  until you purchase a plan.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#1B7CFC] smm:hidden  rounded-md p-6 flex justify-between flex-col gap-2">
            <div className="flex gap-4 flex-1 justify-between whitespace-nowrap">
              <div className="flex flex-col gap-2">
                <p className="text-white font-medium smm:text-[30px] text-base">
                  14 day trial
                </p>
                <p className="text-white font-bold">Basic Plan</p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <p className="text-white font-medium smm:text-[30px] text-sm">
                  13:18:53:21
                </p>
                <button className="bg-white text-[#E51B48] p-2 rounded-md">
                  Cancel Trial
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-end">
              <p className="text-white text-[12px]">
                Note: Canceling your free trial will limit your account access
                until you purchase a plan.
              </p>
            </div>
          </div>
          <div>
            <h1 className="smm:text-[30px] text-base font-[500] mt-3 mb-3">
              Current active plan
            </h1>
            <div className="border p-6 rounded-md flex-col flex gap-3">
              <div className="flex justify-between">
                <div className="flex flex-col smm:gap-4 gap-2">
                  <div className="flex smm:flex-row flex-col smm:items-center smm:gap-4 gap-1">
                    <p className="smm:text-[20px] text-[16px] font-medium">
                      Basic Plan
                    </p>
                    <p className="smm:text-[14px] text-[10px] text-[#515151]">
                      Last payment: 30th May 2022
                    </p>
                  </div>
                  <div className="flex-col flex smm:gap-4 gap-2">
                    <p className="text-[#515151] text-[20px]">$49/month</p>
                    <div className="flex flex-row gap-2 items-center">
                      <Icon
                        icon="material-symbols:check-circle-outline"
                        color="#1b7cfc"
                      />
                      <p className="group-hover:text-white smm:text-base text-[12px]">
                        Lorem ipsum dolor sit amet .
                      </p>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                      <Icon
                        icon="material-symbols:check-circle-outline"
                        color="#1b7cfc"
                      />
                      <p className="group-hover:text-white smm:text-base text-[12px]">
                        Lorem ipsum dolor sit amet .
                      </p>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                      <Icon
                        icon="material-symbols:check-circle-outline"
                        color="#1b7cfc"
                        className="group-hover:white"
                      />{" "}
                      <p className="group-hover:text-white smm:text-base text-[12px]">
                        Lorem ipsum dolor sit amet .
                      </p>
                    </div>
                    <div className="flex flex-row gap-2 items-center text-[#515151]">
                      <Icon icon="material-symbols:check-circle-outline" />{" "}
                      <p className="group-hover:text-white smm:text-base text-[12px]">
                        Lorem ipsum dolor sit amet .
                      </p>
                    </div>
                    <div className="flex flex-row gap-2 items-center text-[#515151]">
                      <Icon icon="ph:x-circle" />{" "}
                      <p className="group-hover:text-white smm:text-base text-[12px]">
                        Lorem ipsum dolor sit amet .
                      </p>
                    </div>
                    <div className="flex flex-row gap-2 items-center text-[#515151]">
                      <Icon icon="ph:x-circle" />{" "}
                      <p className="group-hover:text-white smm:text-base text-[12px]">
                        Lorem ipsum dolor sit amet .
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-between">
                  <Link to="/plans">
                    <button className="bg-red-600 hover:bg-red-700 text-white p-2 h-[40px] rounded-md">
                      Upgrade Plan
                    </button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-end">
                <Link to="/plans">
                  <button className="text-red-600 hover:bg-red-600 hover:text-white p-2 h-[40px] rounded-md">
                    Cancel Plan
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </ManufacturersProfileLayout>
    </div>
  );
};

export default Subscription;
