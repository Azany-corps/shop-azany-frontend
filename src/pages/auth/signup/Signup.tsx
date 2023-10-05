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

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    country: "",
    state: "",
    city: "",
    address: "",
    poster_code: "",
    account_type: "",
    referrer_code: "",
    password: "",
    password_confirmation: "",
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const vendor = [
    { label: "Customer", value: "Customer" },
    { label: "Farmer", value: "Farmer" },
    { label: "Manufacturer", value: "Manufacturer" },
    { label: "Merchant", value: "Merchant" },
  ];

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedValue || selectedValue === "") {
      toast.error("Select account type", {
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
      data.append("country", country.name);
      data.append("state", state.name || "lagos");
      data.append("city", city.name || "ikeja");
      data.append("address", formData.address);
      data.append("poster_code", formData.poster_code);
      data.append("referrer_code", formData.referrer_code);
      data.append("account_type", selectedValue);
      data.append("password", formData.password);
      data.append("password_confirmation", formData.password_confirmation);

      const response = await callAPI("auth/register", "POST", data, {
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
      if (selectedValue === "Customer") {
        navigate("/auth/otp");
      } else {
        navigate("/auth/otp-business");
      }
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

  return (
    <div className="bg-[#F5F5F5]">
      <ToastContainer />
      <div className="flex xs:flex-col-reverse sm:flex-col-reverse md:flex-col-reverse xl:justify-between sm:flex-col 2xl:justify-between xl:h-screen xs:w-screen ">
        <div className="flex flex-col gap-4 p-10 xs:p-4 xs:h-full md:h-screen xl:w-full">
          <div className="bg-white rounded-md py-2 smm:px-4 px-2 flex items-center justify-between">
            <p className="text-[40px] font-[500] xs:text-[18px]">Signup</p>
            <div className="smm:hidden flex flex-row gap-4 text-[#515151] ">
              <p className=" text-xs">
                Already have an Account?
                <Link to="/auth/">
                  <span className="text-[#E51B48] text-xs"> Login here</span>
                </Link>
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="bg-white rounded-md p-4 w-[760px] xs:w-full md:w-full overflow-y-scroll h-[420px] md:h-full xs:h-full flex flex-col gap-4 ">
              <div className="w-full flex flex-col relative items-start">
                <label className="font-normal text-[12px] text-gray-600">ACCOUNT TYPE</label>

                <div className="w-full">
                  {/* <DropdownComponent
                    options={vendor}
                    error="Error selecting account type"
                    placeholder="Select your account type..."
                    selectedValue={selectedValue}
                    setSelectedValue={setSelectedValue}
                    onChange={(e: { target: { value: React.SetStateAction<string> } }) => e && setSelectedValue(e.target.value)}
                  /> */}
                  <select name="account_type" id="account_type" required className="xs:p-2 w-full p-3 rounded-md border border-gray-300 bg-[#F5F5F5]">
                    <option value="Customer" selected>
                      Customer
                    </option>
                  </select>
                </div>
              </div>
              <div className="flex flex-row gap-4">
                <div className="w-full relative flex flex-col items-start">
                  <label className="font-normal text-[12px] text-gray-600">FIRST NAME</label>
                  <input
                    name="first_name"
                    className="p-3 w-full xs:p-2 rounded-md border border-gray-300 bg-[#F5F5F5]"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="w-full relative flex flex-col items-start">
                  <label className="font-normal text-[12px] text-gray-600">LAST NAME</label>
                  <input
                    name="last_name"
                    className="p-3 xs:p-2 w-full rounded-md border border-gray-300 bg-[#F5F5F5]"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-row xs:flex-col gap-4">
                <div className="w-full relative flex flex-col items-start">
                  <label className="font-normal text-[12px] text-gray-600">EMAIL</label>
                  <input name="email" className="p-3 xs:p-2 w-full rounded-md border border-gray-300 bg-[#F5F5F5]" onChange={handleChange} required />
                </div>
                <div className="w-full relative flex flex-col items-start">
                  <label className="font-normal text-[12px] text-gray-600">PHONE</label>
                  <input
                    placeholder="+234"
                    className="p-3 xs:p-2 w-full rounded-md border border-gray-300 bg-[#F5F5F5]"
                    onChange={handleChange}
                    name="phone"
                    required
                  />
                </div>
              </div>
              <div className="w-full flex flex-col relative items-start gap-2">
                <div className="flex justify-between xs:flex-col md:justify-between w-full gap-4">
                  <div className="w-full relative flex flex-col items-start">
                    <label className="font-normal text-[12px] text-gray-600">COUNTRY</label>
                    <select
                      name="country"
                      // value={country?.name}
                      id="country"
                      required
                      className="xs:p-2 w-full p-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
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
                  <div className="w-full  flex flex-col relative items-start">
                    <label className="font-normal text-[12px] text-gray-600">STATE</label>
                    <select
                      name="state"
                      id="state"
                      className="xs:p-2 w-full p-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
                      required
                      onChange={(e) => {
                        handleChangeState(e.target.value);
                      }}
                    >
                      <option>Choose state/ province</option>
                      {states?.map((state: State) => (
                        <option value={state?.name}>{state?.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="w-full  flex flex-col relative items-start">
                    <label className="font-normal text-[12px] text-gray-600">CITY</label>
                    <select
                      name="city"
                      id="city"
                      required
                      className="xs:p-2 w-full p-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
                      value={city.name}
                      onChange={(e) => handleChangeCity(e.target.value)}
                    >
                      <option>Choose city</option>
                      {cities?.map((city: any) => (
                        <option value={city?.name}>{city?.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex smm:flex-row flex-col gap-4">
                <div className="w-full  flex flex-col relative items-start">
                  <label className="font-normal text-[12px] text-gray-600">ADDRESS</label>
                  <input
                    placeholder=""
                    className="p-3 w-full xs:p-2 rounded-md border border-gray-300 bg-[#F5F5F5]"
                    onChange={handleChange}
                    name="address"
                    required
                  />
                </div>
                <div className="w-full  flex flex-col relative items-start">
                  <label className="font-normal text-[12px] text-gray-600">POSTAL CODE</label>
                  <input
                    placeholder="263001"
                    className="p-3 xs:p-2 w-1/3 xs:w-full md:w-full rounded-md border border-gray-300 bg-[#F5F5F5]"
                    onChange={handleChange}
                    name="poster_code"
                    required
                  />
                </div>
              </div>
              <div className="w-full flex flex-col relative items-start">
                <label className="font-normal text-[12px] text-gray-600">REFERRAL CODE(Optional)</label>
                <input
                  placeholder="Type in your referral code"
                  className="p-3 smm:w-1/3 w-full xs:p-2 rounded-md border border-gray-300 bg-[#F5F5F5]"
                  onChange={handleChange}
                  name="referrer_code"
                />
              </div>

              <div className="gap-4 flex smm:flex-row flex-col w-full items-center">
                <div className="relative flex flex-col w-full ">
                  <label className="font-normal text-[12px] text-gray-600">PASSWORD</label>
                  <div className="flex relative">
                    <input
                      placeholder="Password"
                      type={passwordVisible ? "text" : "password"}
                      id="password"
                      className="p-3 w-full xs:p-2 rounded-md border border-gray-300 bg-[#F5F5F5]"
                      onChange={handleChange}
                      name="password"
                    />
                    <img
                      src="/images/EyeOutline.svg"
                      alt="hide"
                      className="absolute right-2 cursor-pointer bottom-1/2 translate-y-1/2"
                      onClick={() => {
                        setPasswordVisible(!passwordVisible);
                      }}
                    />
                  </div>
                </div>

                <div className="relative flex flex-col w-full">
                  <label className="font-normal text-[12px] text-gray-600">CONFIRM PASSWORD</label>
                  <div className="flex relative">
                    <input
                      placeholder="Confirm Password"
                      type={confirmPasswordVisible ? "text" : "password"}
                      className="p-3 w-full xs:p-2 rounded-md border border-gray-300 bg-[#F5F5F5]"
                      onChange={handleChange}
                      name="password_confirmation"
                    />
                    <img
                      src="/images/EyeOutline.svg"
                      alt="hide"
                      className="absolute right-2 cursor-pointer bottom-1/2 translate-y-1/2"
                      onClick={() => {
                        setConfirmPasswordVisible(!confirmPasswordVisible);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-md py-8 xs:py-4 xs:gap-4 px-4 flex justify-between xs:flex-col-reverse items-center">
              <div className="hidden smm:flex flex-row gap-4 text-[#515151] ">
                <LoginOutlinedIcon />
                <p className="">
                  Already have an Account?
                  <Link to="/auth/">
                    <span className="text-[#E51B48]"> Login here</span>
                  </Link>
                </p>
              </div>
              <button disabled={loading ? true : false} className="py-2 px-20 bg-[#E51B48] hover:bg-red-700 rounded-md text-white xs:w-full">
                {loading ? "Loading..." : "Sign Up"}
              </button>
            </div>
          </form>
        </div>
        <div className="relative xl:w-3/4">
          <img src="/images/signupbanner.jpg" alt="" className="xs:max-h-20 sm:max-h-40 h-screen w-full md:max-h-40 object-cover" />
          <div className="absolute top-0 left-0 w-full h-full bg-[#44444C] opacity-70 flex justify-center items-center">
            <span className="text-white text-4xl text-[86px] md:text-[60px] xs:text-[40px] font-bold">AZANY</span>
          </div>
          <Link to="/" className="absolute top-4 left-4">
            <div className="flex-[5%] xs:w-14 md:w-30 w-24">
              <img src="/images/azanylogofinal.png" />
            </div>
          </Link>
          <div className="absolute bottom-0 left-0 w-full bg-transparent flex justify-center items-end">
            <span className="text-white text-center text-lg xs:text-sm px-4 py-2">{`Get started absolutely free. No credit needed`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthSignup;
