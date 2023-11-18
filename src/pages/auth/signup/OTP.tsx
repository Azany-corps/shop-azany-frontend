import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import callAPI from "../../../api/callApi";
import { MuiOtpInput } from "mui-one-time-password-input";
import Logo from "../../../assets/azanylogofinal 2.png";
import Otp from "../../../assets/Rectangle 22802.png";
import PopUpModal from "../../../components/Core/PopUpModal";


const AuthOTPBusiness = () => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = React.useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setValue(value);
  };

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(value);
    setLoading(true);
    try {
      const user_id = localStorage.getItem("user_id");
      if (user_id === null) {
        throw new Error("User ID not found in local storage");
      }
      const otpData = new FormData();
      otpData.append("user_id", user_id);
      otpData.append("code", value);
      const response = await callAPI("auth/customer_verify_email_code", "POST", otpData, {
        "Content-Type": "multipart/form-data",
      });
      const token = response.token;
      localStorage.setItem("token", token);
      console.log(token);
      setLoading(false);
      setValue("");
      toast.success("Your email is verified", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/customer-profile");
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Something went wrong", {
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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-center items-center bg-[#F5F5F5] h-screen py-4">
      <ToastContainer />
      <div className="flex flex-col justify-center items-center rounded-2xl bg-white h-full w-[70%]">
        <img className="scale-[0.5]" src={Logo} alt="logo" />
        <img className="scale-75" src={Otp} alt="logo" />
        <p className="w-1/2 text-center">Congratulations and thank you for Registering with Azany</p>
        <button onClick={openModal} className="bg-[#D65D5B] mt-4 font-bold text-white rounded-2xl text-sm py-2 px-10">
          Verify
        </button>
      </div>
      <PopUpModal isOpen={isModalOpen} onClose={closeModal}>
        <div className="flex flex-col w-[500px] justify-end pb-8 items-center min-h-[400px] gap-3 py-4 px-4">
          <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-24" action="">
            <div className="flex flex-col justify-center w-full items-center gap-4">
              <input
                className="bg-transparent text-center text-xs w-2/3 placeholder:text-xs px-3 outline-none py-[10px] xs:py-[8px] sm:py-[9px] placeholder:text-[#B3B7BB] placeholder:text-center border rounded-2xl border-[#B3B7BB]"
                placeholder="Enter OTP"
                onChange={handleChange}
                name="value"
                value={value}
                type="text"
              />
              <p className="text-sm text-center">Enter the OTP sent to this email johndoe@gmail.com</p>
            </div>
            <button disabled={loading ? true : false} className="bg-black mt-4 font-bold text-white rounded-2xl text-sm py-3 px-16">
              {loading ? "Loading..." : "Verify"}
            </button>
          </form>
        </div>
      </PopUpModal>
    </div>
  );
};

export default AuthOTPBusiness;
