import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../../assets/azanylogofinal 3.svg";
import { Icon } from "@iconify/react";

const Header = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const logoutHandler = () => {
    if (token) {
      localStorage.clear();
      navigate("/login");
    }
    return;
  };
  return (
    <div className="md:flex hidden items-center justify-between px-12 py-2 bg-[#470505]">
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      <div className="flex w-1/3 overflow-hidden rounded-md h-9">
        <input
          className="h-full w-full text-[#8B96A5] text-sm"
          type="text"
          placeholder="What can we help you find today?"
        />
        <div className="search px-2 grid place-items-center bg-[#DB4444]">
          <Icon icon="iconamoon:search" color="white" height={20} />
        </div>
      </div>
      <div className="flex items-center justify-between gap-4">
        <Link
          to={"/login"}
          className="flex items-center gap-2"
          onClick={logoutHandler}
        >
          <Icon icon="line-md:account" color="white" height={24} />
          <span className="text-white">{token ? "Logout" : "Login"}</span>
        </Link>
        <Link to={"/cart"} className="flex items-center gap-2">
          <Icon icon="mdi:cart-outline" color="white" height={24} />
          <span className="text-white">Cart</span>
        </Link>
        <div className="flex items-center gap-2">
          <Icon icon="emojione:flag-for-nigeria" width="24" />
          <span className="text-white">en - NGN</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
