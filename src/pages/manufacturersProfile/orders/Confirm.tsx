import React from "react";
import BottomHeader from "../../../components/General/BottomHeader";
import Footer from "../../../components/General/Footer";
import Header from "../../../components/General/Header";
import TopHeader from "../../../components/General/TopHeader";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MobileHeader from "../../../components/General/MobileHeader";
import MobileFooter from "../../../components/General/MobileFooter";
import { Link } from "react-router-dom";

const ConfirmOrder = () => {
  const order = {
    image: "/images/ordershirt.png",
    item: "MURIOKI Mens Printed T-Shirt Short Sleeve Shirt - Blue",
    vendor: "Chukwudi Enterprise",
    price: "$566",
    status: "In Stock",
    time: "Order Placed 09/01",
  };
  return (
    <div className="bg-[#F5F5F5] xs:overflow-x-hidden">
      <TopHeader />
      <BottomHeader style={"bg-[#1B7CFC] py-2 xs:hidden"} />
      <Header style={"bg-[#70ADFF] xs:hidden"} />
      <MobileHeader hideScrollMenu={false} />
      <div className="flex-row gap-2 p-2 smm:w-[90%] flex mx-auto items-center w-full">
        <p>Home</p>
        <ArrowForwardIosIcon fontSize="small" />
        <p>Your Account</p>
        <ArrowForwardIosIcon fontSize="small" />
        <p className="text-gray-700">Confirm Order</p>
      </div>
      <div className="smm:p-10 p-5 smm:px-10 px-2 smm:w-[90%] w-full mb-10 mx-auto bg-white rounded-lg">
        <Link
          to={"/manufacturers-profile/orders"}
          className="flex mb-3 justify-between"
        >
          <div className="flex items-center gap-2 text-[#515151]">
            <ArrowBackIcon />
            Back
          </div>
        </Link>
        <div className="smm:w-[60%] px-2 w-full mx-auto flex flex-col gap-10 justify-center">
          <div>
            <h1 className="smm:text-[40px] text-[20px] font-[500]">
              Order Slip
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
              consectetur.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex smm:gap-3 gap-2 flex-col smm:p-4 px-2 py-4 bg-white rounded-md shadow-md">
              <div className=" flex justify-between gap-2">
                <div className="flex flex-row smm:gap-4 gap-2">
                  <img
                    src={order.image}
                    className="object-cover h-[70px] !w-[70px] rounded-lg"
                    alt=""
                  />
                  <div className="flex flex-col smm:gap-4 gap-1 smm:text-[16px] text-sm">
                    <p className="font-medium smm:text-[16px] text-sm line-clamp-2">
                      {order.item}
                    </p>
                    <p className="smm:font-medium font-light">{order.status}</p>
                    <p className="smm:font-medium font-light">{order.time}</p>
                    <p>Status: Shipped</p>
                  </div>
                </div>
                <div className="flex flex-col justify-between items-end">
                  <p className="font-medium smm:text-[24px] text-sm text-right">
                    {order.price}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img src="/images/order-slip.png" alt="" />
          <div>
            <h1 className="smm:text-[40px] text-[20px] font-[500]">
              Tracking Number
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
              consectetur.
            </p>
          </div>

          <div className="w-full flex flex-col relative items-start gap-2">
            <input
              placeholder="3243GD3221DS"
              className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
            />
            <button className="bg-[#E51B48] text-white w-full p-2 rounded-md">
              Mark order as shipped
            </button>
          </div>
        </div>
      </div>
      <Footer style={"bg-[#1B7CFC] py-10 px-10 xs:hidden"} />
      <MobileFooter
        style={
          "bg-[#1B7CFC] sm:hidden lg:hidden md:hidden 2xl:hidden xl:hidden"
        }
      />
    </div>
  );
};

export default ConfirmOrder;
