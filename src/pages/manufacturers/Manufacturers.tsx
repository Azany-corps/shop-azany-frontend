import React from "react";
import BottomHeader from "../../components/General/BottomHeader";
import Footer from "../../components/General/Footer";
import Header from "../../components/General/Header";
import Banner from "../../components/General/manufacturers/Banner";
import Body from "../../components/General/manufacturers/Body";
import Category from "../../components/General/manufacturers/Category";
import TopHeader from "../../components/General/TopHeader";
import MobileHeader from "../../components/General/MobileHeader";
import MobileFooter from "../../components/General/MobileFooter";

const Manufacturers = () => {
  return (
    <div className="bg-[#F5F5F5] xs:overflow-x-hidden">
      <BottomHeader style={"bg-[#221E22] py-2 hidden md:block"} />
      <MobileHeader />
      <Header style={"bg-[#44444C] hidden md:block"} />
      <Banner />
      <Category
        styles={"text-white bg-blue-400 font-medium text-lg"}
        title={"Top Manufacturers"}
      />
      <Body />
      <Footer style={"bg-[#1B7CFC] w- py-10 px-10 xs:hidden"} />
      <MobileFooter
        style={
          "bg-[#1B7CFC] sm:hidden lg:hidden md:hidden 2xl:hidden xl:hidden"
        }
      />
    </div>
  );
};

export default Manufacturers;
