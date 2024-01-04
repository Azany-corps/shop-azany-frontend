import React, { useState } from "react";
import { data } from "./dataFile";
import { Link, useLocation, useNavigate } from "react-router-dom";

type each = {
  image: React.ReactNode;
  // title?: string;
};

const CustomerProfileLayout = ({
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
  const navHanlder = () => {
    setShowMobileNav(!showMobileNav);
  };
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location.pathname);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const name = localStorage.getItem("name");

  return (
    <>
      <nav className={`fixed top-0  w-full bg-[#231F20] z-50`}>
        <div className="px-3 py-[39px] lg:px-[32.52px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <div className="flex flex-row items-end cursor-pointer">
                <img
                  className="cursor-pointer mr-[23px]"
                  src="/images/azanyLogoCustomer.svg"
                />
                <div className="flex-row items-center cursor-pointer hidden md:flex">
                  <p className="font-public-sans text-[13.79px] font-medium text-white mr-1">
                    Shopping from |
                  </p>
                  <div className="flex flex-row items-center mr-[13px] cursor-pointer font-public-sans text-[13.79px] font-medium text-white">
                    <p> kenya</p>
                    <img src="/images/arrowUpFill.svg" />
                  </div>
                </div>
              </div>

              <button
                className="inline-flex items-center p-2 mt-2 ml-1 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                onClick={navHanlder}
              >
                <span className="sr-only">Open sidebar</span>
                {showMobileNav ? (
                  <svg
                    className="w-5 h-5 block md:hidden"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                ) : (
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
                )}
              </button>

              {/* <p className="self-center text-lg font-bold text-[#23272E] whitespace-nowrap md:flex ml-[219px] md:mr-24 hidden">
                {title}
              </p> */}
            </div>

            <form className="w-full max-w-[500px] hidden lg:block">
              <div className="relative">
                <button
                  type="submit"
                  className="text-white absolute end-[1px] bottom-[0.8px] hover:bg-[#d34e4b] bg-[#D65D5B] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-[32.517px] text-[13.795px] font-semibold py-[13px] px-[44px]"
                >
                  Search
                </button>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 ps-10 text-sm h-[43.35px] text-gray-900 border border-gray-300 bg-white focus:ring-[#D65D5B] focus:border-[#D65D5B] rounded-[32.517px] placeholder:text-[#B3B7BB] placeholder:font-normal placeholder:text-[13.795px]"
                  placeholder="Search product, brands and categories"
                  required
                />
              </div>
            </form>

            <div className="flex-row items-center cursor-pointer hidden md:flex">
              <img src="/images/userIcon.svg" />
              <p className="font-public-sans text-[13.79px] font-semibold text-white">
                {name}
              </p>
            </div>

            <div
              className="flex flex-row items-center justify-center cursor-pointer"
              onClick={handleLogout}
            >
              <img src="/images/logoutIcon.svg" />
              <p className="font-public-sans text-[13.79px] font-semibold text-white">
                Logout
              </p>
            </div>
          </div>
        </div>
      </nav>
      {showMobileNav && (
        <div
          id="staticModal"
          data-modal-backdrop="static"
          aria-hidden="true"
          className="md:hidden fixed top-0 left-0 right-0 z-30 w-full h-screen p-4 overflow-x-hidden overflow-y-auto md:inset-0  max-h-full flex justify-center items-center bg-gray-600 bg-opacity-70"
        ></div>
      )}
      <aside
        id="logo-sidebar"
        // className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        className={`md:block md:fixed ${
          showMobileNav ? "fixed" : "hidden"
        } top-0 left-0 z-40 mt-16 md:mt-0 w-[246px] h-screen transition-transform`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-[#000000] pt-[132px]">
          <ul className="space-y-[17px] mt-[20px] font-medium">
            <li>
              <Link
                to="/customer-profile"
                className={`${
                  location.pathname === "/customer-profile"
                    ? "text-white bg-[#231F20]"
                    : "text-[#8B909A] "
                } flex items-center p-2 hover:text-white  rounded-lg hover:bg-[#231F20] group`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  className="group-hover:text-white"
                >
                  <path
                    d="M14.589 7.26123L10.5075 4.08659C9.77058 3.51333 8.73861 3.51333 8.00173 4.08659L3.9194 7.26123C3.42224 7.64785 3.13157 8.24247 3.13187 8.87227V14.3827C3.13187 15.2281 3.81718 15.9134 4.66255 15.9134H13.8466C14.692 15.9134 15.3773 15.2281 15.3773 14.3827V8.87227C15.3773 8.2424 15.0865 7.64773 14.589 7.26123"
                    stroke="currentColor"
                    stroke-width="1.46111"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.293 12.0751C10.6016 13.0953 7.86013 13.0953 6.17026 12.0751"
                    stroke="currentColor"
                    stroke-width="1.46111"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span className="ml-3 text-[12.524px]">Personal Details</span>
              </Link>
            </li>
            {data.map((each, index) => (
              <li key={index}>
                <Link
                  to={`/customer-profile${each.path}`}
                  className={`${
                    location.pathname === `/customer-profile${each.path}`
                      ? "text-white bg-[#231F20]"
                      : "text-[#8B909A] "
                  } flex items-center p-2 hover:text-white  rounded-lg hover:bg-[#231F20] group`}
                >
                  {each.image}
                  <span className="flex-1 ml-3 whitespace-nowrap text-[12.524px]">
                    {each.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <div className="px-4 md:ml-[276px] md:mr-[28px] h-full mt-16">
        <div className="rounded-lg h-full">{children}</div>
      </div>
    </>
  );
};

export default CustomerProfileLayout;
