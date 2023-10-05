import React, { useState } from "react";
import CustomerProfileLayout from "../../components/CustomerProfile/CustomerProfileLayout";
import Recent from "../../components/CustomerProfile/WatchList/Recent";
import WatchListed from "../../components/CustomerProfile/WatchList/WatchList";

type Props = {};

const WatchList = (props: Props) => {
  const [watchlist, setWatchList] = useState(true);
  const [recent, setRecent] = useState(false);

  const handleWatch = () => {
    setWatchList(true);
    setRecent(false);
  };
  const handleRecent = () => {
    setWatchList(false);
    setRecent(true);
  };

  return (
    <>
      <CustomerProfileLayout>
        <div className="pl-8 w-full xs:p-4 pr-40 md:pr-0 sm:pr-0">
          <div className="py-2">
            <div className="py-2 px-3">
              <h1 className="text-[36px] font-[500] xs:text-[22px]">
                Recently viewed
              </h1>
              <p className="text-[18px]">
                Lorem ipsum dolor sit amet consectetur. Et sapien et a mauris
                nam adipiscing. onsect..
              </p>
              <div className="py-4 mt-2">
                <div className="flex items-center space-x-6">
                  <h2
                    onClick={() => handleWatch()}
                    className={
                      watchlist
                        ? "font-bold cursor-pointer border-b-4 border-[#E51B48]"
                        : "text-[#515151] cursor-pointer"
                    }
                  >
                    Watchlist
                  </h2>
                  <h2
                    onClick={() => handleRecent()}
                    className={
                      recent
                        ? "font-bold cursor-pointer border-b-4 border-[#E51B48]"
                        : "text-[#515151] cursor-pointer"
                    }
                  >
                    Recent Viewed
                  </h2>
                </div>
              </div>
              {watchlist && (
                <div className="grid grid-cols-3 xs:grid-cols-2 gap-4">
                  <WatchListed />
                  <WatchListed />
                  <WatchListed />
                  <WatchListed />
                  <WatchListed />
                  <WatchListed />
                  <WatchListed />
                </div>
              )}
              {recent && (
                <div className="grid grid-cols-3 gap-4">
                  <Recent />
                  <Recent />
                  <Recent />
                  <Recent />
                </div>
              )}
            </div>
          </div>
        </div>
      </CustomerProfileLayout>
    </>
  );
};

export default WatchList;
