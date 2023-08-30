/* eslint-disable react/style-prop-object */
import React, { useEffect, useState } from "react";
import BottomHeader from "../../components/General/BottomHeader";
import Footer from "../../components/General/Footer";
import Header from "../../components/General/Header";
import Banner from "../../components/General/categories/Banner";
import Body from "../../components/General/categories/Body";
import Category from "../../components/General/manufacturers/Category";
import TopHeader from "../../components/General/TopHeader";
import MobileHeader from "../../components/General/MobileHeader";
import MobileFooter from "../../components/General/MobileFooter";
import { useParams } from "react-router-dom";
import axios from "axios";

const Categories = () => {
  let { category, subCategory } = useParams<string>();
  category = category ?? "";
  const [categoryData, setCategoryData] = useState<any>("");
  const [products, setProducts] = useState<any>([]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `https://shopazanyb2b.urbantour.org/api/general/products/fetch_products_by_category_and_subcategory/${category}/${subCategory}/0/10`,
      headers: {},
    };

    axios
      .request(config)
      .then((response: any) => {
        console.log(JSON.stringify(response.data));
        setCategoryData(response.data.data?.values[0]);
        setProducts(response.data.data?.values[0]?.other_product_filter);
        setLoading(false);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, [category, subCategory]);

  return (
    <div className="bg-[#F5F5F5] xs:overflow-x-hidden">
      <TopHeader />
      <MobileHeader />
      <BottomHeader style={"bg-[#1B7CFC] py-2 xs:hidden"} />
      <Header style={"bg-[#70ADFF] xs:hidden"} />
      <Banner
        style={"Categories"}
        styles={!loading ? categoryData?.category_info?.[0]?.category : ""}
        image={categoryData?.category_info?.[0].banner_url}
      />
      <Category
        styles={"text-black bg-yellow-300 font-medium text-lg"}
        title={"Top Products"}
      />
      <Body
        category={categoryData?.category_info?.[0]?.category}
        products={products}
      />
      <Footer style={"bg-[#1B7CFC] py-10 px-10 xs:hidden"} />
      <MobileFooter
        style={
          "bg-[#1B7CFC] sm:hidden lg:hidden md:hidden 2xl:hidden xl:hidden"
        }
      />{" "}
    </div>
  );
};

export default Categories;
