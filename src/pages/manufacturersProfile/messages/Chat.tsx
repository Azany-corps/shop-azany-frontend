import React from "react";
import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import BottomHeader from "../../../components/General/BottomHeader";
import Footer from "../../../components/General/Footer";
import Header from "../../../components/General/Header";
import TopHeader from "../../../components/General/TopHeader";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Grid } from "@mui/material";

const MChat = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <TopHeader />
      <BottomHeader style={"bg-[#1B7CFC] py-2"} />
      <Header style={"bg-[#70ADFF]"} />
      <div className="flex-row gap-2 p-2 w-[90%] flex mx-auto items-center ">
        <p>Home</p>
        <ArrowForwardIosIcon fontSize="small" />
        <p>Your Account</p>
        <ArrowForwardIosIcon fontSize="small" />
        <p className="text-gray-700">Buyer/ Seller Messages</p>
      </div>
      <div className="p-10 w-[90%] mx-auto mb-10 bg-white rounded-lg">
        <div className="flex justify-between">
          <div className="flex items-center gap-2 text-[#515151]">
            <ArrowBackIcon />
            Back
          </div>
        </div>
        <div className="py-4 w-[100%] mx-auto">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <div className="flex flex-col gap-2">
                <div className="bg-white shadow-md p-4 rounded-md flex flex-row gap-2">
                  <div>
                    <img src="/images/msgprofile.png" alt="message" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-[#515151] text-[14px]">TATIANA EVEREST</p>
                    <p className="text-[16px] font-medium">10kg Brown Choco</p>
                    <p className="text-[#515151] text-[14px]">Is this available for free shipment?</p>
                  </div>
                </div>
                <div className="bg-[#F5F5F5] p-4 rounded-md flex flex-row gap-2">
                  <div>
                    <img src="/images/msgprofile.png" alt="message" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-[#515151] text-[14px]">TATIANA EVEREST</p>
                    <p className="text-[16px] font-medium">10kg Brown Choco</p>
                    <p className="text-[#515151] text-[14px]">Is this available for free shipment?</p>
                  </div>
                </div>
                <div className="bg-white shadow-md p-4 rounded-md flex flex-row gap-2">
                  <div>
                    <img src="/images/msgprofile.png" alt="message" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-[#515151] text-[14px]">TATIANA EVEREST</p>
                    <p className="text-[16px] font-medium">10kg Brown Choco</p>
                    <p className="text-[#515151] text-[14px]">Is this available for free shipment?</p>
                  </div>
                </div>
                <div className="bg-white shadow-md p-4 rounded-md flex flex-row gap-2">
                  <div>
                    <img src="/images/msgprofile.png" alt="message" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-[#515151] text-[14px]">TATIANA EVEREST</p>
                    <p className="text-[16px] font-medium">10kg Brown Choco</p>
                    <p className="text-[#515151] text-[14px]">Is this available for free shipment?</p>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={8}>
              <div className="py-4 px-3 bg-[#F5F5F5] h-[500px] rounded-md flex flex-col">
                Todays Date
                <div className="flex flex-row gap-2 bg-white p-2 mt-auto">
                  <input
                    className="border-b border-gray-500 outline-none focus:border-blue-500 w-full py-2 px-3 leading-5 text-gray-900 placeholder-gray-500 focus:placeholder-gray-400"
                    type="text"
                    placeholder="Type your message here"
                  />
                  <div className="flex flex-row gap-2 text-[#E51B48] items-center">
                    <SendIcon />
                    <AttachFileIcon />
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <Footer style={"bg-[#1B7CFC] py-10 px-10"} />
    </div>
  );
};

export default MChat;
