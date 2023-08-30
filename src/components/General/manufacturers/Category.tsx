import React from "react";
import Product from "../landing/Product";
import ProductI from "./ProductI";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CategoriesProps {
  styles: string;
  title: string;
}

const Category = ({ styles, title }: CategoriesProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Change this to adjust the number of products shown on larger screens
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Change this to adjust the number of products shown on medium screens
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2, // Change this to adjust the number of products shown on smaller screens (mobile)
        },
      },
    ],
  };

  return (
    <div className="mx-12 my-10 xs:mx-4">
      <div className={`${styles}  px-8 py-4 flex justify-between rounded-tl-lg rounded-tr-lg`}>
        <p className="">{title}</p>
      </div>
      <div className="bg-white">
        <Slider {...settings}>
          <ProductI data={{
            id: 0,
            store_name: "",
            logo_url: "",
            banner_url: "",
            store_category: "",
            city: "",
            state: "",
            country: "",
            num_of_products: 0,
            num_of_orders: 0
          }} />
          <ProductI data={{
            id: 0,
            store_name: "",
            logo_url: "",
            banner_url: "",
            store_category: "",
            city: "",
            state: "",
            country: "",
            num_of_products: 0,
            num_of_orders: 0
          }} />
          <ProductI data={{
            id: 0,
            store_name: "",
            logo_url: "",
            banner_url: "",
            store_category: "",
            city: "",
            state: "",
            country: "",
            num_of_products: 0,
            num_of_orders: 0
          }} />
          <ProductI data={{
            id: 0,
            store_name: "",
            logo_url: "",
            banner_url: "",
            store_category: "",
            city: "",
            state: "",
            country: "",
            num_of_products: 0,
            num_of_orders: 0
          }} />
          <ProductI data={{
            id: 0,
            store_name: "",
            logo_url: "",
            banner_url: "",
            store_category: "",
            city: "",
            state: "",
            country: "",
            num_of_products: 0,
            num_of_orders: 0
          }} />
          <ProductI data={{
            id: 0,
            store_name: "",
            logo_url: "",
            banner_url: "",
            store_category: "",
            city: "",
            state: "",
            country: "",
            num_of_products: 0,
            num_of_orders: 0
          }} />
          <ProductI data={{
            id: 0,
            store_name: "",
            logo_url: "",
            banner_url: "",
            store_category: "",
            city: "",
            state: "",
            country: "",
            num_of_products: 0,
            num_of_orders: 0
          }} />
        
        </Slider>
      </div>
    </div>
  );
};

export default Category;
