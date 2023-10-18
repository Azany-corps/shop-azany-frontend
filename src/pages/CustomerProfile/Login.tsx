import React, { useEffect, useState } from "react";
import CustomerProfileLayout from "../../components/CustomerProfile/CustomerProfileLayout";
import callAPI from "../../api/callApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}` };
    const fetchStoreData = async () => {
      try {
        const response = await callAPI(`auth/customer_fetch_profile_info`, "GET", null, headers);
        console.log(response);
        setFormData(response?.data?.values[0]?.profile[0]);
        console.log(response?.data?.values[0]?.profile[0]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchStoreData();
  }, []);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    country: "",
    state: "",
    city: "",
    zip_code: "",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      let data = new FormData();
      data.append("first_name", formData.first_name);
      data.append("last_name", formData.last_name);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      console.log(formData.first_name);
       //const formDataToSend = new URLSearchParams();
      //formDataToSend.append("first_name", formData.first_name);
      //formDataToSend.append("last_name", formData.last_name);
      //formDataToSend.append("email", formData.email);
      //formDataToSend.append("phone", formData.phone);
      //formDataToSend.append("address", formData.address);
      //formDataToSend.append("country", formData.country);
      //formDataToSend.append("state", formData.state);
      //formDataToSend.append("city", formData.city);
      //formDataToSend.append("poster_code", formData.zip_code);


      const token = localStorage.getItem("token");
      if (token === null) {
        throw new Error("Token not found in local storage");
      }

      const response = await callAPI("auth/customer_update_profile", "PUT", formDataToSend.toString(), {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${token}`,
      });
      console.log(response);
      toast.success("Success. Business has been verified", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // navigate("/plans");
    } catch (err) {
      console.log(err);
      setLoading(false);
      toast.error("Error. Something went wrong", {
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
    <div className="bg-[#F5F5F5] flex flex-col justify-between min-h-screen">
      <CustomerProfileLayout>
        <div className="px-10 py-7 xs:p-2 smm:bg-[#F5F5F5] !bg-white border w-full !rounded-lg flex-grow h-[1005px]">
          <form className="w-full" onSubmit={handleSubmit}>
            <h1 className="text-[36px] font-[500] xs:text-[22px]">
              Personal Details
            </h1>
            <p className="text-[18px]">
              Update your name, email, and account password at any time.
            </p>

            <div className="py-10 w-full">
              <div className="xs:flex xs:flex-col flex flex-col items-start w-full">
                <div className="w-[50%] sm:w-full xs:w-full md:w-full relative flex flex-col items-start">
                  <div className="">
                    <label className="text-[12px]">FIRST NAME</label>
                    <input
                      className="xs:w-full py-3 w-4/5 text-[20px] font-[400]"
                      placeholder="John"
                      onChange={handleChange}
                      name="first_name"
                      value={formData?.first_name}
                    />
                  </div>
                  <div>
                    {/* <p className="absolute right-32 top-9 cursor-pointer text-[#E51B48]">Edit</p> */}
                  </div>
                </div>
                <div className="w-[50%] sm:w-full xs:w-full md:w-full relative flex flex-col items-start">
                  <div className="">
                    <label className="text-[12px]">LAST NAME</label>
                    <input
                      placeholder="Clinton"
                      className="xs:w-full py-3 w-4/5 text-[20px] font-[400]"
                      onChange={handleChange}
                      name="last_name"
                      value={formData?.last_name}
                    />
                  </div>
                  <div>
                    {/* <p className="absolute right-32 top-9 cursor-pointer text-[#E51B48]">Edit</p> */}
                  </div>
                </div>
                <div className="w-[50%] sm:w-full xs:w-full md:w-full relative flex flex-col items-start">
                  <div className="flex flex-col">
                    <label className="text-[12px]">EMAIL</label>
                    <input
                      placeholder="Johnclinton231@gmail.com"
                      className="xs:w-full py-3 w-4/5 text-[20px] font-[400]"
                      onChange={handleChange}
                      name="email"
                      value={formData?.email} 
                    />
                  </div>
                  <div>
                    {/* <p className="absolute right-32 top-9 cursor-pointer text-[#E51B48]">Edit</p> */}
                  </div>
                </div>
                <div className="w-[50%] sm:w-full xs:w-full md:w-full relative flex flex-col items-start">
                  <div className="flex flex-col">
                    <label className="text-[12px]">PHONE</label>
                    <input
                      placeholder="07036226327"
                      className="xs:w-full py-3 w-4/5 text-[20px] font-[400]"
                      onChange={handleChange}
                      name="phone"
                      value={formData?.phone}
                    />
                  </div>
                  <div>
                    {/* <p className="absolute right-32 top-9 cursor-pointer text-[#E51B48]">Edit</p> */}
                  </div>
                </div>
                <div className="w-[50%] sm:w-full xs:w-full md:w-full relative flex flex-col items-start">
                  <div className="flex flex-col">
                    <label className="text-[12px]">PASSWORD</label>
                    <input
                      placeholder="***************"
                      type="password"
                      className="xs:w-full py-3 w-4/5 text-[20px] font-[400]"
                    />
                  </div>
                  <div>
                    {/* <p className="absolute right-32 top-9 cursor-pointer text-[#E51B48]">Edit</p> */}
                  </div>
                </div>
                <div className="py-12">
                  <button
                    disabled={loading ? true : false}
                    className="bg-[#C1C1C1] w-[975px] h-[50px] p-[10px] font-[16px] text-white rounded-[10px] text-center cursor-pointer hover:bg-[#E51B48]"
                    type="submit"
                  >{loading ? "Saving..." : "Save"}</button>
                </div>
              </div>
            </div>
            <button disabled={loading ? true : false} className="py-2 px-20 bg-[#E51B48] hover:bg-red-700 rounded-md text-white w-full">
              {loading ? "Loading..." : "Save"}
            </button>
          </form>
        </div>
      </CustomerProfileLayout>
    </div>
  );
};

export default Login;
