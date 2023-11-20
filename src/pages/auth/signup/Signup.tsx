import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import { useNavigate } from "react-router-dom";
import FormData from "form-data";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import callAPI from "../../../api/callApi";
import { DropdownComponent } from "../../../components/Core/DropdownComponent";
import { countries } from "../../../newCountries";
import Logo from "../../../assets/Logo.png"
import Progress_1 from "../../../assets/Progress_1.png"
import Progress_2 from "../../../assets/Progress_2.png"
import Progress_3 from "../../../assets/Progress_3.png"
import { ISignUp } from "./signup.type";
import { Icon } from '@iconify/react';
import BusinessInfo from "./BusinessInfo";
import SellerInfo from "./SellerInfo";
import AccountInfo from "./AccountInfo";
import Preview from "./Preview";


interface Country {
  id: number;
  currency: string;
  name: string;
  latitude: string;
  longitude: string;
  emoji: string;
  emojiU: string;
}

interface State {
  name: string;
  id: string;
}

const AuthSignup = () => {
  const [selectedValue, setSelectedValue] = React.useState("");
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState<any>();
  const [state, setState] = useState<State>({ name: "", id: "" });
  const [city, setCity] = useState<State>({ name: "", id: "" });
  // const [countries, setCountries] = useState<any[]>([]);
  const [states, setStates] = useState<any[]>([]);
  const [cities, setCities] = useState<any[]>([]);
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState<boolean>(false);
  const [step, setStep] = useState<number>(1);

  const navigate = useNavigate();

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

  const [formData, setFormData] = useState<ISignUp>({
    first_name: "",
    last_name: "",
    shop_name: "",
    seller_type: "",
    email: "",
    phone: "",
    account_type: "",
    password: "",
    password_confirmation: "",
    rep_first_name: "",
    rep_middle_name: "",
    rep_last_name: "",
    company_name: "",
    address: "",
    postal_code: "",
    company_phone: "",
    other_phone: "",
    cac_number: "",
    tax_number: "",
    shipping_address: "",
    cac_document: "",
    tax_document: "",
    id_document: "",
    account_number: "",
    bank_name: "",
    account_name: ""
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const previous = () => {
    setStep(step - 1);
  }

  const next = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStep(step + 1);
  }

  const vendor = [
    { label: "Customer", value: "Customer" },
    { label: "Farmer", value: "Farmer" },
    { label: "Manufacturer", value: "Manufacturer" },
    { label: "Merchant", value: "Merchant" },
  ];

  const data = [
    { progress: Progress_1, heading: "Seller Account Information" },
    { progress: Progress_2, heading: "Business Information" },
    { progress: Progress_3, heading: "Bank Account Information" },
    { progress: "", heading: "Summary" },
  ]

  const handleSubmit = async () => {
    console.log("formd: ", formData)

    if (formData.password !== formData.password_confirmation) {
      toast.warning("Password and Confirm Password must match.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    setLoading(true);
    try {
      let data = new FormData();
      data.append("email", formData.email);
      data.append("first_name", formData.first_name);
      data.append("last_name", formData.last_name);
      data.append("phone", formData.phone);
      data.append("account_type", 'farmer');
      data.append("password", formData.password);
      data.append("password_confirmation", formData.password_confirmation);
      data.append("shop_name", formData.shop_name);
      data.append("business_type", "Individual");
      data.append("business_owner_first_name", formData.rep_first_name);
      data.append("business_owner_middle_name", formData.rep_middle_name);
      data.append("business_owner_last_name", formData.rep_last_name);
      data.append("company_name", formData.company_name);
      data.append("company_phone", formData.company_phone);
      data.append("company_additional_phone", formData.other_phone);
      data.append("company_address", formData.address);
      data.append("company_poster_code", formData.postal_code);
      data.append("country_shipping_from", formData.shipping_address);
      data.append("cac_registration_number", formData.cac_number);
      data.append("cac_certificate", formData.cac_document);
      data.append("tin", formData.tax_number);
      data.append("tin_certificate", formData.tax_document);
      data.append("account_name", formData.account_name);
      data.append("account_number", formData.account_number);
      data.append("bank", formData.bank_name);

      const response = await callAPI("auth/seller_register", "POST", data, {
        "Content-Type": "multipart/form-data",
      });
      console.log(response);
      localStorage.setItem("user_id", response.data.user.id);
      toast.success("Success message", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/auth/otp-business");
    } catch (err: any) {
      console.log(err);
      setLoading(false);
      toast.error(err?.response?.data?.data?.errors?.[0], {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };


  const accountType = [
    { label: "Customer", value: "customer" },
    { label: "Manufacturer", value: "manufacturer" },
  ];

  return (
    <div className="flex min-h-screen md:px-20 sm:px-10 xs:px-10 px-44 py-5 bg-[#F5F5F5]">
      <ToastContainer />
      <div className="flex relative rounded-2xl h-full py-8 flex-col w-full bg-white gap-10 justify-center items-center">
        <img className="" src={Logo} alt="Azany Logo" />
        <div className="flex w-[60%] md:w-[90%] sm:w-[90%] xs:w-[90%]  flex-col justify-center items-center gap-3">
          <img src={data[step - 1].progress} alt={`Progress stage ${step}`} />
          <p className="text-xs">
            {data[step - 1].heading}
          </p>
        </div>

        {step === 1 && <SellerInfo handleChange={handleChange} handleSubmit={next} formData={formData} />}
        {step === 2 && <BusinessInfo handleChange={handleChange} handleSubmit={next} formData={formData} previous={previous} />}
        {step === 3 && <AccountInfo handleChange={handleChange} handleSubmit={next} formData={formData} previous={previous} />}
        {step === 4 && <Preview formData={formData} previous={previous} handleSubmit={handleSubmit} />}
      </div >
    </div >
  );
};

export default AuthSignup;
