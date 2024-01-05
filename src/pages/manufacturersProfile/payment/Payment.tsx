import React from "react";
import ManufacturersProfileLayout from "../../../components/General/manufacturers/profile/LayoutComp";

const MPayment = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <ManufacturersProfileLayout>
        <div className="smm:p-8 xs:p-0 w-full">
          <div className="w-full">
            <div className="bg-white smm:ml-0 -ml-2 smm:w-full w-[calc(100%+16px)] smm:px-0 py-1 px-2">
              <h1 className="text-[40px] mb-2 xs:text-[22px] smm:font-[500] font-medium">
                Payments
              </h1>
              <p className="smm:text-base text-sm font-light ">
                Lorem ipsum dolor sit amet consectetur. Et sapien et a mauris
                nam adipiscing.
              </p>
            </div>
            <div className="flex justify-between xs:flex-col gap-6 mt-10">
              <div className="flex flex-col gap-4">
                <p className="font-medium xs:text-[18px] text-[24px]">Cards</p>
                <div className="flex flex-row gap-4 p-2 bg-white drop-shadow-md rounded-md ">
                  <div>
                    <img src="/images/atm.png" alt="atm" />
                  </div>
                  <div className="flex flex-col gap-4">
                    <p>Mastercard</p>
                    <p className="text-[#515151] text-sm whitespace-nowrap">
                      XXX XXXX XXXX 3426
                    </p>
                    <div className="flex flex-row gap-4 ">
                      <p className="text-[#1B7CFC]">Edit</p>
                      <p className="text-[#E51B48]">Remove</p>
                    </div>
                  </div>
                </div>

                <div className="">
                  <img
                    src="/images/addcard.png"
                    alt="atm"
                    className="xs:w-1/2"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-medium xs:text-[18px] text-[24px] flex items-end">
                  Bank Accounts
                </p>
                <div>
                  <div className="flex flex-row gap-4 p-2 bg-white drop-shadow-md rounded-md h-[140px]">
                    <div className="flex justify-between gap-4">
                      <div className="flex flex-col">
                        <p className="text-sm whitespace-nowrap">
                          Sanusi Aliat Hakmed
                        </p>
                        <p className="text-[#515151] text-sm whitespace-nowrap">
                          XXX XXXX XXXX 3426
                        </p>
                        <p>United Bank of Africa</p>
                      </div>

                      <div className="flex flex-row gap-4 align-baseline">
                        <p className="text-[#1B7CFC]">Edit</p>
                        <p className="text-[#E51B48]">Remove</p>
                      </div>
                    </div>
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

export default MPayment;
