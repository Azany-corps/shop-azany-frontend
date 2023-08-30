import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ReturnTop from "../../../CustomerProfile/ReturnTop";
import Footer from "../../Footer";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import TopHeader from "../../TopHeader";
import BottomHeader from "../../BottomHeader";
import Header from "../../Header";
import { Link } from "react-router-dom";
import CloseAccountModal from "../../../Core/CloseAccountModal";
import MobileHeader from "../../MobileHeader";
import MobileFooter from "../../MobileFooter";
import Slider from "../../landing/Slider";

type each = {
  image: string;
  title: string;
  subheading: string;
};

const ManufacturersProfileLayout = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  const [list, setList] = useState([]);
  const [active, setActive] = useState<each>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isHidden, setIsHidden] = useState(false);

  const navigate = useNavigate();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (window.location.pathname === "/manufacturers-profile") {
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
      image: "/images/business.png",
      title: "Business Information",
      subheading: "Manage your business information",
      path: "/business-info",
    },
    {
      image: "/images/store.png",
      title: "Edit Store",
      subheading: "Edit your virtual store",
      path: "/edit",
    },
    {
      image: "/images/myproducts.png",
      title: "My Products",
      subheading: "Manage and post your products",
      path: "/product",
    },
    {
      image: "/images/productorders.png",
      title: "Product Orders",
      subheading: "Manage customer orders",
      path: "/orders",
    },
    {
      image: "/images/Cards.png",
      title: "Payment",
      subheading: "Manage payment options",
      path: "/payment",
    },
    {
      image: "/images/Message.png",
      title: "Inbox",
      subheading: "View messages from Azany",
      path: "/messages",
    },
    {
      image: "/images/branches.png",
      title: "Branches",
      subheading: "Manage your branches",
      path: "/branches",
    },
    {
      image: "/images/Book (2).png",
      title: "Track Orders",
      subheading: "Track your orders",
      path: "/track-orders",
    },
  ];
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
      <div className="bg-white py-2 xs:hidden mb-6">
        <div className="py-2">
          <Slider />
        </div>
      </div>

      <div className="smm:py-4 bg-[#F5F5F5] py-2 smm:px-3 px-2 smm:w-[90%] w-full mx-auto">
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} display={{ xs: "none", sm: "block" }}>
            <div className="bg-white shadow-lg xs:py-2 py-6 rounded-md">
              <div className="w-[90%] mx-auto">
                <div className="py-2">
                  <div className="flex flex-col xs:flex-row xs:justify-between gap-4">
                    <div className="flex flex-row gap-4">
                      <div>
                        <img src="/images/walleticon.png" alt="wallet" />
                      </div>
                      <div className="flex flex-col justify-start">
                        <Link to="/manufacturers-profile/wallet-history">
                          <h1 className="font-bold text-[24px] text-[#1B7CFC]">
                            Wallet
                          </h1>
                          <p>Lorem ipsum dolor sit.</p>
                          <p className="text-[24px] font-medium">
                            $4,450,500.00
                          </p>
                        </Link>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 sef-end justify-between">
                      <div className="ml-auto sm:hidden lg:hidden md:hidden 2xl:hidden xl:hidden">
                        <p className="text-[#1B7CFC] underline">RP</p>
                      </div>
                      <button className="w-full xs:w-18 xs:h-10 border bg-[#E51B48] p-2 rounded-md text-white hover:bg-white hover:text-red-600 hover:border-600">
                        Fund
                      </button>
                    </div>
                  </div>

                  <div className="py-5 bg-white">
                    <div className="px-2 space-y-2">
                      {data.map((each, index) => (
                        <div
                          className={`list-itemed xs:shadow-md text-black ${
                            active === each ? "bg-[#E51B48]" : ""
                          } hover:bg-[#E51B48] hover:text-white focus:bg-[#E51B48]`}
                          key={index}
                          onClick={() => {
                            setActive(each);
                            navigate(`/manufacturers-profile${each.path}`);
                          }}
                        >
                          <div className="group flex space-x-3 items-center">
                            <img src={each.image} />
                            <div className="py-2">
                              <h2 className="font-bold ">{each.title}</h2>
                              <p className="group-hover:text-white text-gray-500">
                                {each.subheading}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                      <div className="flex flex-col gap-4">
                        <Link to="/manufacturers-profile/subscription">
                          <div className="bg-red-600 p-4 text-white rounded-lg">
                            <p>Subscription</p>
                          </div>
                        </Link>
                        <div
                          className="text-red-600 p-4 hover:bg-red-600 hover:text-white rounded-lg"
                          onClick={openModal}
                        >
                          <p>Close Account</p>
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
                    to={"/manufacturers-profile"}
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
        {isModalOpen && <CloseAccountModal onClose={closeModal} />}
      </div>
      <Footer style={"bg-[#1B7CFC] py-10 px-10 xs:hidden"} />
      <MobileFooter
        style={
          "bg-[#1B7CFC] sm:hidden lg:hidden md:hidden 2xl:hidden xl:hidden"
        }
      />
    </div>
  );
};

export default ManufacturersProfileLayout;
