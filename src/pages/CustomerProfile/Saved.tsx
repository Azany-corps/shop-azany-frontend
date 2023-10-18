import React, { useState } from "react";
import CustomerProfileLayout from "../../components/CustomerProfile/CustomerProfileLayout";
import Recent from "../../components/CustomerProfile/WatchList/Recent";
import WatchListed from "../../components/CustomerProfile/WatchList/WatchList";

type Props = {};

const Saved = (props: Props) => {
  const [watchlist, setWatchList] = useState(true);
  const [recent, setRecent] = useState(false);

  const handleWatch = () => {
    setWatchList(true);
    setRecent(false);
  };

  return (
    <>
      <CustomerProfileLayout>
        <div className="pl-8 w-full xs:p-4 pr-40 md:pr-0 sm:pr-0">
          <div className="py-2">
            <div className="py-2 px-3">
              <h1 className="text-[36px] font-[500] xs:text-[22px]">
              Saved Items
              </h1>
              <p className="text-[18px]">
                Lorem ipsum dolor sit amet consectetur. Et sapien et a mauris
                nam adipiscing. onsect..
              </p>
              {watchlist && (
                <div className="mt-5 grid grid-cols-3 xs:grid-cols-2 gap-4">
                  <WatchListed />
                  <WatchListed />
                  <WatchListed />
                  <WatchListed />
                  <WatchListed />
                  <WatchListed />
                  <WatchListed />
                </div>
              )}
            </div>
          </div>
        </div>
      </CustomerProfileLayout>
    </>
  );
};

export default Saved;
