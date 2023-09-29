import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { MuiOtpInput } from "mui-one-time-password-input";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import FormData from "form-data";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import callAPI from "../../../api/callApi";

const AuthVerifyBusiness = () => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = React.useState<string>("");
  const navigate = useNavigate();
  const location = useLocation();

  function handleBack() {
    window.history.back();
  }

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      const user_id = localStorage.getItem("user_id");
      const otpData = new FormData();
      otpData.append("code", value);
      otpData.append("user_id", user_id);
      const endpoint = "auth/password_reset_code_entry";
      const response = await callAPI(endpoint, "POST", otpData, {
        "Content-Type": "multipart/form-data",
      });
      setLoading(false);
      toast.success("Your password has been reset", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/auth/reset-password");
    } catch (error: unknown) {
      console.log(error);
      setLoading(false);
      toast.error((error as Error).message || "Error: unable to reset password", {
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

  const userEmail = localStorage.getItem("eMail");

  return (
    <div className="bg-[#F5F5F5]">
      <div className="w-screen h-screen py-10 flex flex-col gap-5">
        <button onClick={handleBack} className="flex px-20 xs:px-4 items-center gap-2 text-[#515151] ">
          <ArrowBackIcon />
          Back
        </button>
        <div className="flex justify-center items-center xs:px-4">
          <form
            className="bg-white w-[660px] rounded-md flex flex-col items-center gap-8 justify-center px-20 py-10 xs:px-8 xs:w-full"
            onSubmit={handleSubmit}
          >
            <div>
              <img src="/images/loginmessage.png" alt="" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-[40px] font-[500] xs:text-[30px]">Check your email</p>
              <p className="text-[#515151]">
                We sent a password reset link to <span className="font-medium">{userEmail}</span>
              </p>
            </div>
            <div className="flex gap-[8px] justify-center">
              <div>
                <MuiOtpInput display="flex" length={6} value={value} onChange={handleChange} className="text-center" />
              </div>
            </div>
            <div className="gap-4 flex flex-col w-full items-center">
              <button className="py-2 w-full bg-[#E51B48] rounded-md text-white hover:bg-red-700">Verify Email</button>
              <p>
                Didn’t receive the email? <span className="text-[#E51B48]">Click to resend</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthVerifyBusiness;
