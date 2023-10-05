import React, { useState } from "react";
import CustomerProfileLayout from "../../components/CustomerProfile/CustomerProfileLayout";
import Buyers from "../../components/CustomerProfile/Inbox/Buyers";
import Message from "../../components/CustomerProfile/Inbox/Message";

type Props = {};

const Inbox = (props: Props) => {
  const [message, setMessage] = useState(false);
  const [buyers, setBuyers] = useState(true);

  const handleMessage = () => {
    setMessage(true);
    setBuyers(false);
  };
  const handleBuyers = () => {
    setMessage(false);
    setBuyers(true);
  };
  return (
    <CustomerProfileLayout>
      <div className="p-8 xs:p-4 w-full">
        <div className="py-2">
          <div className="py-2 bg-white mb-3 px-3">
            <h2 className="text-[40px] xs:text-[26px] font-[500]">Inbox</h2>
            <p className="text-[18px]">
              Lorem ipsum dolor sit amet consectetur. Et sapien et a mauris nam
              adipiscing. onsect..
            </p>
            {/*<div className="smm:py-4 py-1 mt-2">
              <div className="flex items-center space-x-6">
                <h2
                  onClick={() => handleMessage()}
                  className={
                    message
                      ? "font-bold cursor-pointer border-b-4 border-[#E51B48]"
                      : "text-[#515151] cursor-pointer"
                  }
                >
                  All Messages
                </h2>
                <h2
                  onClick={() => handleBuyers()}
                  className={
                    buyers
                      ? "font-bold cursor-pointer border-b-4 border-[#E51B48]"
                      : "text-[#515151] cursor-pointer"
                  }
                >
                  Buyer/Seller Messages
                </h2>
              </div>
            </div>*/}
          </div>
          {message && (
            <div className="space-y-3">
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
            </div>
          )}
          {buyers && (
            <div className="space-y-3">
              <Buyers />
              <Buyers />
              <Buyers />
              <Buyers />
              <Buyers />
            </div>
          )}
        </div>
      </div>
    </CustomerProfileLayout>
  );
};

export default Inbox;
