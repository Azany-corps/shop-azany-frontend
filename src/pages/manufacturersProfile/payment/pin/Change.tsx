import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TopHeader from "../../../../components/General/TopHeader";
import Header from "../../../../components/General/Header";
import BottomHeader from "../../../../components/General/BottomHeader";
import Footer from "../../../../components/General/Footer";
import { PinCode } from "../../../../components/Core/PinCode";

const ChangePin = () => {
  const [code, setCode] = useState<string>("");

  return (
    <div className="bg-[#F5F5F5]">
      <TopHeader />
      <Header style={"bg-[#70ADFF]"}/>
      <BottomHeader style={"bg-[#1B7CFC] py-2"}/>
      <div className="flex-row gap-2 p-2 w-[90%] flex mx-auto items-center ">
        <p>Home</p>
        <ArrowForwardIosIcon fontSize="small" />
        <p>Your Account</p>
        <ArrowForwardIosIcon fontSize="small" />
        <p className="text-gray-700">Transaction Pin</p>
      </div>
      <div className="px-20 py-10 w-[90%] mx-auto mb-10 bg-white rounded-lg">
        <div className="flex justify-between">
          <div className="flex items-center gap-2 text-[#515151]">
            <ArrowBackIcon />
            Back
          </div>
        </div>
        <div className="flex flex-row gap-10 my-20">
          <div className="flex flex-col gap-10 w-1/2">
            <div>
              <h1 className="text-[40px] font-[500]">Change Transaction Pin</h1>
              <p className="font-normal text-[#515151]">Change the pin for your transactions</p>
            </div>
            <div>
              <img src="/images/changepin.png" alt="change-pin" />
            </div>
          </div>

          <div className="px-10 py-6 w-1/2 flex flex-col gap-8 bg-white rounded-md border">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <p className="font-medium text-[24px]">Change Pin</p>
              </div>

              <div className="flex gap-[8px] justify-center">
                <div>
                  <p className="text-[#515151] font-normal text-[14px]">Input Old Pin</p>
                  <PinCode codeLength={4} onCodeComplete={setCode} />
                </div>
              </div>
              <div className="flex gap-[8px] justify-center">
                <div>
                  <p className="text-[#515151] font-normal text-[14px]">Input New Pin</p>
                  <PinCode codeLength={4} onCodeComplete={setCode} />
                </div>
              </div>
              <div className="flex gap-[8px] justify-center">
                <div>
                  <p className="text-[#515151] font-normal text-[14px]">Confirm New Pin</p>
                  <PinCode codeLength={4} onCodeComplete={setCode} />
                </div>
              </div>
            </div>

            <button className="bg-[#E51B48] text-white w-full p-2 rounded-md mt-20">Change Pin</button>
          </div>
        </div>
      </div>
      <Footer style={"bg-[#1B7CFC] py-10 px-10"}/>
    </div>
  );
};

export default ChangePin;
