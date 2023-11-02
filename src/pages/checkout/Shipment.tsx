import React, { useEffect, useState } from "react";
import { Grid, Radio } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import callAPI from "../../api/callApi";
import PopUpModal from "../../components/Core/PopUpModal";
import LoginModal from "../../components/Core/LoginModal";
import { calculateTotalPrice, getCartProducts } from "../../Services/cartservices";
import OrderSummary from "../../components/General/cart/OrderSummary";
import * as countryList from "../../newCountries";

interface Country {
  name: string;
  id: string;
  currency: string;
}

interface State {
  name: string;
  id: string;
}

const ShipmentInfo = () => {
  const data = new FormData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Door Step");
  const [country, setCountry] = useState<Country>({
    name: "",
    id: "",
    currency: "",
  });
  const [state, setState] = useState<State>({ name: "", id: "" });
  const [city, setCity] = useState<State>({ name: "", id: "" });
  const [countries, setCountries] = useState<any[]>([]);
  const [states, setStates] = useState<any[]>([]);
  const [cities, setCities] = useState<any[]>([]);
  const [cart, setCart] = useState<any[]>([]);
  const [pickUpLocations, setPickUpLocations] = useState<any[]>([]);
  const [pickUpStation, setPickUpStation] = useState<any>();
  const [totalPrice, setTotalPrice] = useState(0);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    if (customerInfo !== undefined && customerInfo !== null && countries.length > 0) {
      console.log(customerInfo);
      handleChangeCountry(customerInfo?.country);
    }
  }, [countries]);

  useEffect(() => {
    if (customerInfo !== undefined && customerInfo !== null && states.length > 0) {
      console.log(customerInfo);
      handleChangeState(customerInfo?.state);
    }
  }, [states]);

  useEffect(() => {
    if (customerInfo !== undefined && customerInfo !== null && cities.length > 0) {
      console.log(customerInfo);
      handleChangeCity(customerInfo?.city);
    }
  }, [cities]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}` };
    if (city?.name && country?.name && state?.name) {
      callAPI(
        `general/products/fetch_pickup_location_list?country=${country?.name}&state=${state?.name}&city=${city?.name}`,
        "POST",
        null,
        headers
      ).then((response) => {
        setPickUpLocations(response.data.values);
        console.log(response?.status);
      });
    }
  }, [city, state, country]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const navigate = useNavigate();

  let customerInfo: any = sessionStorage.getItem("customerInfo");
  console.log(customerInfo);
  if (customerInfo !== null || customerInfo !== undefined) {
    customerInfo = JSON.parse(customerInfo);
  } else {
    navigate("/checkout");
  }
  const shippingDetails = customerInfo ? { ...customerInfo, deliveryOption: selectedValue } : {};

  const handleSubmitCustomerDeliveryInfo = async (e: any) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    const headers = {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`
    };

    try {
      if (customerInfo) {
        data.append("first_name", customerInfo?.firstName);
        data.append("last_name", customerInfo?.lastName);
        data.append("country", customerInfo?.country);
        data.append("state", customerInfo?.state);
        data.append("postal_code", customerInfo?.postalCode);
        data.append("city", "ammasoma"); //customerInfo?.city
        data.append("address", customerInfo?.deliveryAddress);
        data.append("delivery_options", selectedValue);

        const response = await callAPI(
          `general/products/collect_customer_delivery_info`,
          "POST",
          data,
          headers
        );
        navigate("/checkout/confirmation");
        toast.success(response?.message, {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        return response;
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchCountriesData = async () => {
      try {
        let cachedCountries = localStorage.getItem("countries");
        if (cachedCountries) {
          setCountries(JSON.parse(cachedCountries));
        } else {
          // const response = await callAPI(`general/products/fetch_countries`, "GET", null);
          setCountries(countryList.countries);
          localStorage.setItem("countries", JSON.stringify(countryList.countries));
        }
      } catch (error) {
        console.error(error);
      }
    };
    getCartProducts()
      .then((res) => {
        setCart(res?.data?.values);
        calculateTotalPrice(res?.data?.values);
      })
      .catch((error) => {
        console.log(error);
      });
    fetchCountriesData();
  }, []);

  const handleChangeCountry = (selectedCountryName: string) => {
    const selectedCountry = countries.find((country) => country.name === selectedCountryName);
    setCountry(selectedCountry!);
    getStatesInCountry(selectedCountry?.id);
  };

  const handleChangeState = (selectedStateName: string) => {
    const selectedstate = states.find((state) => state.name === selectedStateName);
    setState(selectedstate!);
    console.log(selectedstate);
    getCitiesInState(selectedstate?.id);
  };

  const handleChangeCity = (selectedCityName: string) => {
    const selectedCity = cities.find((city) => city.name === selectedCityName);
    setCity(selectedCity!);
    console.log(selectedCity);
  };

  const getStatesInCountry = async (countryId: any) => {
    try {
      const response = await callAPI(`general/products/populate_states_by_country/${countryId}`, "GET", null, Headers);

      setStates(response?.data?.values);
    } catch (error) {
      console.log(error);
    }
  };

  const getCitiesInState = async (id: any) => {
    try {
      console.log({ id });
      const response = await callAPI(`general/products/populate_cities_by_state/${id}`, "GET", null, Headers);
      setCities(response?.data?.values);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setTotalPrice(calculateTotalPrice(cart));
  }, [cart]);

  return (
    <div className="bg-[#F5F5F5] w-full overflow-hidden ">
      <div className="bg-[#1B7CFC] w-full h-[120px] p-4 flex items-center gap-x-10">
        <Link to="/">
          <div className="md:w-30 w-24">
            <img src="/images/azanylogofinal.png" className="md:w-30 w-24" alt="azanylogo" />
          </div>
        </Link>

        <div className="flex flex-row flex-1  gap-4 items-center text-center px-20">
          <div className="flex flex-col items-center justify-center">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_76_1933)">
                <rect width="40" height="40" rx="20" fill="white" />
                <path
                  d="M20 3.33398C10.8 3.33398 3.33337 10.8007 3.33337 20.0007C3.33337 29.2007 10.8 36.6673 20 36.6673C29.2 36.6673 36.6667 29.2007 36.6667 20.0007C36.6667 10.8007 29.2 3.33398 20 3.33398ZM11.7834 30.4673C12.5 28.9673 16.8667 27.5007 20 27.5007C23.1334 27.5007 27.5167 28.9673 28.2167 30.4673C25.95 32.2673 23.1 33.334 20 33.334C16.9 33.334 14.05 32.2673 11.7834 30.4673ZM30.6 28.0507C28.2167 25.1507 22.4334 24.1673 20 24.1673C17.5667 24.1673 11.7834 25.1507 9.40004 28.0507C7.70004 25.8173 6.66671 23.034 6.66671 20.0007C6.66671 12.6507 12.65 6.66732 20 6.66732C27.35 6.66732 33.3334 12.6507 33.3334 20.0007C33.3334 23.034 32.3 25.8173 30.6 28.0507ZM20 10.0007C16.7667 10.0007 14.1667 12.6007 14.1667 15.834C14.1667 19.0673 16.7667 21.6673 20 21.6673C23.2334 21.6673 25.8334 19.0673 25.8334 15.834C25.8334 12.6007 23.2334 10.0007 20 10.0007ZM20 18.334C18.6167 18.334 17.5 17.2173 17.5 15.834C17.5 14.4507 18.6167 13.334 20 13.334C21.3834 13.334 22.5 14.4507 22.5 15.834C22.5 17.2173 21.3834 18.334 20 18.334Z"
                  fill="#1B7CFC"
                />
              </g>
              <defs>
                <clipPath id="clip0_76_1933">
                  <rect width="40" height="40" rx="20" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <p className="text-white text-sm whitespace-pre-wrap">Customer Information</p>
          </div>
          <hr className=" w-full" />
          <div className="flex flex-col items-center justify-center">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="white" className="bg-white p-1 rounded-full" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_76_1939)">
                <path
                  d="M33.3333 13.3327H28.3333V6.66602H4.99996C3.16663 6.66602 1.66663 8.16602 1.66663 9.99935V28.3327H4.99996C4.99996 31.0993 7.23329 33.3327 9.99996 33.3327C12.7666 33.3327 15 31.0993 15 28.3327H25C25 31.0993 27.2333 33.3327 30 33.3327C32.7666 33.3327 35 31.0993 35 28.3327H38.3333V19.9993L33.3333 13.3327ZM32.5 15.8327L35.7666 19.9993H28.3333V15.8327H32.5ZM9.99996 29.9993C9.08329 29.9993 8.33329 29.2493 8.33329 28.3327C8.33329 27.416 9.08329 26.666 9.99996 26.666C10.9166 26.666 11.6666 27.416 11.6666 28.3327C11.6666 29.2493 10.9166 29.9993 9.99996 29.9993ZM13.7 24.9993C12.7833 23.9827 11.4833 23.3327 9.99996 23.3327C8.51663 23.3327 7.21663 23.9827 6.29996 24.9993H4.99996V9.99935H25V24.9993H13.7ZM30 29.9993C29.0833 29.9993 28.3333 29.2493 28.3333 28.3327C28.3333 27.416 29.0833 26.666 30 26.666C30.9166 26.666 31.6666 27.416 31.6666 28.3327C31.6666 29.2493 30.9166 29.9993 30 29.9993Z"
                  fill="#1B7CFC"
                />
              </g>
              <defs>
                <clipPath id="clip0_76_1939">
                  <rect width="40" height="40" fill="#1B7CFC" />
                </clipPath>
              </defs>
            </svg>

            <p className="text-white text-sm whitespace-pre-wrap">Shipment Information</p>
          </div>

          <hr className={`w-full dashed-2`} />
          <div className="flex flex-col items-center justify-center">
            <img className="w-8 h-8" src="/images/confirmed.png" alt="" />
            <p className="text-white text-sm whitespace-pre-wrap ">Confirmation</p>
          </div>
          <hr className="dashed-2 w-full" />

          <div className="flex flex-col items-center gap-2 justify-center">
            <img className="w-8 h-8" src="/images/payment.png" alt="" />
            <p className="text-white text-sm whitespace-pre-wrap ">Payment Selection</p>
          </div>
        </div>
      </div>
      <div className="py-4 w-[90%] mx-auto">
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <div className="p-8 bg-white shadow-md h-full rounded-md gap-6 flex-col flex">
              <div className="flex justify-between items-center ">
                <p className="font-semibold text-[24px]">Shipment Information</p>
              </div>

              <div className="flex flex-col gap-6">
                <p className="font-medium text-[20px]text-[#515151]">Select Delivery Method</p>

                <div className="smm:gap-8 gap-6 flex-col flex">
                  <div
                    className="bg-white shadow-md cursor-pointer rounded-md py-6 px-4 smm:gap-4 gap-2 flex flex-row"
                    onClick={() => setSelectedValue("Door Step")}
                  >
                    <div>
                      <Radio
                        checked={selectedValue === "Door Step"}
                        onChange={handleChange}
                        value="Door Step"
                        name="radio-buttons"
                        color="error"
                        inputProps={{ "aria-label": "Door Step" }}
                      />
                    </div>
                    <div>
                      <p className="mb-4 font-medium text-[16px]">Door Delivery </p>
                      <p className="text-[#515151]">Estimated 16-23 day shipping (Duties and taxes maybe due upon delivery)</p>
                      <p className="text-[#515151]">
                        Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem
                        ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.
                      </p>
                    </div>
                  </div>
                  <PopUpModal isOpen={isModalOpen} onClose={closeModal}>
                    <div className="flex gap-4 flex-col p-6 text-left">
                      <div className="header py-3 border-b border-[#515151] text-left font-semibold text-xl">
                        <h1>Select Pickup Location</h1>
                      </div>
                      <div className="location">
                        <label htmlFor="location">Location:</label>
                      </div>
                      <div className="w-full flex flex-col relative items-start gap-2">
                        <div className="flex flex-wrap smm:flex-nowrap justify-between w-full gap-4">
                          <div className="w-full relative flex flex-col items-start">
                            <label className="font-normal text-[12px] text-gray-600">COUNTRY</label>
                            <select
                              name="country"
                              value={country.name}
                              id="country"
                              className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
                              onChange={(e) => {
                                handleChangeCountry(e.target.value);
                              }}
                            >
                              {country?.name ? (
                                <option value="" disabled>
                                  Choose country
                                </option>
                              ) : (
                                <option value={country?.name}>{country?.name}</option>
                              )}
                              {countries?.map((country: Country) => (
                                <option key={country.id} value={country?.name}>
                                  {country?.name}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className="w-full  flex flex-col relative items-start">
                            <label className="font-normal text-[12px] text-gray-600">STATE/ PROVINCE</label>

                            <select
                              name="state"
                              id="state"
                              className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
                              value={state?.name}
                              onChange={(e) => {
                                handleChangeState(e.target.value);
                              }}
                            >
                              <option value="" disabled>
                                Choose state/ province
                              </option>
                              {states?.map((state: State) => (
                                <option value={state?.name}>{state?.name}</option>
                              ))}
                            </select>
                          </div>
                          <div className="w-full flex flex-col relative items-start">
                            <label className="font-normal text-[12px] text-gray-600">CITY</label>
                            <select
                              name="city"
                              id="city"
                              value={city?.name}
                              className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
                              onChange={(e) => handleChangeCity(e.target.value)}
                            >
                              <option value="" disabled>
                                Choose city
                              </option>
                              {cities?.map((city: any) => (
                                <option value={city?.name}>{city?.name}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="header py-3 border-b border-[#515151] text-left text-lg">
                        <h1>Azany pickup stations in your city:</h1>
                      </div>
                    </div>
                    <div className="pickup-location text-left">
                      {pickUpLocations?.map((pickUpLocation) => (
                        <div key={pickUpLocation?.id} className="bg-white shadow-md rounded-md py-6 px-4 gap-4 flex flex-row">
                          <div onClick={() => setPickUpStation(pickUpLocation?.id)}>
                            <Radio
                              checked={pickUpStation === pickUpLocation?.id}
                              onChange={(e) => {
                                console.log(e.target.value);
                                setPickUpStation(parseInt(e.target.value));
                              }}
                              value={pickUpLocation?.id}
                              name={pickUpLocation?.id}
                              color="error"
                              inputProps={{ "aria-label": "Pickup Location" }}
                            />
                          </div>
                          <div className="flex flex-col gap-y-2">
                            <p className="font-medium text-[16px]">{pickUpLocation?.name}</p>
                            <p className="text-[#515151]">Estimated 14-20 day shipping (Duties and taxes maybe due upon delivery)</p>
                            <div className="location-details text-xs">
                              <p className="text-[#515151] text-sm">
                                <span className="font-semibold text-black">Address</span>:{" "}
                                {`${pickUpLocation?.address}, ${pickUpLocation?.city}, ${pickUpLocation?.state} `}
                              </p>
                              <p className="text-[#515151] text-sm">
                                {" "}
                                <span className="font-semibold text-black">Contact: </span>
                                {pickUpLocation?.contact_name} {pickUpLocation?.contact_phone}
                              </p>
                              <p className="text-[#515151] text-sm">
                                <span className="font-semibold text-black">Opening Hours:</span>
                                {pickUpLocation?.opening_hours}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="p-6 flex justify-end">
                      <button
                        type="button"
                        className="justify-center rounded-md px-4 py-2 bg-[#E51B48] text-base font-medium text-white hover:bg-red-600 "
                        onClick={handleSubmitCustomerDeliveryInfo}
                      >
                        Proceed
                      </button>
                    </div>
                  </PopUpModal>
                  <div
                    onClick={() => {
                      openModal();
                      setSelectedValue("Pickup Location");
                    }}
                    className="bg-white shadow-md rounded-md cursor-pointer py-6 px-4 gap-4 flex flex-row"
                  >
                    <div>
                      <Radio
                        checked={selectedValue === "Pickup Location"}
                        onChange={handleChange}
                        value="Pickup Location"
                        name="radio-buttons"
                        color="error"
                        inputProps={{ "aria-label": "Pickup Location" }}
                      />
                    </div>
                    <div className="flex flex-col gap-y-2">
                      <p className="font-medium text-[16px]">Pickup Station (Azany Warehouse) </p>
                      <p className="text-[#515151]">Estimated 14-20 day shipping (Duties and taxes maybe due upon delivery)</p>
                      <p className="text-[#515151] text-sm">
                        Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem
                        ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.
                      </p>
                      <p className="text-[#1B7CFC] text-sm font-semibold cursor-pointer" onClick={openModal}>
                        SELECT PICKUP LOCATION
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-20">
                <Link to={"/checkout"}>
                  <div className="flex items-center gap-2 text-[#515151]">
                    <ArrowBackIcon />
                    Back to Customer Information
                  </div>
                </Link>
                <Link to="/checkout/confirmation">
                  <button onClick={handleSubmitCustomerDeliveryInfo} className="bg-[#E51B48] text-white py-2 rounded-md px-10">
                    Proceed
                  </button>
                </Link>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <OrderSummary />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ShipmentInfo;
