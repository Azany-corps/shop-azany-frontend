import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import callAPI from "../../../api/callApi";
import { MuiOtpInput } from "mui-one-time-password-input";

const AuthOTP = () => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = React.useState<string>("");

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      const customer_id = localStorage.getItem("user_id");
      if (customer_id === null) {
        throw new Error("User ID not found in local storage");
      }
      const otpData = new FormData();
      otpData.append("customer_id", customer_id);
      otpData.append("code", value);
      const response = await callAPI("auth/customer_verify_email_code", "POST", otpData, {
        "Content-Type": "multipart/form-data",
      });
      const token = response.token;
      localStorage.setItem("token", token);
      console.log(token);
      setLoading(false);
      toast.success("You have successfully signed up!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/customer-profile");
    } catch (error: unknown) {
      console.log(error);
      setLoading(false);
      toast.error((error as Error).message || "Error signing up", {
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
      <div className="flex xs:flex-col-reverse sm:flex-col-reverse md:flex-col-reverse justify-between  h-screen w-screen ">
        <div className="flex flex-col gap-4 p-10 xs:p-4">
          <div className="bg-white rounded-md py-2 px-4 ">
            <p className="text-[40px] font-[500] xs:text-[18px]">Enter Verification Code</p>
          </div>
          <form className="flex flex-col gap-4 " onSubmit={handleSubmit}>
            <div className="bg-white rounded-md p-4 w-[760px] xs:w-full md:w-full overflow-y-scroll h-[420px] md:h-full xs:h-full flex flex-col gap-4 ">
              <p>
                We just sent you a verification code to <span className="font-medium">your email address</span>
              </p>
              <div className="flex">
                <MuiOtpInput display="flex" length={6} value={value} onChange={handleChange} className="text-center" />
              </div>
              <p>
                Didn't recieve any code? <span className="font-medium text-[#E51B48]">Resend</span>
              </p>
              <p className="font-medium text-[#E51B48]">Change email</p>
            </div>
            <div className="bg-white rounded-md py-8 px-4 flex justify-between xs:flex-col xs:p-4 items-center xs:gap-4">
              <div className=" flex flex-row gap-4 text-[#515151] ">
                <LoginOutlinedIcon />
                <p className="">
                  Don't have an Account? Sign up <span className="text-[#E51B48]">here</span>{" "}
                </p>
              </div>
              <button disabled={loading ? true : false} className="py-2 px-20 bg-[#E51B48] rounded-md xs:w-full text-white hover:bg-red-700">
                {loading ? "Loading..." : "Verify"}
              </button>
            </div>
          </form>
        </div>
        <div className="relative w-3/4 xs:w-full xs:h-full flex flex-col justify-center items-center">
          <Link to="/" className="absolute top-8 left-4">
            <div className="flex-[5%] xs:w-14 md:w-30 w-24">
              <img src="/images/azanylogofinal.png" alt="" />
            </div>
          </Link>
          <div className="">
            <img src="/images/otpimage.png" alt="" className="object-cover " />
          </div>

          <div className="absolute bottom-10 xs:bottom-0 left-0 w-full bg-transparent flex justify-center items-end">
            <span className="text-black text-center text-lg xs:text-sm px-4 py-2">{`Get started absolutely free. No credit needed`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthOTP;
