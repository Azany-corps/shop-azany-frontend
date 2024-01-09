// EmptyComponent.tsx

import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CustomerProfileLayout from "../../../components/CustomerProfile/NewCustomerProfileLayout";
import callAPI from "../../../api/callApi";
import { CurrencyFormatter } from "../../../helpers/helperFunction";
import { formatDate } from "../../../helpers/functions";
import Loader from "../../../components/Core/Loader";
import SuccessModal from "../../../components/Core/SuccessModal";

interface TrackOrdersProps {}

interface IProduct {
  product_name: string;
  image_url: string;
  quantity: number;
  id: number;
}

interface IOrder {
  order_code: string;
  created_at: string;
  address: string;
  order_status: string;
  products: IProduct[];
  product_id: number;
  product_order_tracking: {
    proccessed_status: string;
    processed_date: string;
    ready_for_shipping_date: string;
    ready_for_shipping_status: string;
    shipped_date: string;
    shipped_status: string;
    delivered_date: string;
    delivered_status: string;
  };
  products_details: {
    product_name: string;
    price: string;
  };
  sub_total: number;
  id: number;
  quantity: number;
}

interface Rating {
  rating: number;
  activeStar: {
    1: boolean;
    2: boolean;
    3: boolean;
    4: boolean;
    5: boolean;
  };
}

