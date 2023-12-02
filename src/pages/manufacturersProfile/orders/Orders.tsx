import React, { useState } from "react";
import ManufacturersProfileLayout from "../../../components/General/manufacturers/profile/Layout";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import OrderActv from "../../../components/General/manufacturers/orders/Active";
import Drawer from "react-bottom-drawer";
const MOrders = () => {
  const [active, setActive] = useState(true);
  const [fulfilled, setFulfilled] = useState(false);
  const [searchBarVisible, setSearchBarVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedSorting, setSelectedSorting] = useState("Show all");

  const handleActive = () => {
    setActive(true);
    setFulfilled(false);
  };
  const handleFulfilled = () => {
    setActive(false);
    setFulfilled(true);
  };
  const onClose = React.useCallback(() => {
    setIsVisible(false);
  }, []);

  return (
    <div className="bg-[#F5F5F5]">
      <ManufacturersProfileLayout>
        <div className="w-full">
          <div className="flex bg-[#F5F5F5] flex-col gap-8 w-full">
            <div className="bg-white pt-5 smm:ml-0 -ml-2 smm:w-full w-[calc(100%+16px)] px-6">
              <h1 className="text-[36px] xs:text-[22px] font-[500]">
                Product Orders
              </h1>
              {!searchBarVisible && (
                <div className="py-6 w-full justify-between items-center flex">
                  <div className="flex items-center space-x-5">
                    <h1
                      className={
                        active
                          ? "font-bold xs:font-medium cursor-pointer border-b-4 border-[#E51B48]"
                          : "text-[#515151] cursor-pointer"
                      }
                      onClick={() => handleActive()}
                    >
                      Active
                    </h1>
                    <h1
                      className={
                        fulfilled
                          ? "font-bold xs:font-medium cursor-pointer border-b-4 border-[#E51B48]"
                          : "text-[#515151] cursor-pointer"
                      }
                      onClick={() => handleFulfilled()}
                    >
                      Fulfilled
                    </h1>
                  </div>

                  <div className="flex flex-row gap-4 items-center">
                    <div className="xs:hidden">
                      <input
                        className="py-2 px-4 rounded-md border border-[#C4C4C4]"
                        placeholder="Search Orders"
                      />
                    </div>
                    <div className="flex flex-row gap-2 xs:hidden">
                      <p>
                        {" "}
                        <span className="text-[#515151]">Sort:</span> Show All
                      </p>
                      <KeyboardArrowDownIcon />
                    </div>
                  </div>

                  <div
                    className="xsm:hidden block cursor-pointer"
                    onClick={() => setSearchBarVisible(true)}
                  >
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.5 22.5L17.5 17.5M19.1667 13.3333C19.1667 14.0994 19.0158 14.8579 18.7226 15.5657C18.4295 16.2734 17.9998 16.9164 17.4581 17.4581C16.9164 17.9998 16.2734 18.4295 15.5657 18.7226C14.8579 19.0158 14.0994 19.1667 13.3333 19.1667C12.5673 19.1667 11.8087 19.0158 11.101 18.7226C10.3933 18.4295 9.75022 17.9998 9.20854 17.4581C8.66687 16.9164 8.23719 16.2734 7.94404 15.5657C7.65088 14.8579 7.5 14.0994 7.5 13.3333C7.5 11.7862 8.11458 10.3025 9.20854 9.20854C10.3025 8.11458 11.7862 7.5 13.3333 7.5C14.8804 7.5 16.3642 8.11458 17.4581 9.20854C18.5521 10.3025 19.1667 11.7862 19.1667 13.3333Z"
                        stroke="#515151"
                        stroke-width="2.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              )}
              {searchBarVisible && (
                <div className="py-6 -ml-4 w-[calc(100%+32px)] relative">
                  <input
                    type="text"
                    placeholder="Search"
                    className="py-3 w-full border-x-0 border border-gray-200 px-3"
                  />
                  <div
                    className="absolute top-1/2 -translate-y-1/2 right-4"
                    onClick={() => setSearchBarVisible(false)}
                  >
                    <span className="text-xl p-2">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 13L13 1M1 1L13 13"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
              )}
            </div>
            <div className="">
              {active && <OrderActv />}
              {fulfilled && <OrderActv />}
            </div>
          </div>
        </div>
        {/* <div className="block smm:hidden">
          <Drawer isVisible={isVisible} onClose={onClose}>
            <div className="pb-5">
              <h1 className="font-semibold text-lg p-2">Sort</h1>
              <div className="flex flex-col">
                <p
                  className="p-2"
                  onClick={() => {
                    setSelectedSorting("Show all");
                    onClose();
                  }}
                >
                  {"Show all"}
                </p>
                <p
                  className="p-2"
                  onClick={() => {
                    setSelectedSorting("Shipped");
                    onClose();
                  }}
                >
                  {"Shipped"}
                </p>
                <p
                  className="p-2"
                  onClick={() => {
                    setSelectedSorting("Pending");
                    onClose();
                  }}
                >
                  {"Pending"}
                </p>
              </div>
            </div>
          </Drawer>
        </div> */}
      </ManufacturersProfileLayout>
    </div>
  );
};

{
  /* <div className="bg-white smm:ml-0 -ml-2 smm:w-full w-[calc(100%+16px)] smm:px-0 px-2 smm:hidden flex items-center">
                <label htmlFor="sort" className="text-sm font-light">
                  Sort:
                </label>
                <p onClick={() => setIsVisible(true)}>{selectedSorting}</p>
              </div> */
}

export default MOrders;
