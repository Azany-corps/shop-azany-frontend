import React, { useState } from "react";
import { Grid } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import ManufacturersProfileLayoutComp from "../../components/General/manufacturers/profile/LayoutComp";
type each = {
  image: string;
  title: string;
  subheading: string;
};

const ManufacturersIndex = () => {
  const [list, setList] = useState([]);
  const [active, setActive] = useState<each>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const name = localStorage.getItem("name");
  const last_name = localStorage.getItem("last_name");
  const phone = localStorage.getItem("phone");
  const email = localStorage.getItem("email");

  console.log(email);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const data = [
    {
      image: "/images/Security.png",
      title: "Login & Security",
      subheading: "Edit Name, Email, Phone, 2FA",
      path: "/login",
    },
    {
      image: "/images/business.png",
      title: "Business Information",
      subheading: "Manage your business information",
      path: "/business-info",
    },
    {
      image: "/images/store.png",
      title: "Edit Store",
      subheading: "Edit your virtual store",
      path: "/edit",
    },
    {
      image: "/images/myproducts.png",
      title: "My Products",
      subheading: "Manage and post your products",
      path: "/product",
    },
    {
      image: "/images/productorders.png",
      title: "Product Orders",
      subheading: "Manage customer orders",
      path: "/orders",
    },
    {
      image: "/images/Cards.png",
      title: "Payment",
      subheading: "Manage payment options",
      path: "/payment",
    },
    {
      image: "/images/Message.png",
      title: "Inbox",
      subheading: "View messages from Azany",
      path: "/messages",
    },
    {
      image: "/images/branches.png",
      title: "Branches",
      subheading: "Manage your branches",
      path: "/branches",
    },
    {
      image: "/images/Book (2).png",
      title: "Track Orders",
      subheading: "Track your orders",
      path: "/track-orders",
    },
  ];

  return (
    <div className="">
      <ManufacturersProfileLayoutComp>
        {/* <ManufacturersProfileLayoutComp title="overview"> */}

        <div className="px-[30px] font-DM-sans">
          <div className="mb-[30px] flex-col flex sm:flex-row justify-between">
            <div>
              <p className="font-medium text-sm text-[#29020280]">Dashboard </p>
              <p className="text-[24px] sm:text-[34px] text-[#290202] font-bold">
                Welcome to Azany
              </p>
            </div>
            <div className="bg-white py-[10px] px-[11px] flex items-center rounded-[30px]">
              <form className="hidden lg:block">
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-[270px] font-DM-sans p-4 ps-10 text-base font-normal placeholder:text-[#C2B4B4] rounded-[30px] bg-[#EEEDED] gray-60 outline-none border-none"
                    placeholder="Search"
                    // onChange={handleSearch}
                    // value={searchTerm}
                    required
                  />
                  {/* <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
                </div>
              </form>
              <p className="mx-4 font-DM-sans text-[#01B574] text-sm font-medium flex items-center">
                <img src="/images/circle-plus.svg" alt="icon" />
                <span>New</span>
              </p>
              <img
                src="/images/notification-bell.svg"
                alt="icon"
                className="mr-[21px]"
              />

              <img
                src="/images/profile-image.svg"
                alt="icon"
                className="w-[45px] h-[45px] rounded-full"
              />

              {/* <button
                className="px-[14px] py-[9px] bg-[#01B574] rounded-[20px]"
                onClick={() => {
                  navigate("/manufacturers-profile/add-product");
                }}
              >
                <p className="text-white font-DM-sans font-medium text-sm flex items-center">
                  <span>
                    <img src="/images/plus.svg" alt="icon" />
                  </span>
                  New Products
                </p>
              </button> */}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-5">
            <div className="w-[248px] max-w-[248px] max-h-[97px] col-span-1 flex items-center py-[20px] px-[17px] bg-white rounded-[20px]">
              <img
                src="/images/stat.svg"
                alt="stat"
                className="mr-[14px] w-[56px] h-[56px] object-cover"
              />
              <div className="flex flex-col justify-center">
                <p className="text-[#29020280] font-medium text-base">
                  Total Sales
                </p>
                <p className="text-2xl font-bold text-[#4F4141]">$350.4</p>
              </div>
            </div>
            <div className="w-[248px] max-w-[248px] max-h-[97px] col-span-1 flex items-center py-[20px] px-[17px] bg-white rounded-[20px]">
              <img
                src="/images/dollar.svg"
                alt="stat"
                className="mr-[14px] w-[56px] h-[56px] object-cover"
              />
              <div className="flex flex-col justify-center">
                <p className="text-[#29020280] font-medium text-base">
                  Sales this Week
                </p>
                <p className="text-2xl font-bold text-[#4F4141]">$642.39</p>
              </div>
            </div>
            <div className="w-[248px] max-w-[248px] max-h-[97px] col-span-1 flex items-center py-[20px] px-[17px] bg-white rounded-[20px]">
              <div className="flex flex-col justify-center">
                <p className="text-[#29020280] font-medium text-base">
                  Sales this Month
                </p>
                <p className="text-2xl font-bold text-[#4F4141]">$574.34</p>
              </div>
            </div>
            <div className="w-[248px] max-w-[248px] max-h-[97px] col-span-1 flex items-center py-[20px] px-[17px] bg-white rounded-[20px]">
              <img
                src="/images/orders.svg"
                alt="stat"
                className="mr-[14px] w-[56px] h-[56px] object-cover"
              />
              <div className="flex flex-col justify-center">
                <p className="text-[#29020280] font-medium text-base">
                  Total Orders
                </p>
                <p className="text-2xl font-bold text-[#4F4141]">154</p>
              </div>
            </div>
            <div className="w-[248px] max-w-[248px] max-h-[97px] col-span-1 flex items-center py-[20px] px-[17px] bg-white rounded-[20px]">
              <img
                src="/images/store.svg"
                alt="stat"
                className="mr-[14px] w-[56px] h-[56px] object-cover"
              />
              <div className="flex flex-col justify-center">
                <p className="text-[#29020280] font-medium text-base">
                  Store Rating
                </p>
                <p className="text-2xl font-bold text-[#4F4141] flex items-center">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        d="M17.9417 6.78243C17.8074 6.38269 17.4614 6.09124 17.0448 6.02753L12.1964 5.28662L10.0186 0.647184C9.83288 0.25173 9.43601 0 8.99999 0C8.56369 0 8.16711 0.25173 7.98139 0.647184L5.80332 5.28691L0.954877 6.02781C0.538292 6.09153 0.192281 6.38269 0.058277 6.78272C-0.0757274 7.18274 0.0254188 7.62334 0.32 7.92565L3.86069 11.5564L3.02209 16.6931C2.95294 17.1182 3.13323 17.5457 3.48496 17.7943C3.8364 18.0429 4.30041 18.068 4.67843 17.8594L9.00028 15.4693L13.3221 17.8594C13.4927 17.9537 13.6804 18 13.8673 18C14.0947 18 14.3222 17.9309 14.5156 17.7943C14.8673 17.546 15.0473 17.1185 14.9782 16.6931L14.1396 11.5564L17.6806 7.92565C17.9746 7.62334 18.0757 7.18274 17.9417 6.78243Z"
                        fill="#FF9900"
                      />
                    </svg>
                  </span>
                  350
                </p>
              </div>
            </div>
          </div>
        </div>
      </ManufacturersProfileLayoutComp>
    </div>
  );
};

export default ManufacturersIndex;
