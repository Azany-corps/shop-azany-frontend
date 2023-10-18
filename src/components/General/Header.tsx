import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import { CategoryModal } from "../Core/CategoryModal";
import { Avatar } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

interface HeaderProps {
  style: string;
}

interface Menu {
  label: string;
  link: string;
}

const Header = ({ style }: HeaderProps) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleMenuClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleItemClick = (item: string) => {
    setSelectedItem(item === selectedItem ? "" : item);
  };

  const isItemSelected = (item: string) => {
    return item === selectedItem ? "font-bold" : "";
  };
  let otherMenu = [
    {
      label: "Manufacturers",
      link: "/manufacturers",
    },
    {
      label: "Merchants",
      link: "/merchants",
    },
    {
      label: "Farmers",
      link: "/farmers",
    },
    // {
    //   label: "Product orders",
    //   link: "/manufacturers-profile/orders",
    // },
    // {
    //   label: "Customer Service",
    //   link: "/Customer Service",
    // },
    // {
    //   label: "Payments",
    //   link: "/manufacturers-profile/payment",
    // },
  ];

  const customerMenu = [
    //{
    //  label: "Manufacturers",
    //  link: "/manufacturers",
    //},
    //{
    //  label: "Merchants",
    //  link: "/merchants",
    //},
    //{
    //  label: "Farmers",
    //  link: "/farmers",
    //},
    {
      label: "Buy Again",
      link: "/buy-again",
    },
    {
      label: "Customer Service",
      link: "/Customer Service",
    },
    {
      label: "Cards",
      link: "/Cards",
    },
  ];
  const [currentMenu, setCurrentMenu] = useState<Menu[]>([]);

  useEffect(() => {
    const accountType = localStorage.getItem("account_type");
    console.log(accountType);
    if (accountType === "Customer") {
      setCurrentMenu(customerMenu);
    } else {
      setCurrentMenu(otherMenu);
    }
    return;
  }, []);

  return (
    <>
      <div className={`${style}`}>
        <div className="w-[90%] flex mx-auto justify-between items-center">
          <div className="flex gap-4 items-center md:flex-[100%] flex-[50%] text-white font-medium md:font-normal md:text-[14px]">
            <div className="justify-center items-center flex xs:hidden bg-[#E51B48] -ml-20 pl-[4.5rem] pr-3 rounded-tr-lg">
              <IconButton onClick={handleOpenModal} className="xs:hidden">
                <MenuIcon className="text-white" />
              </IconButton>
              <p className="general-font">All</p>
            </div>
            <CategoryModal show={showModal} onClose={handleCloseModal} />
            {/* <div
              className={`cursor-pointer xs:hidden ${isItemSelected("All")}`}
            >
              <h2 onClick={() => handleItemClick("All")}>All</h2>
            </div>
            <div
              className={`cursor-pointer ${isItemSelected("Manufacturers")}`}
            >
              <Link to="/manufacturers">
                <h2 onClick={() => handleItemClick("Manufacturers")}>
                  Manufacturers
                </h2>
              </Link>
            </div>
            <div className={`cursor-pointer ${isItemSelected("Merchants")}`}>
              <Link to="/merchants">
                <h2 onClick={() => handleItemClick("Merchants")}>Merchants</h2>
              </Link>
            </div> */}
            <div>
              <div
                className="gap-2 flex-row flex items-center cursor-pointer"
                onClick={handleMenuClick}>
                {isModalOpen && (
                  <div className="absolute top-40 w-[250px] h-600 right-30 mr-2 p-4 z-20 rounded-md bg-white shadow">
                    <div className="flex flex-col gap-2 text-black">
                      <div className="flex flex-col gap-4">
                        <Link to="/manufacturers-profile/">
                          <h2 className="text-md hover:text-[#1B7CFC]">
                            Manufacturers
                          </h2>
                        </Link>
                        <Link to="/manufacturers-profile/">
                          <h2 className="text-md hover:text-[#1B7CFC]">
                            Merchants
                          </h2>
                        </Link>
                        <Link to="/manufacturers-profile/">
                          <h2 className="text-md hover:text-[#1B7CFC]">
                            Farmers
                          </h2>
                        </Link>
                        
                      </div>
                    </div>
                  </div>
                )}
                <div className="flex flex-row justify-center items-center">
                  <h2>Sell on Azany</h2>
                  <IconButton>
                    <ArrowDropDownIcon className="text-white" />
                  </IconButton>
                </div>
              </div>
            </div>
            {currentMenu &&
              currentMenu.map((menuItem) => (
                <Link to={`${menuItem.link}`} key={menuItem.label}>
                  <div
                    className={`cursor-pointer ${isItemSelected(
                      `${menuItem.label}`
                    )}`}
                  >
                    <h2 onClick={() => handleItemClick(menuItem.label)}>
                      {menuItem.label}
                    </h2>
                  </div>
                </Link>
              ))}
            {/* <div className={`cursor-pointer ${isItemSelected("Buy Again")}`}>
              <h2 onClick={() => handleItemClick("Buy Again")}>Buy Again</h2>
            </div>
            <div
              className={`cursor-pointer xs:hidden ${isItemSelected(
                "Customer Service"
              )}`}
            >
              <h2 onClick={() => handleItemClick("Customer Service")}>
                Customer Service
              </h2>
            </div>
            <div
              className={`cursor-pointer xs:hidden ${isItemSelected("Cards")}`}
            >
              <h2 onClick={() => handleItemClick("Cards")}>Cards</h2>
            </div> */}
          </div>
          <div className="flex-[30%] xs:hidden md:text-[14px]">
            <h2
              className={`text-white font-medium md:font-normal cursor-pointer text-right ${isItemSelected(
                "Retailers"
              )}`}
            >
              Retailers
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
