import React from "react";
import BottomHeader from "../../../components/General/BottomHeader";
import Footer from "../../../components/General/Footer";
import Header from "../../../components/General/Header";
import TopHeader from "../../../components/General/TopHeader";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MobileHeader from "../../../components/General/MobileHeader";
import MobileFooter from "../../../components/General/MobileFooter";
import BackButton from "../../../components/Core/BackButton";

const AddBank = () => {
  return (
    <div className="bg-[#F5F5F5] xs:overflow-x-hidden">
      <TopHeader />
      <BottomHeader style={"bg-[#1B7CFC] py-2 xs:hidden"} />
      <Header style={"bg-[#70ADFF] xs:hidden"} />
      <MobileHeader />
      <div className="flex-row gap-2 p-2 w-[90%] flex mx-auto items-center xs:hidden">
        <p>Home</p>
        <ArrowForwardIosIcon fontSize="small" />
        <p>Your Account</p>
        <ArrowForwardIosIcon fontSize="small" />
        <p className="text-gray-700">Add Bank</p>
      </div>
      <div className="sm:hidden lg:hidden md:hidden 2xl:hidden xl:hidden py-2">
        <BackButton />
      </div>
      <div className="p-10 xs:p-4 w-[90%] xs:w-[94%] mx-auto mb-10 bg-white rounded-lg">
        <div>
          <h1 className="text-[40px] xs:text-[26px] font-[500]">Add Bank</h1>
        </div>

        <div className="py-5 w-full flex flex-col gap-8">
          <div className="w-full flex flex-col relative items-start gap-2">
            <label className="font-[500]">ACCOUNT NUMBER</label>
            <input placeholder="Account Number" className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]" />
          </div>

          <div className="w-full flex flex-col relative items-start gap-2">
            <label className="font-[500]">BANK NAME </label>
            <label className="font-normal text-sm text-gray-600">USER</label>
            <input placeholder="Select Bank" className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]" />
          </div>
          <div className="w-full flex flex-col relative items-start gap-2">
            <label className="font-[500]">ACCOUNT NAME</label>
            <input placeholder="" className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]" />
          </div>

          <button className="bg-[#E51B48] text-white w-full p-2 rounded-md mt-20">Add Bank</button>
        </div>
      </div>
      <Footer style={"bg-[#1B7CFC] py-10 px-10 xs:hidden"} />
      <MobileFooter style={"bg-[#1B7CFC] sm:hidden lg:hidden md:hidden 2xl:hidden xl:hidden"} />
    </div>
  );
};

export default AddBank;
