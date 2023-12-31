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

const AuthLoginCustomer = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState<{ email: string; password: string }>(
    {
      email: "",
      password: "",
    }
  );
  const [authToken, saveAuthToken, deleteAuthToken] = useAuthToken();

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
      data.append("password", formData.password);

      const response = await callAPI("auth/customer_login", "POST", data, {
        "Content-Type": "multipart/form-data",
      });

      if (response.status && response.status_code === 200) {
        // localStorage.setItem("token", response.token);
        // console.log(response.data?.values);
        let token: any = response.token;
        saveAuthToken(token);
        localStorage.setItem("name", response.data?.values?.first_name);
        localStorage.setItem("last_name", response.data?.values?.last_name);
        localStorage.setItem("phone", response.data?.values?.phone);
        localStorage.setItem("email", response.data?.values?.email);
        localStorage.setItem("state", response.data?.values?.state);
        localStorage.setItem("country", response.data?.values?.country);
        localStorage.setItem("address", response.data?.values?.address);
        localStorage.setItem("city", response.data?.values?.city);
        localStorage.setItem("main_id", response.data?.values?.id);
        localStorage.setItem(
          "account_type",
          response.data?.values?.account_type
        );

        console.log(response?.token);

        // console.log(response.data?.values);

        toast.success(response.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        navigate("/customer-profile");
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

  return (
    <div className="flex w-full justify-center md:items-start items-center bg-[#F5F5F5] h-screen ">
      <ToastContainer />
      <div className="flex flex-col relative md:h-full h-2/3 md:w-[70%] w-[90%] py-28 justify-center items-center bg-white">
        <img
          className="w-full h-full absolute"
          src={Background}
          alt="background"
        />
        <img
          className="md:mb-36 mb-24 md:scale-1 scale-[0.65] z-20"
          src={Logo}
          alt="logo"
        />
        <form
          onSubmit={handleSubmit}
          className="flex z-20 md:gap-8 flex-col justify-center items-center md:w-[30%] gap-6 w-2/3"
        >
          <div className="flex flex-col w-full justify-between md:gap-14 gap-8">
            <input
              className="bg-transparent text-xs w-full placeholder:text-xs px-3 outline-none md:py-[15px] py-[9px] placeholder:text-[#B3B7BB] placeholder:text-center border rounded-2xl border-[#B3B7BB]"
              placeholder="Enter Email"
              onChange={handleChange}
              name="email"
              value={formData.email}
              type="email"
            />
            <input
              className="bg-transparent text-xs w-full placeholder:text-xs px-3 outline-none md:py-[15px] py-[9px] placeholder:text-[#B3B7BB] placeholder:text-center border rounded-2xl border-[#B3B7BB]"
              placeholder="Enter Password"
              onChange={handleChange}
              name="password"
              value={formData.password}
              type="password"
            />
          </div>
          <button
            disabled={loading ? true : false}
            className="bg-[#D65D5B] font-bold text-white rounded-2xl text-sm py-2 px-10"
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </form>
        <p className="text-center z-20  font-semibold mt-3">
          If you don’t have an account yet,
          <Link to="/signup">
            <span className="text-[#0F60FF]"> Sign up here</span>
          </Link>
        </p>
        <Link
          className="mt-3 z-20 font-semibold"
          to="/auth/forgot-password-business"
        >
          <span className="text-[#0F60FF]">Forgot Password?</span>
        </Link>
      </div>
    </div>
  );
};

export default AuthLoginCustomer;
