import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import { CategoryModal } from "../Core/CategoryModal";

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
    //   label: "Buy Again",
    //   link: "/buy-again",
    // },
    // {
    //   label: "Customer Service",
    //   link: "/Customer Service",
    // },
    // {
    //   label: "Cards",
    //   link: "/Cards",
    // },
  ];
  const [currentMenu, setCurrentMenu] = useState<Menu[]>([]);

  useEffect(() => {
    const accountType = localStorage.getItem("account_type");
    console.log(accountType);
    if (accountType === "Customer"){
      setCurrentMenu(customerMenu);
    }else{
      setCurrentMenu(otherMenu);
    }
    return;
  }, []);

  return (
    <>
      <div className={`${style}`}>
        <div className="w-[90%] flex mx-auto justify-between items-center">
          <div className="flex gap-4 items-center md:flex-[100%] flex-[50%] text-white font-medium md:font-normal md:text-[14px]">
            <div className="xs:hidden">
              <IconButton onClick={handleOpenModal} className="xs:hidden">
                <MenuIcon className="text-white" />
              </IconButton>
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
