import React, { useEffect, useState } from "react";
// import ReturnTop from "./ReturnTop";
import { Grid } from "@mui/material";
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


type each = {
  image: string;
  title: string;
  subheading: string;
};

const CustomerProfileLayout = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
// const [list, setList] = useState([]);
const [active, setActive] = useState<each>();
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
  const data = [
    {
      image: "/images/Security.png",
      title: "Login & Security",
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
  console.log(active);
  return (
    <div className="xs:overflow-x-hidden smm:bg-[#F5F5F5] bg-white">
      <TopHeader />
      <BottomHeader style={"bg-[#1B7CFC] py-2 xs:hidden"} />
      <Header style={"bg-[#70ADFF] xs:hidden"} />
      <MobileHeader hideScrollMenu={false} />
      <div className="flex-row gap-2 p-2 w-[90%] flex mx-auto items-center bg-[#F5F5F5] xs:hidden">
        <p>Home</p>
        <ArrowForwardIosIcon fontSize="small" />
        <p className="text-gray-700">Your Account</p>
      </div>
      <div className="bg-white py-2 xs:hidden">
        <div className="py-2">
          {/* <Slider /> */}
        </div>
      </div>
      <div className="py-4 w-[90%] mx-auto xs:w-full xs:py-0">
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} display={{ xs: "none", sm: "block" }}>
            <div className="bg-white shadow-lg rounded-md xs:py-2 py-6">
              <div className="w-[90%] mx-auto">
                <div className="py-2">
                  <div className="flex flex-col xs:flex-row xs:justify-between gap-4">
                    <div>
                      <div className="flex justify-between items-center px-5">
                        <img src="/images/Rp.png" />
                        <h1 className="font-bold text-[24px] text-[#1B7CFC]">
                          Reward Point
                        </h1>
                        <p>Wallet</p>
                      </div>
                      <div className="py-2 text-center">
                        <p className="text-center">
                          Lorem ipsum dolor sit amet consectetur.
                        </p>
                        <p className="text-[24px]">3,459.00</p>
                      </div>
                    </div>
                  </div>
                  <div className="py-5 bg-white">
                    <div className="px-2 space-y-2 ">
                      {data.map((each, index) => (
                        <div
                          className={`list-itemed xs:shadow-md text-black ${
                            active === each ? "bg-[#E51B48]" : ""
                          } hover:bg-[#E51B48] hover:text-white focus:bg-[#E51B48]`}
                          key={index}
                          onClick={() => {
                            setActive(each);
                            navigate(`/customer-profile${each.path}`);
                          }}
                        >
                          <div className="group flex space-x-3 items-center">
                            <img src={each.image} />
                            <div className="py-2">
                              <h2 className="font-bold">{each.title}</h2>
                              <p className="text-[#515151]">
                                {each.subheading}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
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
        </Grid>
      </div>
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
