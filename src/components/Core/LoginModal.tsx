import React, { useState } from "react";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import { Link, useNavigate } from "react-router-dom";
import FormData from "form-data";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuthToken from "../../hooks/useAuthToken";
import callAPI from "../../api/callApi";

const LoginModal = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });
  const [authToken, saveAuthToken, deleteAuthToken] = useAuthToken();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
        localStorage.setItem("token", response.token);
        localStorage.setItem("name", response.data?.values?.first_name);
        console.log(response);
        toast.success("Login Successful", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
      toast.error("Failed to log in", {
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
    <div>
      <ToastContainer />
      <div className="flex justify-between">
        <div className="flex flex-col gap-4 w-2/3 py-10">
          <div className="bg-white rounded-md px-28 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <p className="text-[40px] font-[500]">Login</p>
              <p>Login to your account for the best experience</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-4">
                <div className="w-full relative flex flex-col items-start">
                  <input
                    placeholder="Email"
                    type="email"
                    className="px-4 py-4 w-full rounded-md border border-gray-300 bg-[#F5F5F5]"
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
                    className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
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
          </div>
          <div className="bg-white rounded-md py-8 px-28 flex flex-row gap-4 text-[#515151] ">
            <LoginOutlinedIcon />
            <p className="">
              Don't have an Account?
              <Link to="/auth/signup">
                <span className="text-[#E51B48]"> Sign up here</span>
              </Link>
            </p>
          </div>
        </div>
        <div className="1/3">
          <img src="/images/loginmodal1.png" alt="" className="-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
