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
import Logo from '../../assets/azanylogofinal 3.svg'

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
      label: "Worldwide flex card",
      link: "/",
    },
    {
      label: "Reward Glo",
      link: "/reward-glo-point",
    },
    {
      label: "Multicurrency",
      link: "/",
    },
    {
      label: "Help",
      link: "/",
    },
    {
      label: "About",
      link: "/about",
    },
    {
      label: "Become a Seller",
      link: "/sellers/signup",
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
    <div className={`${style ? style : " bg-[#470505]"} md:hidden flex flex-col w-screen gap-4`}>
      <div className="flex items-center justify-between mx-2 mt-4">
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
                <div className="flex flex-row items-center gap-2">
                  <h2 className="text-white text-md" onClick={handleOpenMobileModal}>
                    Hi {username}
                  </h2>
                  <h2 className="hidden text-xl font-medium text-white sm:flex">Account</h2>
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
      <div className="flex flex-row items-center mx-4 space-x-2">
        <input className="py-2 px-8 w-80 rounded-[8px]" placeholder="Search Azany" />
        <div className="bg-white px-2 py-0 rounded-[8px]">
          <IconButton>
            <SearchIcon className="text-[#E51B48]" />
          </IconButton>
        </div>
      </div>
      <div className="flex flex-col px-4 pb-4 bg-white">
        {!isNotScrollabe && (
          <div className="flex flex-row gap-8 py-4 overflow-x-scroll text-sm font-medium text-black bg-white no-scrollbar">
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

        <div className="flex items-center justify-between w-full">
          <div className="flex">
            <Icon icon="mingcute:location-3-line" color="#db4444" width="24" />
            <span className='text-[#db4444]'>Eti-Osa</span>
          </div>
          <Link to={'/sellers/signup'}>Become a Seller</Link>
        </div>

      </div>
    </div>
  );
};

export default MobileHeader;
