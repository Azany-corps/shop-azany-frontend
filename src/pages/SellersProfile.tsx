import React, { useState } from "react";
import BottomHeader from "../components/General/BottomHeader";
import Header from "../components/General/Header";
import Slider from "../components/General/Slider";
import TopHeader from "../components/General/TopHeader";
import ReturnTop from "../components/CustomerProfile/ReturnTop";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { IconButton } from "@mui/material";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
// import IconButton from '@mui/material/IconButton';
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import Footer from "../components/General/Footer";
import { products } from "../components/CustomerProfile/product";
import ProductItem from "../components/General/ProductItem";
import { Rating } from "@mui/material";
import SellerHome from "../components/CustomerProfile/SellerHome";
import SellerAbout from "../components/CustomerProfile/SellerAbout";
import SellerEnterprise from "../components/CustomerProfile/SellerEnterprise";
import AddIcon from "@mui/icons-material/Add";

const SellersProfile = () => {
  const [home, setHome] = useState(true);
  const [about, setAbout] = useState(false);
  const [enterprise, setEnterprise] = useState(false);

  const handleHome = () => {
    setHome(true);
    setEnterprise(false);
    setAbout(false);
  };
  const handleAbout = () => {
    setHome(false);
    setEnterprise(false);
    setAbout(true);
  };
  const handleEnterprise = () => {
    setHome(false);
    setEnterprise(true);
    setAbout(false);
  };

  return (
    <>
      <ReturnTop />
      <div className="bg-white py-1">
        <div className="w-[90%] mx-auto">
          <div className="flex items-center">
            <h5 className="cursor-pointer">Home</h5>
            <IconButton>
              <ChevronRightIcon />
            </IconButton>
            <h5 className="cursor-pointer">Categories</h5>
            <IconButton>
              <ChevronRightIcon />
            </IconButton>
            <h5 className="cursor-pointer">Electronics</h5>
            <IconButton>
              <ChevronRightIcon />
            </IconButton>
            <h5 className="cursor-pointer">Chuks Enterprise</h5>
          </div>
        </div>
      </div>
      <div>
        <img src="/images/bg_seller.png" className="w-full object-cover" />
      </div>
      <div className="py-3">
        <div className="w-[90%] mx-auto flex justify-between items-center">
          <div className="flex space-x-6 items-center">
            <img src="/images/img_123.png" />
            <div className="py-2 space-y-2">
              <h1 className="text-2xl">Chuks Enterprise</h1>
              <div className="flex items-center space-x-3 py-3">
                <h1 className={home ? "cursor-pointer border-b-2 border-[#E51B48]" : "cursor-pointer"} onClick={() => handleHome()}>
                  Home
                </h1>
                <h1 className={about ? "cursor-pointer border-b-2 border-[#E51B48]" : "cursor-pointer"} onClick={() => handleAbout()}>
                  About
                </h1>
                <h1 className={enterprise ? "cursor-pointer border-b-2 border-[#E51B48]" : "cursor-pointer"} onClick={() => handleEnterprise()}>
                  Feedbacks
                </h1>
              </div>
            </div>
          </div>
          <div className="justify-end flex items-center space-x-3">
            {/* {about && enterprise ? ( */}
            <span className="flex items-center cursor-pointer px-4 py-2 rounded-[10px] border border-[#E51B48]">
              <AddIcon className="text-[#E51B48]" />
              <h2 className="text-[#E51B48]">Follow</h2>
            </span>
            {/* ):''} */}

            <Paper component="form" sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}>
              <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search Chuks Enterprise" inputProps={{ "aria-label": "search google maps" }} />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </div>
        </div>
      </div>
      {home && <SellerHome />}
      {about && <SellerAbout />}
      {enterprise && <SellerEnterprise />}

      <Footer style={"bg-[#1B7CFC] py-10 px-10"} />
    </>
  );
};

export default SellersProfile;
