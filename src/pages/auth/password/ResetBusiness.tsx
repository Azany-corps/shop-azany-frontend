import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import FormData from "form-data";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import callAPI from "../../../api/callApi";

const AuthReset = () => {
  const [, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const navigate = useNavigate();
  const [confirmPasswordVisible, setConfirmPasswordVisible] =
    useState<boolean>(false);

  function handleBack() {
    window.history.back();
  }

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const [formData, setFormData] = useState({
    password: "",
    password_confirmation: "",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      const user_id = localStorage.getItem("user_id");
      if (user_id === null) {
        throw new Error("User ID not found in local storage");
      }

      const otpData = new FormData();
      otpData.append("user_id", user_id);
      otpData.append("password", formData.password);
      otpData.append("password_confirmation", formData.password_confirmation);
      const response = await callAPI(
        "auth/new_password_entry",
        "POST",
        otpData,
        {
          "Content-Type": "multipart/form-data",
        }
      );
      console.log(response);
      setLoading(false);
      toast.success("Your password has been reset successfully", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/auth/verify-successful");
    } catch (error: unknown) {
      console.log(error);
      setLoading(false);
      toast.error((error as Error).message || "Failed to reset your password", {
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
        <button
          onClick={handleBack}
          className="flex px-20 items-center xs:px-4 gap-2 text-[#515151] "
        >
          <ArrowBackIcon />
          Back
        </button>
        <div className="flex justify-center items-center xs:px-4">
          <div className="bg-white w-[660px] rounded-md flex flex-col items-center gap-8 justify-center px-20 py-10 xs:px-8 xs:w-full">
            <div>
              <img src="/images/loginkey.png" alt="" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-[40px] xs:text-[30px] font-[500]">
                Set New Password
              </p>
              <p className="text-[#515151] items-center flex">
                Your new password must be different from previously used
                passwords
              </p>
            </div>
            <form
              className="gap-4 flex flex-col w-full items-center"
              onSubmit={handleSubmit}
            >
              <div className="relative flex flex-col w-full">
                <label className="font-normal text-[12px] text-gray-600">
                  PASSWORD
                </label>
                <div className="flex relative">
                  <input
                    placeholder=""
                    type={passwordVisible ? "text" : "password"}
                    className="px-4 py-3 w-full rounded-md border border-gray-300 bg-[#F5F5F5]"
                    name="password"
                    onChange={handleChange}
                    required
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
                <label className="font-normal text-[12px] text-gray-600">
                  CONFIRM PASSWORD
                </label>
                <div className="flex relative">
                  <input
                    placeholder=""
                    type={confirmPasswordVisible ? "text" : "password"}
                    className="px-4 py-3 w-full rounded-md border border-gray-300 bg-[#F5F5F5]"
                    name="password_confirmation"
                    onChange={handleChange}
                    required
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
              <button className="py-2 w-full bg-[#E51B48] rounded-md text-white">
                Reset Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthReset;
