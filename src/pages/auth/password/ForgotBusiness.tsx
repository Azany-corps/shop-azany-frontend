import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import FormData from "form-data";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import callAPI from "../../../api/callApi";
import { Link } from "react-router-dom";
import Logo from "../../../assets/azanylogofinal 2.png";
import Background from "../../../assets/Grad effect asset (top).png";
import AuthVerifyBusiness from "./VerifyBusiness";

const AuthForgotBusiness = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  function handleBack() {
    window.history.back();
  }

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      let data = new FormData();
      data.append("email", formData.email);
      const response = await callAPI(
        "auth/reset_password_email_entry",
        "POST",
        data,
        {
          "Content-Type": "multipart/form-data",
        }
      );
      console.log(response.data);
      localStorage.setItem("user_id", response.data.user[0].id);
      localStorage.setItem("eMail", response.data.user[0].email);
      toast.success("OTP has been sent to your email", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setLoading(false);

      // navigate("/auth/verify-businessemail");
      setIsModalOpen(true);
      // setResetModal(true);
    } catch (error) {
      console.log(error);
      setLoading(false);
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

  return (
    <>
      <div className="flex w-full justify-center items-start xs:items-center sm:items-center bg-[#F5F5F5] h-screen ">
        <ToastContainer />
        <AuthVerifyBusiness open={isModalOpen} onClose={closeModal} />
        <div className="flex flex-col relative h-full xs:h-2/3 sm:h-2/3 w-[70%] xs:w-[90%] sm:w-[90%] py-28 justify-center items-center bg-white">
          <img
            className="w-full h-full absolute"
            src={Background}
            alt="background"
          />
          <img
            className="mb-36 xs:mb-24 sm:mb-24 xs:scale-[0.65] sm:scale-[0.65] z-20"
            src={Logo}
            alt="logo"
          />
          <form
            onSubmit={handleSubmit}
            className="flex z-20 gap-8 flex-col justify-center items-center w-full xs:gap-6 sm:gap-6 xs:w-2/3 sm:w-2/3"
          >
            <div className="flex flex-col w-full justify-between max-w-[254px]">
              <input
                className="bg-transparent text-xs w-full placeholder:text-xs px-3 outline-none py-[15px] xs:py-[9px] sm:py-[9px] placeholder:text-[#B3B7BB] placeholder:text-center border rounded-2xl border-[#B3B7BB]"
                placeholder="Enter Email...."
                name="email"
                onChange={handleChange}
                required
              />
            </div>
            <p className="text-center z-20  font-semibold mt-5">
              Please enter the OTP verification code has been sent to this email
              {localStorage.getItem("email")}
            </p>
            <button
              disabled={loading ? true : false}
              className="bg-[#D65D5B] font-bold text-white rounded-2xl text-sm py-2 px-10 mt-[99px]"
            >
              {loading ? "Loading..." : "Done"}
            </button>
          </form>

          <Link className="mt-3 z-20 font-semibold" to="/login">
            <span className="text-[#0F60FF]">Back</span>
          </Link>
        </div>
      </div>
    </>
    // <div className="bg-[#F5F5F5]">
    //   <div className="w-screen h-screen py-10 flex flex-col gap-5">
    //     <button
    //       onClick={handleBack}
    //       className="flex xs:px-4 px-20 items-center gap-2 text-[#515151]"
    //     >
    //       <ArrowBackIcon />
    //       Back
    //     </button>
    //     <div className="flex justify-center items-center xs:px-4">
    //       <div className="bg-white w-[660px] rounded-md flex flex-col items-center gap-8 justify-center px-20 py-10 xs:px-8 xs:w-full">
    //         <div>
    //           <img src="/images/loginkey.png" alt="" />
    //         </div>
    //         <div className="flex flex-col items-center justify-center">
    //           <p className="text-[40px] xs:text-[30px] font-[500]">
    //             Forgot Password?
    //           </p>
    //           <p className="text-[#515151]">
    //             No worries, we’ll get you back on track
    //           </p>
    //         </div>
    //         <form
    //           className="gap-6 flex flex-col w-full"
    //           onSubmit={handleSubmit}
    //         >
    //           <div className="relative flex flex-col items-start">
    //             <label className="font-normal text-[12px] text-gray-600">
    //               EMAIL
    //             </label>
    //             <input
    //               placeholder=""
    //               className="px-4 py-3 w-full rounded-md border border-gray-300 bg-[#F5F5F5]"
    //               name="email"
    //               onChange={handleChange}
    //               required
    //             />
    //           </div>
    //           <button
    //             disabled={loading ? true : false}
    //             className="py-2 px-20 bg-[#E51B48] hover:bg-red-700 rounded-md text-white"
    //           >
    //             {loading ? "Loading..." : "Reset Password"}
    //           </button>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default AuthForgotBusiness;
