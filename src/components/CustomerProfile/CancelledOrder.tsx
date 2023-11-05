import React, { useEffect, useState } from "react";
import { getCustomerProductOrders, updateCustomerProductOrderStatus } from "../../Services/order.service";


interface IProduct {
  product_name: string,
  image_url: string,
  quantity: number,
  price: number,
  stock: string
}

interface IOrder {
  id: number,
  order_code: string,
  created_at: string,
  address: string,
  order_status: string,
  products: IProduct[]
}

const CancelledOrder = ({ orders, setOrderStatus }: { orders: Array<IOrder>, setOrderStatus: Function }) => {
  // const [orders, setOrders] = useState<Array<IOrder>>([]);

  // useEffect(() => {
  //   getCustomerProductOrders()
  //     .then((res: any) => {
  //       setOrders(res);
  //     })
  //     .catch((error: any) => {
  //       console.log(error);
  //     });
  // }, []);

  const updateOrderStatus = (orderID: number, status: number) => {
    updateCustomerProductOrderStatus(orderID, status)
      .then((res) => {
        console.log(res?.data?.values)
        setOrderStatus(res?.data?.values.order_status)
        // setModal(false)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const getStatusName = (status: string) => {
    if (status === "1") return "Pending"
    if (status === "2") return "Ready to Ship"
    if (status === "3") return "Shipped"
    if (status === "4") return "Delivered"
  }

  return (
    <div className="flex flex-col gap-2">
      {
        orders.map((order, index) => (
          <>
            {
              order.order_status === '0' && (
                <div className="flex smm:gap-3 gap-2 flex-col smm:p-4 px-2 py-64rounded-[10px] shadow-md sha bg-white">
                  <div className=" flex justify-between gap-2">
                    <div className="flex flex-row smm:gap-4 gap-2">
                      <div className="flex overflow-hidden rounded-lg">
                        <img
                          src={order.products[0].image_url}
                          className="object-cover h-[114px] !w-[137px]"
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col smm:gap-4 gap-1 smm:text-[16px] text-[#515151] text-sm font-">
                        <p className="smm:text-[16px] font-semibold text-black text-base line-clamp-2">
                          {order.products[0].product_name}
                        </p>
                        <p className="smm:font-medium font-light">Vender: Vendor</p>
                        <p className="smm:font-medium font-light">{order.products[0].stock}</p>
                        {/* <p className="smm:font-medium font-light">{order.time}</p> */}
                      </div>
                    </div>
                    <div className="flex flex-col justify-between items-end">
                      <p className="font-medium smm:text-[24px] text-sm text-right">
                        ${order.products[0].price}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center py-1 relative justify-between">
                    <p>Status: {getStatusName(order.order_status)}</p>
                  </div>
                </div>
              )
            }
          </>
        ))
      }
    </div>
  );
};

export default CancelledOrder;
