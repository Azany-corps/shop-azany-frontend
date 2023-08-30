import React from "react";
import BottomHeader from "../../components/General/BottomHeader";
import Body from "../../components/General/categories/Body";
import Category from "../../components/General/categories/Category";
import Footer from "../../components/General/Footer";
import Header from "../../components/General/Header";
import TopHeader from "../../components/General/TopHeader";

const Search = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <TopHeader />
      <BottomHeader style={"bg-[#1B7CFC] py-2"} />
      <Header style={"bg-[#70ADFF]"} />
      <Category styles={"text-white bg-blue-600 font-medium text-lg"} title={"Customers Top Search"} country={"country"} />
      <Body />
      <Footer style={"bg-[#1B7CFC] py-10 px-10"} />
    </div>
  );
};

export default Search;
