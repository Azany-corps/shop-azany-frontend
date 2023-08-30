import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

interface FooterProps {
  style: string;
  isFarmer?: boolean;
}

const MobileFooter = ({ style, isFarmer }: FooterProps) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Add event listener to track scroll position
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <footer className={`${style}`}>
        <div
          className={`${
            isFarmer ? "bg-[#90A955]" : "bg-[#70ADFF]"
          } flex text-center justify-center p-4 gap-4 w-full text-white text-sm`}
        >
          <p
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Back To Top
          </p>
          <Icon icon="tabler:chevron-up" width="20" height="20" />
        </div>
        <div className="flex flex-row py-4 px-8 gap-20">
          <div className="flex-col flex gap-2 text-xs text-white">
            <p>About us</p>
            <p>Policy Notice</p>
            <p>Sell on Azany</p>
            <p>Returns & Refunds</p>
            <p>AVC</p>
          </div>
          <div className="flex-col flex gap-2 text-xs text-white">
            <p>Your Orders</p>
            <p>Your Account</p>
            <p>Report a Product</p>
            <p>Report a Vendor</p>
            <p>Contact us</p>
          </div>
        </div>
        <div className="bg-[#333333] p-4 flex flex-col gap-6 items-center justify-center text-white text-xs">
          <div className="flex flex-row gap-2">
            <img src="images/englishflag.png" alt="" />
            <p>English</p>
          </div>

          <p>Customer Service</p>

          <div className="justify-between flex flex-row gap-6">
            <p>Condition of Use</p>
            <p>Privacy</p>
            <p>Service Rights</p>
          </div>

          <p>c2023 Azany ALL RIGHTS RESERVED</p>
        </div>
      </footer>
    </>
  );
};

export default MobileFooter;
