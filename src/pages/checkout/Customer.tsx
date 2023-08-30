import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useNavigate } from "react-router-dom";
import callAPI from "../../api/callApi";
import OrderSummary from "../../components/General/cart/OrderSummary";

interface Country {
  name: string;
  id: string;
  currency: string;
}

interface State {
  name: string;
  id: string;
}

const CustomerInfo = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    deliveryAddress: "",
    country: "",
    state: "",
    postalCode: "",
    city: "",
  });

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

  useEffect(() => {
    const token = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}` };

    const fetchCountriesData = async () => {
      try {
        const response = await callAPI(`general/products/fetch_countries`, "GET", null, headers);
        setCountries(response?.data?.values);
      } catch (error) {
        console.error(error);
      }
    };

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

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    sessionStorage.setItem(
      "customerInfo",
      JSON.stringify({
        ...formData,
        country: country.name,
        state: state.name,
        city: city.name,
      })
    );
    navigate("/checkout/shipment");
  };

  useEffect(() => {
    const customerInfo = sessionStorage.getItem("customerInfo");
    if (customerInfo !== null) {
      const parsedInfo = JSON.parse(customerInfo);
      setFormData(parsedInfo);
    }
  }, []);

  return (
    <div className="bg-[#F5F5F5]">
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
          <hr className=" w-full dashed-2" />
          <div className="flex flex-col items-center justify-center">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="white" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_76_1939)">
                <path
                  d="M33.3333 13.3327H28.3333V6.66602H4.99996C3.16663 6.66602 1.66663 8.16602 1.66663 9.99935V28.3327H4.99996C4.99996 31.0993 7.23329 33.3327 9.99996 33.3327C12.7666 33.3327 15 31.0993 15 28.3327H25C25 31.0993 27.2333 33.3327 30 33.3327C32.7666 33.3327 35 31.0993 35 28.3327H38.3333V19.9993L33.3333 13.3327ZM32.5 15.8327L35.7666 19.9993H28.3333V15.8327H32.5ZM9.99996 29.9993C9.08329 29.9993 8.33329 29.2493 8.33329 28.3327C8.33329 27.416 9.08329 26.666 9.99996 26.666C10.9166 26.666 11.6666 27.416 11.6666 28.3327C11.6666 29.2493 10.9166 29.9993 9.99996 29.9993ZM13.7 24.9993C12.7833 23.9827 11.4833 23.3327 9.99996 23.3327C8.51663 23.3327 7.21663 23.9827 6.29996 24.9993H4.99996V9.99935H25V24.9993H13.7ZM30 29.9993C29.0833 29.9993 28.3333 29.2493 28.3333 28.3327C28.3333 27.416 29.0833 26.666 30 26.666C30.9166 26.666 31.6666 27.416 31.6666 28.3327C31.6666 29.2493 30.9166 29.9993 30 29.9993Z"
                  fill="#fff"
                />
              </g>
              <defs>
                <clipPath id="clip0_76_1939">
                  <rect width="40" height="40" fill="#fff" />
                </clipPath>
              </defs>
            </svg>

            <p className="text-white text-sm whitespace-pre-wrap">Shipment Information</p>
          </div>

          <hr className="dashed-2 w-full" />
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
            <form action="submit" onSubmit={handleSubmit}>
              <div className="smm:p-8 p-4 bg-white shadow-md h-full rounded-md gap-6 flex-col flex">
                <div className="flex justify-between items-center ">
                  <p className="font-semibold text-[24px]">Customer Information</p>
                  <p className="font-normal text-[14px]text-[#515151]">Required</p>
                </div>

                <div className="flex smm:flex-row smm:gap-4 gap-2 flex-col">
                  <div className="w-full relative flex flex-col items-start">
                    <label className="font-normal text-sm text-gray-600">FIRST NAME</label>
                    <input
                      onChange={handleChange}
                      name="firstName"
                      value={formData?.firstName}
                      placeholder=""
                      required
                      className="px-4 py-3 w-full rounded-md border border-gray-300 bg-[#F5F5F5]"
                    />
                  </div>
                  <div className="w-full relative flex flex-col items-start">
                    <label className="font-normal text-sm text-gray-600">LAST NAME</label>
                    <input
                      onChange={handleChange}
                      placeholder=""
                      required
                      value={formData?.lastName}
                      name="lastName"
                      className="px-4 py-3 w-full rounded-md border border-gray-300 bg-[#F5F5F5]"
                    />
                  </div>
                </div>

                <div className="w-full flex flex-col relative items-start gap-2">
                  <label className="font-normal text-sm text-gray-600">DELIVERY ADDRESS</label>
                  <textarea
                    name="deliveryAddress"
                    placeholder=""
                    required
                    value={formData?.deliveryAddress}
                    onChange={handleChange}
                    className="px-4 w-full h-[100px] py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
                  />
                </div>

                <div className="flex smm:flex-row flex-col smm:gap-4 gap-2">
                  <div className="w-full relative flex flex-col items-start">
                    <label className="font-normal text-[12px] text-gray-600">COUNTRY</label>
                    <select
                      name="country"
                      value={country.name}
                      id=""
                      required
                      className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
                      onChange={(e) => {
                        handleChangeCountry(e.target.value);
                      }}
                    >
                      <option value="" disabled>
                        Choose country
                      </option>
                      {countries?.map((country: Country) => (
                        <option key={country.id} value={country?.name}>
                          {country?.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="w-full relative flex flex-col items-start">
                    <label className="font-normal text-[12px] text-gray-600">STATE/ PROVINCE</label>

                    <select
                      name="state"
                      required
                      className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
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
                </div>

                <div className="flex smm:flex-row flex-col smm:gap-4 gap-4">
                  <div className="w-full relative flex flex-col items-start">
                    <label className="font-normal text-[12px] text-gray-600">CITY</label>
                    <select
                      name="city"
                      required
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
                  <div className="w-full relative flex flex-col items-start">
                    <label className="font-normal text-sm text-gray-600">POSTAL CODE</label>
                    <input
                      onChange={handleChange}
                      placeholder=""
                      name="postalCode"
                      className="px-4 py-3 w-full rounded-md border border-gray-300 bg-[#F5F5F5]"
                      required
                      value={formData?.postalCode}
                    />
                  </div>
                </div>

                <div className="flex justify-between ">
                  <Link to={"/products/cart"} className="flex items-center gap-2 text-[#515151] smm:text-base text-sm">
                    <>
                      <ArrowBackIcon />
                      Back to Shopping Cart
                    </>
                  </Link>

                  <button className="bg-[#E51B48] text-white py-2 rounded-md px-5 smm:px-10">Proceed</button>
                </div>
              </div>
            </form>
          </Grid>
          <Grid item xs={12} md={4}>
            <OrderSummary />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default CustomerInfo;
