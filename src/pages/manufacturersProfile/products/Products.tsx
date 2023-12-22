import React, { useEffect, useState } from "react";
import ProductActive from "../../../components/General/manufacturers/product/Active";
import ProductClose from "../../../components/General/manufacturers/product/Closed";
import ProductRev from "../../../components/General/manufacturers/product/Reviewing";
import ManufacturersProfileLayout from "../../../components/General/manufacturers/profile/LayoutComp";
import { Link } from "react-router-dom";
import callAPI from "../../../api/callApi";
import useAuthToken from "../../../hooks/useAuthToken";
import TableComponent from "../../../components/Core/Table";
import { Checkbox } from "@mui/material";
import { handleClick, isSelected } from "../../../helpers/helperFunction";

type Product = {
  category: string;
  created_at: string;
  currency: string;
  discount_enabled: string;
  id: number;
  image_url: string;
  images: string;
  laravel_through_key: string;
  price: string;
  product_details: ProductDetails[];
  product_name: string;
  stock: string;
  store_id: number;
  sub_category: string;
  updated_at: string;
  user_id: number;
};

type ProductDetails = {
  city: string;
  country: string;
  created_at: string;
  description: string;
  id: number;
  product_id: number;
  specifications: string;
  state: string;
  updated_at: string;
};

interface SettingsMenuState {
  [key: number]: boolean;
}

