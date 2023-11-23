import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import FormData from "form-data";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import callAPI from "../../../api/callApi";

interface AuthForgotBusinessProps {
  open?: boolean;
  onClose?: () => void;
}

const AuthVerifyBusiness: React.FC<AuthForgotBusinessProps> = ({
  open,
  onClose,
}) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    otp: "",
  });
  const [isResetModalOpen, setResetModal] = useState(false);
  const [passwordLoading, setPasswordLoading] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  function handleBack() {
    window.history.back();
  }

  const closeResetModal = () => {
    setResetModal(false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      let data = new FormData();
      const user_id = localStorage.getItem("user_id");

      data.append("code", formData.otp);
      data.append("user_id", user_id);
      const response = await callAPI(
        "auth/password_reset_code_entry",
        "POST",
        data,
        {
          "Content-Type": "multipart/form-data",
        }
      );
      console.log(response.data);
      setLoading(false);
      setFormData({ otp: "" });
      toast.success("OTP has been sent to your email", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // navigate("/auth/reset-password");
      setResetModal(true);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setFormData({ otp: "" });
      toast.error((error as Error).message, {
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

  const passHandleChange = (event: any) => {
    const { name, value } = event.target;
    setPassFormData({ ...passFormData, [name]: value });
  };

  const [passFormData, setPassFormData] = useState({
    password: "",
    password_confirmation: "",
  });

  const handleSubmitPass = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      const user_id = localStorage.getItem("user_id");
      if (user_id === null) {
        throw new Error("User ID not found in local storage");
      }

      const otpData = new FormData();
      otpData.append("user_id", user_id);
      otpData.append("password", passFormData.password);
      otpData.append(
        "password_confirmation",
        passFormData.password_confirmation
      );
      const response = await callAPI(
        "auth/new_password_entry",
        "POST",
        otpData,
        {
          "Content-Type": "multipart/form-data",
        }
      );
      console.log(response);
      setPasswordLoading(false);
      toast.success("Your password has been reset successfully", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setIsSuccessful(true);
      navigate("/auth");
    } catch (error: unknown) {
      console.log(error);
      setPasswordLoading(false);
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

  const userEmail = localStorage.getItem("eMail");

  return (
    <>
      {open && (
        <div
          className={`${
            open ? "fixed" : "hidden"
          } top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto h-screen flex justify-center items-center bg-black bg-opacity-50`}
        >
          <div className="relative w-full max-w-2xl max-h-full">
            <div className="w-full h-full flex justify-center items-center">
              <div className="w-full h-full flex justify-center items-center ">
                {!isResetModalOpen && !isSuccessful && (
                  <div className="relative p-4 w-full max-w-[590px] max-h-[500px]">
                    <div className="relative bg-white rounded-[26.7px] shadow  px-[47px]">
                      <div className="flex items-center justify-between py-4 md:p-5 border-b border-dashed rounded-t ">
                        <h3 className="text-[12.5px] font-bold text-gray-900 ">
                          Verify email
                        </h3>
                        <button
                          type="button"
                          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                          data-modal-hide="static-modal"
                          onClick={() => {
                            onClose?.();
                            setResetModal(false);
                          }}
                        >
                          <img src="/images/modalClose.svg" alt="modal-close" />
                          <span className="sr-only">Close modal</span>
                        </button>
                      </div>
                      <div className="p-4 md:p-5 space-y-4">
                        <form
                          onSubmit={handleSubmit}
                          className="flex z-20 flex-col justify-center items-center w-full"
                        >
                          <div className="flex flex-col w-full items-center justify-between">
                            <input
                              className="bg-transparent text-xs max-w-[234px] w-[234px] placeholder:text-xs px-3 outline-none py-[15px] xs:py-[9px] sm:py-[9px] placeholder:text-[#B3B7BB] placeholder:text-center border rounded-2xl border-[#B3B7BB] mt-[125px]"
                              placeholder="OTP"
                              value={formData.otp}
                              onChange={handleChange}
                              name="otp"
                              type="text"
                            />
                          </div>
                          <p className="text-center z-20  font-semibold mt-[28px]">
                            Enter the OTP sent to this email johndoe@gmail.com
                          </p>
                          <button
                            disabled={loading ? true : false}
                            className="bg-black font-bold text-white rounded-2xl text-[17px] py-4 mt-[142px] w-[200px]"
                          >
                            {loading ? "Loading..." : "Verify"}
                          </button>
                          <div className="gap-4 flex flex-col w-full items-center">
                            <p className="text-center z-20  font-semibold mt-4">
                              Didn’t receive the email?{" "}
                              <span className="text-[#E51B48] cursor-pointer">
                                Click to resend
                              </span>
                            </p>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                )}
                {isResetModalOpen && !isSuccessful && (
                  <div className="relative p-4 w-full max-w-[590px] max-h-[500px]">
                    <div className="relative bg-white rounded-[26.7px] shadow px-[47px]">
                      <div className="flex items-center justify-between py-4 md:p-5 border-b border-dashed rounded-t  ">
                        <h3 className="text-[12.5px] font-bold text-gray-900 ">
                          Forget Password
                        </h3>
                        <button
                          type="button"
                          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                          data-modal-hide="static-modal"
                          onClick={() => {
                            onClose?.();
                            setResetModal(false);
                          }}
                        >
                          <img src="/images/modalClose.svg" alt="modal-close" />

                          <span className="sr-only">Close modal</span>
                        </button>
                      </div>
                      <div className="p-4 md:p-5 space-y-4">
                        <p className="text-center text-xl z-20 font-semibold mt-[73.6px] mb-[17px]">
                          Create your new password
                        </p>
                        <form
                          onSubmit={handleSubmitPass}
                          className="flex z-20 flex-col justify-center items-center w-full"
                        >
                          <div className="flex flex-col w-full items-center justify-between">
                            <div className="w-full mb-[39px] flex justify-center items-center">
                              <input
                                className="bg-transparent text-xs max-w-[234px] w-[234px] placeholder:text-xs px-3 outline-none py-[15px] xs:py-[9px] sm:py-[9px] placeholder:text-[#B3B7BB] placeholder:text-center border rounded-2xl border-[#B3B7BB]"
                                placeholder="Password"
                                value={passFormData.password}
                                onChange={passHandleChange}
                                name="password"
                                type="password"
                              />
                            </div>
                            <div className="w-full flex justify-center items-center">
                              <input
                                className="bg-transparent text-xs max-w-[234px] w-[234px] placeholder:text-xs px-3 outline-none py-[15px] xs:py-[9px] sm:py-[9px] placeholder:text-[#B3B7BB] placeholder:text-center border rounded-2xl border-[#B3B7BB]"
                                name="password_confirmation"
                                value={passFormData.password_confirmation}
                                onChange={passHandleChange}
                                placeholder="Re-enter passoerd"
                                type="password"
                              />
                            </div>
                          </div>

                          <button
                            disabled={passwordLoading ? true : false}
                            className="bg-black font-bold text-white rounded-2xl text-[17px] py-4 mt-[123.9px] w-[200px]"
                          >
                            {passwordLoading ? "Loading..." : "Complete"}
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                )}
                {!isResetModalOpen && isSuccessful && (
                  <div className="relative p-4 w-full max-w-[590px] max-h-[500px]">
                    <div className="relative bg-white rounded-[26.7px] shadow px-[47px]">
                      <div className="px-4 md:px-5 space-y-4 flex flex-col justify-between items-center pt-[90px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="253"
                          height="253"
                          viewBox="0 0 253 253"
                          fill="none"
                        >
                          <path
                            d="M185.973 21.8191C187.592 18.9926 186.62 15.3749 183.721 13.889C179.378 11.663 174.909 9.69094 170.338 7.98263C167.286 6.84225 163.958 8.56206 162.962 11.6637C161.965 14.7653 163.678 18.073 166.724 19.228C170.517 20.6661 174.23 22.3049 177.848 24.1374C180.755 25.6094 184.353 24.6457 185.973 21.8191Z"
                            fill="#00A91B"
                          />
                        </svg>
                        <p className="text-center text-[17px] z-20 font-semibold mt-[34px] pb-[85px]">
                          Your password has been changed
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AuthVerifyBusiness;
