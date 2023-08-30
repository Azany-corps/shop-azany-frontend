import BottomHeader from "../../components/General/BottomHeader";
import Footer from "../../components/General/Footer";
import Header from "../../components/General/Header";
import TopHeader from "../../components/General/TopHeader";
import { Grid } from "@mui/material";
import Category from "../../components/General/categories/Category";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useEffect, useRef, useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link, useNavigate } from "react-router-dom";
import {
  calculateTotalPrice,
  getCartProducts,
  reomveProductFromCartService,
  updateProductQuantityInCart,
} from "../../Services/cartservices";
import MobileHeader from "../../components/General/MobileHeader";
import MobileFooter from "../../components/General/MobileFooter";
import { toast } from "react-toastify";

const ProductCart = () => {
  const [cart, setCart] = useState<any[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [checkoutDisabled, setCheckoutDisabled] = useState(false);
   const updateButtonRef = useRef<HTMLButtonElement | null>(null);
  const navigate = useNavigate();

  const handleIncrease = (
    cartItemId: number,
    quantity: number,
    productId: number
  ) => {
    updateProductQuantityInCart(cartItemId, +quantity + 1, productId)
      .then((res) => {
        getCartProducts()
          .then((res) => {
            setCart(res?.data?.values);
            calculateTotalPrice(res?.data?.values);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => console.log(error));
  };

  const handleDecrease = async (
    cartItemId: number,
    quantity: number,
    productId: number
  ) => {
    if (quantity > 1) {
      updateProductQuantityInCart(cartItemId, +quantity - 1, productId).then(
        (res) => {
          getCartProducts()
            .then((res) => {
              setCart(res?.data?.values);
              calculateTotalPrice(res?.data?.values);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      );
    }
  };

  const handleUpdateCartItem = async (
    cartItemId: number,
    quantity: number,
    productId: number
  ) => {
    try {
      updateProductQuantityInCart(cartItemId, quantity, productId).then(
        (res) => {
          getCartProducts()
            .then((res) => {
              setCart(res?.data?.values);
              calculateTotalPrice(res?.data?.values);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      );
    } catch (err: any) {
      if (err.response.data.status_code === 422) {
        toast.warning(err.response.data.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        console.log(err.response.data.message, err.response.status_code);
      }
    }
  };

  const reomveProductFromCart = async (productID: number) => {
    try {
      const response = await reomveProductFromCartService(productID);
      if (response.status === true)
        getCartProducts()
          .then((res) => {
            setCart(res?.data?.values);
            calculateTotalPrice(res?.data?.values);
          })
          .catch((error) => {
            console.log(error);
          });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCartProducts()
      .then((res) => {
        setCart(res?.data?.values);
        calculateTotalPrice(res?.data?.values);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    setTotalPrice(calculateTotalPrice(cart));
  }, [cart]);


const enableButton = () => {
  if (updateButtonRef.current) {
    updateButtonRef.current.disabled = true;
  }
};

  // check if any of the update button is enabled then setCheckoutDisabled(true) else setCheckoutDisabled(false)
  useEffect(() => {
    let allButtonsDisabled = true;
    if (cart?.length > 0) {
      cart?.forEach((item) => {
        let element: any = document.getElementById(item?.id);
        if (element?.disabled === false) {
          allButtonsDisabled = false;
        }
      });
      setCheckoutDisabled(!allButtonsDisabled);
    }
  }, [cart]);

  return (
    <div className="bg-[#F5F5F5] w-full overflow-x-hidden ">
      <TopHeader />
      <BottomHeader style={"bg-[#1B7CFC] py-2 xs:hidden"} />
      <MobileHeader />
      <Header style={"bg-[#70ADFF] xs:hidden"} />

      <div className="lgm:w-[90%] mdm:w-[95%]  mx-auto mdm:py-4 py-0 ">
        <Grid container spacing={2}>
          <Grid item xs={12} md={8} order={{ xs: 2, md: 1 }}>
            <div className="bg-white  smm:shadow-lg shadow-sm rounded-md flex gap-2 flex-col">
              <div className="border-b smm:py-4 px-4 py-2">
                <p>Shopping Cart({cart?.length})</p>
              </div>
              <div className="flex flex-col gap-y-4 bg-[#F5F5F5]">
                {cart?.length < 1 && (
                  <div className="p-4 text-center">
                    <p className="p-4 text-center">No item in your cart</p>
                    <Link to={"/"} className="text-[#1B7CFC]">
                      {" "}
                      Go back to shop
                    </Link>
                  </div>
                )}
                {cart &&
                  cart?.map((cartItem) => (
                    <div
                      key={cartItem?.id}
                      className="p-4 border-b flex justify-between bg-white"
                    >
                      <div className="flex flex-row smm:gap-4 gap-2">
                        <div className="flex flex-col gap-4 justify-between">
                          <img
                            src={cartItem?.product?.[0].image_url}
                            className="
                        smm:w-[120px] smm:h-[120px] w-[66px] h-[66px] aspect-square object-contain"
                            alt=""
                          />
                         
                            <div
                              className="flex flex-row smm:gap-2 gap-0 text-[#E51B48] cursor-pointer smm:text-base text-sm items-end"
                              onClick={() =>
                                reomveProductFromCart(cartItem?.id)
                              }
                            >
                              <DeleteForeverIcon />
                              Remove
                            </div>
                          
                        </div>
                        <div className="flex flex-col smm:gap-1 font-light gap-0">
                          <p className="font-medium text-sm smm:text-base">
                            {cartItem?.product?.[0]?.product_name}
                          </p>
                          <p className="text-[#515151] smm:text-base text-xs">
                            <strong>vendor: </strong>
                            {" " +
                              cartItem?.product?.[0]?.store_info?.[0]
                                ?.store_name}
                          </p>
                          <p className="text-[#515151] smm:text-sm text-xs">
                            <strong> {"shipping: "}</strong>
                            from $23.43 - (UPS)
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col justify-between  items-end gap-1">
                        <div className="text-right ">
                          <div className="flex mdm:items-start items-center">
                            {cartItem?.discount !== 0 && (
                              <small className="text-[#E51B48] bg-[#F9CED8] px-2 py-0.5 rounded-md mr-2 font-light mdm:text-sm text-xs  ">
                                -{cartItem?.discount}%
                              </small>
                            )}
                            <p className="whitespace-nowrap font-medium mdm:text-2xl text-md leading-5">
                              {cartItem?.product?.[0]?.currency}{" "}
                              {cartItem?.product?.[0]?.price}
                            </p>
                          </div>
                          {cartItem?.product?.[0]?.discount_option ? (
                            <p className="font-light italic text-sm">
                              <span className="text-[#E51B48] ">
                                {
                                  cartItem?.product?.[0]?.discount_option
                                    ?.percentage
                                }
                                %
                              </span>{" "}
                              off{" "}
                              {
                                cartItem?.product?.[0]?.discount_option
                                  ?.quantity
                              }{" "}
                              units
                            </p>
                          ) : (
                            ""
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            className="p-2 w-[30px] h-[30px] items-center flex justify-center rounded-md text-[#515151] bg-[#CECECE]"
                            onClick={() =>
                              handleDecrease(
                                cartItem?.id,
                                cartItem?.quantity,
                                cartItem?.product_id
                              )
                            }
                          >
                            -
                          </button>
                          <input
                            type="number"
                            name="quantity"
                            id="cartitem"
                            value={cartItem?.quantity}
                            onChange={(e) => {
                              if (e.target.value === "") {
                                cartItem.quantity = "0";
                              } else {
                                cartItem.quantity = e.target.value;
                              }
                              setCart((prevCartItems: any) =>
                                prevCartItems.map((data: any) =>
                                  data?.id === cartItem?.id ? cartItem : data
                                )
                              );
                              const element: any = document.getElementById(
                                cartItem?.id
                              );

                              element.disabled = false;
                              element.onclick = () =>
                                handleUpdateCartItem(
                                  cartItem?.id,
                                  cartItem?.quantity,
                                  cartItem?.product_id
                                ).then(() => (element.disabled = true));
                            }}
                            className="w-[50px] flex  h-[30px] text-center mx-auto border border-[#CECECE]"
                          />
                          {/* <input
                            type="number"
                            name="quantity"
                            id="cartitem"
                            disabled
                            value={cartItem?.quantity}
                            onChange={(e) => {
                              if (e.target.value === "") {
                                cartItem.quantity = "0";
                              } else {
                                cartItem.quantity = e.target.value;
                              }
                              setCart((prevCartItems: any) =>
                                prevCartItems.map((data: any) =>
                                  data.id === cartItem?.id ? cartItem : data
                                )
                              );
                              const element: any = document.getElementById(
                                cartItem?.id
                              );

                              element.disabled = false;
                              element.onclick = () =>
                                handleUpdateCartItem(
                                  cartItem?.id,
                                  cartItem?.quantity,
                                  cartItem?.product_id
                                ).then(() => (element.disabled = true));
                            }}
                            className="w-[50px] smm:flex hidden h-[30px] text-center mx-auto border border-[#CECECE]"
                          /> */}
                          <button
                            className="p-2 w-[30px] h-[30px] items-center flex justify-center rounded-md text-white bg-[#E51B48]"
                            onClick={() =>
                              handleIncrease(
                                cartItem?.id,
                                cartItem?.quantity,
                                cartItem?.product_id
                              )
                            }
                          >
                            +
                          </button>
                        </div>
                        <div className="update flex">
                          <button
                            id={cartItem?.id}
                            ref={updateButtonRef}
                            className="p-2 flex-1 w-full rounded-md text-[#E51B48] bg-[#F9CED8] hover:text-white hover:bg-[#E51B48] border border-[#E51B48] px-6 disabled:!bg-[white] disabled:border-[#C1C1C1] disabled:text-[#C1C1C1]"
                            disabled={true}
                            onClick={() => {
                              handleUpdateCartItem(
                                cartItem?.id,
                                cartItem?.quantity,
                                cartItem?.product_id
                              ).then((res) => {
                                console.log(res);
                                const element: any = document.getElementById(
                                  cartItem?.id
                                );
                                console.log("element.disabled");
                                element.disabled = true;
                              });
                            }}
                          >
                            update
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <button
                onClick={() => navigate("/checkout")}
                className="bg-[#E51B48] text-white sticky top-4 m-4 p-2 rounded-md disabled:border-[#C1C1C1]  lgm:hidden disabled:bg-transparent disabled:text-[#C1C1C1]"
                disabled={checkoutDisabled}
              >
                Checkout
              </button>
            </div>
          </Grid>
          <Grid item xs={12} md={4} order={{ xs: 1, md: 2 }}>
            <div className="bg-white smm:shadow-lg shadow-sm rounded-md flex gap flex-col">
              <div className="border-b smm:py-4 py-2 px-4 ">
                <p>Sumary</p>
              </div>
              <div className="border-b smm:py-4 py-2 px-4  flex flex-col gap-4">
                <div className="flex justify-between">
                  <p>Subtotal</p>
                  <p className="smm:text-base text-lg font-bold smm:font-normal text-[#70ADFF]">
                    NGN {totalPrice}
                  </p>
                </div>
                <div>
                  <p className="text-[#515151]">
                    This does not include nay delivery fees yet
                  </p>
                </div>
              </div>
              <div className="bg-[#F4F4F4] rounded-md p-4 gap-2 m-4 flex flex-col">
                <p>Converter</p>
                <div className="flex justify-between items-center flex-wrap gap-2">
                  <div className="flex flex-row gap-2">
                    <p>USD</p>
                    <ArrowForwardIcon />
                    <p className="underline">NGN</p>
                  </div>
                  <div>
                    <button className="border  border-black py-2 px-4 rounded-md">
                      NGN {totalPrice}
                    </button>
                  </div>
                </div>
              </div>
              <button
                onClick={() => navigate("/checkout")}
                className="bg-[#E51B48] text-white m-4 p-2 rounded-md disabled:border-[#C1C1C1] lgm:block hidden  disabled:bg-transparent disabled:text-[#C1C1C1]"
                disabled={checkoutDisabled}
              >
                Checkout
              </button>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="smm:mx-4  sm:w-full bg-white">
        <Category
          styles={"text-black bg-white font-medium text-lg"}
          title={"Related to this item"}
          country={"country"}
        />
      </div>
      <div className="smm:mx-4  sm:w-full bg-white">
        <Category
          styles={"text-black bg-white font-medium text-lg"}
          title={"Recently Viewed"}
          country={"country"}
        />
      </div>
      <Footer style={"bg-[#1B7CFC] py-10 px-10 xs:hidden"} />
      <MobileFooter
        style={
          "bg-[#1B7CFC] sm:hidden lg:hidden md:hidden 2xl:hidden xl:hidden"
        }
      />
    </div>
  );
};

export default ProductCart;
