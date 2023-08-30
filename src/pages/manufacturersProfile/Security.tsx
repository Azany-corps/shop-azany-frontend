import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TopHeader from "../../components/General/TopHeader";
import Header from "../../components/General/Header";
import BottomHeader from "../../components/General/BottomHeader";
import Footer from "../../components/General/Footer";
import MobileHeader from "../../components/General/MobileHeader";
import MobileFooter from "../../components/General/MobileFooter";
import { Link } from "react-router-dom";

const SecurityQuestion = () => {
  return (
    <div className="bg-[#F5F5F5] xs:overflow-x-hidden">
      <TopHeader />
      <BottomHeader style={"bg-[#1B7CFC] py-2 xs:hidden"} />
      <Header style={"bg-[#70ADFF] xs:hidden"} />
      <MobileHeader hideScrollMenu={false} />
      <div className="flex-row gap-2 p-2 smm:w-[90%] flex mx-auto items-center w-full">
        <p>Home</p>
        <ArrowForwardIosIcon fontSize="small" />
        <p>Your Account</p>
        <ArrowForwardIosIcon fontSize="small" />
        <p className="text-gray-700">Security Question</p>
      </div>
      <div className="smm:p-10 p-5 smm:px-10 px-2 smm:w-[90%] w-full mb-10 mx-auto bg-white rounded-lg">
        <Link
          to={"/manufacturers-profile"}
          className="flex mb-3 justify-between"
        >
          <div className="flex items-center gap-2 text-[#515151]">
            <ArrowBackIcon />
            Back
          </div>
        </Link>
        <div className="smm:w-[60%] px-2 w-full mx-auto flex flex-col smm:gap-10 gap-4 justify-center">
          <div>
            <h1 className="smm:text-[40px] text-[20px] font-[500]">
              Set New Security Question
            </h1>
          </div>

          <div className="py-5 w-full flex flex-col smm:gap-8 gap-4">
            <div className="w-full flex flex-col relative items-start gap-2">
              <label className="smm:font-[500] font-normal">
                SECURITY QUESTION
              </label>
              <input
                placeholder="Choose Security Question"
                className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
              />
            </div>

            <div className="w-full flex flex-col relative items-start gap-2">
              <label className="smm:font-[500] font-normal">ANSWER</label>
              <input
                placeholder="Input Answer"
                className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
              />
            </div>

            <button className="bg-[#E51B48] text-white w-full p-2 rounded-md mt-20">
              Change Security Question
            </button>
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

export default SecurityQuestion;
