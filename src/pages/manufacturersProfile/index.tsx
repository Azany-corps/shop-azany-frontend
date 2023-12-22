import React, { useState } from "react";
import ManufacturersProfileLayout from "../../components/General/manufacturers/profile/Layout";
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
    <div className="bg-[#F5F5F5]">
      <ManufacturersProfileLayout>
        {/* <ManufacturersProfileLayoutComp title="overview"> */}
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
              <div className="py-5 bg-white">
                <div className="px-2 space-y-2">
                  {data?.map((each, index) => (
                    <div
                      className={`list-itemed xs:shadow-md text-black ${active === each ? "bg-[#E51B48]" : ""
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
                      <p> &gt;</p>
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
        {/* </ManufacturersProfileLayoutComp> */}
      </ManufacturersProfileLayout>
    </div>
  );
};

export default ManufacturersIndex;
