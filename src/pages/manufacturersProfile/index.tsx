import React, { useState } from "react";
import ManufacturersProfileLayout from "../../components/General/manufacturers/profile/Layout";
import { Grid } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import ManufacturersProfileLayoutComp from "../../components/General/manufacturers/profile/Layout";
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
    <ManufacturersProfileLayoutComp>
      <Grid item xs={12} md={4} display={{ xs: "block", sm: "none" }}>
        <div className="w-full bg-transparent mx-auto">
          <div className="flex-col flex gap-3">
            <div className="flex bg-white flex-col xs:flex-row xs:justify-between gap-4 p-2">
              <div className="flex flex-row gap-4">
                <div>
                  <img src="/images/walleticon.png" alt="wallet" />
                </div>
                <div className="flex flex-col justify-start">
                  <Link to="/manufacturers-profile/wallet-history">
                    <h1 className="font-bold text-[24px] text-[#1B7CFC]">
                      Wallet
                    </h1>
                    <p>Lorem ipsum dolor sit.</p>
                    <p className="text-[24px] font-medium">$4,450,500.00</p>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-4 sef-end justify-between">
                <div className="ml-auto sm:hidden lg:hidden md:hidden 2xl:hidden xl:hidden">
                  <p className="text-[#1B7CFC] underline">RP</p>
                </div>
                <button className="w-full xs:w-18 xs:h-10 border text-[#E51B48] p-2 rounded-md bg-white border-red-600 hover:bg-white hover:text-red-600 hover:border-600">
                  Withdraw
                </button>
              </div>
            </div>
            <div className="py-1 gap-1 items-center smm:hidden flex smm:bg-white bg-[#F5F5F5] ">
              <Link to={"/"} className="w-fit items-center flex">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.7068 5.29279C12.8943 5.48031 12.9996 5.73462 12.9996 5.99979C12.9996 6.26495 12.8943 6.51926 12.7068 6.70679L9.41379 9.99979L12.7068 13.2928C12.8889 13.4814 12.9897 13.734 12.9875 13.9962C12.9852 14.2584 12.88 14.5092 12.6946 14.6946C12.5092 14.88 12.2584 14.9852 11.9962 14.9875C11.734 14.9897 11.4814 14.8889 11.2928 14.7068L7.29279 10.7068C7.10532 10.5193 7 10.265 7 9.99979C7 9.73462 7.10532 9.48031 7.29279 9.29279L11.2928 5.29279C11.4803 5.10532 11.7346 5 11.9998 5C12.265 5 12.5193 5.10532 12.7068 5.29279Z"
                    fill="black"
                  />
                </svg>
                <p>Home</p>
              </Link>
            </div>
            <div className="py-5 bg-white">
              <div className="px-2 space-y-2">
                {data?.map((each, index) => (
                  <div
                    className={`list-itemed xs:shadow-md text-black ${
                      active === each ? "bg-[#E51B48]" : ""
                    } hover:bg-[#E51B48] hover:text-white focus:bg-[#E51B48]`}
                    key={index}
                    onClick={() => {
                      setActive(each);
                      navigate(`/manufacturers-profile${each.path}`);
                    }}
                  >
                    <div className="group flex justify-between items-center">
                      <div className="py-2">
                        <h2 className="font-bold ">{each.title}</h2>
                        <p className="group-hover:text-white text-gray-500">
                          {each.subheading}
                        </p>
                      </div>
                      <p> &gt;</p>
                    </div>
                  </div>
                ))}
                <div className="flex flex-col gap-4">
                  <Link to="/manufacturers-profile/subscription">
                    <div className="bg-red-600 p-4 text-white rounded-lg">
                      <p>Subscription</p>
                    </div>
                  </Link>
                  <div
                    className="text-red-600 p-4 hover:bg-red-600 hover:text-white rounded-lg"
                    onClick={openModal}
                  >
                    <p>Close Account</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Grid>
    </ManufacturersProfileLayoutComp>
  );
};

export default ManufacturersIndex;
