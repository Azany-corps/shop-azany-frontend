import React, { useEffect, useState } from "react";
import ManufacturersProfileLayout from "../../components/General/manufacturers/profile/Layout";
import Switches from "../../components/Core/Switches";
import callAPI from "../../api/callApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const MLogin = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}` };
    const fetchStoreData = async () => {
      try {
        const response = await callAPI(`auth/fetch_profile_info`, "GET", null, headers);
        setFormData(response?.data?.values[0]?.busisness_details[0]);
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

      const token = localStorage.getItem("token");
      if (token === null) {
        throw new Error("Token not found in local storage");
      }

      const response = await callAPI("auth/create_business_details", "POST", data, {
        "Content-Type": "multipart/form-data",
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
      navigate("/plans");
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
      <ManufacturersProfileLayout>
        <form className="p-8 xs:p-2 smm:bg-[#F5F5F5] bg-white w-full rounded-lg flex-grow" onSubmit={handleSubmit}>
          <div className="w-full ">
            <h1 className="text-[40px] font-[500] xs:text-[22px]">Login & Security</h1>
            <div className="py-5 w-full">
              <div className="xs:flex xs:flex-col grid grid-cols-2 gap-8 items-start w-full">
                <div className="w-full relative flex flex-col items-start">
                  <label className="font-normal text-sm text-gray-600">FIRST NAME</label>
                  <input
                    placeholder="John"
                    className="px-4 xs:w-full py-3 w-4/5 rounded-md border border-gray-300 bg-[#F5F5F5]"
                    onChange={handleChange}
                    name="first_name"
                    value={formData?.first_name}
                  />
                  {/* <p className="absolute right-24 top-8 cursor-pointer text-[#E51B48]">Edit</p> */}
                </div>
                <div className="w-full  flex flex-col relative items-start">
                  <label className="font-normal text-sm text-gray-600">LAST NAME</label>
                  <input
                    placeholder="Clinton"
                    className="px-4 xs:w-full w-4/5 py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
                    onChange={handleChange}
                    name="last_name"
                    value={formData?.last_name}
                  />
                  {/* <p className="absolute right-24 top-8 cursor-pointer text-[#E51B48]">Edit</p> */}
                </div>
                <div className="w-full flex flex-col items-start relative">
                  <label className="font-normal text-sm text-gray-600">PHONE</label>
                  <input
                    placeholder="+234"
                    className="px-4 xs:w-full w-4/5 py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
                    onChange={handleChange}
                    name="phone"
                    value={formData?.phone}
                  />
                  {/* <p className="absolute right-24 top-8 cursor-pointer text-[#E51B48]">Edit</p> */}
                </div>
                <div className="w-full relative flex flex-col items-start">
                  <label className="font-normal text-sm text-gray-600">EMAIL</label>
                  <input
                    placeholder=""
                    className="px-4 w-4/5 xs:w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
                    onChange={handleChange}
                    name="email"
                    value={formData?.email}
                  />
                  {/* <p className="absolute right-24 top-8 cursor-pointer text-[#E51B48]">Edit</p> */}
                </div>
                <div className="w-full flex flex-col items-start relative">
                  <label className="font-normal text-sm text-gray-600">PASSWORD</label>
                  <input
                    placeholder="**********"
                    type="password"
                    className="px-4 xs:w-full w-4/5 py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="my-10 border border-gray-300 flex flex-row justify-between xs:p-4 p-10 rounded-md">
            <div className="gap-2 flex flex-col">
              <h1 className="font-medium text-2xl xs:text-[20px]">Transaction Pin</h1>
              <p className="text-[#515151]">Add a layer of security for transaction</p>
            </div>

            <div className="flex xs:flex-col items-center justify-center">
              <Switches label="" />
              <p>Set Up</p>
            </div>
          </div>
          <div className="my-10 border border-gray-300 flex flex-row justify-between xs:p-4 p-10 rounded-md">
            <div className="gap-2 flex flex-col">
              <h1 className="font-medium text-2xl xs:text-[20px]">Security Question</h1>
              <p className="text-[#515151]">What is the name of your first pet?</p>
            </div>
            <div className="flex items-center xs:flex-col">
              <Switches label="" />
              <p>Set Up</p>
            </div>
          </div>
          <button disabled={loading ? true : false} className="py-2 px-20 bg-[#E51B48] hover:bg-red-700 rounded-md text-white w-full">
            {loading ? "Loading..." : "Save"}
          </button>
        </form>
      </ManufacturersProfileLayout>
    </div>
  );
};

export default MLogin;