const MProduct = () => {
  const [selected, setSelected] = useState([]);

  const [products, setProducts] = useState<Product[]>([]);
  const [active, setActive] = useState(true);
  const [review, setReview] = useState(false);
  const [closed, setClosed] = useState(false);
  const [searchBarVisible, setSearchBarVisible] = useState(false);
  const [authToken] = useAuthToken();
  // const [showSettingsMenu, setShowSettingsMenu] = useState(false);

  // const settingsMenuHandler = () => {
  //   setShowSettingsMenu(!showSettingsMenu);
  //   console.log(showSettingsMenu);
  // };

  // const [showSettingsMenu, setShowSettingsMenu] = useState<Array[]>([]);

  // const settingsMenuHandler = (index: any) => {
  //   // Create a copy of the array to avoid mutating state directly
  //   const updatedSettings = [...showSettingsMenu];
  //   updatedSettings[index] = !updatedSettings[index];
  //   setShowSettingsMenu(updatedSettings);
  // };

  const [showSettingsMenu, setShowSettingsMenu] = useState<SettingsMenuState>(
    {}
  );

  const settingsMenuHandler = (index: number) => {
    setShowSettingsMenu((prev) => {
      const updatedSettings = { ...prev };
      updatedSettings[index] = !updatedSettings[index];
      return updatedSettings;
    });
  };

  const handleActive = () => {
    setActive(true);
    setReview(false);
    setClosed(false);
  };
  const handleReview = () => {
    setActive(false);
    setReview(true);
    setClosed(false);
  };
  const handleClosed = () => {
    setActive(false);
    setReview(false);
    setClosed(true);
  };

  const tableColumns = [
    {
      id: "select",
      // label: (
      //   <Checkbox
      //     color="error"
      //     // indeterminate={
      //     // 	selected.length > 0 &&
      //     // 	selected.length < handleApiRequestData?.length
      //     // }
      //     // checked={
      //     // 	handleApiRequestData?.length > 0 &&
      //     // 	selected.length === handleApiRequestData?.length
      //     // }
      //     // onChange={(event) =>
      //     // 	handleSelectAllClick(event, newSelected, setSelected)
      //     // }
      //     inputProps={{
      //       "aria-label": "select all desserts",
      //     }}
      //   />
      // ),
      minWidth: 20,
      format: (value: any) => console.log(value),
    },
    {
      id: "name",
      label: "PRODUCT NAME",
      minWidth: 370,
      sort: true,
      // format: (value: number) => value.toLocaleString("en-US"),
    },
    { id: "brand", label: "BRAND", minWidth: 170, sort: true },
    { id: "sku", label: "SKU", minWidth: 170, sort: true },
    { id: "price", label: "PRICE", minWidth: 170, sort: true },
    { id: "salesPrice", label: "SALES PRICE", minWidth: 170, sort: true },
    { id: "quantity", label: "QUANTITY", minWidth: 170, sort: true },
    {
      id: "stock",
      label: "STOCk",
      minWidth: 170,
      sort: true,
      // format: (value: number) => value.toLocaleString("en-US"),
    },
    {
      id: "msStatus",
      label: "STATUS",
      minWidth: 170,
      sort: true,
      // format: (value: number) => value.toFixed(2),
    },
    {
      id: "ratings",
      label: "RATINGS",
      minWidth: 170,
      sort: true,
      // format: (value: number) => value.toFixed(2),
    },
    {
      id: "activity",
      label: "ACTIVITY",
      minWidth: 170,
      sort: false,
      // format: (value: number) => value.toFixed(2),
    },
    {
      id: "settings",
      // label: "ACTIVITY",
      minWidth: 100,
      sort: false,
      // format: (value: number) => value.toFixed(2),
    },
    // {
    //   id: "msStatus",
    //   label: "Status",
    //   minWidth: 170,
    //   format: (value: any) => console.log(value),
    // },
  ];

  const tableRows = [
    {
      sku: "COD-007-KO",
      price: 30,
      name: "Micellar Hyaluronic Aloe Water...",
      stock: 1230,
      ratings: 67383,
      review: "111",
      activity: "34444",
      msStatus: "1",
    },
    {
      sku: "COD-007-KO",
      price: 30,
      name: "Micellar Hyaluronic Aloe Water...",
      stock: 1200,
      ratings: 67383,
      review: "111",
      activity: "34444",
      msStatus: "2",
    },
    {
      sku: "COD-007-KO",
      price: 30,
      name: "Micellar Hyaluronic Aloe Water...",
      stock: 1230,
      ratings: 67383,
      review: "111",
      activity: "34444",
      msStatus: "3",
    },
    {
      sku: "COD-007-KO",
      price: 30,
      name: "Micellar Hyaluronic Aloe Water...",
      stock: 1230,
      ratings: 67383,
      review: "111",
      activity: "34444",
      msStatus: "1",
    },
    {
      sku: "COD-007-KO",
      price: 30,
      name: "Micellar Hyaluronic Aloe Water...",
      stock: 1230,
      ratings: 67383,
      review: "111",
      activity: "34444",
      msStatus: "2",
    },
    {
      sku: "COD-007-KO",
      price: 30,
      name: "Micellar Hyaluronic Aloe Water...",
      stock: 1230,
      ratings: 67383,
      review: "111",
      activity: "34444",
      msStatus: "3",
    },
    {
      sku: "COD-007-KO",
      price: 30,
      name: "Micellar Hyaluronic Aloe Water...",
      stock: 1230,
      ratings: 67383,
      review: "111",
      activity: "34444",
      msStatus: "1",
    },
    {
      sku: "COD-007-KO",
      price: 30,
      name: "Micellar Hyaluronic Aloe Water...",
      stock: 1230,
      ratings: 67383,
      review: "111",
      activity: "34444",
      msStatus: "2",
    },
    {
      sku: "COD-007-KO",
      price: 30,
      name: "Micellar Hyaluronic Aloe Water...",
      stock: 1230,
      ratings: 67383,
      review: "111",
      activity: "34444",
      msStatus: "3",
    },
    {
      sku: "COD-007-KO",
      price: 30,
      name: "Micellar Hyaluronic Aloe Water...",
      stock: 1230,
      ratings: 67383,
      review: "111",
      activity: "34444",
      msStatus: "1",
    },
    {
      sku: "COD-007-KO",
      price: 30,
      name: "Micellar Hyaluronic Aloe Water...",
      stock: 1230,
      ratings: 67383,
      review: "111",
      activity: "34444",
      msStatus: "2",
    },
    {
      sku: "COD-007-KO",
      price: 30,
      name: "Micellar Hyaluronic Aloe Water...",
      stock: 1230,
      ratings: 67383,
      review: "111",
      activity: "34444",
      msStatus: "3",
    },
    {
      sku: "COD-007-KO",
      price: 30,
      name: "Micellar Hyaluronic Aloe Water...",
      stock: 1230,
      ratings: 67383,
      review: "111",
      activity: "34444",
      msStatus: "3",
    },
  ];

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
        msStatus: (
          <p
            className={`
            ${member.msStatus === "1" && "bg-[#ffc32733;] text-[#FFC327]"}
            ${member.msStatus === "2" && "bg-[#3a974c33] text-[#3A974C]"} ${
              member.msStatus === "3" && "bg-[#d11a2a33] text-[#D11A2A]"
            } w-max rounded-[20px] bg-gray-100 px-[12px] py-[1px] text-[14px] font-medium leading-[24px]`}
          >
            {member.msStatus === "1" && "Pending"}
            {member.msStatus === "2" && "Active"}
            {member.msStatus === "3" && "Rejected"}
          </p>
        ),
        ratings: (
          <p className="flex items-center">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
              >
                <path
                  d="M10.9644 4.14482C10.8823 3.90053 10.6709 3.72243 10.4163 3.68349L7.45334 3.23071L6.12248 0.395501C6.00898 0.153835 5.76645 0 5.5 0C5.23337 0 4.99101 0.153835 4.87751 0.395501L3.54647 3.23089L0.583536 3.68366C0.328956 3.7226 0.117505 3.90053 0.0356137 4.14499C-0.0462778 4.38945 0.0155337 4.65871 0.195555 4.84345L2.35931 7.06227L1.84683 10.2013C1.80458 10.4611 1.91475 10.7224 2.1297 10.8743C2.34447 11.0262 2.62803 11.0416 2.85904 10.9141L5.50017 9.45344L8.1413 10.9141C8.24554 10.9717 8.36026 11 8.47446 11C8.61345 11 8.75243 10.9577 8.87064 10.8743C9.08559 10.7225 9.19559 10.4613 9.15333 10.2013L8.64086 7.06227L10.8048 4.84345C10.9845 4.65871 11.0463 4.38945 10.9644 4.14482Z"
                  fill="#FF9900"
                />
              </svg>
            </span>
            <span className="font-medium pr-2">4.6</span>
            <span className="text-[#29020266] font-medium">200 Reviews</span>
          </p>
        ),
        activity: (
          <p className="font-medium">
            <span className=" text-[#29020266] pr-2">8:30pm</span>
            <span className="text-[#4F4141]">01/11/2023</span>
          </p>
        ),
        price: (
          <p className="font-normal">
            <span className="text-[#C2B4B4]">$</span>
            <span className="text-[#4F4141]">{member.price.toFixed(2)}</span>
          </p>
        ),
        salesPrice: (
          <p className="font-normal">
            <span className="text-[#C2B4B4]">$</span>
            <span className="text-[#4F4141]">{member.price.toFixed(2)}</span>
          </p>
        ),
        quantity: (
          <p className="font-normal">
            {/* <span className="text-[#C2B4B4]">$</span> */}
            <span className="text-[#4F4141]">50</span>
          </p>
        ),
        brand: (
          <p className="font-bold capitalize">
            {/* <span className="text-[#C2B4B4]">$</span> */}
            <span className="text-[#4F4141]">Reckitt</span>
          </p>
        ),
        name: (
          <div className="flex items-center">
            <img src="/images/credits.svg" alt="icon" className="mr-1" />
            <p className="flex flex-col">
              <span className="text-[#4F4141] font-bold ">
                Micellar Hyaluronic Aloe Water...
              </span>
              <span className="text-[#29020266] font-medium">
                Garnier Skin Active
              </span>
            </p>
          </div>
        ),
        settings: (
          <div className="relative">
            <img
              src="/images/settings-icon.svg"
              alt="settings button"
              className="cursor-pointer"
              onClick={() => {
                settingsMenuHandler(index);
              }}
            />

            <ul
              className={`bg-white ${
                showSettingsMenu[index] ? "absolute z-50" : "hidden"
              } flex-col items-center px-[12.33px] py-[11.56px] rounded-lg w-[81.19px] max-h-[93.4px] mr-4`}
              style={{
                filter: "drop-shadow(0px 3.081px 3.081px rgba(0, 0, 0, 0.10))",
              }}
            >
              <li className="w-full mb-[6.42px]">
                <img
                  src="/images/edit-btn.svg"
                  alt="edit button"
                  className="cursor-pointer"
                />
              </li>
              <li className="w-full mb-[4.42px]">
                <img
                  src="/images/draft-btn.svg"
                  alt="draft button"
                  className="cursor-pointer"
                />
              </li>
              <li className="w-full">
                <img
                  src="/images/delete-btn.svg"
                  alt="delete button"
                  className="cursor-pointer"
                />
              </li>
            </ul>
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
      title: "Active",
      value: "",
    },
    {
      title: "Inactive",
      value: "",
    },
    {
      title: "Draft",
      value: "",
    },
    {
      title: "Rejected",
      value: "",
    },
  ];

  const token = localStorage.getItem("token");

  useEffect(() => {
    const headers = { Authorization: `Bearer ${token}` };
    const fetchActiveProducts = async () => {
      try {
        const response = await callAPI(
          "auth/store/fetch_seller_products",
          "GET",
          null,
          headers
        );
        // console.log(response);
        setProducts(response.data?.values);
      } catch (error) {
        console.error(error);
      }
    };
    fetchActiveProducts();
  }, [authToken]);

  interface DataItem {
    id: number;
    name: string;
  }

  // const initialData: DataItem[] = [
  //   { id: 1, name: "John" },
  //   { id: 2, name: "Jane" },
  //   { id: 3, name: "Bob" },
  //   // Add more objects as needed
  // ];

  // const [data, setData] = useState<DataItem[]>(initialData);
  // const [searchTerm, setSearchTerm] = useState<string>("");

  // const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const term = event.target.value.toLowerCase();
  //   setSearchTerm(term);

  //   // Filter the data based on the search term
  //   const filteredData = initialData.filter((item) =>
  //     item.name.toLowerCase().includes(term)
  //   );

  //   setData(filteredData);

  //   console.log(searchTerm, data);
  // };

  return (
    <div className="bg-[#]">
      <ManufacturersProfileLayout>

        {/* <div className="smm:p-8 p-1 smm:w-full w-[calc(100%)] mx-auto">
          <div className="smm:w-full ">
            <div className="">
              <div className="bg-white smm:ml-0 -ml-2 smm:w-full w-[calc(100%+16px)] smm:px-0 px-2">
                <h1 className="text-[40px] font-[500] xs:text-[26px]">


                  My Products
                </h1>
                {!searchBarVisible && (
                  <div className="pt-3 w-full justify-between items-center flex">
                    <div className="flex items-center text-center gap-3">
                      <h1
                        className={
                          active
                            ? "font-bold cursor-pointer border-b-4 border-[#E51B48] pb-1"
                            : "text-[#515151] cursor-pointer pb-1 border-b-4 border-white"
                        }
                        onClick={() => handleActive()}
                      >
                        Active
                      </h1>
                      <h1
                        className={
                          review
                            ? "font-bold cursor-pointer border-b-4 border-[#E51B48] pb-1"
                            : "text-[#515151] cursor-pointer pb-1 border-b-4 border-white"
                        }
                        onClick={() => handleReview()}
                      >
                        Reviewing
                      </h1>
                      <h1
                        className={
                          closed
                            ? "font-bold cursor-pointer border-b-4 pb-1 border-[#E51B48]"
                            : "text-[#515151] cursor-pointer pb-1 border-b-4 border-white"
                        }
                        onClick={() => handleClosed()}
                      >
                        Closed
                      </h1>
                    </div>
                    <div className="flex-row gap-4 hidden md:flex">
                      <div className="hidden md:flex justify-center items-center">
                        <input
                          className="py-2 px-4 rounded-md border border-[#C4C4C4]"
                          placeholder="Search my Products"
                        />
                      </div>
                      <a href="/manufacturers-profile/add-product">
                        <button className="bg-[#1B7CFC] text-white text-sm py-2 px-4 rounded-md xs:hidden">
                          Add Product
                        </button>
                      </a>
                    </div>
                    <div
                      className="md:hidden block pb-2 cursor-pointer"
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
                  <div className="flex justify-center items-center py-3 w-full relative">
                    <input
                      type="text"
                      placeholder="Search"
                      className="py-3 w-full border-x-0 border border-gray-200 px-3"
                    />
                    <div
                      className=""
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

              <div className="py-4 px-4 bg-white">
                {active && (
                  <div className="space-y-3">
                    {products.length > 0 ? (
                      products.map((product) => (
                        <ProductActive key={product.id} data={product} />
                      ))
                    ) : (
                      <p> Fetching products ...</p>
                    )}
                  </div>
                )}
                {review && <ProductRev />}
                {closed && <ProductClose />}
              </div>
              <a href="/manufacturers-profile/add-product">
                <button className="bg-[#1B7CFC] text-white py-2 w-full px-4 rounded-md sm:hidden lg:hidden md:hidden 2xl:hidden xl:hidden">
                  Add Product
                </button>
              </a>
            </div>
          </div>
        </div> */}
        <div className="px-[30px] font-DM-sans">
          <div className="mb-[30px] flex justify-between">
            <div>
              <p className="font-medium text-sm text-[#29020280]">
                Products/All
              </p>
              <p className="text-[34px] text-[#290202] font-bold">Products</p>
            </div>
            <div className="bg-white py-[10px] px-[11px] flex items-center rounded-[30px]">
              <form>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
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
                245 <span className="text-[#2902027f] ">items</span>
              </p>
              <button className="px-[14px] py-[9px] bg-[#01B574] rounded-[20px]">
                <p className="text-white font-DM-sans font-medium text-sm flex items-center">
                  <span>
                    <img src="/images/plus.svg" alt="icon" />
                  </span>{" "}
                  New Products
                </p>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-5">
            <div className="w-[248px] max-w-[248px] col-span-1 flex py-[20px] px-[17px] bg-white rounded-[20px]">
              <img src="/images/stat.svg" alt="stat" className="mr-[14px]" />
              <div className="flex flex-col justify-center">
                <p className="text-[#29020280] font-medium text-base">
                  Total Sales
                </p>
                <p className="text-2xl font-bold text-[#4F4141]">$350.4</p>
              </div>
            </div>
            <div className="w-[248px] max-w-[248px] col-span-1 flex py-[20px] px-[17px] bg-white rounded-[20px]">
              <img src="/images/dollar.svg" alt="stat" className="mr-[14px]" />
              <div className="flex flex-col justify-center">
                <p className="text-[#29020280] font-medium text-base">
                  Sales this Week
                </p>
                <p className="text-2xl font-bold text-[#4F4141]">$642.39</p>
              </div>
            </div>
            <div className="w-[248px] max-w-[248px] col-span-1 flex py-[20px] px-[17px] bg-white rounded-[20px]">
              <div className="flex flex-col justify-center">
                <p className="text-[#29020280] font-medium text-base">
                  Sales this Month
                </p>
                <p className="text-2xl font-bold text-[#4F4141]">$574.34</p>
              </div>
            </div>
            <div className="w-[248px] max-w-[248px] col-span-1 flex py-[20px] px-[17px] bg-white rounded-[20px]">
              <img src="/images/orders.svg" alt="stat" className="mr-[14px]" />
              <div className="flex flex-col justify-center">
                <p className="text-[#29020280] font-medium text-base">
                  Total Orders
                </p>
                <p className="text-2xl font-bold text-[#4F4141]">154</p>
              </div>
            </div>
            <div className="col-span-1 flex py-[20px] px-[17px] bg-white rounded-[20px] w-[248px] max-w-[248px]">
              <img src="/images/store.svg" alt="stat" className="mr-[14px]" />
              <div className="flex flex-col justify-center">
                <p className="text-[#29020280] font-medium text-base">
                  Store Rating
                </p>
                <p className="text-2xl font-bold text-[#4F4141] flex items-center">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        d="M17.9417 6.78243C17.8074 6.38269 17.4614 6.09124 17.0448 6.02753L12.1964 5.28662L10.0186 0.647184C9.83288 0.25173 9.43601 0 8.99999 0C8.56369 0 8.16711 0.25173 7.98139 0.647184L5.80332 5.28691L0.954877 6.02781C0.538292 6.09153 0.192281 6.38269 0.058277 6.78272C-0.0757274 7.18274 0.0254188 7.62334 0.32 7.92565L3.86069 11.5564L3.02209 16.6931C2.95294 17.1182 3.13323 17.5457 3.48496 17.7943C3.8364 18.0429 4.30041 18.068 4.67843 17.8594L9.00028 15.4693L13.3221 17.8594C13.4927 17.9537 13.6804 18 13.8673 18C14.0947 18 14.3222 17.9309 14.5156 17.7943C14.8673 17.546 15.0473 17.1185 14.9782 16.6931L14.1396 11.5564L17.6806 7.92565C17.9746 7.62334 18.0757 7.18274 17.9417 6.78243Z"
                        fill="#FF9900"
                      />
                    </svg>
                  </span>
                  4.8 (467)
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white w-full rounded-[20px] mt-[22px] px-[31px] py-[19px]">
            <div className="w-full grid lg:grid-cols-4 gap-4 pb-[23px]">
              <div className="col-span-2 flex justify-between items-center">
                {tabs?.map((tab, index) => (
                  <p
                    key={index}
                    className="text-[10.77px] 3xl:text-[14px] font-bold text-[#29020266] hover:text-[#290202] cursor-pointer"
                  >
                    {tab.title}
                  </p>
                ))}
              </div>
              <div className="col-span-2 grid grid-cols-3 gap-4">
                <div className="col-span-1">
                  <select
                    id="countries"
                    className="bg-[#00000019] border border-[#00000019] text-[#29020266] text-[9.424px] rounded-[10px] block p-2.5 max-h-[36.5px] min-w-[114.9px] outline-none"
                  >
                    <option selected>Select by Category</option>
                    <option value="US">United States</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <select
                    id="countries"
                    className="bg-[#00000019] border border-[#00000019] text-[#29020266] text-[9.424px] rounded-[10px] block p-2.5 max-h-[36.5px] min-w-[114.9px] outline-none"
                  >
                    <option selected>Filter by Stock state</option>
                    <option value="US">United States</option>
                  </select>
                </div>
                <div className="col-span-1 w-full">
                  <img
                    src="/images/filter-btn.svg"
                    alt="btn"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="col-span-1 grid grid-cols-2 items-center gap-4 w-full">
                <div className="col-span-1 w-full">
                  <select
                    id="countries"
                    className="bg-[#00000019] border border-[#00000019] text-[#29020266] text-[9.424px] rounded-[10px] block w-full p-2.5 max-h-[36.5px] min-w-[114.9px] outline-none"
                  >
                    <option selected>Bulk Actions</option>
                    <option value="US">United States</option>
                  </select>
                </div>
                <div className="col-span-1 w-full">
                  <img
                    src="/images/apply-btn.svg"
                    alt="btn"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <TableComponent
              rows={addingMoreDataParameter()}
              columns={tableColumns}
              rowsPerPage={8}
            />
          </div>
        </div>
      </ManufacturersProfileLayout>
    </div>
  );
};

export default MProduct;
