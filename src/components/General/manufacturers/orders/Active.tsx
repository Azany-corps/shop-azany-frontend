import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { getProductOrders } from "../../../../Services/order.service";
import Status from "./Status";

interface IProduct {
  product_name: string;
  image_url: string;
  quantity: number;
}

interface IOrder {
  order_code: string;
  created_at: string;
  address: string;
  order_status: number;
  products: IProduct[];
}

const OrderActv = () => {
  const [orders, setOrders] = useState<Array<IOrder>>([]);
  const [status, setStatus] = useState<string>("Pending");

  useEffect(() => {
    getProductOrders()
      .then((res) => {
        setOrders(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [status]);

  console.log(orders);

  return (
    <div className="flex justify-center items-center flex-col gap-2">
      <div className="flex w-full justify-start items-center gap-4">
        <p className="text-[#515151] text-base text-left font-bold w-[10%]">
          OrderID
        </p>
        <p className="text-[#515151] text-base text-left font-bold flex-1">
          Product Name
        </p>
        <p className="text-[#515151] text-base text-left font-bold w-[10%]">
          Quantity
        </p>
        <p className="text-[#515151] text-base text-left font-bold flex-1">
          Shipping Address
        </p>
        <p className="text-[#515151] text-base text-left font-bold w-[20%]">
          Actions
        </p>
      </div>
      {orders?.map((order: any, index: number) => (
        <div className="flex flex-col w-full rounded-[10px] px-4 bg-white">
          <div className="flex flex-col">
            {order?.products?.map((product: any, index: number) => (
              <>
                <div className="flex justify-start font-medium text-sm items-center gap-4 relative w-full pt-4 pb-8">
                  <div className="flex w-[10%] justify-start items-center">
                    <p className="break-words w-full">
                      {index === 0 && order?.order_code}
                    </p>
                  </div>
                  <div className="flex flex-1 justify-start items-center flex-row smm:gap-4 gap-2">
                    <img
                      src={product.image_url}
                      className="object-cover h-[3.25rem] !w-[3.25rem]"
                      alt=""
                    />
                    <p className="font-medium text-sm line-clamp-2">
                      {product.product_name}
                    </p>
                  </div>
                  <div className="flex w-[10%] justify-start items-center">
                    {product?.quantity}
                  </div>
                  <div className="flex flex-1 justify-start items-center">
                    <p className="font-medium text-sm line-clamp-2">
                      {index === 0 && order?.address}
                    </p>
                  </div>
                  <div className="flex w-[20%] gap-1 justify-start items-center">
                    {index === 0 && (
                      <Status
                        orderID={order.id}
                        setStatus={setStatus}
                        status={order.order_status}
                      />
                    )}
                  </div>
                </div>
                {order?.products?.length !== index + 1 && (
                  <div className="my-2 h-[1px] w-full bg-[#C1C1C1]" />
                )}
              </>
            ))}
          </div>
          <div className="flex justify-between items-center py-4 border-t border-black">
            <small>Order placed 09/01</small>
            <span className="flex justify-center items-center gap-1">
              <Icon icon="material-symbols:mail-outline" color="#09cdcd" />
              <p className="text-[#09CDCD] font-medium text-sm">
                Message Customer
              </p>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderActv;
