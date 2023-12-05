import React, { useEffect, useState } from "react";
import ProductActive from "../../../components/General/manufacturers/product/Active";
import ProductClose from "../../../components/General/manufacturers/product/Closed";
import ProductRev from "../../../components/General/manufacturers/product/Reviewing";
import ManufacturersProfileLayout from "../../../components/General/manufacturers/profile/Layout";
import { Link } from "react-router-dom";
import callAPI from "../../../api/callApi";
import useAuthToken from "../../../hooks/useAuthToken";

type Product = {
  category: string;
  created_at: string;
  currency: string;
  discount_enabled: string;
  id: number;
  image_url: string;
  images: string;
  laravel_through_key: string;
  price: string;
  product_details: ProductDetails[];
  product_name: string;
  stock: string;
  store_id: number;
  sub_category: string;
  updated_at: string;
  user_id: number;
};

type ProductDetails = {
  city: string;
  country: string;
  created_at: string;
  description: string;
  id: number;
  product_id: number;
  specifications: string;
  state: string;
  updated_at: string;
};

const MProduct = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [active, setActive] = useState(true);
  const [review, setReview] = useState(false);
  const [closed, setClosed] = useState(false);
  const [searchBarVisible, setSearchBarVisible] = useState(false);
  const [authToken] = useAuthToken();

  const handleActive = () => {
    setActive(true);
    setReview(false);
    setClosed(false);
  };
  const handleReview = () => {
    setActive(false);
    setReview(true);
    setClosed(false);
  };
  const handleClosed = () => {
    setActive(false);
    setReview(false);
    setClosed(true);
  };

  useEffect(() => {
    const headers = { Authorization: `Bearer ${authToken}` };
    const fetchActiveProducts = async () => {
      try {
        const response = await callAPI(
          `auth/store/fetch_all_products/${0}/${10}`,
          "GET",
          null,
          headers
        );
        setProducts(response.data?.values);
      } catch (error) {
        console.error(error);
      }
    };
    fetchActiveProducts();
  }, [authToken]);

  return (
    <div className="bg-[#]">
      <ManufacturersProfileLayout>
        <div className="smm:p-8 p-1 w-full mx-auto">
          <div className="w-full">
            <div className="flex flex-col gap-4 w-full">
              <div className="bg-white flex flex-col pt-6 w-full md:px-12 px-2">
                <h1 className="text-[40px] font-[500] xs:text-[26px]">
                  My Products
                </h1>
                {!searchBarVisible && (
                  <div className="pt-3 w-full justify-between items-center flex">
                    <div className="flex items-center text-center gap-3">
                      <h1
                        className={
                          active
                            ? "font-bold cursor-pointer border-b-4 border-[#E51B48] pb-1"
                            : "text-[#515151] cursor-pointer pb-1 border-b-4 border-white"
                        }
                        onClick={() => handleActive()}
                      >
                        Active
                      </h1>
                      <h1
                        className={
                          review
                            ? "font-bold cursor-pointer border-b-4 border-[#E51B48] pb-1"
                            : "text-[#515151] cursor-pointer pb-1 border-b-4 border-white"
                        }
                        onClick={() => handleReview()}
                      >
                        Reviewing
                      </h1>
                      <h1
                        className={
                          closed
                            ? "font-bold cursor-pointer border-b-4 pb-1 border-[#E51B48]"
                            : "text-[#515151] cursor-pointer pb-1 border-b-4 border-white"
                        }
                        onClick={() => handleClosed()}
                      >
                        Closed
                      </h1>
                    </div>
                    <div className="flex-row gap-4 hidden md:flex">
                      <div className="hidden md:flex justify-center items-center">
                        <input
                          className="py-2 px-4 rounded-md border border-[#C4C4C4]"
                          placeholder="Search my Products"
                        />
                      </div>
                      <a href="/manufacturers-profile/add-product">
                        <button className="bg-[#1B7CFC] text-white text-sm py-2 px-4 rounded-md xs:hidden">
                          Add Product
                        </button>
                      </a>
                    </div>
                    <div
                      className="md:hidden block pb-2 cursor-pointer"
                      onClick={() => setSearchBarVisible(true)}
                    >
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.5 22.5L17.5 17.5M19.1667 13.3333C19.1667 14.0994 19.0158 14.8579 18.7226 15.5657C18.4295 16.2734 17.9998 16.9164 17.4581 17.4581C16.9164 17.9998 16.2734 18.4295 15.5657 18.7226C14.8579 19.0158 14.0994 19.1667 13.3333 19.1667C12.5673 19.1667 11.8087 19.0158 11.101 18.7226C10.3933 18.4295 9.75022 17.9998 9.20854 17.4581C8.66687 16.9164 8.23719 16.2734 7.94404 15.5657C7.65088 14.8579 7.5 14.0994 7.5 13.3333C7.5 11.7862 8.11458 10.3025 9.20854 9.20854C10.3025 8.11458 11.7862 7.5 13.3333 7.5C14.8804 7.5 16.3642 8.11458 17.4581 9.20854C18.5521 10.3025 19.1667 11.7862 19.1667 13.3333Z"
                          stroke="#515151"
                          stroke-width="2.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                )}

                {searchBarVisible && (
                  <div className="flex justify-center items-center py-3 w-full relative">
                    <input
                      type="text"
                      placeholder="Search"
                      className="py-3 w-full border-x-0 border border-gray-200 px-3"
                    />
                    <div
                      className=""
                      onClick={() => setSearchBarVisible(false)}
                    >
                      <span className="text-xl p-2">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 13L13 1M1 1L13 13"
                            stroke="black"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className="py-4 px-4 bg-white">
                {active && (
                  <div className="space-y-3">
                    {products.length > 0 ? (
                      products.map((product) => (
                        <ProductActive key={product.id} data={product} />
                      ))
                    ) : (
                      <p> Fetching products ...</p>
                    )}
                  </div>
                )}
                {review && <ProductRev />}
                {closed && <ProductClose />}
              </div>
              <a href="/manufacturers-profile/add-product">
                <button className="bg-[#1B7CFC] text-white py-2 w-full px-4 rounded-md sm:hidden lg:hidden md:hidden 2xl:hidden xl:hidden">
                  Add Product
                </button>
              </a>
            </div>
          </div>
        </div>
      </ManufacturersProfileLayout>
    </div>
  );
};

export default MProduct;
