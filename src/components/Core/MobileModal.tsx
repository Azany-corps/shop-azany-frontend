import React, { useState, useRef, useCallback, useEffect } from "react";
import cx from "classnames";
import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";
import useAuthToken from "../../hooks/useAuthToken";

interface MobileModalProps {
  show: boolean;
  onClose?: () => void;
}

const MobileModal: React.FC<MobileModalProps> = (props) => {
  const [, deleteAuthToken] = useAuthToken();
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const username = localStorage.getItem("name");
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
    localStorage.removeItem("name");
    console.log("logged out");
    deleteAuthToken("");
  };
  const { onClose } = props;

  const handleClose = useCallback(() => {
    setIsOpen(false);
    onClose && onClose();
  }, [onClose]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        handleClose();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [handleClose]);

  useEffect(() => {
    setIsOpen(props.show);
  }, [props.show]);

  return isOpen ? (
    <>
      {/* Modal Background */}
      <div aria-hidden="false" className="fixed top-0 right-0 z-20 w-1/4 xs:w-3/4 h-full p-4 overflow-auto overflow-x-hidden flex bg-white">
        {/* Modal */}
        <div
          ref={modalRef}
          onClick={() => { }}
          className={cx({
            "relative z-50 h-full w-full": true,
            "max-w-lg bg-white  animate-slide-in-from-right": true,
            "animate-slide-in-from-left": isOpen,
          })}
        >
          {/* MODAL HEADER */}
          <div className="flex flex-col">
            <h3 className="text-[14px] font-bold text-black">Hello {username} </h3>
            <h3 className="text-[14px] font-medium text-black">Your Account</h3>
            <button
              aria-label="Close"
              className="ml-auto inline-flex items-center rounded-lg bg-transparent text-white"
              type="button"
              onClick={handleClose}
            >
              <Icon icon="material-symbols:close" />
            </button>
          </div>
          <div className="border-t border-gray-400"></div>
          <div className="flex flex-col py-4 gap-4">
            <p className="font-bold">Orders</p>
            <p>Buy Again</p>
            <p>Track Orders</p>
            <p>Activity Orders</p>
          </div>
          <div className="border-t border-gray-400"></div>
          <div className="flex flex-col py-4 gap-4">
            <Link to="/manufacturers-profile/">
              <p className="font-bold">Account</p>
            </Link>
            <p>Recently Viewed</p>
            <p>Wishlist</p>
            <p>Your Azany Subscriptions</p>
            <p>Cards and Banks</p>
            <p>Login & Security</p>
            <p>See Your Account</p>
          </div>
          <div className="border-t border-gray-400"></div>
          <div className="flex flex-col py-4 gap-4">
            <div className="flex flex-row gap-2">
              <Icon icon="circle-flags:us" width="24" height="24" /> <p>English</p>
            </div>
            <p>Customer Service</p>
            <p onClick={handleLogout} className="text-red-400">
              Sign Out
            </p>
          </div>
        </div>
      </div>
    </>
  ) : null;
};

export { MobileModal };
function deleteAuthToken(arg0: string) {
  throw new Error("Function not implemented.");
}
