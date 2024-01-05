import React, { useState } from "react";
import ManufacturersProfileLayout from "../../../components/General/manufacturers/profile/LayoutComp";
import Buyers from "../../../components/CustomerProfile/Inbox/Buyers";
import Message from "../../../components/CustomerProfile/Inbox/Message";

const MInbox = () => {
  const [message, setMessage] = useState(true);
  const [buyers, setBuyers] = useState(false);

  const handleMessage = () => {
    setMessage(true);
    setBuyers(false);
  };
  const handleBuyers = () => {
    setMessage(false);
    setBuyers(true);
  };
  return (
    <div className="bg-[#F5F5F5]">
      <ManufacturersProfileLayout>
        <div className="p-8 xs:p-0 w-full">
          <div className="py-2 flex flex-col gap-3">
            <div className="bg-white smm:ml-0 -ml-2 smm:w-full w-[calc(100%+16px)] smm:px-0 py-2 px-2">
              <h2 className="text-[40px] xs:text-[22px] font-[500]">Inbox</h2>
              <div className="pt-4 mt-2">
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
              </div>
            </div>
            {message && (
              <div className="smm:space-y-3 space-y-2">
                <Message />
                <Message />
                <Message />
              </div>
            )}
            {buyers && (
              <div className="smm:space-y-3 space-y-2  ">
                <Buyers />
                <Buyers />
                <Buyers />
              </div>
            )}
          </div>
        </div>
      </ManufacturersProfileLayout>
    </div>
  );
};

export default MInbox;
