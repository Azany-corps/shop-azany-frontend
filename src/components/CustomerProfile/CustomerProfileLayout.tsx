import React, { useEffect, useState } from "react";
// import ReturnTop from "./ReturnTop";
import { Grid, IconButton } from "@mui/material";
import "./index.css";
import Footer from "../General/Footer";
import { Link, useNavigate } from "react-router-dom";
import "./ndex.css";
import TopHeader from "../General/TopHeader";
import BottomHeader from "../General/BottomHeader";
import Header from "../General/Header";
import MobileHeader from "../General/MobileHeader";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MobileFooter from "../General/MobileFooter";
// import Slider from "../General/landing/Slider";
import Newsletter from "../General/landing/Newsletter";

import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import SaveAltOutlinedIcon from '@mui/icons-material/SaveAltOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';


type each = {
  image: Element;
  title: string;
  subheading: string;
};

const CustomerProfileLayout = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  // const [list, setList] = useState([]);
  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);

  // const [isModalOpen, setIsModalOpen] = useState(false);

  const [isHidden, setIsHidden] = useState(false);

  const navigate = useNavigate();

  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  useEffect(() => {
    if (window.location.pathname === "/customer-profile") {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  }, []);
  //data is here 
  //Tracking was not used in Figma v2
  const data = [
    {
      image: "",
      title: "Personal Details",
      subheading: "Edit Name, Email, Phone, 2FA",
      path: "/login",
    },
    {
      image: "/images/Order.png",
      title: "Orders",
      subheading: "Edit Name, Email, Phone, 2FA",
      path: "/order",
    },
    {
      image: "/images/Cards.png",
      title: "Cards",
      subheading: "Manage payment cards",
      path: "/cards",
    },
    {
      image: "/images/Message.png",
      title: "Inbox",
      subheading: "View messages from Azany",
      path: "/messages",
    },
    {
      image: "/images/Watchlist.png",
      title: "Watchlist",
      subheading: "View, modify your list",
      path: "/watchlist",
    },
    {
      image: "/images/Ratings.png",
      title: "Ratings & Review",
      subheading: "Edit ratings & reviews on products",
      path: "/rating",
    },
    {
      image: "/images/Track.png",
      title: "Address",
      subheading: "Edit your address",
      path: "/address",
    },
    {
      image: "/images/Book (2).png",
      title: "Track Orders",
      subheading: "Track your orders",
      path: "/track_orders",
    },
  ];

  return (
    <div className="xs:overflow-x-hidden smm:bg-[#F5F5F5] bg-white">
      {/*<TopHeader />*/}
      <BottomHeader style={"bg-[#1B7CFC] py-2 xs:hidden"} />
      <Header style={"bg-[#70ADFF] xs:hidden"} />
      <MobileHeader hideScrollMenu={false} />
      <div className="flex-row gap-2 p-2 w-[90%] flex mx-auto items-center bg-[#F5F5F5] xs:hidden">
        <p>Home</p>
        <ArrowForwardIosIcon fontSize="small" />
        <p className="text-gray-700">Your Account</p>
      </div>
      <div className="bg-white py-2 xs:hidden">
        <div className="py-2">{/* <Slider /> */}</div>
      </div>
      <div className="py-4 items-center justify-center w-[90%] mx-auto xs:w-full xs:py-0">
        <div className="flex flex-row sm:flex-col md:flex-col space-x-5">
          <div className="block xs:hidden">
            <div className="bg-white w-full shadow-lg rounded-md xs:py-2 py-3 items-center">
              <div className="w-[100%]">
                <div className="py-1">
                  <div className="flex flex-col mx-1.5">
                    <div className="px-3 py-2 mb-2 w-[324px] shadow-md rounded-md">
                      <div className="flex flex-row xs:justify-between gap-4 ">
                        <div>
                          <IconButton size="large">
                            <AccountBalanceWalletRoundedIcon
                              fontSize="large"
                              className="text-[#515151]"
                            />
                          </IconButton>
                        </div>
                        <div className="items-center">
                          <div className="flex flex-row justify-between items-start">
                            <h1 className="font-bold text-[24px] text-[#1B7CFC]">
                              Wallet
                            </h1>
                            <p>
                              <a className="text-[12px] text-[#1B7CFC]" href="">
                                RP
                              </a>
                            </p>
                          </div>
                          <div className="py-1 text-start">
                            <p className="text-start text-[12px] w-full">
                              Lorem ipsum dolor sit amet consec.
                            </p>
                            <p className="text-[24px] font-[500]">
                              $4,450,500.
                              <span className="text-[#B8B8B8]">00</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="items-center justify-center">
                        <input
                          className="bg-[#E51B48] md:w-[90%] w-[100%] h-[43px] p-[10px] font-[16px] text-white rounded-[10px] text-center cursor-pointer"
                          type="button"
                          value="Fund"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="py-5 bg-white">
                    <div className="px-0">
                      <div
                        className={ 
                          active
                            ? "xs:shadow-md text-white font-bold xs:font-mediumcursor-pointer bg-[#E51B48] rounded-[10px]"
                            : "text-black cursor-pointer hover:bg-[#E51B48] hover:text-white focus:bg-[#E51B48] hover:rounded-[10px]"
                        }
                        onClick={() => {
                          setActive(true);
                          navigate("/customer-profile/login");
                          console.log(active);
                        }}
                      >
                        <div className="group pl-7 flex space-x-5 items-center h-[60px]">
                          <AccountCircleOutlinedIcon />
                          <div className="py-3">
                            <h2 className="font-bold">Personal Details</h2>
                          </div>
                        </div>
                      </div>
                      <div
                        className={
                          active2
                            ? "xs:shadow-md text-white font-bold xs:font-mediumcursor-pointer bg-[#E51B48] rounded-[10px]"
                            : "text-black cursor-pointer hover:bg-[#E51B48] hover:text-white focus:bg-[#E51B48] hover:rounded-[10px]"
                        }
                        onClick={() => {
                          setActive2(true);
                          setActive(false);
                          navigate("/customer-profile/order");
                        }}
                      >
                        <div className="group pl-7 flex space-x-5 items-center h-[60px]">
                          <AccessTimeOutlinedIcon />
                          <div className="py-2">
                            <h2 className="font-bold">Orders</h2>
                          </div>
                        </div>
                      </div>
                      <div
                        className={
                          active3
                            ? "xs:shadow-md text-white font-bold xs:font-mediumcursor-pointer bg-[#E51B48] rounded-[10px]"
                            : "text-black cursor-pointer hover:bg-[#E51B48] hover:text-white focus:bg-[#E51B48] hover:rounded-[10px]"
                        }
                        onClick={() => {
                          setActive(false);
                          setActive2(false);
                          setActive3(false);
                          navigate("/customer-profile/cards");
                        }}
                      >
                        <div className="group pl-7 flex space-x-5 items-center h-[60px]">
                          <PaymentOutlinedIcon />
                          
                          <div className="py-3">
                            <h2 className="font-bold">Payment Methods</h2>
                          </div>
                        </div>
                      </div>
                      <div
                        className={
                          active3
                            ? "xs:shadow-md text-white font-bold xs:font-mediumcursor-pointer bg-[#E51B48] rounded-[10px]"
                            : "text-black cursor-pointer hover:bg-[#E51B48] hover:text-white focus:bg-[#E51B48] hover:rounded-[10px]"
                        }
                        onClick={() => {
                          setActive(false);
                          setActive2(false);
                          setActive3(false);
                          navigate("/customer-profile/address");
                        }}
                      >
                        <div className="group pl-7 flex space-x-5 items-center h-[60px]">
                          <RoomOutlinedIcon />
                          
                          <div className="py-3">
                            <h2 className="font-bold">Addresses</h2>
                          </div>
                        </div>
                      </div>
                      <div
                        className={
                          active3
                            ? "xs:shadow-md text-white font-bold xs:font-mediumcursor-pointer bg-[#E51B48] rounded-[10px]"
                            : "text-black cursor-pointer hover:bg-[#E51B48] hover:text-white focus:bg-[#E51B48] hover:rounded-[10px]"
                        }
                        onClick={() => {
                          setActive(false);
                          setActive2(false);
                          setActive3(false);
                          navigate("/customer-profile/watchlist");
                        }}
                      >
                        <div className="group pl-7 flex space-x-5 items-center h-[60px]">
                          <AccessTimeOutlinedIcon />
                          
                          <div className="py-3">
                            <h2 className="font-bold">Recently Viewed</h2>
                          </div>
                        </div>
                      </div>
                      <div
                        className={
                          active3
                            ? "xs:shadow-md text-white font-bold xs:font-mediumcursor-pointer bg-[#E51B48] rounded-[10px]"
                            : "text-black cursor-pointer hover:bg-[#E51B48] hover:text-white focus:bg-[#E51B48] hover:rounded-[10px]"
                        }
                        onClick={() => {
                          setActive(false);
                          setActive2(false);
                          setActive3(false);
                          navigate("/customer-profile/saved");
                        }}
                      >
                        <div className="group pl-7 flex space-x-5 items-center h-[60px]">
                          <SaveAltOutlinedIcon />
                          
                          <div className="py-3">
                            <h2 className="font-bold">Saved Items</h2>
                          </div>
                        </div>
                      </div>
                      <div
                        className={
                          active3
                            ? "xs:shadow-md text-white font-bold xs:font-mediumcursor-pointer bg-[#E51B48] rounded-[10px]"
                            : "text-black cursor-pointer hover:bg-[#E51B48] hover:text-white focus:bg-[#E51B48] hover:rounded-[10px]"
                        }
                        onClick={() => {
                          setActive(false);
                          setActive2(false);
                          setActive3(false);
                          navigate("/customer-profile/rating");
                        }}
                      >
                        <div className="group pl-7 flex space-x-5 items-center h-[60px]">
                          <ModeCommentOutlinedIcon />
                          
                          <div className="py-3">
                            <h2 className="font-bold">Reviews</h2>
                          </div>
                        </div>
                      </div>
                      <div
                        className={
                          active3
                            ? "xs:shadow-md text-white font-bold xs:font-mediumcursor-pointer bg-[#E51B48] rounded-[10px]"
                            : "text-black cursor-pointer hover:bg-[#E51B48] hover:text-white focus:bg-[#E51B48] hover:rounded-[10px]"
                        }
                        onClick={() => {
                          setActive(false);
                          setActive2(false);
                          setActive3(false);
                          navigate("/customer-profile/messages");
                        }}
                      >
                        <div className="group pl-7 flex space-x-5 items-center h-[60px]">
                          <SendOutlinedIcon/>
                          
                          <div className="py-3">
                            <h2 className="font-bold">Inbox</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white w-full shadow-lg rounded-md">
            <div className="flex flex-col bg-[#F5F5F5] smm:bg-white ">
              {!isHidden && (
                <div className="py-1.5 gap-1 items-center smm:hidden flex smm:bg-white bg-[#F5F5F5] ">
                  <Link
                    to={"/customer-profile"}
                    className="w-fit items-center flex"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.7068 5.29279C12.8943 5.48031 12.9996 5.73462 12.9996 5.99979C12.9996 6.26495 12.8943 6.51926 12.7068 6.70679L9.41379 9.99979L12.7068 13.2928C12.8889 13.4814 12.9897 13.734 12.9875 13.9962C12.9852 14.2584 12.88 14.5092 12.6946 14.6946C12.5092 14.88 12.2584 14.9852 11.9962 14.9875C11.734 14.9897 11.4814 14.8889 11.2928 14.7068L7.29279 10.7068C7.10532 10.5193 7 10.265 7 9.99979C7 9.73462 7.10532 9.48031 7.29279 9.29279L11.2928 5.29279C11.4803 5.10532 11.7346 5 11.9998 5C12.265 5 12.5193 5.10532 12.7068 5.29279Z"
                        fill="black"
                      />
                    </svg>
                    <p>Your Account</p>
                  </Link>
                </div>
              )}

              {children}
            </div>
          </div>
        </div>
        {/*<Grid container spacing={2}>
          <Grid item xs={12} md={4} display={{ xs: "none", sm: "block" }}>
            <div className="bg-white w-full shadow-lg rounded-md xs:py-2 py-3 items-center">
              <div className="w-[100%]">
                <div className="py-1">
                  <div className="flex flex-col mx-1.5">
                    <div className="px-3 py-2 mb-2 w-[324px] shadow-md rounded-md">
                      <div className="flex flex-row xs:justify-between gap-4 ">
                        <div>
                          <IconButton size="large">
                            <AccountBalanceWalletRoundedIcon
                              fontSize="large"
                              className="text-[#515151]"
                            />
                          </IconButton>
                        </div>
                        <div className="items-center">
                          <div className="flex flex-row justify-between items-start">
                            <h1 className="font-bold text-[24px] text-[#1B7CFC]">
                              Wallet
                            </h1>
                            <p>
                              <a className="text-[12px] text-[#1B7CFC]" href="">
                                RP
                              </a>
                            </p>
                          </div>
                          <div className="py-1 text-start">
                            <p className="text-start text-[12px] w-full">
                              Lorem ipsum dolor sit amet consec.
                            </p>
                            <p className="text-[24px] font-[500]">
                              $4,450,500.
                              <span className="text-[#B8B8B8]">00</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="items-center justify-center">
                        <input
                          className="bg-[#E51B48] md:w-[90%] w-[100%] h-[43px] p-[10px] font-[16px] text-white rounded-[10px] text-center"
                          type="button"
                          value="Fund"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="py-5 bg-white">
                    <div className="px-0 space-y-3">
                      <div
                        className="md:w-[90%] px-5 list-itemed xs:shadow-md text-black bg-[#E51B48]
                        hover:bg-[#E51B48] hover:text-white focus:bg-[#E51B48]"
                        onClick={() => {
                          setActive(true);
                          navigate("/customer-profile/login");
                        }}
                      >
                        <div className="group pl-7 flex space-x-5 items-center">
                          <AccountCircleOutlinedIcon />
                          <div className="py-3">
                            <h2 className="font-bold">Personal Details</h2>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`px-5 list-itemed xs:shadow-md text-black 
                        hover:bg-[#E51B48] hover:text-white focus:bg-[#E51B48]
                         ${active==true ? "bg-[#E51B48]" 
                        : "bg-[#43e51b]"}`}
                        onClick={() => {
                          setActive(!active);
                          navigate("/customer-profile/order");
                        }}
                      >
                        <div className="group pl-7 flex space-x-5 items-center">
                          <AccessTimeOutlinedIcon />
                          <div className="py-2">
                            <h2 className="font-bold">Orders</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={8}>
            <div className="flex flex-col bg-[#F5F5F5] smm:bg-white ">
              {!isHidden && (
                <div className="py-1.5 gap-1 items-center smm:hidden flex smm:bg-white bg-[#F5F5F5] ">
                  <Link
                    to={"/customer-profile"}
                    className="w-fit items-center flex"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.7068 5.29279C12.8943 5.48031 12.9996 5.73462 12.9996 5.99979C12.9996 6.26495 12.8943 6.51926 12.7068 6.70679L9.41379 9.99979L12.7068 13.2928C12.8889 13.4814 12.9897 13.734 12.9875 13.9962C12.9852 14.2584 12.88 14.5092 12.6946 14.6946C12.5092 14.88 12.2584 14.9852 11.9962 14.9875C11.734 14.9897 11.4814 14.8889 11.2928 14.7068L7.29279 10.7068C7.10532 10.5193 7 10.265 7 9.99979C7 9.73462 7.10532 9.48031 7.29279 9.29279L11.2928 5.29279C11.4803 5.10532 11.7346 5 11.9998 5C12.265 5 12.5193 5.10532 12.7068 5.29279Z"
                        fill="black"
                      />
                    </svg>
                    <p>Your Account</p>
                  </Link>
                </div>
              )}

              {children}
            </div>
          </Grid>
        </Grid>*/}
      </div>
      <Newsletter style={"bg-[#70ADFF] py-5 px-10 xs:hidden"} />
      <Footer style={"bg-[#1B7CFC] py-10 px-10 xs:hidden"} />
      <MobileFooter
        style={
          "bg-[#1B7CFC] sm:hidden lg:hidden md:hidden 2xl:hidden xl:hidden"
        }
      />{" "}
    </div>
  );
};

export default CustomerProfileLayout;
