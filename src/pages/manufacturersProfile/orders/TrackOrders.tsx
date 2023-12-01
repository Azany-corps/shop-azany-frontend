// EmptyComponent.tsx

import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ManufacturersProfileLayoutComp from "../../../components/General/manufacturers/profile/LayoutComp";
import { getProductOrders } from "../../../Services/order.service";
import callAPI from "../../../api/callApi";
import {
  CurrencyFormatter,
  DateFormatter,
} from "../../../helpers/helperFunction";

interface TrackOrdersProps {}

interface IProduct {
  product_name: string;
  image_url: string;
  quantity: number;
}

interface IOrder {
  order_code: string;
  created_at: string;
  address: string;
  order_status: string;
  products: IProduct[];
  sub_total: number;
  id: number;
  quantity: number;
}

const TrackOrdersComponent: React.FC<TrackOrdersProps> = () => {
  const token = localStorage.getItem("token");

  const [order, setOrder] = useState<Array<IOrder>>([]);
  const [activeStep, setActiveStep] = useState<number>(3);

  useEffect(() => {
    const getDeliveryStatus = async () => {
      const headers = { Authorization: `Bearer ${token}` };
      try {
        const response = await callAPI(
          `general/products/fetch_customer_delivery_info`,
          "GET",
          null,
          headers
        );
        console.log(response.data.values);
        return response.data.values;
      } catch (err) {
        console.log(err);
      }
    };

    getDeliveryStatus();
  }, []);

  const navigate = useNavigate();
  const backButtonHandler = () => {
    navigate(-1);
  };

  const location = useLocation();
  const id = location?.state?.id;

  useEffect(() => {
    const getOrders = async () => {
      const orders = await getProductOrders();
      const order = orders?.filter((order: any) => order.id === id);
      setOrder(order);
      setActiveStep(order[0]?.order_status);
    };
    getOrders();
  }, []);

  console.log(order);
  console.log(activeStep);

  return (
    <ManufacturersProfileLayoutComp>
      <div className="w-full">
        <div className="pt-[80px] font-public-sans">
          <div className="flex justify-between items-center w-full">
            <div
              className="flex items-center cursor-pointer"
              onClick={backButtonHandler}
            >
              <img src="/images/backArrowNew.svg" alt="icon" />
              <p className="capitalize text-xl font-semibold font-baloo ml-[11px]">
                Track orders
              </p>
            </div>
            {/* <Link to="/manufacturers-profile/track-order" state={{ id: id }}>
            <CustomButton styles="mb-[26px]" name="Track order" type="button" />
          </Link> */}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center mt-[50px]">
          <p className="text-[30px] text-[#344054] font-semibold font-poppins">
            Order ID: <span>3354654654526</span>
          </p>
          <div className="flex items-center">
            <img
              src="/images/invoiceBtn.svg"
              alt="button"
              className="mr-[25px]"
            />
            <button
              type="button"
              className="text-white bg-[#279F51] font-medium font-inter rounded-[16px] text-sm px-2 py-2.5  mb-2 item mt-auto max-w-[130px] w-[130px] cursor-pointer"
            >
              <p className="w-[114px] text-[10px] font-medium">
                Mark as complete
              </p>
            </button>
          </div>
        </div>
        <div className="mt-[29px] flex items-center">
          <p className="text-[14px] text-[#667085] font-normal">
            Order date:{" "}
            <span className="text-[#1D2939] text-base font-semibold">
              Feb 16, 2023
            </span>{" "}
            <span> | </span>
          </p>
          <div className="flex items-center ml-2">
            <img src="/images/truck-tick.svg" alt="logo" />
            <p className="text-base font-semibold text-[#12B76A] font-public-sans ml-2">
              Estimated delivery: May 16, 2022
            </p>
          </div>
        </div>

        <ol className="flex flex-col md:flex-row items-center w-full text-sm font-medium text-center text-[#D0D5DD] dsm:text-base mt-[42px] mb-[17px]">
          <li
            className={`flex md:w-full items-center ${
              activeStep >= 1 ? "text-[#12B76A]" : "text-[#D0D5DD]"
            } sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10`}
          >
            <div className="flex flex-col justify-center items-center">
              <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200">
                Order
                <span className="hidden sm:inline-flex sm:ms-2">
                  processing
                </span>
              </span>
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <p>Wed, 1 lth Jan</p>
            </div>
          </li>
          <li
            className={`flex sm:w-full items-center ${
              activeStep >= 2 ? "text-[#12B76A]" : "text-[#D0D5DD]"
            } after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10`}
          >
            <div className="flex flex-col justify-center items-center ">
              <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200">
                Shipping
                <span className="hidden sm:inline-flex sm:ms-2">ready</span>
              </span>
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <p>Wed, 1 lth Jan</p>
            </div>
          </li>
          <li
            className={`flex md:w-full items-center ${
              activeStep >= 3 ? "text-[#12B76A]" : "text-[#D0D5DD]"
            } after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10`}
          >
            <div className="flex flex-col justify-center items-center">
              <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200">
                Account
                <span className="hidden sm:inline-flex sm:ms-2 mr-2">
                  info{" "}
                </span>
              </span>
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <p>Wed, 1 lth Jan</p>
            </div>
          </li>
          <li
            className={`flex items-center ${
              activeStep == 4 ? "text-[#12B76A]" : "text-[#D0D5DD]"
            }`}
          >
            <div className="flex flex-col justify-center items-center">
              <span className="flex items-center  sm:after:hidden after:mx-2 after:text-gray-200">
                Confirmation
                <span className="hidden sm:inline-flex sm:ms-2"></span>
              </span>
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <p>Wed, 1 lth Jan</p>
            </div>
          </li>
        </ol>

        {order[0]?.products?.map((order: any, index: number) => (
          <div className="w-full">
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <tbody>
                  <tr>
                    <th className="font-medium whitespace-nowrap bg-transparent font-asap text-[#B3B7BB] text-[13.795px] pt-[13px]">
                      <div className="w-[98px] h-[98px] flex justify-center items-center">
                        <img
                          src="/images/trackOrderShoe.svg"
                          alt="shoe"
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </th>
                    <td className="text-[#344054] pt-[13px] font-public-sans capitalize text-[21.084px] font-normal">
                      {order?.product_name || ""}
                    </td>
                    <td className="text-[#667085] pt-[14.056px] font-inter capitalize font-normal">
                      Size | 32GB | 1 TB
                    </td>
                    <td className="text-[#1D2939] pt-[17.57px] font-semibold capitalize font-inter">
                      {CurrencyFormatter(order?.price)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </ManufacturersProfileLayoutComp>
  );
};

export default TrackOrdersComponent;
