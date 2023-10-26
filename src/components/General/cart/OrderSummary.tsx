import React, { useEffect, useState } from "react";
import { calculateTotalPrice, getCartProducts } from "../../../Services/cartservices";

type Props = {
  setTPrice?: Function
};

function OrderSummary({ setTPrice }: Props) {
  const [cart, setCart] = useState<any[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    getCartProducts()
      .then((res) => {
        setCart(res?.data?.values);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    setTotalPrice(calculateTotalPrice(cart));
    if (setTPrice !== undefined) {
      setTPrice(calculateTotalPrice(cart))
    }
  }, [cart]);
  return (
    <div className="p-4 bg-white shadow-md h-full rounded-md gap-4 flex-col flex ">
      <div className="flex justify-between items-start ">
        <p className="font-semibold text-[24px]">Order Summary</p>
      </div>
      <div className="flex flex-col gap-1 overflow-y-scroll max-h-[600px] p-2">
        {cart?.map((cartItem) => (
          <div className="flex flex-row gap-4 shadow-md p-4 rounded-md" key={cartItem?.id}>
            <div>
              <img src={cartItem?.product?.[0].image_url} className="w-16 h-16 rounded-lg" alt="" />
            </div>
            <div>
              <p className="text-[#060606]">{cartItem?.product?.[0]?.product_name}</p>
              <p className="text-[#1B7CFC]">
                {" "}
                {cartItem?.product?.[0]?.currency} {cartItem?.product?.[0]?.price}
              </p>
              <p className="text-[#515151]">{cartItem?.quantity} Units</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <p className="font-normal">Subtotal</p>
          <p className="font-semibold">NGN {totalPrice}</p>
        </div>
        <div className="flex justify-between">
          <p className="font-normal">Shipping</p>
          <p className="font-semibold">NGN {totalPrice * 0.7}</p>
        </div>
      </div>

      <div className="border-b-2 border-gray-300"></div>

      <div className="flex justify-between">
        <p className="font-normal">Total</p>
        <p className="font-semibold">NGN {totalPrice + totalPrice * 0.7}</p>
      </div>
    </div>
  );
}

export default OrderSummary;
