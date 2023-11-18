import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import { useNavigate } from "react-router-dom";
import FormData from "form-data";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import callAPI from "../../../api/callApi";
import Logo from "../../../assets/Logo.png"
import { ISignUpCustomer } from "./signup.type";


const SignupCustomer = () => {
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState<boolean>(false);

  const navigate = useNavigate();

  const [formData, setFormData] = useState<ISignUpCustomer>({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
    password_confirmation: ""
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
      data.append("password", formData.password);
      data.append("password_confirmation", formData.password_confirmation);

      const response = await callAPI("auth/customer_register", "POST", data, {
        "Content-Type": "multipart/form-data",
      });
      console.log(response);
      localStorage.setItem("user_id", response.data.user.id);
      setLoading(false);
      toast.success("Success message", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/auth/otp");
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
    <div className="flex min-h-screen md:px-20 sm:px-10 xs:px-10 px-44 py-5 bg-[#F5F5F5]">
      <ToastContainer />
      <div className="flex relative rounded-2xl h-full py-8 flex-col w-full bg-white gap-10 justify-center items-center">
        <img className="" src={Logo} alt="Azany Logo" />
        <div className="flex w-[60%] md:w-[90%] sm:w-[90%] xs:w-[90%]  flex-col justify-center items-center">
          <p className="text-xs">
            Signup
          </p>
        </div>

        <form className="w-[50%] sm:w-[90%] xs:w-[90%] flex flex-col items-center gap-10" onSubmit={handleSubmit} action="">
          <div className="flex w-full justify-center items-center gap-4">
            <label className="text-right text-sm w-1/3 font-medium" htmlFor="first_name">First Name</label>
            <input
              className="bg-[#efefef] text-xs w-2/3 px-3 outline-none py-[15px] border rounded-[5px] border-[#B3B7BB] xs:py-[9px] sm:py-[9px]"
              required
              onChange={handleChange}
              name="first_name"
              value={formData.first_name}
              type="text"
            />
          </div>
          <div className="flex w-full justify-center items-center gap-4">
            <label className="text-right text-sm w-1/3 font-medium" htmlFor="last_name">Last Name</label>
            <input
              className="bg-[#efefef] text-xs w-2/3 px-3 outline-none py-[15px] border rounded-[5px] border-[#B3B7BB] xs:py-[9px] sm:py-[9px]"
              required
              onChange={handleChange}
              name="last_name"
              value={formData.last_name}
              type="text"
            />
          </div>
          <div className="flex w-full justify-center items-center gap-4">
            <label className="text-right text-sm w-1/3 font-medium" htmlFor="phone">Phone number</label>
            <input
              className="bg-[#efefef] text-xs w-2/3 px-3 outline-none py-[15px] border rounded-[5px] border-[#B3B7BB] xs:py-[9px] sm:py-[9px]"
              required
              onChange={handleChange}
              name="phone"
              value={formData.phone}
              type="text"
            />
          </div>
          <div className="flex w-full justify-center items-center gap-4">
            <label className="text-right text-sm w-1/3 font-medium" htmlFor="email">Email address</label>
            <input
              className="bg-[#efefef] text-xs w-2/3 px-3 outline-none py-[15px] border rounded-[5px] border-[#B3B7BB] xs:py-[9px] sm:py-[9px]"
              required
              onChange={handleChange}
              name="email"
              value={formData.email}
              type="email"
            />
          </div>
          <div className="flex w-full justify-center items-center gap-4">
            <label className="text-right text-sm w-1/3 font-medium" htmlFor="password">Password</label>
            <input
              className="bg-[#efefef] text-xs w-2/3 px-3 outline-none py-[15px] border rounded-[5px] border-[#B3B7BB] xs:py-[9px] sm:py-[9px]"
              required
              onChange={handleChange}
              name="password"
              value={formData.password}
              type="password"
            />
          </div>
          <div className="flex w-full justify-center items-center gap-4">
            <label className="text-right text-sm w-1/3 font-medium" htmlFor="password_confirmation">Retype password</label>
            <input
              className="bg-[#efefef] text-xs w-2/3 px-3 outline-none py-[15px] border rounded-[5px] border-[#B3B7BB] xs:py-[9px] sm:py-[9px]"
              required
              onChange={handleChange}
              name="password_confirmation"
              value={formData.password_confirmation}
              type="password"
            />
          </div>
          <button disabled={loading ? true : false} className="bg-[#D65D5B] disabled:bg-slate-400 font-bold text-white rounded-2xl py-3 px-11 sm:text-xs xs:text-xs sm:py-2 xs:py-2 sm:w-[40%] xs:w-[40%] w-[30%]">
            {loading ? "Loading..." : "Register"}
          </button>
        </form>
      </div >
    </div >
  );
};

export default SignupCustomer;
