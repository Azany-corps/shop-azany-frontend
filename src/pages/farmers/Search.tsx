import React from "react";
import BottomHeader from "../../components/General/BottomHeader";
import Body from "../../components/General/categories/Body";
import Category from "../../components/General/categories/Category";
import Footer from "../../components/General/Footer";
import Header from "../../components/General/Header";
import TopHeader from "../../components/General/TopHeader";

const FSearch = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <TopHeader />
      <BottomHeader style={"bg-[#132A13] py-2"} />
      <Header style={"bg-[#90A955]"} />
      <Category styles={"text-black bg-[#ECF39E]  font-medium text-lg"} title={"Customers Top Search"} country={"country"} />
      <Body />
      <Footer style={"bg-[#132A13] py-10 px-10"} />
    </div>
  );
};

export default FSearch;
