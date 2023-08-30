import BottomHeader from "../../components/General/BottomHeader";
import MenuIcon from "@mui/icons-material/Menu";
import Footer from "../../components/General/Footer";
import Header from "../../components/General/Header";
import TopHeader from "../../components/General/TopHeader";
import React, { useEffect, useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";
import SellerHome from "../../components/CustomerProfile/SellerHome";
import SellerAbout from "../../components/CustomerProfile/SellerAbout";
import SellerEnterprise from "../../components/CustomerProfile/SellerEnterprise";
import SellerProduct from "../../components/CustomerProfile/SellerProduct";
import callAPI from "../../api/callApi";
import { useNavigate, useParams } from "react-router-dom";
import MobileHeader from "../../components/General/MobileHeader";
import MobileFooter from "../../components/General/MobileFooter";

const PProduct = () => {
  const { productID, storeID } = useParams();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };
  const [home, setHome] = useState(false);
  const [about, setAbout] = useState(false);
  const [enterprise, setEnterprise] = useState(false);
  const [product, setProduct] = useState(true);
  const [storeDetails, setStoreDetails] = useState<any>([]);
  const [otherStoreProducts, setOtherStoreProducts] = useState<any>([]);
  const [productDetails, setProductDetails] = useState<any>([]);
  useNavigate();

  const handleHome = () => {
    setHome(true);
    setEnterprise(false);
    setAbout(false);
    setProduct(false);
  };
  const handleAbout = () => {
    setHome(false);
    setEnterprise(false);
    setAbout(true);
    setProduct(false);
  };
  const handleEnterprise = () => {
    setHome(false);
    setEnterprise(true);
    setAbout(false);
    setProduct(false);
  };
  const handleProduct = () => {
    setHome(false);
    setEnterprise(false);
    setAbout(false);
    setProduct(true);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}` };

    const fetchStoreDetails = async () => {
      try {
        const response = await callAPI(`general/products/fetch_store_details/${storeID}/${productID}`, "GET", null, headers);
        const data = response.data?.values[0];
        setStoreDetails(data);
        setProductDetails(response?.data?.values?.[0].single_product?.[0]);
        setOtherStoreProducts(response?.data?.values?.[0].all_store_products);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchStoreDetails();
  }, []);

  return (
    <div className="bg-[#F5F5F5]">
      <TopHeader />
      <BottomHeader style={"bg-[#1B7CFC] py-2 xs:hidden"} />
      <Header style={"bg-[#70ADFF] xs:hidden"} />
      <MobileHeader />
      <div className="bg-white">
        <div className="w-[90%] mx-auto">
          <div className="flex items-center xs:hidden">
            <h5 className="cursor-pointer">Home</h5>
            <IconButton>
              <ChevronRightIcon />
            </IconButton>
            <h5 className="cursor-pointer">Categories</h5>
            <IconButton>
              <ChevronRightIcon />
            </IconButton>
            <h5 className="cursor-pointer">Electronics</h5>
            <IconButton>
              <ChevronRightIcon />
            </IconButton>
            <h5 className="cursor-pointer">{storeDetails?.store_name}</h5>
          </div>
        </div>
      </div>
      <div className={`h-[365px] xs:h-[150px] bg-cover bg-center`} style={{ backgroundImage: `url(${storeDetails?.banner_url})` }}></div>
      <div className="py-3 bg-white">
        <div className="w-[90%] mx-auto flex justify-between items-center xs:hidden">
          <div className="flex space-x-6 items-center">
            <img src={storeDetails?.logo_url} className="w-20 h-20" />
            <div className="py-2 space-y-2">
              <h1 className="text-2xl">{storeDetails?.store_name}</h1>
              <div className="flex items-center space-x-3 py-3">
                <h1 className={home ? "cursor-pointer border-b-2 border-[#E51B48]" : "cursor-pointer"} onClick={() => handleHome()}>
                  Home
                </h1>
                <h1 className={about ? "cursor-pointer border-b-2 border-[#E51B48]" : "cursor-pointer"} onClick={() => handleAbout()}>
                  About
                </h1>
                <h1 className={enterprise ? "cursor-pointer border-b-2 border-[#E51B48]" : "cursor-pointer"} onClick={() => handleEnterprise()}>
                  Feedbacks
                </h1>
                <h1 className={product ? "cursor-pointer border-b-2 border-[#E51B48]" : "cursor-pointer"} onClick={() => handleProduct()}>
                  Product
                </h1>
              </div>
            </div>
          </div>
          <div className="justify-end flex items-center space-x-3">
            {/* {about && enterprise ? ( */}
            <span className="flex items-center cursor-pointer px-4 py-2 rounded-[10px] border border-[#E51B48]">
              <AddIcon className="text-[#E51B48]" />
              <h2 className="text-[#E51B48]">Follow</h2>
            </span>
            {/* ):''} */}

            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 400,
              }}
            >
              <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search Chuks Enterprise" inputProps={{ "aria-label": "search google maps" }} />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </div>
        </div>
        <div className="w-[90%] mx-auto flex flex-col gap-4 sm:hidden lg:hidden md:hidden 2xl:hidden xl:hidden">
          <div className=" relative flex space-x-6 items-center">
            <img src={storeDetails?.logo_url} className="w-20 h-20 xs:w-8 xs:h-8" />
            <div className="py-2 space-y-2">
              <h1 className="text-2xl xs:text-lg">{storeDetails?.store_name}</h1>
              <div className="flex items-center space-x-3 py-3 xs:hidden">
                <h1 className={home ? "cursor-pointer border-b-2 border-[#E51B48]" : "cursor-pointer"} onClick={() => handleHome()}>
                  Home
                </h1>
                <h1 className={about ? "cursor-pointer border-b-2 border-[#E51B48]" : "cursor-pointer"} onClick={() => handleAbout()}>
                  About
                </h1>
                <h1 className={enterprise ? "cursor-pointer border-b-2 border-[#E51B48]" : "cursor-pointer"} onClick={() => handleEnterprise()}>
                  Feedbacks
                </h1>
                <h1 className={product ? "cursor-pointer border-b-2 border-[#E51B48]" : "cursor-pointer"} onClick={() => handleProduct()}>
                  Product
                </h1>
              </div>
            </div>
            <span className="flex items-center cursor-pointer px-4 py-2 rounded-[10px] border border-[#E51B48]">
              <AddIcon className="text-[#E51B48]" />
              <h2 className="text-[#E51B48]">Follow</h2>
            </span>
            <MenuIcon className="text-black cursor-pointer" onClick={handleMenuClick} />
            {isMenuOpen && (
              <div className="absolute top-0 right-0 mt-10 mr-2 p-2 z-20 bg-white shadow">
                <ul className="space-y-2">
                  <li className="cursor-pointer" onClick={handleHome}>
                    Home
                  </li>
                  <li className="cursor-pointer" onClick={handleAbout}>
                    About
                  </li>
                  <li className="cursor-pointer" onClick={handleEnterprise}>
                    Feedbacks
                  </li>
                  <li className="cursor-pointer" onClick={handleProduct}>
                    Product
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="justify-end flex items-center space-x-3">
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 400,
              }}
            >
              <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search Chuks Enterprise" inputProps={{ "aria-label": "search google maps" }} />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </div>
        </div>
      </div>
      {home && <SellerHome />}
      {about && <SellerAbout storeDetail={storeDetails} />}
      {enterprise && <SellerEnterprise />}
      {product && <SellerProduct productDetails={productDetails} otherProducts={otherStoreProducts} />}

      <Footer style={"bg-[#1B7CFC] py-10 px-10 xs:hidden"} />
      <MobileFooter style={"bg-[#1B7CFC] sm:hidden lg:hidden md:hidden 2xl:hidden xl:hidden"} />
    </div>
  );
};

export default PProduct;
