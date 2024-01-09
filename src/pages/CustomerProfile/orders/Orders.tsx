// EmptyComponent.tsx

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CustomerProfileLayout from "../../../components/CustomerProfile/NewCustomerProfileLayout";
import { Box, Divider, Pagination } from "@mui/material";
import { TabComponent } from "../../../components/Inputs/Tabs";
import { getCustomerProductOrders } from "../../../Services/order.service";

import {
  CurrencyFormatter,
  DateFormatter,
} from "../../../helpers/helperFunction";
import callAPI from "../../../api/callApi";
import { getBearerToken } from "../../../Services/auth.service";
import Loader from "../../../components/Core/Loader";

interface COrdersProps {}

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
  sub_total: number;
}

const COrdersComponent: React.FC<COrdersProps> = () => {
  const [orders, setOrders] = useState<Array<IOrder>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getOrders = async () => {
      const headers = { Authorization: getBearerToken() };
      try {
        setIsLoading(true);
        const response = await callAPI(
          `product/fetch_customer_product_order`,
          "GET",
          null,
          headers
        );
        // console.log(response);
        if (typeof response?.data?.values !== "object") setOrders([]);
        else {
          setOrders(response?.data?.values);
        }
        setIsLoading(false);
        return response.data.values;
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };
    getOrders();
  }, []);

  const [page, setPage] = useState(1);

  const rowsPerPage = 6;

  const pages = Math.ceil(orders.length / rowsPerPage);
  const skip = page * rowsPerPage - rowsPerPage;

  const handleChange = (e: any, p: any) => {
    setPage(p);
  };

  return (
    <CustomerProfileLayout>
      {isLoading && <Loader />}
      <div className="pt-[80px]">
        <p className="capitalize text-xl font-semibold font-baloo">Orders</p>
        {orders.length < 1 && (
          <div className="w-full flex justify-center items-center">
            <div className="relative p-4 w-full max-w-[576px] max-h-[436px]">
              <div className="relative bg-[#d0d0d059] rounded-[26.7px] shadow px-[38px] pb-[88.84px]">
                <div className="px-4 md:px-5 space-y-4 flex flex-col justify-between items-center pt-[30.5px]">
                  <img src="/images/cart-icon.svg" alt="icon" />
                  <p className="text-center text-[15.911px] z-20 font-medium pt-[33.15px] pb-[46.41px] text-[#8B909A]">
                    You don’t have any order yet, Click the “Continue shopping”
                    button below to shop
                  </p>

                  <button
                    // disabled={loading ? true : false}
                    type="button"
                    className="bg-[#D65D5B] font-medium text-white rounded-[22px] text-[15.911px] py-4 w-[200px]"
                  >
                    {/* {loading ? "Loading..." : "Verify"} */}
                    Continue Shopping
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {orders.length >= 1 && (
          <>
            {" "}
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabComponent
                value={true}
                handleChange={() => {}}
                data={[
                  {
                    id: "Approved",
                    name: `Open orders(${orders?.length})`,
                    number: "",
                  },
                  {
                    id: "Pending",
                    name: "Closed orders(0)",
                    number: "",
                  },
                ]}
              />
            </Box>
            <Divider />
            <div className="relative overflow-x-auto ">
              <div className="flex flex-col min-w-[1010px]">
                {isLoading && <Loader />}
                {orders &&
                  orders.length > 0 &&
                  !isLoading &&
                  orders
                    ?.slice(skip, skip + rowsPerPage)
                    ?.map((order: any, index: number) => (
                      <div
                        className="bg-[#d0d0d026] w-full grid grid-cols-7 pt-[5px] pb-[14px] pl-[39px] my-[10px]"
                        key={index}
                      >
                        <div className="col-span-2">
                          <div className="flex items-center font-asap  text-[13.795px] font-normal mb-2.5">
                            <p className="text-[#B3B7BB] max-w-[107px] w-[107px] font-asap  text-[13.795px] font-normal">
                              Order number:
                            </p>
                            <p className="text-[#231F20] ml-6 font-asap  text-[13.795px] font-normal">
                              {order?.order_code}
                            </p>
                          </div>
                          <div className="flex items-center font-asap  text-[13.795px] font-normal mb-2.5">
                            <p className="text-[#B3B7BB] max-w-[107px] w-[107px] font-asap  text-[13.795px] font-normal">
                              Total price:
                            </p>
                            <p className="text-[#231F20] ml-6 font-asap  text-[13.795px] font-normal">
                              {CurrencyFormatter(order?.sub_total || 0)}
                            </p>
                          </div>
                          <div className="flex items-center font-asap  text-[13.795px] font-normal mb-2.5">
                            <p className="text-[#B3B7BB] max-w-[107px] w-[107px] font-asap  text-[13.795px] font-normal">
                              Order date
                            </p>
                            <p className="text-[#231F20] ml-6 font-asap  text-[13.795px] font-normal">
                              {DateFormatter(
                                order?.created_at || new Date(),
                                "dS mmmm  yyyy"
                              )}
                            </p>
                          </div>
                        </div>
                        <div className="col-span-2">
                          <div className="flex items-start font-asap  text-[13.795px] font-normal mb-2.5">
                            <p className="text-[#B3B7BB] max-w-[120px] w-[120px] font-asap  text-[13.795px] font-normal">
                              Delivery address:
                            </p>
                            <p className="text-[#231F20] ml-6 font-asap  text-[13.795px] font-normal">
                              No 12 limpopo benue, street close, maitama
                            </p>
                          </div>
                        </div>
                        <div className="col-span-2 h-full flex items-center justify-center mx-auto">
                          <img
                            src="/images/shoe1.svg"
                            className="max-w-[81px] max-h-[71px] object-cover mr-0 lg:mr-[7px] border border-[#F1C9C8]"
                          />
                          <img
                            src="/images/shoe2.svg"
                            className="max-w-[81px] max-h-[71px] object-cover border border-[#F1C9C8]"
                          />
                        </div>
                        <div className="col-span-1 h-full flex items-center justify-center mx-auto">
                          <Link
                            to="/customer-profile/order-details"
                            state={{ id: order?.id }}
                          >
                            <p className="text-[13.795px] cursor-pointer font-medium text-[#0F60FF]">
                              View Details
                            </p>
                          </Link>
                        </div>
                      </div>
                    ))}
              </div>
            </div>
          </>
        )}

        <nav
          className="mb-4 flex justify-end items-center pt-4 font-DM-sans"
          aria-label="Table navigation"
        >
          {orders.length > rowsPerPage && (
            <Pagination
              count={pages}
              page={page}
              onChange={handleChange}
              color="standard"
              shape="rounded"
              size="large"
            />
          )}
        </nav>
      </div>
    </CustomerProfileLayout>
  );
};

export default COrdersComponent;
