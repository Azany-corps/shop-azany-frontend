import React from "react";
import { Order } from "../../dtos/Order.interface";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
type Props = {};

const OrderItem = () => {
  const order = {
    date: "September 24, 2023",
    image: "/images/ordershirt.png",
    item: "MURIOKI Mens Printed T-Shirt Short Sleeve Shirt - Blue",
    vendor: "Chukwudi Enterprise",
    price: 566,
    status: "In Stock",
    number: 78376384,
  };
  return (
    <Link
      to={"/customer-profile/confirm-order"}
      className="flex flex-col gap-6"
    >
      <div className="flex smm:gap-3 gap-2 flex-col smm:p-4 px-2 py-4 border-[1px] rounded-[10px] border-black bg-white">
        <div>
          <p className="font-[400] text-[20px]">{order.date}</p>
        </div>
        <div className="my-2 h-[1px] w-full bg-[#C1C1C1]" />
        <div className=" flex justify-between gap-2">
          <div className="flex flex-row smm:gap-4 gap-2">
            <img
              src={order.image}
              className="object-cover h-[114px] !w-[137px]"
              alt=""
            />
            <div className="flex flex-col smm:gap-4 gap-1 smm:text-[16px] text-sm">
              <p className="font-medium smm:text-[16px] text-sm line-clamp-2">
                {order.item}
              </p>
              <p className="smm:font-medium font-light">{order.status}</p>
              {/* <p className="smm:font-medium font-light">{order.time}</p> */}
            </div>
          </div>
          <div className="flex flex-col justify-between items-end">
            <p className="font-medium smm:text-[24px] text-sm text-right">
              ${order.price}
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <p>Status: Shipped</p>
          {/*<div className="py-2 flex items-center mr-3">
            <svg
              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium text-[#1B7CFC] css-i4bv87-MuiSvgIcon-root"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="KeyboardDoubleArrowRightIcon"
            >
              <path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z"></path>
              <path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"></path>
            </svg>
            <p className="font-bold">
              Azany <span className="text-[#1B7CFC]">Express</span>
            </p>
          </div>*/}
        </div>
        <div className="my-2 h-[1px] w-full bg-[#C1C1C1]" />
          <div className="flex flex-row justify-between items-center">
            <div>
              <p className="font-[400] text-[20px]"><span className="font-[700]">Order Number:</span> {order.number}</p>
            </div>
          </div>
      </div>
    </Link>
  );
};

export default OrderItem;
