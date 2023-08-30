import React, { useState } from "react";
import BottomHeader from "../../../components/General/BottomHeader";
import Footer from "../../../components/General/Footer";
import Header from "../../../components/General/Header";
import TopHeader from "../../../components/General/TopHeader";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { PinCode } from "../../../components/Core/PinCode";
import MobileHeader from "../../../components/General/MobileHeader";
import MobileFooter from "../../../components/General/MobileFooter";

const Withdraw = () => {
  const [code, setCode] = useState<string>("");

  return (
    <div className="bg-[#F5F5F5]">
      <TopHeader />
      <BottomHeader style={"bg-[#1B7CFC] py-2 xs:hidden"} />
      <MobileHeader />
      <Header style={"bg-[#70ADFF] xs:hidden"} />
      <div className="flex-row gap-2 p-2 w-[90%] flex mx-auto items-center ">
        <p>Home</p>
        <ArrowForwardIosIcon fontSize="small" />
        <p>Your Account</p>
        <ArrowForwardIosIcon fontSize="small" />
        <p className="text-gray-700">Withdraw</p>
      </div>
      <div className="block smm:hidden mb-6">
        <div className="flex bg-white flex-col xs:flex-row xs:justify-between gap-4 p-2">
          <div className="flex flex-row gap-4">
            <div>
              <img src="/images/walleticon.png" alt="wallet" />
            </div>
            <div className="flex flex-col justify-start">
              <h1 className="font-bold text-[20px] text-[#1B7CFC]">Wallet</h1>
              <p className="text-[#515151] text-smtext-sm">
                Lorem ipsum dolor sit.
              </p>
              <p className="text-[20px] font-normal">$4,450,500.00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-2 smm:px-0">
        <div className="smm:p-10 p-2 smm:w-[90%] w-full mb-10 mx-auto bg-white rounded-lg">
          <div className="smm:w-[60%] w-full mx-auto">
            <div className="items-center gap-2 text-[#515151] smm:flex hidden">
              <ArrowBackIcon />
              Back
            </div>
            <div>
              <h1 className="smm:text-[40px] font-[500] text-xl">Withdraw</h1>
            </div>

            <div className="py-5 w-full flex flex-col gap-8">
              <div className="w-full flex flex-col relative items-start gap-2">
                <label className="font-[500]">Amount</label>
                <input
                  placeholder="Input Amount"
                  className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
                />
              </div>

              <div className="w-full flex flex-col relative items-start gap-2">
                <label className="font-[500]">Bank</label>
                <input
                  placeholder="Account Number"
                  className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
                />
              </div>
              <div className="w-full flex flex-col relative items-start gap-2">
                <input
                  placeholder="Select Bank"
                  className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
                />
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex justify-between">
                  <p className="font-[500]">Transaction Pin</p>
                  <p className="font-[500] text-[#E51B48] smm:block hidden">
                    Use Security Question
                  </p>
                </div>

                <div className="flex gap-[8px] justify-start text-[#E51B48] ">
                  <PinCode codeLength={4} onCodeComplete={setCode} />
                </div>
              </div>

              <button className="bg-[#E51B48] text-white w-full p-2 rounded-md mt-20">
                Withdraw
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer style={"bg-[#1B7CFC] py-10 px-10 xs:hidden"} />
      <MobileFooter
        style={
          "bg-[#1B7CFC] sm:hidden lg:hidden md:hidden 2xl:hidden xl:hidden"
        }
      />
    </div>
  );
};

export default Withdraw;
