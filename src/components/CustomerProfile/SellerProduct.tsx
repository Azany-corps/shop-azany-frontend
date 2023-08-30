import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import BasicRating from "../Core/Rating";
import Category from "../General/categories/Category";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import Comments from "./Comments";
import { useNavigate } from "react-router-dom";
import { addProductToCart, getCartProducts, updateProductQuantityInCart } from "../../Services/cartservices";
import PopUpModal from "../Core/PopUpModal";
import LoginModal from "../Core/LoginModal";
import CategoryOtherProducts from "../General/categories/CategoryOtherProducts";

interface SellerProductsProps {
  productDetails?: any;
  otherProducts?: any[];
}

const SellerProduct: React.FC<SellerProductsProps> = ({ productDetails, otherProducts }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [quantity, setQuantity] = useState(1);
  const [addedToCartStatus, setAddedToCartStatus] = useState<boolean>(false);
  const [isInCart, setIsInCart] = useState<boolean>(false);
  const [cartItem, setCartItem] = useState<any>();
  useNavigate();
  const token = localStorage.getItem("token");

  const handleIncrease = () => {
    updateProductQuantityInCart(cartItem?.id, +quantity + 1, productDetails?.id)
      .then((res) => {
        setCartItem(res.data.values[0]);
      })
      .catch((error) => console.log(error));
  };

  const handleDecrease = () => {
    if (quantity > 1)
      updateProductQuantityInCart(cartItem?.id, +quantity - 1, productDetails?.id)
        .then((res) => {
          setCartItem(res.data.values[0]);
        })
        .catch((error) => console.log(error));
  };

  useEffect(() => {
    console.log(otherProducts)
    if (productDetails?.images) {
      setImages(JSON.parse(productDetails?.images));
      console.log(productDetails);
      getCartProducts()
        .then((res) => {
          setCartItem(res?.data?.values.find((item: any) => item?.product_id === productDetails?.id));
        })
        .catch((error) => {
          console.log(error);
        });
      console.log(cartItem);
    }
  }, [productDetails]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (cartItem) {
      setIsInCart(true);
      setQuantity(cartItem?.quantity);
    }
  }, [cartItem]);

  const handleAddProductToCart = async () => {
    try {
      const response = await addProductToCart(1, productDetails?.id);
      setAddedToCartStatus(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="py-3">
        <div className="w-[90%] mx-auto">
          <div className="py-4 relative">
            <Grid
              container
              spacing={2}
              className="!relative"
              sx={{ position: "relative !important" }}
            >
              <Grid item xs={12} md={8}>
                <div className="bg-white p-4 shadow-lg rounded-md flex gap-2 flex-row xs:flex-col">
                  <div className="flex flex-col gap-2 w-2/3 xs:w-full">
                    <img
                      src={images[currentImageIndex]}
                      alt="rice"
                      className="h-[200px] w-[250px] object-contain xs:w-full xs:h-full"
                    />
                    <div className="flex flex-row gap-2 cursor-pointer">
                      {images?.map(
                        (image: string, i: number) =>
                          i < 4 && (
                            <img
                              src={image}
                              alt="product"
                              className="w-14 h-14"
                              key={i}
                              onClick={() => setCurrentImageIndex(i)}
                            />
                          )
                      )}
                    </div>
                    <p>Share</p>
                    <div className="flex flex-row gap-1 text-[#515151]">
                      <FacebookIcon />
                      <InstagramIcon />
                      <TwitterIcon />
                    </div>
                  </div>
                  <div className="flex flex-col gap-6 w-full">
                    <div>
                      <p className="font-medium text-[32px]">
                        {productDetails?.product_name}
                      </p>
                      <p className="font-medium text-[16px]">
                        {productDetails?.product_details?.[0]?.specifications}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <div className="w-[180px]">
                        <p className="">Stock: {productDetails?.stock}</p>
                      </div>
                      <div className="flex flex-row gap-1">
                        <div className="text-[#1B7CFC]">
                          <DoubleArrowIcon />
                        </div>
                        <p className="">
                          Azany <span className="text-[#1B7CFC]">Express</span>{" "}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex flex-row gap-2">
                        <BasicRating
                          rating={
                            productDetails?.rating ? productDetails?.rating : 0
                          }
                        />
                        <p className="text-[#515151]">
                          {productDetails?.rating ? productDetails?.rating : 0}
                        </p>
                      </div>
                      <p className="text-[#E51B48] underline">
                        Add to Watchlist
                      </p>
                    </div>
                    <hr className="border border-gray-300" />
                    <div className="justify-between ">
                      <p className="items-medium text-[32px]">{`${
                        productDetails?.currency ? productDetails?.currency : ""
                      }   ${
                        productDetails?.price ? productDetails?.price : ""
                      }`}</p>
                    </div>
                    <div className="bg-[#F4F4F4] rounded-md p-4 gap-2 flex flex-col">
                      <p>Converter</p>
                      <div className="flex justify-between items-center">
                        <div className="flex flex-row gap-2">
                          <p>USD</p>
                          <ArrowForwardIcon />
                          <p className="underline">NGN</p>
                        </div>
                        <div>
                          <button className="border border-black py-2 px-4 rounded-md">
                            {productDetails?.price}
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-5 justify-between">
                      {addedToCartStatus ? (
                        <div className="flex items-center gap-2">
                          <button
                            className="p-2 w-[30px] h-[30px] items-center flex justify-center rounded-md text-[#515151] bg-[#CECECE]"
                            onClick={handleDecrease}
                          >
                            -
                          </button>
                          <input
                            type="number"
                            name="quantity"
                            id="cartitem"
                            value={quantity}
                            onChange={(e) =>
                              setQuantity(parseInt(e.target.value))
                            }
                            className=" w-[50px] h-[30px] text-center mx-auto"
                          />
                          <button
                            className="p-2 w-[30px] h-[30px] items-center flex justify-center rounded-md text-white text-center bg-[#E51B48]"
                            onClick={handleIncrease}
                          >
                            +
                          </button>
                        </div>
                      ) : (
                        <button
                          className="border border-[#E51B48] w-[180px] text-[#E51B48] py-2 px-4 hover:bg-red-500 hover:text-white rounded-md"
                          onClick={() => {
                            if (!token) {
                              setIsModalOpen(true); // Open login modal if user is not logged in
                            } else {
                              handleAddProductToCart(); // Add product to cart if user is logged in
                            }
                          }}
                        >
                          Add to Cart
                        </button>
                      )}

                      <button
                        className="bg-[#E51B48] py-2 px-4 w-[180px] text-white rounded-md hover:bg-red-600"
                        onClick={openModal}
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>

                <PopUpModal isOpen={isModalOpen} onClose={closeModal}>
                  <LoginModal />
                </PopUpModal>
                <div className="bg-white p-4 shadow-lg rounded-md flex gap-4 flex-col mt-4">
                  <p className="font-medium text-[24px]">Product Details</p>
                  <div>{productDetails?.product_details?.[0]?.description}</div>
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                className="!sticky !top-6"
                sx={{
                  position: "sticky !important",
                  top: "10px !important",
                  height: "fit-content",
                }}
              >
                <div className="bg-white p-4 shadow-lg rounded-md flex gap-2 flex-col">
                  <div>
                    <p>DELIVERY</p>
                    <p className="text-[#515151]">
                      No Import Fees Deposit & $30.89 Shipping to Kenya{" "}
                    </p>
                    <hr className="border border-gray-300 my-4" />
                  </div>
                  <div>
                    <p>DOOR DELIVERY</p>
                    <p className="text-[#515151]">
                      Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor
                      sit amet consectetur.Lorem ipsum dolor sit amet
                      consectetur.Lorem ipsum dolor sit amet consectetur.
                    </p>
                    <hr className="border border-gray-300 my-4" />
                  </div>
                  <div>
                    <p>AZANY WAREHOUSE</p>
                    <p className="text-[#515151]">
                      Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor
                      sit amet consectetur.Lorem ipsum dolor sit amet
                      consectetur.Lorem ipsum dolor sit amet consectetur.
                    </p>
                    <hr className="border border-gray-300 my-4" />
                  </div>
                  <div>
                    <p>RETURN POLICY</p>
                    <p className="text-[#515151]">
                      No Import Fees Deposit & $30.89 Shipping to Kenya{" "}
                    </p>
                    <hr className="border border-gray-300 my-4" />
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
      <div className="mx-4">
        <CategoryOtherProducts
          products={otherProducts}
          styles={"text-[#132A13] bg-[#ECF39E] font-medium text-lg"}
          title={"Other products from this vendor"}
        />
      </div>
      <div className="mx-4">
        <Category
          products={otherProducts}
          styles={"text-[#132A13] bg-[#ECF39E] font-medium text-lg"}
          title={"Similar Prices"}
          country={"country"}
        />
      </div>
      <div className="mx-4">
        <Category
          products={otherProducts}
          styles={"text-[#132A13] bg-[#ECF39E] font-medium text-lg"}
          title={"You may also like"}
          country={"country"}
        />
      </div>
      <div className="py-2 px-4 bg-white shadow-lg rounded-md mx-auto w-[91%]">
        <div className="py-2 mx-auto">
          <h1 className="py-2 font-bold text-2xl">Reviews and Ratings</h1>
          <div className="py-2 px-2 space-y-3">
            <Comments />
            <Comments />
            <Comments />
            <Comments />
            <Comments />
            <Comments />
            <Comments />
            <Comments />
            <div className="py-2 flex justify-center items-center">
              <button className="border border-[#E51B48] text-[#E51B48] py-2 px-12  rounded-[10px]">
                Load More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerProduct;
