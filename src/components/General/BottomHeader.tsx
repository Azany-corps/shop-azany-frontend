/* eslint-disable */
import { useEffect, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import EditLocationIcon from "@mui/icons-material/EditLocation";
import { Avatar } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useAuthToken from "../../hooks/useAuthToken";
import { CategoryModal } from "../Core/CategoryModal";
import { IconButton } from "@mui/material";
import { Icon } from "@iconify/react";

interface BottomProps {
  style: string;
  isFarmer?: boolean;
}

const BottomHeader = ({ style, isFarmer }: BottomProps) => {
  const [authToken, saveAuthToken, deleteAuthToken, checkAuthToken] = useAuthToken();
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const username = localStorage.getItem("name");
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleMenuClick = () => {
    setIsModalOpen(!isModalOpen);
  };
  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  useEffect(() => {
    checkAuthToken();
  }, []);

  const handleLogout = () => {
    navigate("/auth");
    localStorage.removeItem("name");
    console.log("logged out");
    deleteAuthToken("");
  };

  return (
    <>
      <div className={`${style}`}>
        <div className="w-[90%] mx-auto flex justify-between items-center space-x-10">
          <CategoryModal show={showModal} onClose={handleCloseModal} />
          <Link to="/">
            <div className="md:w-30 w-24 bg-white p-2">
              <img src="/images/azanylogofinal.png" className="md:w-30 w-24" alt="azanylogo" />
            </div>
          </Link>
          <div className="flex justify-start items-center space-x-5 md:space-x-0 flex-[80%] ">
            <div className="flex flex-col items-center">
              <p className="text-white font-light">Shopping from</p>
              <div className="flex items-center space-x-2">
                <IconButton>
                  <EditLocationIcon className="text-white" />
                </IconButton>
                <p className="font-semibold text-white ">Kenya</p>
                <IconButton>
                  <ArrowDropDownIcon className="text-white" />
                </IconButton>
              </div>
            </div>
            <div className="flex items-center ">
              <input className="py-3 px-8 w-[full] rounded-l-[10px] outline-none" placeholder="Search Azany" />
              <div className="bg-white py-[4px] px-6 rounded-r-[10px] ">
                <IconButton>
                  <SearchIcon className="text-[#E51B48]" />
                </IconButton>
              </div>
              <div className="flex items-center space-x-0 md:hidden">
                <p className="text-white px-5">EN</p>
                <img src="/images/usa.png" />
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center gap-4 md:gap-2 flex-[40%]">
            {
              /*user &&*/ authToken ? ( // Render the user's name if they are logged in
                <>
                  <div className="gap-2 flex-row flex items-center cursor-pointer" onClick={handleMenuClick}>
                    {isModalOpen && (
                      <div className="absolute top-40 w-[300px] h-600 right-30 mr-2 p-4 z-20 rounded-md bg-white shadow">
                        <div className="flex flex-col gap-2 text-black">
                          <div className="flex flex-row gap-1 items-center">
                            <Icon icon="mdi:user-circle" width={32} height={32} />
                            <h2 className="text-bold text-lg">Hello {username}</h2>
                          </div>
                          <div className="border-t border-gray-400"></div>
                          <div className="flex flex-col gap-4">
                            <Link to="/manufacturers-profile/">
                              <h2 className="text-md hover:text-[#1B7CFC]">Account</h2>
                            </Link>
                            <h2 className="text-md hover:text-[#1B7CFC]">Orders</h2>
                            <h2 className="text-md hover:text-[#1B7CFC]">Watchlist</h2>
                            <h2 className="text-md hover:text-[#1B7CFC]">Recently Viewed</h2>
                            <h2 className="text-md hover:text-[#1B7CFC]">Cards</h2>
                            <h2 className="text-md hover:text-red-600 text-red-400 cursor-pointer" onClick={handleLogout}>
                              Sign Out
                            </h2>
                          </div>
                        </div>
                      </div>
                    )}
                    <IconButton>
                      <Avatar alt="profile" />
                    </IconButton>

                    <div className="flex flex-col gap-0">
                      <h2 className="text-white text-md">Hi {username}</h2>
                      <h2 className="text-white font-medium text-xl">Account</h2>
                    </div>
                    <div>
                      <IconButton>
                        <ArrowDropDownIcon className="text-white" />
                      </IconButton>
                    </div>
                  </div>

                  <div>
                    <button
                      className="border-[#E51B48] text-[#E51B48] hover:bg-[#E51B48] hover:text-white hover:border-white bg-white rounded-[10px] border py-2 px-5"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <Link to="/auth/">
                    <div>
                      <h2 className="text-xl text-white ">Login</h2>
                    </div>
                  </Link>
                  <Link to="/auth/signup">
                    <div className="md:hidden">
                      <button className="border-[#E51B48] text-[#E51B48] bg-white rounded-[10px] border py-2 px-5 hover:bg-red-600 hover:text-white">
                        Get Started
                      </button>
                    </div>
                  </Link>
                </>
              )
            }
            <div className="flex flex-row gap-4 cursor-pointer">
              <Link to={isFarmer ? "/farmers/products/cart" : "/products/cart"}>
                <div>
                  <IconButton>
                    <ShoppingCartIcon className="text-white" />
                  </IconButton>
                </div>

                <div className="md:hidden">
                  <h2 className="text-white">Cart</h2>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomHeader;
