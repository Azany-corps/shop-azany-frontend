import React, { useEffect, useState } from "react";
import ManufacturersProfileLayout from "../../../components/General/manufacturers/profile/LayoutComp";
import { Link, useNavigate } from "react-router-dom";
import callAPI from "../../../api/callApi";
import useAuthToken from "../../../hooks/useAuthToken";
import TableComponent from "../../../components/Core/Table";
import { Checkbox } from "@mui/material";
import { handleClick, isSelected } from "../../../helpers/helperFunction";
import { fetchBrands } from "../../../Services/brand.service";
import Loader from "../../../components/Core/Loader";

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
  status: string;
  quantity: string;
  sales_price: string;
  brand_id: string;
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

interface Brand {
  id: number;
  name: string;
}

const MProduct = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState([]);

  const [products, setProducts] = useState<Product[]>([]);
  const [stat, setStat] = useState<any>({});
  const [searchBarVisible, setSearchBarVisible] = useState(false);
  const [authToken] = useAuthToken();
  const [brands, setBrands] = useState<Brand[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [activeTab, setActiveTab] = useState<String>("All");

  useEffect(() => {
    setIsLoading(true);
    fetchBrands()
      .then((res) => {
        setBrands(res);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

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
      minWidth: 300,
      sort: true,
      // format: (value: number) => value.toLocaleString("en-US"),
    },
    { id: "brand", label: "BRAND", minWidth: 170, sort: true },
    { id: "SKU", label: "SKU", minWidth: 170, sort: true },
    { id: "price", label: "PRICE", minWidth: 170, sort: true },
    { id: "salesPrice", label: "SALES PRICE", minWidth: 170, sort: true },
    { id: "quantity", label: "QUANTITY", minWidth: 170, sort: true },
    {
      id: "manage_stock_quantity",
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
    ,
  ];

  const isToday = (date: string) => {
    const inputDate = new Date(date);
    const currentDate = new Date();

    const isToday =
      inputDate.getDate() === currentDate.getDate() &&
      inputDate.getMonth() === currentDate.getMonth() &&
      inputDate.getFullYear() === currentDate.getFullYear();

    return isToday;
  };

  const idNameGetter = (brandId: string) => {
    const brand = brands.filter((brand) => Number(brandId) === brand.id);
    return brand[0].name;
  };

  console.log(brands);

  const addingMoreDataParameter = () =>
    products?.map((product, index) => {
      const time = new Date(product?.updated_at).toLocaleTimeString([], {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });

      const amPm = time.slice(-2).toLowerCase();
      // const timeWithoutAmPm = product?.updated_at.slice(0, -2);
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
        ...product,
        msStatus: (
          <p
            className={`
            ${product.status === "0" && "bg-[#ffc32733;] text-[#FFC327]"}
            ${product.status === "1" && "bg-[#3a974c33] text-[#3A974C]"} ${
              product.status === "2" && "bg-[#d11a2a33] text-[#D11A2A]"
            } w-max rounded-[20px] bg-gray-100 px-[12px] py-[1px] text-[14px] font-medium leading-[24px]`}
          >
            {product.status === "0" && "Pending"}
            {product.status === "1" && "Active"}
            {product.status === "2" && "Rejected"}
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
            <span className=" text-[#29020266] pr-2">
              {`${time.slice(0, -3)}${amPm}`}
            </span>
            <span className="text-[#4F4141]">
              {isToday(product?.updated_at)
                ? "Today"
                : new Date(product?.updated_at).toLocaleDateString()}
              {/* {new Date(product?.updated_at).toLocaleDateString()} */}
            </span>
          </p>
        ),
        price: (
          <p className="font-normal">
            <span className="text-[#C2B4B4]">$</span>
            <span className="text-[#4F4141]">
              {Number(product.price).toFixed(2)}
            </span>
          </p>
        ),
        salesPrice: (
          <p className="font-normal">
            <span className="text-[#C2B4B4]">$</span>
            <span className="text-[#4F4141]">
              {Number(product.sales_price).toFixed(2)}
            </span>
          </p>
        ),
        quantity: (
          <p className="font-normal">
            {/* <span className="text-[#C2B4B4]">$</span> */}
            <span className="text-[#4F4141]">{product?.quantity}</span>
          </p>
        ),
        brand: (
          <p className="font-bold capitalize">
            {/* <span className="text-[#C2B4B4]">$</span> */}
            <span className="text-[#4F4141]">
              {idNameGetter(product?.brand_id)}
              {/* {product?.brand} */}
            </span>
          </p>
        ),
        name: (
          <div className="flex items-center">
            <img src="/images/credits.svg" alt="icon" className="mr-1" />
            <p className="flex flex-col">
              <span className="text-[#4F4141] font-bold ">
                {product?.product_name}
              </span>
              <span className="text-[#29020266] font-medium">
                {product?.category}
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
        //     state={{ id: product?.mmMemberId }}>
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
      value: "0",
    },
    {
      title: "Active",
      value: "1",
    },
    {
      title: "Rejected",
      value: "2",
    },
    {
      title: "Draft",
      value: "4",
    },

    {
      title: "Blocked",
      value: "6",
    },
  ];

  const token = localStorage.getItem("token");

  useEffect(() => {
    const headers = { Authorization: `Bearer ${token}` };
    const fetchActiveProducts = async () => {
      try {
        setIsLoading(true);
        const response = await callAPI(
          "auth/store/fetch_seller_products",
          "GET",
          null,
          headers
        );
        // console.log(response);
        setProducts(response.data?.values);
        setStat(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };
    fetchActiveProducts();
  }, [authToken]);

  const getProductByStatus = async (status: string) => {
    const headers = { Authorization: `Bearer ${token}` };

    try {
      setIsLoading(true);
      const response = await callAPI(
        `auth/store/fetch_seller_products/${status}`,
        "GET",
        null,
        headers
      );
      setProducts(response.data?.values);
      setStat(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  console.log(products);
  if (isLoading) <Loader />;

  return (
    <div className="bg-[#]">
      <ManufacturersProfileLayout>
        {isLoading && <Loader />}
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
                245 <span className="text-[#2902027f] ">items</span>
              </p>
              <button
                className="px-[14px] py-[9px] bg-[#01B574] rounded-[20px]"
                onClick={() => {
                  navigate("/manufacturers-profile/add-product");
                }}
              >
                <p className="text-white font-DM-sans font-medium text-sm flex items-center">
                  <span>
                    <img src="/images/plus.svg" alt="icon" />
                  </span>
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
                <p className="text-2xl font-bold text-[#4F4141]">
                  ${stat?.highest_product_sale_7 || 0}
                </p>
              </div>
            </div>
            <div className="w-[248px] max-w-[248px] col-span-1 flex py-[20px] px-[17px] bg-white rounded-[20px]">
              <div className="flex flex-col justify-center">
                <p className="text-[#29020280] font-medium text-base">
                  Sales this Month
                </p>
                <p className="text-2xl font-bold text-[#4F4141]">
                  ${stat?.highest_product_sale_30 || 0}
                </p>
              </div>
            </div>
            <div className="w-[248px] max-w-[248px] col-span-1 flex py-[20px] px-[17px] bg-white rounded-[20px]">
              <img src="/images/orders.svg" alt="stat" className="mr-[14px]" />
              <div className="flex flex-col justify-center">
                <p className="text-[#29020280] font-medium text-base">
                  Total Orders
                </p>
                <p className="text-2xl font-bold text-[#4F4141]">
                  {stat?.total_products_sold || 0}
                </p>
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
                  {stat?.total_store_rating || 0}
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
                    className={`text-[10.77px] 3xl:text-[14px] font-bold ${
                      tab.title === activeTab
                        ? "text-[#290202]"
                        : "text-[#29020266]"
                    }  hover:text-[#290202] cursor-pointer`}
                    onClick={() => {
                      getProductByStatus(tab?.value);
                      setActiveTab(tab.title);
                    }}
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
