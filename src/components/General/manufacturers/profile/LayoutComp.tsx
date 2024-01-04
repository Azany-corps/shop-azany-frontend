import React, { useState } from "react";
import { data, data2 } from "./menuData";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuthToken from "../../../../hooks/useAuthToken";

type each = {
  image: React.ReactNode;
  // title?: string;
};

const ManufacturersProfileLayoutComp = ({
  children,
}: // title,
{
  children: React.ReactNode | React.ReactNode[];
  // title: any;

  //children,
  //heading
  //}: {
  //children: React.ReactNode | React.ReactNode[],
  //heading?: string
}) => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [active, setActive] = useState<string>();

  const navHanlder = () => {
    setShowMobileNav(!showMobileNav);
  };
  const navigate = useNavigate();
  const location = useLocation();

  const [authToken, deleteAuthToken] = useAuthToken();

  const handleLogout = () => {
    localStorage.removeItem("name");
    navigate("/sellers/login");
    deleteAuthToken("");
  };

  const [showAccDropdown, setShowAccDropdown] = useState(false);

  const accDropdownHandler = () => {
    setShowAccDropdown(!showAccDropdown);
    setShowSettingsDropdown(false);
  };

  const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);

  const settingsDropdownHandler = () => {
    setShowSettingsDropdown(!showSettingsDropdown);
    setShowAccDropdown(false);
  };

  console.log(location.pathname);
  return (
    <>
      <div className="bg-transparent z-50 w-full fixed md:hidden top-0 left-0">
        <button
          className="inline-flex items-center p-2 mt-2 ml-6 text-sm text-gray-500 rounded-lg hover:bg-gray-100 outline-none ring-2 ring-gray-200"
          onClick={navHanlder}
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-5 h-5 block md:hidden"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
      </div>
      {showMobileNav && (
        <div className="md:hidden fixed top-0 left-0 right-0 z-30 w-full h-screen p-4 overflow-x-hidden overflow-y-auto md:inset-0  max-h-full flex justify-center items-center bg-black bg-opacity-70"></div>
      )}
      <aside
        id="logo-sidebar"
        // className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        className={`md:block md:fixed ${
          showMobileNav ? "fixed" : "hidden"
        } top-0 left-0 z-40 w-[240px] 2xl:w-[290px] h-screen transition-transform`}
        aria-label="Sidebar font-DM-sans"
      >
        <div className="pt-[56px] pb-[48px] pl-[54px] border-b border-[#F4F7FE] bg-white">
          <img src="/images/AZANY.svg" alt="logo" className="cursor-pointer" />
        </div>
        <div className="h-full overflow-y-auto bg-white font-DM-sans">
          <ul className="space-y-[20px] mt-[21px] font-medium border-b border-b-[#F4F7FE] pb-[20px] font-DM-sans">
            <li
              onClick={() => {
                setActive("Overview");
              }}
            >
              <Link
                to="/manufacturers-profile"
                className={`${
                  location.pathname === "/manufacturers-profile"
                    ? "text-[#4F4141] group border-[#FF1818] border-r-[4px]"
                    : ""
                } flex items-center p-2 text-[#29020266] hover:text-[#4F4141] group border-[#FF1818] hover:border-r-[4px] max-h-[30px]  pl-[31px]`}
              >
                <div
                  className={`${
                    location.pathname === "/manufacturers-profile"
                      ? "text-[#FF1818]"
                      : "text-[#29020266]"
                  } group-hover:text-[#FF1818]`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <g clip-path="url(#clip0_16_5384)">
                      <path
                        d="M9.99998 19V14H14V19C14 19.55 14.45 20 15 20H18C18.55 20 19 19.55 19 19V12H20.7C21.16 12 21.38 11.43 21.03 11.13L12.67 3.6C12.29 3.26 11.71 3.26 11.33 3.6L2.96998 11.13C2.62998 11.43 2.83998 12 3.29998 12H4.99998V19C4.99998 19.55 5.44998 20 5.99998 20H8.99998C9.54998 20 9.99998 19.55 9.99998 19Z"
                        fill="currentColor"
                        // fill-opacity="0.4"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_16_5384">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>

                <span className="ml-3 text-[12.524px]">Overview</span>
              </Link>
            </li>
            <li
              onClick={() => {
                setActive("Orders");
              }}
            >
              <Link
                to="/manufacturers-profile/orders"
                className={`${
                  location.pathname === "/manufacturers-profile/orders"
                    ? "text-[#4F4141] group border-[#FF1818] border-r-[4px]"
                    : ""
                } flex items-center p-2 text-[#29020266] hover:text-[#4F4141] group border-[#FF1818] hover:border-r-[4px] max-h-[30px]  pl-[31px]`}
              >
                <svg
                  className={`${
                    location.pathname === "/manufacturers-profile/orders"
                      ? "text-[#FF1818]"
                      : "text-[#29020266]"
                  } group-hover:text-[#FF1818]`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <g clip-path="url(#clip0_16_5390)">
                    <path
                      d="M15.55 13C16.3 13 16.96 12.59 17.3 11.97L20.88 5.48C21.25 4.82 20.77 4 20.01 4H5.21L4.27 2H1V4H3L6.6 11.59L5.25 14.03C4.52 15.37 5.48 17 7 17H19V15H7L8.1 13H15.55ZM6.16 6H18.31L15.55 11H8.53L6.16 6ZM7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_16_5390">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <span className="ml-3 text-[12.524px]">Orders</span>
              </Link>
            </li>
            <li>
              <button
                type="button"
                className={`flex items-center p-2 text-[#29020266] hover:text-[#4F4141] group border-[#FF1818] hover:border-r-[4px] max-h-[30px] w-full  pl-[31px]`}
                onClick={() => {
                  accDropdownHandler();
                  setActive("Products");
                }}
              >
                <div>
                  <svg
                    className={`${
                      location.pathname === "/manufacturers-profile/product" ||
                      "/manufacturers-profile/add-product"
                        ? "text-[#FF1818]"
                        : "text-[#29020266]"
                    } group-hover:text-[#FF1818]`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="currentColor"
                  >
                    <g clip-path="url(#clip0_16_5398)">
                      <path
                        d="M6 14H12C12.55 14 13 13.55 13 13V5C13 4.45 12.55 4 12 4H6C5.45 4 5 4.45 5 5V13C5 13.55 5.45 14 6 14ZM6 22H12C12.55 22 13 21.55 13 21V17C13 16.45 12.55 16 12 16H6C5.45 16 5 16.45 5 17V21C5 21.55 5.45 22 6 22ZM16 22H22C22.55 22 23 21.55 23 21V13C23 12.45 22.55 12 22 12H16C15.45 12 15 12.45 15 13V21C15 21.55 15.45 22 16 22ZM15 5V9C15 9.55 15.45 10 16 10H22C22.55 10 23 9.55 23 9V5C23 4.45 22.55 4 22 4H16C15.45 4 15 4.45 15 5Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_16_5398">
                        <rect width="28" height="28" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <span className="flex items-center ml-3 text-[12.524px]">
                  Products
                  <svg
                    className="w-3 h-3 ml-[11px]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </span>
              </button>
              <ul
                onClick={() => {
                  setActive("Products");
                }}
                className={`${
                  showAccDropdown ? "block" : "hidden"
                } py-2 space-y-2 ml-1 font-DM-sans`}
              >
                <li
                  onClick={() => {
                    setActive("Products");
                  }}
                >
                  <Link
                    to="/manufacturers-profile/product"
                    className={`${
                      location.pathname === "/manufacturers-profile/product"
                        ? "text-[#4F4141]"
                        : "text-[#29020266]"
                    } flex items-center w-full p-2 text-[12.524px] group hover:text-[#4F4141]   pl-[31px]`}
                  >
                    Manage Products
                  </Link>
                </li>

                <li
                  onClick={() => {
                    setActive("Products");
                  }}
                >
                  <Link
                    to="/manufacturers-profile/add-product"
                    className={` ${
                      location.pathname === "/manufacturers-profile/add-product"
                        ? "text-[#4F4141]"
                        : "text-[#29020266]"
                    } flex items-center w-full p-2 text-[12.524px] group hover:text-[#4F4141] pl-[31px]`}
                  >
                    Add Products
                  </Link>
                </li>
              </ul>
            </li>
            {data.map((each: any, index: number) => (
              <li
                key={index}
                onClick={() => {
                  setActive(each?.title);
                }}
              >
                <Link
                  to={each.path}
                  // to="/manufacturers-profile/product"
                  className={`${
                    location.pathname === each?.path
                      ? "text-[#4F4141] group border-[#FF1818] border-r-[4px]"
                      : ""
                  } flex items-center p-2 text-[#29020266] hover:text-[#4F4141] group border-[#FF1818] hover:border-r-[4px] max-h-[30px]  pl-[31px]`}
                >
                  <div
                    className={`${
                      location.pathname === each?.path
                        ? "text-[#FF1818]"
                        : "text-[#29020266]"
                    } group-hover:text-[#FF1818]`}
                  >
                    {each.image}
                  </div>
                  <span className="ml-3 text-[12.524px]">{each.title}</span>
                </Link>
              </li>
            ))}
          </ul>

          <ul className="space-y-[20px] font-medium border-b border-b-[#F4F7FE] pt-[20px] pb-[127px] font-DM-sans">
            {data2.map((each: any, index: number) => (
              <li
                key={index}
                onClick={() => {
                  setActive(each?.title);
                }}
              >
                <Link
                  to={each.path}
                  // to="/manufacturers-profile/product"
                  className={`${
                    location.pathname === each?.path
                      ? "text-[#4F4141] group border-[#FF1818] border-r-[4px]"
                      : ""
                  } flex items-center p-2 text-[#29020266] hover:text-[#4F4141] group border-[#FF1818] hover:border-r-[4px] max-h-[30px]  pl-[31px]`}
                >
                  <div
                    className={`${
                      location.pathname === each?.path
                        ? "text-[#FF1818]"
                        : "text-[#29020266]"
                    } group-hover:text-[#FF1818]`}
                  >
                    {each.image}
                  </div>
                  <span className="ml-3 text-[12.524px]">{each.title}</span>
                </Link>
              </li>
            ))}
            <li>
              <button
                type="button"
                className="flex items-center p-2 text-[#29020266] hover:text-[#4F4141] group border-[#FF1818] hover:border-r-[4px] max-h-[30px] w-full  pl-[31px]"
                onClick={settingsDropdownHandler}
              >
                <div>
                  <svg
                    className="text-[#29020266] group-hover:text-[#FF1818]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <g clip-path="url(#clip0_16_5456)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M21.9023 13.58C22.26 13.77 22.536 14.07 22.7301 14.37C23.1083 14.99 23.0776 15.75 22.7097 16.42L21.9943 17.62C21.6162 18.26 20.911 18.66 20.1855 18.66C19.8278 18.66 19.4292 18.56 19.1022 18.36C18.8365 18.19 18.5299 18.13 18.2029 18.13C17.1911 18.13 16.3429 18.96 16.3122 19.95C16.3122 21.1 15.372 22 14.1968 22H12.8069C11.6215 22 10.6813 21.1 10.6813 19.95C10.6608 18.96 9.81259 18.13 8.80085 18.13C8.46361 18.13 8.15702 18.19 7.90153 18.36C7.5745 18.56 7.16572 18.66 6.81825 18.66C6.08245 18.66 5.37729 18.26 4.99917 17.62L4.29402 16.42C3.9159 15.77 3.89546 14.99 4.27358 14.37C4.43709 14.07 4.74368 13.77 5.09115 13.58C5.37729 13.44 5.56125 13.21 5.73498 12.94C6.24596 12.08 5.93937 10.95 5.07071 10.44C4.05897 9.87 3.73194 8.6 4.31446 7.61L4.99917 6.43C5.59191 5.44 6.85913 5.09 7.88109 5.67C8.77019 6.15 9.925 5.83 10.4462 4.98C10.6097 4.7 10.7017 4.4 10.6813 4.1C10.6608 3.71 10.7732 3.34 10.9674 3.04C11.3455 2.42 12.0302 2.02 12.7763 2H14.2172C14.9735 2 15.6582 2.42 16.0363 3.04C16.2203 3.34 16.3429 3.71 16.3122 4.1C16.2918 4.4 16.3838 4.7 16.5473 4.98C17.0685 5.83 18.2233 6.15 19.1226 5.67C20.1344 5.09 21.4118 5.44 21.9943 6.43L22.679 7.61C23.2718 8.6 22.9447 9.87 21.9228 10.44C21.0541 10.95 20.7475 12.08 21.2687 12.94C21.4322 13.21 21.6162 13.44 21.9023 13.58ZM10.6097 12.01C10.6097 13.58 11.9076 14.83 13.5121 14.83C15.1165 14.83 16.3838 13.58 16.3838 12.01C16.3838 10.44 15.1165 9.18 13.5121 9.18C11.9076 9.18 10.6097 10.44 10.6097 12.01Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_16_5456">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <span className="flex items-center ml-3 text-[12.524px]">
                  Settings
                  <svg
                    className="w-3 h-3 ml-[11px]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </span>
              </button>
              <ul
                className={`${
                  showSettingsDropdown ? "block" : "hidden"
                } py-2 space-y-2 ml-1`}
              >
                <li>
                  <Link
                    to="/"
                    className="flex items-center w-full p-2 text-[12.524px] group hover:text-[#4F4141] text-[#29020266]  pl-[31px]"
                  >
                    Account Settings
                  </Link>
                </li>

                {/* <li>
                  <Link
                    to="/"
                    className="flex items-center w-full p-2 text-[12.524px] group hover:text-[#4F4141] text-[#29020266] pl-[31px]"
                  >
                    Manage Beneficiaries
                  </Link>
                </li> */}
              </ul>
            </li>
          </ul>
          <ul className="space-y-[20px] pt-[20px] font-medium pb-[116px] font-DM-sans mb-4">
            <li>
              <Link
                to="/manufacturers-profile"
                className={`flex items-center p-2 text-[#29020266] hover:text-[#4F4141] group border-[#FF1818] hover:border-r-[4px] max-h-[30px]  pl-[31px]`}
              >
                <div className="w-6 h-6 rounded-full">
                  <img
                    src="/images/avatar.svg"
                    alt="avatar"
                    className="object-cover rounded-full"
                  />
                </div>

                <span className="ml-3 text-[12.524px]">Account</span>
              </Link>
            </li>
            <li onClick={handleLogout}>
              <Link
                to="/manufacturers-profile"
                className="flex items-center p-2 text-[#29020266] hover:text-[#4F4141] group border-[#FF1818] hover:border-r-[4px] max-h-[30px]  pl-[31px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_16_5473)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.5795 11.6917C10.2149 11.6917 9.9266 11.975 9.9266 12.3333C9.9266 12.6833 10.2149 12.975 10.5795 12.975H15.6667V16.9583C15.6667 19 13.9794 20.6667 11.8937 20.6667H7.76453C5.68726 20.6667 4 19.0083 4 16.9667V7.70833C4 5.65833 5.69574 4 7.77301 4H11.9106C13.9794 4 15.6667 5.65833 15.6667 7.7V11.6917H10.5795ZM18.6919 9.45017L21.1252 11.8752C21.2502 12.0002 21.3169 12.1585 21.3169 12.3335C21.3169 12.5002 21.2502 12.6668 21.1252 12.7835L18.6919 15.2085C18.5669 15.3335 18.4002 15.4002 18.2419 15.4002C18.0752 15.4002 17.9085 15.3335 17.7835 15.2085C17.5335 14.9585 17.5335 14.5502 17.7835 14.3002L19.1169 12.9752H15.6669V11.6918H19.1169L17.7835 10.3668C17.5335 10.1168 17.5335 9.7085 17.7835 9.45851C18.0335 9.20017 18.4419 9.20017 18.6919 9.45017Z"
                      fill="#FF1818"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_16_5473">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <span className="ml-3 text-[12.524px]">Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      <div className="mx-1 md:px-4 md:ml-[236px] 2xl:ml-[276px]  h-full mt-16">
        <div className="rounded-lg h-full">{children}</div>
      </div>
    </>
  );
};

export default ManufacturersProfileLayoutComp;
