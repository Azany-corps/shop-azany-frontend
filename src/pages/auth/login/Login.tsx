import React, { useState, useContext } from "react";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import { Link, useNavigate } from "react-router-dom";
import FormData from "form-data";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import callAPI from "../../../api/callApi";
import useAuthToken from "../../../hooks/useAuthToken";
import Background from "../../../assets/Grad effect asset (top).png";
import Logo from "../../../assets/azanylogofinal 2.png";


const AuthLogin = () => {
  const [isBusiness, setIsBusiness] = useState(false);
  const [isCustomer, setIsCustomer] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });
  const [authToken, saveAuthToken, deleteAuthToken] = useAuthToken();

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('hi')
    setLoading(true);
    try {
      let data = new FormData();
      data.append("email", formData.email);
      data.append("password", formData.password);

      const response = await callAPI("auth/login", "POST", data, {
        "Content-Type": "multipart/form-data",
      });

      if (response.status && response.status_code === 200) {
        // localStorage.setItem("token", response.token);
        let token: any = response.token;
        saveAuthToken(token);
        localStorage.setItem("name", response.data?.values?.first_name);
        localStorage.setItem("main_id", response.data?.values?.id);
        localStorage.setItem("account_type", response.data?.values?.account_type);

        toast.success(response.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        navigate("/manufacturers-profile");
      } else {
        toast.error(response.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error: unknown) {
      console.log(error);
      setLoading(false);
      toast.error((error as Error).message || "Error: unable to login", {
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

  // const handleSubmitCustomer = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   setLoading(true);
  //   try {
  //     let data = new FormData();
  //     data.append("email", formData.email);
  //     data.append("password", formData.password);

  //     const response = await callAPI("auth/customer_login", "POST", data, {
  //       "Content-Type": "multipart/form-data",
  //     });

  //     if (response.status && response.status_code === 200) {
  //       localStorage.setItem("token", response.token);
  //       localStorage.setItem("name", response.data?.values?.first_name);
  //       localStorage.setItem("account_type", response.data?.values?.account_type);
  //       console.log(response);
  //       toast.success("Login Suceessful", {
  //         position: "top-center",
  //         autoClose: 3000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //       });
  //       navigate("/customer-profile");
  //     } else {
  //       // Set the error message in the state variable
  //       setErrorMessage(response.message);
  //       toast.error(response.message, {
  //         position: "top-center",
  //         autoClose: 3000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //       });
  //     }
  //   } catch (error: unknown) {
  //     console.log(Error);
  //     setLoading(false);
  //     // Set the error message in the state variable
  //     toast.error((error as Error).message || "Error: unable to login", {
  //       position: "top-center",
  //       autoClose: 3000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //     });
  //   }
  // };;

  return (
    <div className="flex w-full justify-center items-start xs:items-center sm:items-center bg-[#F5F5F5] h-screen ">
      <ToastContainer />
      <div className="flex flex-col relative h-full xs:h-2/3 sm:h-2/3 w-[70%] xs:w-[90%] sm:w-[90%] py-28 justify-center items-center bg-white">
        <img className="w-full h-full absolute" src={Background} alt="background" />
        <img className="mb-36 xs:mb-24 sm:mb-24 xs:scale-[0.65] sm:scale-[0.65] z-20" src={Logo} alt="logo" />
        <form onSubmit={handleSubmit} className="flex z-20 gap-8 flex-col justify-center items-center w-[30%] xs:gap-6 sm:gap-6 xs:w-2/3 sm:w-2/3">
          <div className="flex flex-col w-full justify-between gap-14 xs:gap-8 sm:gap-8">
            <input
              className="bg-transparent text-xs w-full placeholder:text-xs px-3 outline-none py-[15px] xs:py-[9px] sm:py-[9px] placeholder:text-[#B3B7BB] placeholder:text-center border rounded-2xl border-[#B3B7BB]"
              placeholder="Enter Email"
              onChange={handleChange}
              name="email"
              value={formData.email}
              type="email"
            />
            <input
              className="bg-transparent text-xs w-full placeholder:text-xs px-3 outline-none py-[15px] xs:py-[9px] sm:py-[9px] placeholder:text-[#B3B7BB] placeholder:text-center border rounded-2xl border-[#B3B7BB]"
              placeholder="Enter Password"
              onChange={handleChange}
              name="password"
              value={formData.password}
              type="password"
            />
          </div>
          <button disabled={loading ? true : false} className="bg-[#D65D5B] font-bold text-white rounded-2xl text-sm py-2 px-10">
            {loading ? "Loading..." : "Login"}
          </button>
        </form>
        <p className="text-center z-20  font-semibold mt-3">
          If you don’t have an account yet,
          <Link to="/auth/signup">
            <span className="text-[#0F60FF]"> Sign up here</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

{/* <div className="flex flex-col gap-4 p-10 xs:p-4 md:h-screen xl:w-full">
          <div className="bg-white rounded-md py-2 px-4">
            <p className="text-[40px] font-[500] xs:text-[18px]">Login</p>
          </div>
          <div className="bg-white rounded-md px-28 py-8 xs:px-4 flex flex-col gap-6 xs:h-4/6">
            <div className="flex flex-col gap-4">
              <p className="xs:text-[14px]">Login as a...</p>
              <div className="flex xl:gap-4 gap-2 flex-row">
                <button
                  className={`${
                    isCustomer ? "bg-[#E51B48] text-white " : "border border-[#E51B48] text-[#E51B48]"
                  } flex flex-row gap-4 rounded-md px-4 py-2 items-center "`}
                  onClick={handleCustomerButtonClick}
                >
                  <div>
                    <img src="/images/logincustomer.png" alt="" />
                  </div>
                  <div>
                    <p className="text-[24px] xs:text-[18px]">Customer</p>
                    <p className="text-[14px] xs:text-[8px]">Shop, Buy, Earn</p>
                  </div>
                </button>

                <button
                  className={`${
                    isBusiness ? "bg-[#E51B48] text-white " : "border border-[#E51B48] text-[#E51B48]"
                  } border flex flex-row gap-4 rounded-md p-2 items-center "`}
                  onClick={handleBusinessButtonClick}
                >
                  <div>
                    <img src="/images/loginbusiness.png" alt="" />
                  </div>
                  <div className="">
                    <p className="text-[24px] xs:text-[18px]">Business</p>
                    <p className=" text-[14px] xs:text-[8px]">Sell, Promote, Gain</p>
                  </div>
                </button>
              </div>
            </div>
            {isBusiness ? (
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-4">
                  <div className="w-full relative flex flex-col items-start">
                    <label className="font-normal text-[12px] text-gray-600">EMAIL</label>
                    <input
                      placeholder="Business Email"
                      type="email"
                      className="p-4 xs:p-2 w-full rounded-md border border-gray-300 bg-[#F5F5F5]"
                      onChange={handleChange}
                      required
                      name="email"
                    />
                  </div>
                  <div className="relative flex flex-col w-full ">
                    <label className="font-normal text-[12px] text-gray-600">PASSWORD</label>
                    <input
                      placeholder="Password"
                      type="password"
                      className="p-4 w-full xs:p-2 rounded-md border border-gray-300 bg-[#F5F5F5]"
                      onChange={handleChange}
                      name="password"
                      required
                    />
                  </div>

                  <Link to="/auth/forgot-password-business">
                    <div>
                      <p className="text-[14px] text-[#E51B48]">Forgot Password?</p>
                    </div>
                  </Link>

                  <button disabled={loading ? true : false} className="py-2 px-20 bg-[#C1C1C1] hover:bg-[#E51B48] rounded-md text-white">
                    {loading ? "Loading..." : "Login"}
                  </button>
                </div>
              </form>
            ) : (
              <form onSubmit={handleSubmitCustomer}>
                <div className="flex flex-col gap-4">
                  <div className="w-full relative flex flex-col items-start">
                    <label className="font-normal text-[12px] text-gray-600">EMAIL</label>
                    <input
                      placeholder="Email"
                      type="email"
                      className="p-4 xs:p-2  w-full rounded-md border border-gray-300 bg-[#F5F5F5]"
                      onChange={handleChange}
                      required
                      name="email"
                    />
                  </div>
                  <div className="relative flex flex-col w-full">
                    <label className="font-normal text-[12px] text-gray-600">PASSWORD</label>
                    <input
                      placeholder="Password"
                      type="password"
                      className="p-4 w-full xs:p-2  rounded-md border border-gray-300 bg-[#F5F5F5]"
                      onChange={handleChange}
                      name="password"
                      required
                    />
                  </div>

                  <Link to="/auth/forgot-password">
                    <div>
                      <p className="text-[14px] text-[#E51B48]">Forgot Password?</p>
                    </div>
                  </Link>

                  <button disabled={loading ? true : false} className="py-2 px-20 bg-[#C1C1C1] hover:bg-[#E51B48] rounded-md text-white">
                    {loading ? "Loading..." : "Login"}
                  </button>
                </div>
              </form>
            )}
          </div>
          <div className="bg-white rounded-md py-8 px-4 xs:px-2 xs:py-4 flex flex-row gap-4 text-[#515151] ">
            <LoginOutlinedIcon />
            <p className="xs:text-[14px]">
              Don't have an Account?
              <Link to="/auth/signup">
                <span className="text-[#E51B48]"> Sign up here</span>
              </Link>
            </p>
          </div>
        </div> */}

export default AuthLogin;