const TrackOrdersComponent: React.FC<TrackOrdersProps> = () => {
  const token = localStorage.getItem("token");

  const [order, setOrder] = useState<Array<IOrder>>([]);
  const [reviewModal, setReviewModal] = useState<boolean>(false);
  const [successModal, setSuccessModal] = useState<boolean>(false);

  const [loading, setLoading] = useState<boolean>(false);
  const location = useLocation();
  const id = location?.state?.id;

  useEffect(() => {
    const getOrderTracking = async () => {
      const headers = { Authorization: `Bearer ${token}` };
      try {
        setLoading(true);
        const response = await callAPI(
          `product/fetch_product_order_tracking/${id}`,
          "GET",
          null,
          headers
        );
        // console.log(response.data.values);
        if (typeof response?.data?.values !== "object") setOrder([]);
        else {
          setOrder(response?.data?.values);
        }
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    getOrderTracking();
  }, []);

  const navigate = useNavigate();
  const backButtonHandler = () => {
    navigate(-1);
  };

  const handleSubmitReview = async () => {
    const headers = {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    };
    const productId = order[0]?.product_id;
    let data = new FormData();

    data.append("rating", starRating.rating.toString());
    data.append("comment", ratingMessage);

    try {
      setLoading(true);
      const response = await callAPI(
        `general/products/${productId}/reviews`,
        "POST",
        data,
        headers
      );
      setSuccessModal(true);
      setReviewModal(false);
      setRatingMessage("");
      setStarRating(initialRating);
      // console.log(response.data.values);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
  console.log(order);

  const initialRating = {
    rating: 0,
    activeStar: {
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
    },
  };

  const [starRating, setStarRating] = useState<Rating>(initialRating);
  const [ratingMessage, setRatingMessage] = useState<string>("");

  const starRatingHandler = (star: number) => {
    setStarRating({
      rating: star,
      activeStar: {
        1: star === 1 ? true : false,
        2: star === 2 ? true : false,
        3: star === 3 ? true : false,
        4: star === 4 ? true : false,
        5: star === 5 ? true : false,
      },
    });
  };

  const handleOpenModal = () => {
    setSuccessModal(true);
  };

  const handleCloseModal = () => {
    setSuccessModal(false);
  };

  const handleRatingChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setRatingMessage(e.target.value);
  };
  console.log(starRating);
  return (
    <CustomerProfileLayout>
      {loading && <Loader />}
      <SuccessModal
        title="Customer details successfully updated"
        isOpen={successModal}
        onClose={handleCloseModal}
      />
      {reviewModal && (
        <div
          className="fixed top-0 left-0 right-0 z-50 w-full h-screen p-4 overflow-x-hidden overflow-y-auto md:inset-0  max-h-full flex justify-center items-center bg-[#000000] bg-opacity-70"
          onClick={() => {
            setReviewModal(false);
          }}
        >
          <div
            className="relative p-4 w-full max-w-[590px] max-h-[500px]"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="relative bg-white rounded-[26.7px] shadow p-[40px]">
              <p className="text-center font-public-sans font-semibold text-2xl pb-[18px]">
                Ratings and Review
              </p>
              <div className="flex justify-center items-center pb-[17px]">
                {[1, 2, 3, 4, 5].map((star, index) => (
                  <img
                    src={`/images/star-${
                      starRating?.rating === index + 1 ? "2" : "1"
                    }.svg`}
                    alt="rating-star"
                    className="mr-6px cursor-pointer"
                    onClick={() => {
                      starRatingHandler(index + 1);
                    }}
                  />
                ))}
              </div>
              <p className="text-center font-public-sans font-bold text-2xl pb-[23px]">
                {`${starRating?.rating}/5`}
              </p>
              <div className="mb-[29px]">
                <textarea
                  rows={7}
                  value={ratingMessage}
                  onChange={handleRatingChange}
                  className="block p-2.5 w-full text-sm focus:ring-transparent focus:border-transparent text-gray-900 bg-[#F6F6F6] rounded-[12px] border border-[#F6F6F6] "
                ></textarea>
              </div>
              <div className="flex justify-center items-center">
                <button
                  className="bg-[#D65D5B] rounded-[16px] text-white font-inter text-[22px] font-semibold cursor-pointer py-2 px-8"
                  onClick={handleSubmitReview}
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
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
              onClick={() => {
                setReviewModal(true);
              }}
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

        <ol className="hidden md:flex items-center w-full text-sm font-medium text-center text-[#D0D5DD] dsm:text-base mt-[42px] mb-[17px]">
          <li
            className={`flex md:w-full items-center ${
              order[0]?.product_order_tracking?.proccessed_status === "1"
                ? "text-[#12B76A]"
                : "text-[#D0D5DD]"
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
              <p
                className={`font-normal ${
                  order[0]?.product_order_tracking?.proccessed_status === "1"
                    ? "text-[#12B76A]"
                    : "text-[#667085]"
                } `}
              >
                {`${
                  formatDate(order[0]?.product_order_tracking?.processed_date)
                    .dayOfWeek
                }, ${
                  formatDate(order[0]?.product_order_tracking?.processed_date)
                    .dayOfMonth
                }th ${
                  formatDate(order[0]?.product_order_tracking?.processed_date)
                    .month
                }`}
              </p>
            </div>
          </li>
          <li
            className={`flex sm:w-full items-center ${
              order[0]?.product_order_tracking?.ready_for_shipping_status ===
              "1"
                ? "text-[#12B76A]"
                : "text-[#D0D5DD]"
            } after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10`}
          >
            <div className="flex flex-col justify-center items-center ">
              <span className="flex items-center justify-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 w-[150px]">
                Ready for shipping
                {/* <span className="hidden sm:inline-flex sm:ms-2">ready</span> */}
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
              <p
                className={`font-normal ${
                  order[0]?.product_order_tracking
                    ?.ready_for_shipping_status === "1"
                    ? "text-[#12B76A]"
                    : "text-[#667085]"
                } `}
              >
                {`${
                  formatDate(
                    order[0]?.product_order_tracking?.ready_for_shipping_date
                  ).dayOfWeek
                }, ${
                  formatDate(
                    order[0]?.product_order_tracking?.ready_for_shipping_date
                  ).dayOfMonth
                }th ${
                  formatDate(
                    order[0]?.product_order_tracking?.ready_for_shipping_date
                  ).month
                }`}
              </p>
            </div>
          </li>
          <li
            className={`flex md:w-full items-center ${
              order[0]?.product_order_tracking?.shipped_status === "1"
                ? "text-[#12B76A]"
                : "text-[#D0D5DD]"
            } after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10`}
          >
            <div className="flex flex-col justify-center items-center">
              <span className="flex justify-center items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 w-[100px]">
                Shipping
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
              <p
                className={`font-normal ${
                  order[0]?.product_order_tracking?.shipped_status === "1"
                    ? "text-[#12B76A]"
                    : "text-[#667085]"
                } `}
              >
                {`${
                  formatDate(order[0]?.product_order_tracking?.shipped_date)
                    .dayOfWeek
                }, ${
                  formatDate(order[0]?.product_order_tracking?.shipped_date)
                    .dayOfMonth
                }th ${
                  formatDate(order[0]?.product_order_tracking?.shipped_date)
                    .month
                }`}
              </p>
            </div>
          </li>
          <li
            className={`flex items-center ${
              order[0]?.product_order_tracking?.delivered_status === "1"
                ? "text-[#12B76A]"
                : "text-[#D0D5DD]"
            }`}
          >
            <div className="flex flex-col justify-center items-center font-public-sans ">
              <span className="flex items-center justify-center  sm:after:hidden after:mx-2 after:text-gray-200 w-[100px]">
                Delivered
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
              <p
                className={`font-normal ${
                  order[0]?.product_order_tracking?.delivered_status === "1"
                    ? "text-[#12B76A]"
                    : "text-[#667085]"
                } `}
              >
                {`Expected by ${
                  formatDate(order[0]?.product_order_tracking?.delivered_date)
                    .dayOfWeek
                }, ${
                  formatDate(order[0]?.product_order_tracking?.delivered_date)
                    .dayOfMonth
                }th ${
                  formatDate(order[0]?.product_order_tracking?.delivered_date)
                    .month
                }`}
              </p>
            </div>
          </li>
        </ol>

        {/* {order[0]?.products?.map((order: any, index: number) => ( */}
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
                    {order[0]?.products_details?.product_name || ""}
                  </td>
                  <td className="text-[#667085] pt-[14.056px] font-inter capitalize font-normal">
                    Size | 32GB | 1 TB
                  </td>
                  <td className="text-[#1D2939] pt-[17.57px] font-semibold capitalize font-inter">
                    {CurrencyFormatter(order[0]?.products_details?.price)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </CustomerProfileLayout>
  );
};

export default TrackOrdersComponent;
