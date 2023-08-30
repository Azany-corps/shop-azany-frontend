import React from "react";
import BottomHeader from "../../../components/General/BottomHeader";
import Footer from "../../../components/General/Footer";
import Header from "../../../components/General/Header";
import TopHeader from "../../../components/General/TopHeader";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MobileFooter from "../../../components/General/MobileFooter";
import MobileHeader from "../../../components/General/MobileHeader";
import BackButton from "../../../components/Core/BackButton";

const AddCard = () => {
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
        <p className="text-gray-700">Add Card</p>
      </div>
      <div className="sm:hidden lg:hidden md:hidden 2xl:hidden xl:hidden py-2">
      <BackButton />
      </div>
      <div className="p-10 xs:p-4 w-[90%] xs:w-[94%] mx-auto mb-10 bg-white rounded-lg">
      <div className="flex justify-between xs:hidden">
          <div className="flex items-center gap-2 text-[#515151]">
            <ArrowBackIcon />
            Back
          </div>
        </div>
        <div className="w-[60%] xs:w-full mx-auto">
          <div className="flex flex-col gap-4">
            <h1 className="text-[40px] xs:text-[26px] font-[500]">Add Card</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.</p>
            <img src="/images/atmcards.png" alt="" className="xs:w-20"/>
          </div>

          <div className="py-5 w-full flex flex-col gap-8">
            <div className="w-full flex flex-col relative items-start gap-2">
              <label className="font-normal text-sm text-gray-600">CARD NUMBER</label>
              <input placeholder="0000 0000 0000" className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]" />
            </div>

            <div className="flex xs:flex-col justify-between gap-4">
              <div className="w-full relative flex flex-col items-start">
                <label className="font-normal text-sm text-gray-600">NAME ON CARD</label>
                <input placeholder="" className="px-4 py-3 w-full rounded-md border border-gray-300 bg-[#F5F5F5]" />
              </div>
              <div className="w-full  flex flex-col relative items-start">
                <label className="font-normal text-sm text-gray-600">EXPIRY  DATE</label>
                <input placeholder="MM/YY" className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]" />
              </div>
              <div className="w-full  flex flex-col relative items-start">
                <label className="font-normal text-sm text-gray-600">CVV</label>
                <input placeholder="" className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]" />
              </div>
            </div>

            <button className="bg-[#E51B48] text-white w-full p-2 rounded-md mt-20">Add Card</button>
          </div>
        </div>
      </div>
      <Footer style={"bg-[#1B7CFC] py-10 px-10 xs:hidden"} />
      <MobileFooter style={"bg-[#1B7CFC] sm:hidden lg:hidden md:hidden 2xl:hidden xl:hidden"} />
    </div>
  );
};

export default AddCard;
