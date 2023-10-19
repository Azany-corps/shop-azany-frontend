import React, { useEffect, useState } from "react";
import Product from "./Product";
import callAPI from "../../../api/callApi";
import { toast } from "react-toastify";
import Slider from "react-slick";
import { Icon } from "@iconify/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CategoriesProps {
  styles: string;
  title: string;
  country: string;
}

const Categories = ({ styles, title, country }: CategoriesProps) => {
  const [product, setProduct] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  interface Product {
    id: number;
    image_url: string;
    price: string;
    country: string;
    state: string;
    currency: string;
    product_description: string;
    product_name: string;
    store_id: string;
    product_discounts: {
      id: number;
      quantity: string;
      percentage: string;
      currency: string;
      discount_price: string;
      product_id: number;
      created_at: string;
      updated_at: string;
    }[];
  }

  useEffect(() => {
    if (country) {
      const fetchProducts = async () => {
        try {
          setIsLoading(true);
          const response = await callAPI(`general/products/list_new_product/${country}`, "GET", null);
          setProduct(response.data?.values);
          console.log(response.data?.values);
        } catch (error) {
          console.error(error);
          setProduct([]); // remove the products from UI
        } finally {
          setIsLoading(false);
        }
      };
      fetchProducts();
    } else {
      setProduct([]); // remove the products from UI
    }
  }, [country]);

  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button
        className="slick-arrow"
        onClick={onClick}
        style={{
          position: "absolute",
          top: "50%",
          left: "-24px",
          transform: "translateY(-50%)",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          border: "none",
          outline: "none",
        }}
      >
        <Icon icon="material-symbols:arrow-circle-left-rounded" className="text-[#515151] opacity-50 hover:opacity-100 w-8 h-8 xs:w-6 xs:h-6" />
      </button>
    );
  };

  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button
        className="slick-arrow"
        onClick={onClick}
        style={{
          position: "absolute",
          top: "50%",
          right: "-40px",
          transform: "translateY(-50%)",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          border: "none",
          outline: "none",
        }}
      >
        <Icon icon="material-symbols:arrow-circle-right-rounded" className="text-[#515151] opacity-50 hover:opacity-100 w-8 h-8 xs:w-6 xs:h-6" />
      </button>
    );
  };

  const settings = {
    slidesToShow: 5, // Number of products to show at a time
    slidesToScroll: 1,
    arrows: product.length > 5, // Show arrows only when there are more than 5 products
    infinite: product.length > 5, // Enable infinite scrolling when there are more than 5 products
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2.5, // Show 2.5 products at a time
          slidesToScroll: 2.5, // Scroll 2.5 products at a time
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2.5, // Show 2.5 products at a time
          slidesToScroll: 2.5, // Scroll 2.5 products at a time
        },
      },
    ],
    className: "flex flex-row gap-4 py-4 items-center bg-white",
  };

  return (
    <div className="mx-12 my-10 xs:mx-4">
    <div className={`${styles} px-8 xs:text-sm xs:px-4 py-4 flex justify-between rounded-tl-lg rounded-tr-lg`}>
        <p className="general-font">{title}</p>
        <p className="general-font">SEE ALL</p>
      </div>
      {product.length > 0 ? (
        <Slider {...settings}>
          {product.map((products) => (
            <Product key={products.id} data={products} />
          ))}
        </Slider>
      ) : isLoading ? (
        <p>...Loading Products</p>
      ) : (
        <p>No products available for {country}</p>
      )}
    </div>
  );
};

export default Categories;
