import React from "react";
import { Link } from "react-router-dom";

const OrderActv = () => {
  const order = {
    image: "/images/ordershirt.png",
    item: "MURIOKI Mens Printed T-Shirt Short Sleeve Shirt - Blue",
    vendor: "Chukwudi Enterprise",
    price: "$566",
    status: "In Stock",
    time: "Order Placed 09/01",
  };
  return (
    <Link
      to={"/manufacturers-profile/confirm-order"}
      className="flex flex-col gap-6"
    >
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
    </Link>
  );
};

export default OrderActv;
