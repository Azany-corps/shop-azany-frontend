import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import FormData from "form-data";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import callAPI from "../../../api/callApi";

const AuthForgot = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
  });
  const navigate = useNavigate();
  const location = useLocation();

  function handleBack() {
    window.history.back();
  }

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      let data = new FormData();
      data.append("email", formData.email);
      const response = await callAPI("auth/customer_new_password_entry", "POST", data, {
        "Content-Type": "multipart/form-data",
      });
      localStorage.setItem("customerId", response.data.user[0].id) 
      console.log(localStorage.getItem("customerId"));
      toast.success("OTP has been sent to your email", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/auth/verify-email");
    } catch (err) {
      console.log(err);
      setLoading(false);
      toast.error("Unable to reset password", {
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
      <div className="w-screen h-screen py-10 flex flex-col gap-5">
        <button onClick={handleBack} className="flex xs:px-4 px-20 items-center gap-2 text-[#515151] ">
          <ArrowBackIcon />
          Back
        </button>
        <div className="flex justify-center items-center xs:px-4">
          <div className="bg-white w-[660px] rounded-md flex flex-col items-center gap-8 justify-center px-20 py-10 xs:px-8 xs:w-full">
            <div>
              <img src="/images/loginkey.png" alt="" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-[40px] xs:text-[30px] font-[500]">Forgot Password?</p>
              <p className="text-[#515151]">No worries, we’ll get you back on track</p>
            </div>
            <form className="gap-6 flex flex-col w-full" onSubmit={handleSubmit}>
              <div className="relative flex flex-col items-start">
                <label className="font-normal text-[12px] text-gray-600">EMAIL</label>
                <input
                  placeholder=""
                  className="px-4 py-3 w-full rounded-md border border-gray-300 bg-[#F5F5F5]"
                  name="email"
                  onChange={handleChange}
                  required
                />
              </div>
              <button disabled={loading ? true : false} className="py-2 px-20 bg-[#E51B48] hover:bg-red-700 rounded-md text-white">
                {loading ? "Loading..." : "Reset Password"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForgot;
