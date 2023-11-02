import React, { useEffect, useState } from "react";
import { Grid, Radio } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PopUpModal from "../../components/Core/PopUpModal";
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { Interface } from "readline";
import callAPI from "../../api/callApi";
import { Token } from "@mui/icons-material";
import { toast } from "react-toastify";
import ExpiryInput from "../../components/Core/ExpiryDate";
import OrderSummary from "../../components/General/cart/OrderSummary";

interface CardDetails {
  card_type: string;
  card_number: string;
  exp_month: string;
  exp_year: string;
  cvv_code: string;
  name_on_card: string;
}

const PaymentInfo = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const headers = { Authorization: `Bearer ${token}` };
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("wallet");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tPrice, setTPrice] = useState(0)
  const [cardDetails, setCardDetails] = useState<CardDetails>({
    card_number: "",
    card_type: "Master",
    cvv_code: "",
    exp_month: "",
    exp_year: "",
    name_on_card: "",
  });
  const [cardSelected, setCardSelected] = React.useState(false);
  const [expiryDate, setExpiryDate] = useState<any>("");
  const [value, setValue] = useState<string>("");
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setExpiryDate(event.target.value);
    const input = event.target.value;
    const [month, year] = input.split("/");
    setCardDetails({ ...cardDetails, exp_month: month, exp_year: year });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPaymentMethod(event.target.value);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  let customerInfo: any = sessionStorage.getItem("customerInfo");
  console.log(customerInfo);
  if (customerInfo !== null || customerInfo !== undefined) {
    customerInfo = JSON.parse(customerInfo);
  } else {
    navigate("/checkout");
  }

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const currentPath = useLocation().pathname;

  const handleDateChange = (event: any) => {
    const selectedDate: any = new Date(event.target.value);
    const formattedDate = selectedDate.toLocaleDateString("en-US", {
      month: "2-digit",
      year: "numeric",
    });
    setExpiryDate(formattedDate);
    console.log(formattedDate);
  };

  const handlePaymentWithPayPal = async () => {

    console.log(cardDetails);
    try {
      const response = await callAPI(
        `transaction/cart_checkout_with_paypal_card_payment?card_type=${cardDetails.card_type}&card_number=${cardDetails.card_number}&exp_month=${cardDetails.exp_month}&exp_year=${cardDetails.exp_year}&cvv_code=${cardDetails.cvv_code}&name_on_card=${cardDetails.name_on_card}`,
        "POST",
        null,
        headers
      );
      toast.success(response?.message, {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      return response;
    } catch (err: any) {
      console.log(err);
      toast.error(err?.message, {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const initiatePayment = async (e: any) => {
    try {
      console.log(headers)
      const response = await callAPI(
        `transaction/pay_with_paystack/${customerInfo.email}/${tPrice}/${customerInfo.firstName}/${customerInfo.lastName}`,
        "GET",
        null,
        headers
      );
      // sessionStorage.removeItem("customerInfo");
      console.log(response?.data?.values?.data.authorization_url);
      // const payResponse = await callAPI(
      //   response?.data?.values?.data.authorization_url,
      //   "GET",
      //   null,
      //   null,
      //   true
      // )
      // console.log(payResponse)
      window.location.replace(response?.data?.values?.data.authorization_url)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (selectedPaymentMethod === "card") {
      setCardSelected(true);
    } else {
      setCardSelected(false);
    }
    return;
  }, [selectedPaymentMethod]);

  useEffect(() => {
    if (selectedPaymentMethod !== "paypal") {
      closeModal();
    } else {
      openModal();
    }
  }, [selectedPaymentMethod]);

  return (
    <div className="bg-[#F5F5F5] w-full overflow-hidden">
      <PopUpModal
        isOpen={isModalOpen && selectedPaymentMethod === "paypal"}
        onClose={() => {
          closeModal();
          setSelectedPaymentMethod("wallet");
        }}
      >
        <div className="flex gap-4 flex-col p-6 text-left">
          <div className="header border-b border-[#515151] text-left font-semibold text-xl">
            <img src="/images/Paypal.png" alt="" />
          </div>
          <div className="border-b flex border-[#515151] text-left font-semibold text-xl">
            <Accordion allowZeroExpanded={true} className="w-full">
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span className="text-[#001C64] text-sm font-bold">PayPal Express</span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <small className="font-light text-gray-500 text-sm">Pay with your PayPal account</small>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span className="text-[#001C64] text-sm font-bold">Pay with a debit or credit card</span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <span className="text-[#001C64] text-sm flex flex-col gap-y-4">
                    <div className="w-full flex flex-col items-start relative">
                      <label className="font-normal text-xs text-gray-600">CARD NUMBER</label>
                      <input
                        placeholder="0000 0000 0000 0000"
                        className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
                        value={cardDetails.card_number}
                        onChange={(e) =>
                          setCardDetails({
                            ...cardDetails,
                            card_number: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="flex justify-between gap-4">
                      <div className="w-full relative flex flex-col items-start">
                        <label className="font-normal text-xs text-gray-600">NAME ON CARD</label>
                        <input
                          placeholder=""
                          className="px-4 py-3 w-full rounded-md border border-gray-300 bg-[#F5F5F5]"
                          value={cardDetails.name_on_card}
                          onChange={(e) =>
                            setCardDetails({
                              ...cardDetails,
                              name_on_card: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="w-full  flex flex-col relative items-start">
                        <label className="font-normal text-xs text-gray-600">EXPIRY DATE</label>
                        <ExpiryInput
                          className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
                          id="expiryDate"
                          delimiter="/"
                          value={expiryDate}
                          handleInputChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e)}
                          placeholder="mm/yyyy"
                        />
                      </div>
                      <div className="w-full  flex flex-col relative items-start">
                        <label className="font-normal text-xs text-gray-600">CVV CODE</label>
                        <input
                          placeholder=""
                          className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
                          value={cardDetails.cvv_code}
                          onChange={(e) =>
                            setCardDetails({
                              ...cardDetails,
                              cvv_code: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </span>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <button className="bg-[#E51B48] absolute bottom-6 right-6 text-white py-2 rounded-md px-10" onClick={handlePaymentWithPayPal}>
          Proceed
        </button>
      </PopUpModal>
      <div className="bg-[#1B7CFC] w-full h-[120px] p-4 flex items-center gap-x-10">
        <Link to="/">
          <div className="md:w-30 w-24">
            <img src="/images/azanylogofinal.png" className="md:w-30 w-24" alt="azanylogo" />
          </div>
        </Link>

        <div className="flex flex-row flex-1  gap-4 items-center text-center px-20">
          <div className="flex flex-col items-center justify-center">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_76_1933)">
                <rect width="40" height="40" rx="20" fill="white" />
                <path
                  d="M20 3.33398C10.8 3.33398 3.33337 10.8007 3.33337 20.0007C3.33337 29.2007 10.8 36.6673 20 36.6673C29.2 36.6673 36.6667 29.2007 36.6667 20.0007C36.6667 10.8007 29.2 3.33398 20 3.33398ZM11.7834 30.4673C12.5 28.9673 16.8667 27.5007 20 27.5007C23.1334 27.5007 27.5167 28.9673 28.2167 30.4673C25.95 32.2673 23.1 33.334 20 33.334C16.9 33.334 14.05 32.2673 11.7834 30.4673ZM30.6 28.0507C28.2167 25.1507 22.4334 24.1673 20 24.1673C17.5667 24.1673 11.7834 25.1507 9.40004 28.0507C7.70004 25.8173 6.66671 23.034 6.66671 20.0007C6.66671 12.6507 12.65 6.66732 20 6.66732C27.35 6.66732 33.3334 12.6507 33.3334 20.0007C33.3334 23.034 32.3 25.8173 30.6 28.0507ZM20 10.0007C16.7667 10.0007 14.1667 12.6007 14.1667 15.834C14.1667 19.0673 16.7667 21.6673 20 21.6673C23.2334 21.6673 25.8334 19.0673 25.8334 15.834C25.8334 12.6007 23.2334 10.0007 20 10.0007ZM20 18.334C18.6167 18.334 17.5 17.2173 17.5 15.834C17.5 14.4507 18.6167 13.334 20 13.334C21.3834 13.334 22.5 14.4507 22.5 15.834C22.5 17.2173 21.3834 18.334 20 18.334Z"
                  fill="#1B7CFC"
                />
              </g>
              <defs>
                <clipPath id="clip0_76_1933">
                  <rect width="40" height="40" rx="20" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <p className="text-white text-sm whitespace-pre-wrap">Customer Information</p>
          </div>
          <hr className=" w-full" />
          <div className="flex flex-col items-center justify-center">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="white" className="bg-white p-1 rounded-full" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_76_1939)">
                <path
                  d="M33.3333 13.3327H28.3333V6.66602H4.99996C3.16663 6.66602 1.66663 8.16602 1.66663 9.99935V28.3327H4.99996C4.99996 31.0993 7.23329 33.3327 9.99996 33.3327C12.7666 33.3327 15 31.0993 15 28.3327H25C25 31.0993 27.2333 33.3327 30 33.3327C32.7666 33.3327 35 31.0993 35 28.3327H38.3333V19.9993L33.3333 13.3327ZM32.5 15.8327L35.7666 19.9993H28.3333V15.8327H32.5ZM9.99996 29.9993C9.08329 29.9993 8.33329 29.2493 8.33329 28.3327C8.33329 27.416 9.08329 26.666 9.99996 26.666C10.9166 26.666 11.6666 27.416 11.6666 28.3327C11.6666 29.2493 10.9166 29.9993 9.99996 29.9993ZM13.7 24.9993C12.7833 23.9827 11.4833 23.3327 9.99996 23.3327C8.51663 23.3327 7.21663 23.9827 6.29996 24.9993H4.99996V9.99935H25V24.9993H13.7ZM30 29.9993C29.0833 29.9993 28.3333 29.2493 28.3333 28.3327C28.3333 27.416 29.0833 26.666 30 26.666C30.9166 26.666 31.6666 27.416 31.6666 28.3327C31.6666 29.2493 30.9166 29.9993 30 29.9993Z"
                  fill="#1B7CFC"
                />
              </g>
              <defs>
                <clipPath id="clip0_76_1939">
                  <rect width="40" height="40" fill="#1B7CFC" />
                </clipPath>
              </defs>
            </svg>

            <p className="text-white text-sm whitespace-pre-wrap">Shipment Information</p>
          </div>

          <hr className={`w-full`} />

          <div className="flex flex-col items-center justify-center">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="20" fill="white" />
              <path
                d="M9.6 7C8.1635 7 7 8.1635 7 9.6V25.2C7 26.6365 8.1635 27.8 9.6 27.8H25.2C26.6365 27.8 27.8 26.6365 27.8 25.2V9.6C27.8 8.1635 26.6365 7 25.2 7H9.6ZM9.6 9.6H25.2V25.2H9.6V9.6ZM30.4 12.2V30.4H12.2V33H30.4C31.8365 33 33 31.8365 33 30.4V12.2H30.4ZM21.6809 12.5809L16.1 18.1617L13.1191 15.1809L11.2809 17.0191L16.1 21.8383L23.5191 14.4191L21.6809 12.5809Z"
                fill="#1B7CFC"
              />
            </svg>

            <p className="text-white text-sm whitespace-pre-wrap ">Confirmation</p>
          </div>
          <hr className="dashed-2 w-full" />
          <div className="flex flex-col items-center gap-2 justify-center">
            <img className="w-8 h-8" src="/images/payment.png" alt="" />
            <p className="text-white text-sm whitespace-pre-wrap ">Payment Selection</p>
          </div>
        </div>
      </div>
      <div className="py-4 w-[90%] mx-auto">
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <div className="mdm:p-8 smm:p-6 p-4 bg-white shadow-md h-full rounded-md gap-6 flex-col flex">
              <div className="flex justify-between items-center ">
                <p className="font-semibold text-[24px]">Payment Selection</p>

                <div className="flex flex-row" onClick={() => setSelectedPaymentMethod("wallet")}>
                  <Radio checked={selectedPaymentMethod === "wallet"} onChange={handleChange} value="wallet" color="error" name="radio-buttons" />
                  <div>
                    <p className="font-medium text-[16px] text-[#1B7CFC]">Pay with wallet</p>
                    <p className="font-normal text-[14px] text-[#000000]">$4,450,500.00</p>
                  </div>
                </div>
              </div>

              <div className="gap-8 flex-col flex">
                {!cardSelected && (
                  <div className="bg-white shadow-md rounded-md py-6 px-6 flex flex-col smm:gap-8 mdm:gap-6 gap-4">
                    <div className="flex flex-1 flex-col smm:flex-row gap-2 items-center w-full">
                      <div className="gap-1 cursor-pointer flex flex-row w-full flex-1" onClick={() => setSelectedPaymentMethod("paypal")}>
                        <div>
                          <Radio onChange={handleChange} checked={selectedPaymentMethod === "paypal"} color="error" value="paypal" />
                        </div>
                        <div className="flex gap-2 flex-wrap p-3 w-full  items-center border border-[#C1C1C1] rounded-xl">
                          <img src="/images/Paypal.png" className="w-[100px] h-8 object-cover" alt="" />
                          <div className="flex flex-col justify-center gap-1">
                            <p className="text-black text-sm">Pay with PayPal</p>
                            <p className="text-[#515151] text-xs">All countries except Africa</p>
                          </div>
                        </div>
                      </div>
                      <div className="gap-1 cursor-pointer flex flex-row w-full flex-1" onClick={() => setSelectedPaymentMethod("paystack")}>
                        <div>
                          <Radio
                            onChange={handleChange}
                            checked={selectedPaymentMethod === "paystack"}
                            // value={}
                            color="error"
                            value="paystack"
                          />
                        </div>
                        <div className="flex gap-2 flex-wrap p-3  w-full items-center border border-[#C1C1C1] rounded-xl">
                          <img src="/images/Paystack.png" className="w-[100px] h-8 object-cover" alt="" />
                          <div className="flex flex-col justify-center gap-1">
                            <p className="text-black text-sm">Pay with Paystack</p>
                            <p className="text-[#515151] text-xs">All African countries</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col smm:flex-row gap-2 items-center">
                      <div className="gap-1 cursor-pointer flex flex-row w-full flex-1" onClick={() => setSelectedPaymentMethod("stripe")}>
                        <div>
                          <Radio onChange={handleChange} color="error" checked={selectedPaymentMethod === "stripe"} value="stripe" />
                        </div>
                        <div className="flex gap-2 flex-wrap p-3 w-full items-center border border-[#C1C1C1] rounded-xl">
                          <img src="/images/Stripe.png" className="w-[100px] h-8 object-cover" alt="" />
                          <div className="flex flex-col justify-center gap-1">
                            <p className="text-black text-sm">Pay with Stripe</p>
                            <p className="text-[#515151] text-xs">All countries</p>
                          </div>
                        </div>
                      </div>
                      <div className="gap-1 cursor-pointer flex flex-row w-full flex-1" onClick={() => setSelectedPaymentMethod("card")}>
                        <div>
                          <Radio onChange={handleChange} color="error" checked={selectedPaymentMethod === "card"} value="card" />
                        </div>
                        <div className="flex gap-2 flex-wrap p-3 w-full items-center border border-[#C1C1C1] rounded-xl">
                          <img src="/images/cardspayment.png" className="w-[100px] h-8 object-contain" alt="" />
                          <div className="flex flex-col justify-center gap-1">
                            <p className="text-black text-sm">Pay with your card</p>
                            <p className="text-[#515151] text-xs">Use your saved card</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {cardSelected && (
                  <div className="bg-white shadow-md rounded-md py-6 px-6 flex flex-col gap-8">
                    <div>
                      <div className="flex justify-between font-bold">
                        <div className="flex items-center gap-2 cursor-pointer text-[#515151]" onClick={() => setSelectedPaymentMethod("")}>
                          <ArrowBackIcon />
                          Back to Shipment Information
                        </div>
                        <img src="/images/cardspayment.png" className="object-contain" alt="" />
                      </div>
                      <div className="flex flex-col gap-6">
                        <div className="card">
                          <div className="flex gap-2 items-center">
                            <Radio onChange={handleChange} color="error" checked={selectedPaymentMethod === "card"} value="card" />
                            <p>Saved Credit Card</p>
                          </div>
                          <small className="text-[#515151]">
                            Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.
                          </small>
                        </div>

                        <div className="w-full flex flex-col items-start relative">
                          <label className="font-normal text-xs text-gray-600">CARD NUMBER</label>
                          <input placeholder="0000 0000 0000 0000" className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]" />
                        </div>
                        <div className="flex justify-between gap-4 flex-wrap smm:flex-nowrap">
                          <div className="w-full relative flex flex-col items-start">
                            <label className="font-normal text-xs text-gray-600">NAME ON CARD</label>
                            <input placeholder="" className="px-4 py-3 w-full rounded-md border border-gray-300 bg-[#F5F5F5]" />
                          </div>
                          <div className="w-full  flex flex-col relative items-start">
                            <label className="font-normal text-sm text-gray-600">EXPIRY DATE</label>
                            <input placeholder="" className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]" />
                          </div>
                          <div className="w-full  flex flex-col relative items-start">
                            <label className="font-normal text-xs text-gray-600">CVV CODE</label>
                            <input placeholder="" className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div className="bg-white shadow-md rounded-md py-6 px-4 gap-4 flex flex-col">
                  <div className="gap-2 flex flex-row items-center " onClick={() => setSelectedPaymentMethod("avc")}>
                    <div>
                      <Radio onChange={handleChange} color="error" checked={selectedPaymentMethod === "avc"} value="avc" />
                    </div>
                    <div>
                      <p className="font-medium text-[16px]">Azany Card (AVC) </p>
                    </div>
                  </div>
                  <div>
                    <div className="w-full flex flex-col items-start relative">
                      <label className="font-normal text-xs text-gray-600">CARD NUMBER</label>
                      <input placeholder="0000 0000 0000 0000" className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between ">
                <div className="flex items-center gap-2 text-sm smm:text-base text-[#515151]">
                  <ArrowBackIcon />
                  Back to Shipment Information
                </div>
                {/* <Link to="/checkout/confirmation"> */}
                <button onClick={initiatePayment} className="bg-[#E51B48] text-sm smm:text-base text-white py-2 rounded-md smm:px-10 px-7">Proceed</button>
                {/* </Link> */}
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <OrderSummary setTPrice={setTPrice} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default PaymentInfo;
