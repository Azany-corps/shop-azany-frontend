import React, { useEffect, useState } from "react";
import ManufacturersProfileLayout from "../../../components/General/manufacturers/profile/LayoutComp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import OrderActv from "../../../components/General/manufacturers/orders/Active";
import Drawer from "react-bottom-drawer";
import TableComponent from "../../../components/Core/Table";
import { Checkbox } from "@mui/material";
import { handleClick, isSelected } from "../../../helpers/helperFunction";
import callAPI from "../../../api/callApi";

interface SettingsMenuState {
  [key: number]: boolean;
}

const MOrders = () => {
  const [active, setActive] = useState(true);
  const [fulfilled, setFulfilled] = useState(false);
  const [searchBarVisible, setSearchBarVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedSorting, setSelectedSorting] = useState("Show all");

  const token = localStorage.getItem("token");

  useEffect(() => {
    const headers = { Authorization: `Bearer ${token}` };
    const fetchActiveProducts = async () => {
      try {
        const response = await callAPI(
          "product/fetch_product_orders",
          "GET",
          null,
          headers
        );
        // console.log(response);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchActiveProducts();
  }, [token]);

  console.log(token);

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

  const tableColumns = [
    {
      id: "select",
      label: (
        <Checkbox
          color="error"
          // indeterminate={
          // 	selected.length > 0 &&
          // 	selected.length < handleApiRequestData?.length
          // }
          // checked={
          // 	handleApiRequestData?.length > 0 &&
          // 	selected.length === handleApiRequestData?.length
          // }
          // onChange={(event) =>
          // 	handleSelectAllClick(event, newSelected, setSelected)
          // }
          inputProps={{
            "aria-label": "select all desserts",
          }}
        />
      ),
      minWidth: 20,
      format: (value: any) => console.log(value),
    },
    {
      id: "orderId",
      label: "ORDER ID",
      minWidth: 170,
      sort: true,
      // format: (value: number) => value.toLocaleString("en-US"),
    },
    { id: "date", label: "ORDER DATE", minWidth: 170, sort: true },
    { id: "name", label: "CUSTOMERS NAME", minWidth: 170, sort: true },
    { id: "deliveryType", label: "DELIVERY TYPE", minWidth: 170, sort: true },
    {
      id: "fulfilmentMethod",
      label: "FULFILMENT METHOD",
      minWidth: 200,
      sort: true,
    },
    { id: "productName", label: "PRODUCT NAME", minWidth: 250, sort: true },

    {
      id: "msStatus",
      label: "ORDER STATUS",
      minWidth: 170,
      sort: true,
      // format: (value: number) => value.toFixed(2),
    },
    {
      id: "settings",
      // label: "ACTIVITY",
      minWidth: 50,
      sort: false,
      // format: (value: number) => value.toFixed(2),
    },
  ];

  const tableRows = [
    {
      sku: "COD-007-KO",
      price: 30,
      orderId: "4599821208",
      msStatus: "1",
      date: "01/11/2023",
      name: "Xavier Wellington",
      deliveryType: "Local Shipping",
      fulfilmentMethod: "Azany Fufilment",
      productName: "Nivea Espresso Deodorant Sp..",
    },
    {
      sku: "COD-007-KO",
      price: 30,
      orderId: "4599821208",
      msStatus: "2",
      date: "01/11/2023",
      name: "Xavier Wellington",
      deliveryType: "Local Shipping",
      fulfilmentMethod: "Azany Fufilment",
      productName: "Nivea Espresso Deodorant Sp..",
    },
    {
      sku: "COD-007-KO",
      price: 30,
      orderId: "4599821208",
      msStatus: "3",
      date: "01/11/2023",
      name: "Xavier Wellington",
      deliveryType: "Local Shipping",
      fulfilmentMethod: "Azany Fufilment",
      productName: "Nivea Espresso Deodorant Sp..",
    },
    {
      sku: "COD-007-KO",
      price: 30,
      orderId: "4599821208",
      msStatus: "4",
      date: "01/11/2023",
      name: "Xavier Wellington",
      deliveryType: "Local Shipping",
      fulfilmentMethod: "Azany Fufilment",
      productName: "Nivea Espresso Deodorant Sp..",
    },
    {
      sku: "COD-007-KO",
      price: 30,
      orderId: "4599821208",
      msStatus: "5",
      date: "01/11/2023",
      name: "Xavier Wellington",
      deliveryType: "Local Shipping",
      fulfilmentMethod: "Azany Fufilment",
      productName: "Nivea Espresso Deodorant Sp..",
    },
    {
      sku: "COD-007-KO",
      price: 30,
      orderId: "4599821208",
      msStatus: "6",
      date: "01/11/2023",
      name: "Xavier Wellington",
      deliveryType: "Local Shipping",
      fulfilmentMethod: "Azany Fufilment",
      productName: "Nivea Espresso Deodorant Sp..",
    },
    {
      sku: "COD-007-KO",
      price: 30,
      orderId: "4599821208",
      msStatus: "7",
      date: "01/11/2023",
      name: "Xavier Wellington",
      deliveryType: "Local Shipping",
      fulfilmentMethod: "Azany Fufilment",
      productName: "Nivea Espresso Deodorant Sp..",
    },
  ];

  const [showSettingsMenu, setShowSettingsMenu] = useState<SettingsMenuState>(
    {}
  );
  const [selected, setSelected] = useState([]);

  const settingsMenuHandler = (index: number) => {
    setShowSettingsMenu((prev) => {
      const updatedSettings = { ...prev };
      updatedSettings[index] = !updatedSettings[index];
      return updatedSettings;
    });
  };

  const addingMoreDataParameter = () =>
    tableRows?.map((member, index) => {
      const isItemSelected = isSelected(index, selected);
      const labelId = `enhanced-table-checkbox-${index}`;
      return {
        select: (
          <Checkbox
            color="error"
            // style={
            //   color: "#FF1818"
            // }
            onClick={() => handleClick(index, selected, setSelected)}
            checked={isItemSelected}
            inputProps={{
              "aria-labelledby": labelId,
            }}
          />
        ),
        ...member,
        date: <p className="font-normal">{member.date}</p>,
        name: <p className="font-normal">{member.name}</p>,
        deliveryType: <p className="font-normal">{member.deliveryType}</p>,
        fulfilmentMethod: (
          <p className="font-normal">{member.fulfilmentMethod}</p>
        ),
        productName: <p className="font-normal">{member.productName}</p>,
        msStatus: (
          <p
            className={`
            ${member.msStatus === "1" && "bg-[#ffc32733;] text-[#FFC327]"}
            ${member.msStatus === "2" && "bg-[#3a974c33] text-[#3A974C]"} 
            ${member.msStatus === "3" && "bg-[#d11a2a33] text-[#D11A2A]"}
            ${member.msStatus === "4" && "bg-[#7c7c7c33] text-[#7F7F7F]"}
            ${member.msStatus === "5" && "bg-[#4f414133] text-[#4F4141]"} 
            ${member.msStatus === "6" && "bg-[#4945ff33] text-[#4945FF]"}
            ${member.msStatus === "7" && "bg-[#459bff33] text-[#459BFF]"}
        
             w-max rounded-[20px] bg-gray-100 px-[12px] py-[1px] text-[14px] font-medium leading-[24px]`}
          >
            {member.msStatus === "1" && "Pending"}
            {member.msStatus === "2" && "Shipped"}
            {member.msStatus === "3" && "Failed"}
            {member.msStatus === "4" && "Cancelled"}
            {member.msStatus === "5" && "Delivered"}
            {member.msStatus === "6" && "Preparing"}
            {member.msStatus === "7" && "Confirmed"}
          </p>
        ),

        settings: (
          <div className="relative group">
            <img
              src="/images/settings-icon.svg"
              alt="settings button"
              className="cursor-pointer"
              onClick={() => {
                settingsMenuHandler(index);
              }}
            />
            <div
              className={`bg-white hidden absolute z-50 right-1 flex-col items-center px-[12.33px] py-[11.56px] rounded-lg 
                   group-hover:block`}
              style={{
                filter: "drop-shadow(0px 3.081px 3.081px rgba(0, 0, 0, 0.10))",
              }}
            >
              <ul className="flex flex-col items-center w-full">
                <li className="w-full mb-[6.42px] flex justify-center items-center">
                  <p className="bg-[#3a974c33] text-[#3A974C] w-max rounded-[20px] bg-gray-100 px-[50px] py-[1px] text-xs font-medium leading-[24px]">
                    Shipped
                  </p>
                </li>
                <li className="w-full mb-[4.42px]">
                  <p className="bg-[#4945ff33] text-[#4945FF]   w-max rounded-[20px] bg-gray-100 px-[12px] py-[1px] text-xs font-medium leading-[24px]">
                    Preparing for shipment
                  </p>
                </li>
              </ul>
            </div>
          </div>
        ),
        // generate: <Link to="generate-card">Generate card</Link>,
        // view: (
        //   <Link
        //     className="text-[#080250]"
        //     to={APP_ROUTE.ADD_NEW_EMPLOYEE}
        //     state={{ id: member?.mmMemberId }}>
        //     View
        //   </Link>
        // ),
      };
    });

  const tabs = [
    {
      title: "All",
      value: "",
    },
    {
      title: "Pending",
      value: "",
    },
    {
      title: "Confirmed",
      value: "",
    },
    {
      title: "Preparing for Shipment",
      value: "",
    },
    {
      title: "Shipped",
      value: "",
    },
    {
      title: "Cancelled",
      value: "",
    },
  ];

  return (
    <ManufacturersProfileLayout>
      <div className="px-[30px] font-DM-sans">
        <div className="mb-[30px] flex justify-between">
          <div>
            <p className="font-medium text-sm text-[#29020280]">
              Orders Management / All
            </p>
            <p className="text-[34px] text-[#290202] font-bold">Orders</p>
          </div>
          <div className="bg-white py-[10px] px-[11px] items-center rounded-[30px] hidden md:flex">
            <form>
              <div className="relative">
                <div className="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-[270px] font-DM-sans p-4 ps-10 text-base font-normal placeholder:text-[#C2B4B4] rounded-[30px] bg-[#EEEDED] gray-60"
                  placeholder="Search products"
                  // onChange={handleSearch}
                  // value={searchTerm}
                  required
                />
                {/* <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
              </div>
            </form>
            <p className="mx-4 font-DM-sans text-[#4F4141] font-medium">
              2368 <span className="text-[#2902027f] ">orders</span>
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-5">
          <div className="w-[248px] max-w-[248px] max-h-[97px] col-span-1 flex items-center py-[20px] px-[17px] bg-white rounded-[20px]">
            <img
              src="/images/stat.svg"
              alt="stat"
              className="mr-[14px] w-[56px] h-[56px] object-cover"
            />
            <div className="flex flex-col justify-center">
              <p className="text-[#29020280] font-medium text-base">
                Total Orders
              </p>
              <p className="text-2xl font-bold text-[#4F4141]">2368</p>
            </div>
          </div>

          <div className="w-[248px] max-w-[248px] max-h-[97px] col-span-1 flex items-center py-[20px] px-[17px] bg-white rounded-[20px]">
            <div className="flex flex-col justify-center">
              <p className="text-[#29020280] font-medium text-base">
                Orders this Month
              </p>
              <p className="text-2xl font-bold text-[#4F4141]">585</p>
              <p className="text-[#A3AED0] text-xs font-normal font-DM-sans">
                <span className="text-[#05CD99]">+23%</span> since last month
              </p>
            </div>
          </div>
          <div className="w-[248px] max-w-[248px] max-h-[97px] col-span-1 flex items-center py-[20px] px-[17px] bg-white rounded-[20px]">
            <img
              src="/images/total-customers.svg"
              alt="stat"
              className="mr-[14px] w-[56px] h-[56px] object-cover"
            />
            <div className="flex flex-col justify-center">
              <p className="text-[#29020280] font-medium text-base">
                Total Customers
              </p>
              <p className="text-2xl font-bold text-[#4F4141]">350</p>
            </div>
          </div>
          <div className="w-[248px] max-w-[248px] max-h-[97px] col-span-1 flex items-center py-[20px] px-[17px] bg-white rounded-[20px]">
            <img
              src="/images/orders-delivered.svg"
              alt="stat"
              className="mr-[14px] w-[56px] h-[56px] object-cover"
            />
            <div className="flex flex-col justify-center">
              <p className="text-[#29020280] font-medium text-base">
                Orders Delivered
              </p>
              <p className="text-2xl font-bold text-[#4F4141]">2035</p>
            </div>
          </div>
          <div className="w-[248px] max-w-[248px] max-h-[97px] col-span-1 flex items-center py-[20px] px-[17px] bg-white rounded-[20px]">
            <img
              src="/images/ongoing-orders.svg"
              alt="stat"
              className="mr-[14px] w-[56px] h-[56px] object-cover"
            />
            <div className="flex flex-col justify-center">
              <p className="text-[#29020280] font-medium text-base">
                Ongoing Orders
              </p>
              <p className="text-2xl font-bold text-[#4F4141]">146</p>
            </div>
          </div>
          <div className="w-[248px] max-w-[248px] max-h-[97px] col-span-1 flex items-center py-[20px] px-[17px] bg-white rounded-[20px]">
            <img
              src="/images/dollar.svg"
              alt="stat"
              className="mr-[14px] w-[56px] h-[56px] object-cover"
            />
            <div className="flex flex-col justify-center">
              <p className="text-[#29020280] font-medium text-base">
                Total Sales
              </p>
              <p className="text-2xl font-bold text-[#4F4141]">$642.39</p>
            </div>
          </div>
        </div>
        <div className="bg-white w-full rounded-[20px] mt-[22px] px-[31px] py-[19px]">
          <div className="w-full grid lg:grid-cols-3 gap-12 pb-[23px]">
            <div className="col-span-2 hidden sm:flex justify-between items-center">
              {tabs?.map((tab, index) => (
                <p
                  key={index}
                  className="text-xs xl:text-sm font-bold text-[#29020266] hover:text-[#290202] cursor-pointer"
                >
                  {tab.title}
                </p>
              ))}
            </div>

            <div className="col-span-1 flex justify-end items-center w-full">
              <div className="mr-4">
                <select
                  id="countries"
                  className="bg-[#00000019] border border-[#00000019] text-[#29020266] text-sm rounded-[10px] block w-full p-2.5 max-h-[36.5px] min-w-[114.9px] outline-none"
                >
                  <option selected>Bulk Actions</option>
                  <option value="US">United States</option>
                </select>
              </div>
              <div className="">
                <img
                  src="/images/apply-btn.svg"
                  alt="btn"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div>
            <TableComponent
              rows={addingMoreDataParameter()}
              columns={tableColumns}
              rowsPerPage={8}
            />
          </div>
        </div>
      </div>
    </ManufacturersProfileLayout>
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
