import React from "react";
import BottomHeader from "../../../components/General/BottomHeader";
import Footer from "../../../components/General/Footer";
import Header from "../../../components/General/Header";
import TopHeader from "../../../components/General/TopHeader";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useLocation } from "react-router-dom";
import MobileFooter from "../../../components/General/MobileFooter";
import MobileHeader from "../../../components/General/MobileHeader";
import BackButton from "../../../components/Core/BackButton";

const WalletHistory = () => {
  useLocation();

  function handleBack() {
    window.history.back();
  }
  return (
    <div className="bg-[#F5F5F5] xs:overflow-x-hidden">
      <TopHeader />
      <BottomHeader style={"bg-[#1B7CFC] py-2 xs:hidden"} />
      <MobileHeader />
      <Header style={"bg-[#70ADFF] xs:hidden"} />
      <div className="flex-row gap-2 p-2 w-[90%] flex mx-auto items-center xs:hidden">
        <p>Home</p>
        <ArrowForwardIosIcon fontSize="small" />
        <p>Your Account</p>
        <ArrowForwardIosIcon fontSize="small" />
        <p className="text-gray-700">Wallet History</p>
      </div>
      <div className="sm:hidden lg:hidden md:hidden 2xl:hidden xl:hidden py-2 px-4">
        <BackButton />
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
          <div className="flex flex-col gap-4 sef-end justify-between">
            <div className="ml-auto sm:hidden lg:hidden md:hidden 2xl:hidden xl:hidden">
              <p className="text-[#1B7CFC] underline">RP</p>
            </div>
            <Link
              to="/manufacturers-profile/withdraw"
              className="w-full xs:w-18 xs:h-10 border hover:bg-[#E51B48] p-2 rounded-md hover:text-white bg-white text-red-600 hover:border-600 border-[#e51b48]"
            >
              Withdraw
            </Link>
          </div>
        </div>
      </div>
      <div className="p-10 xs:p-0 w-[90%] xs:w-[100%] mx-auto mb-10 bg-white rounded-lg">
        <div className="flex justify-between xs:hidden">
          <button
            onClick={handleBack}
            className="flex px-20 items-center gap-2 text-[#515151]"
          >
            <ArrowBackIcon />
            Back
          </button>
        </div>
        <div className="w-[60%] xs:w-full mx-auto">
          <div>
            <h1 className="text-[40px] p-3 xs:text-[22px] font-[500]">
              Wallet History
            </h1>
          </div>

          <div className="pb-5 w-full flex flex-col smm:gap-4 gap-1">
            <div className="rounded-none smm:rounded-lg bg-white smm:p-4 p-2 justify-between flex smm:shadow-md shadow-none border-b border-[#C1C1C1]">
              <div className="flex flex-col gap-2">
                <p className="font-normal">Order Payment</p>
                <p className="text-[#515151] text-sm font-light">11/12/2023</p>
              </div>
              <div>
                <p className="text-[#17A714]">+32,350</p>
              </div>
            </div>
            <div className="rounded-none smm:rounded-lg bg-white smm:p-4 p-2 justify-between flex smm:shadow-md  shadow-none border-b border-[#C1C1C1]">
              <div className="flex flex-col gap-2">
                <p className="font-medium">Order Payment</p>
                <p className="text-[#515151] text-sm">11/12/2023</p>
              </div>
              <div>
                <p className="text-[#17A714]">+32,350</p>
              </div>
            </div>{" "}
            <div className="rounded-none smm:rounded-lg bg-white smm:p-4 p-2 justify-between flex smm:shadow-md shadow-none border-b border-[#C1C1C1]">
              <div className="flex flex-col gap-2">
                <p className="font-medium">Order Payment</p>
                <p className="text-[#515151] text-sm">11/12/2023</p>
              </div>
              <div>
                <p className="text-[#17A714]">+32,350</p>
              </div>
            </div>{" "}
            <div className="rounded-none smm:rounded-lg bg-white smm:p-4 p-2 justify-between flex smm:shadow-md shadow-none border-b border-[#C1C1C1]">
              <div className="flex flex-col gap-2">
                <p className="font-medium">Order Payment</p>
                <p className="text-[#515151] text-sm">11/12/2023</p>
              </div>
              <div>
                <p className="text-[#17A714]">+32,350</p>
              </div>
            </div>{" "}
            <div className="rounded-none smm:rounded-lg bg-white smm:p-4 p-2 justify-between flex smm:shadow-md shadow-none border-b border-[#C1C1C1]">
              <div className="flex flex-col gap-2">
                <p className="font-medium">Order Payment</p>
                <p className="text-[#515151] text-sm">11/12/2023</p>
              </div>
              <div>
                <p className="text-[#17A714]">+32,350</p>
              </div>
            </div>{" "}
            <div className="rounded-none smm:rounded-lg bg-white smm:p-4 p-2 justify-between flex smm:shadow-md shadow-none border-b border-[#C1C1C1]">
              <div className="flex flex-col gap-2">
                <p className="font-medium">Order Payment</p>
                <p className="text-[#515151] text-sm">11/12/2023</p>
              </div>
              <div>
                <p className="text-[#17A714]">+32,350</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer style={"bg-[#1B7CFC] py-10 px-10 xs:hidden"} />
      <MobileFooter
        style={
          "bg-[#1B7CFC] sm:hidden lg:hidden md:hidden 2xl:hidden xl:hidden"
        }
      />{" "}
    </div>
  );
};

export default WalletHistory;
