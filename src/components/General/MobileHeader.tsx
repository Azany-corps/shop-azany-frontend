import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import useAuthToken from "../../hooks/useAuthToken";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import { CategoryModal } from "../Core/CategoryModal";
import { Icon } from "@iconify/react";
import { MobileModal } from "../Core/MobileModal";
import Logo from '../../assets/Logo.svg'

interface Props {
  isFarmer?: boolean;
  style?: string;
  hideScrollMenu?: Boolean;
}
interface Menu {
  label: string;
  link: string;
}

const MobileHeader = ({ isFarmer, style, hideScrollMenu }: Props) => {
  console.log(style);
  const [authToken, saveAuthToken, deleteAuthToken, checkAuthToken] = useAuthToken();
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const [showMobileModal, setShowMobileModal] = useState(false);

  const handleOpenMobileModal = () => {
    setShowMobileModal(true);
  };

  const handleCloseMobileModal = () => {
    setShowMobileModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleItemClick = (item: string) => {
    setSelectedItem(item === selectedItem ? "" : item);
  };

  const [isNotScrollabe, setIsNotScrollabe] = useState(hideScrollMenu);
  const isItemSelected = (item: string) => {
    return item === selectedItem ? "font-bold" : "";
  };
  const username = localStorage.getItem("name");
  const navigate = useNavigate();
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
    {
      label: "Product orders",
      link: "/manufacturers-profile/orders",
    },
    {
      label: "Customer Service",
      link: "/Customer Service",
    },
    {
      label: "Payments",
      link: "/manufacturers-profile/payment",
    },
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

  useEffect(() => {
    const currentPath = window.location.pathname;
    console.log(currentPath.includes("manufacturer"));
    if (currentPath.includes("manufacturers-profile") || currentPath.includes("customer-profile")) {
      setIsNotScrollabe(true);
    }
    return;
  }, []);

  useEffect(() => {
    // check if currentpage is home and redirect to login page if not logged in
    checkAuthToken();
  }, []);

  const handleLogout = () => {
    navigate("/login");
    localStorage.removeItem("name");
    console.log("logged out");
    deleteAuthToken("");
  };
  return (
    <div className={`${style ? style : " bg-[#221E22]"} md:hidden flex flex-col w-screen gap-4`}>
      <div className="flex justify-between items-center mx-2 mt-4">
        <div>
          <IconButton onClick={handleOpenModal} className="">
            <MenuIcon className="text-white" />
          </IconButton>
        </div>
        <CategoryModal show={showModal} onClose={handleCloseModal} />
        <Link to="/">
          <div className="w-20">
            <img className="scale-[1.2]" src={Logo} />
          </div>
        </Link>
        <div className="flex justify-end items-center gap-4 flex-[30%]">
          {
            /*user &&*/ authToken ? ( // Render the user's name if they are logged in
              <>
                <div className="gap-2 flex-row flex items-center">
                  <h2 className="text-white text-md" onClick={handleOpenMobileModal}>
                    Hi {username}
                  </h2>
                  <h2 className="text-white font-medium text-xl hidden sm:flex">Account</h2>
                  <Icon icon="icon-park-solid:down-one" color="white" />
                </div>
              </>
            ) : (
              <>
                <Link to="/login">
                  <div>
                    <h2 className="text-sm text-white ">Login</h2>
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
            </Link>
          </div>
        </div>
        <MobileModal show={showMobileModal} onClose={handleCloseMobileModal} />
      </div>
      <div className="flex flex-row space-x-2 items-center mx-4">
        <input className="py-2 px-8 w-80 rounded-[8px]" placeholder="Search Azany" />
        <div className="bg-white px-2 py-0 rounded-[8px]">
          <IconButton>
            <SearchIcon className="text-[#E51B48]" />
          </IconButton>
        </div>
      </div>
      {!isNotScrollabe && (
        <div className="text-white text-xs gap-8 mx-4 flex overflow-x-scroll flex-row no-scrollbar">
          {/* <div className="cursor-pointer">
            <Link to="/manufacturers">
              <h2>Manufacturers</h2>
            </Link>
          </div>
          <div className="cursor-pointer">
            <Link to="/merchants">
              <h2>Merchants</h2>
            </Link>
          </div>
          <Link to="/farmers">
            <div className="cursor-pointer">
              <h2>Farmers</h2>
            </div>
          </Link>
          <div className="flex gap-1">
            <h2>Buy</h2>
            <h2>Again</h2>
          </div>
          <div className="flex gap-1">
            <h2>Customer</h2>
            <h2>Service</h2>
          </div>
          <div className="cursor-pointer">
            <h2>Cards</h2>
          </div> */}
          {currentMenu &&
            currentMenu.map((menuItem) => (
              <Link to={`${menuItem.link}`} key={menuItem.label}>
                <div className={`cursor-pointer ${isItemSelected(`${menuItem.label}`)}`}>
                  <h2 onClick={() => handleItemClick(menuItem.label)} className="whitespace-nowrap">
                    {menuItem.label}
                  </h2>
                </div>
              </Link>
            ))}
        </div>
      )}

      <div className={`flex flex-row gap-2 ${isFarmer ? "bg-[#95A179]" : "bg-[#44444C)]"} p-3 text-white text-xs`}>
        <Icon icon="material-symbols:location-on-rounded" width="16" height="16" />
        <p>Shopping from Kenya</p>
      </div>
    </div>
  );
};

export default MobileHeader;
