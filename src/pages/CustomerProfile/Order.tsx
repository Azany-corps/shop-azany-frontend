import React, { useState, useEffect } from "react";
import Buy from "../../components/CustomerProfile/Buy";
import CancelledOrder from "../../components/CustomerProfile/CancelledOrder";
import CustomerProfileLayout from "../../components/CustomerProfile/CustomerProfileLayout";
import OrderItem from "../../components/CustomerProfile/Order";
import BsSearch from "react-icons/bs";
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

const Order = () => {
  const [order, setOrder] = useState(true);
  const [cancelled, setCancelled] = useState(false);
  const [buy, setBuy] = useState(false);
  const [searchBarVisible, setSearchBarVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [orders, setOrders] = useState<Array<IOrder>>([]);
  const [orderStatus, setOrderStatus] = useState<string>('')

  const [selectedSorting, setSelectedSorting] = useState("Show all");

  const handleOrder = () => {
    setOrder(true);
    setCancelled(false);
    setBuy(false);
  };
  const handleCancelled = () => {
    setOrder(false);
    setCancelled(true);
    setBuy(false);
  };
  const handleBuy = () => {
    setOrder(false);
    setCancelled(false);
    setBuy(true);
  };
  const onClose = React.useCallback(() => {
    setIsVisible(false);
  }, []);

  useEffect(() => {
    getCustomerProductOrders()
      .then((res: any) => {
        setOrders(res);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, [orderStatus]);

  return (
    <div className="bg-[#F5F5F5]">
      <CustomerProfileLayout>
        <div className="p-8 xs:p-4 w-full">
          <div className="w-full">
            <div className="bg-white smm:ml-0 -ml-4 smm:w-full w-[calc(100%+32px)] smm:px-0 px-2">
              <h1 className="text-[40px] xs:text-[20px] font-[500]">Orders</h1>
              {!searchBarVisible && (
                <div className="flex items-center">
                  <div className="py-6 w-full">
                    <div className="flex items-center space-x-5">
                      <h1
                        className={
                          order
                            ? "font-bold xs:font-mediumcursor-pointer border-b-4 border-[#E51B48]"
                            : "text-[#515151] cursor-pointer"
                        }
                        onClick={() => handleOrder()}
                      >
                        Active
                      </h1>
                      <h1
                        className={
                          cancelled
                            ? "font-bold xs:font-medium cursor-pointer border-b-4 border-[#E51B48]"
                            : "text-[#515151] cursor-pointer"
                        }
                        onClick={() => handleCancelled()}
                      >
                        Cancelled
                      </h1>
                      <h1
                        className={
                          buy
                            ? "font-bold xs:font-medium cursor-pointer border-b-4 border-[#E51B48]"
                            : "text-[#515151] cursor-pointer"
                        }
                        onClick={() => handleBuy()}
                      >
                        Completed
                      </h1>
                    </div>
                  </div>
                  <div
                    className="xsm:hidden block cursor-pointer"
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
                <div className="py-6 -ml-4 w-[calc(100%+32px)] relative">
                  <input
                    type="text"
                    placeholder="Search"
                    className="py-3 w-full border-x-0 border border-gray-200 px-3"
                  />
                  <div
                    className="absolute top-1/2 -translate-y-1/2 right-4"
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
            <div className="py-3">
              {order && <OrderItem orders={orders} setOrderStatus={setOrderStatus} />}
              {cancelled && <CancelledOrder orders={orders} setOrderStatus={setOrderStatus} />}
              {buy && <Buy orders={orders} setOrderStatus={setOrderStatus} />}
            </div>
          </div>
        </div>
      </CustomerProfileLayout>
    </div>
  );
};

export default Order;
