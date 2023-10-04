import React, { useEffect, useState } from "react";
import CustomerProfileLayout from "../../components/CustomerProfile/CustomerProfileLayout";
import callAPI from "../../api/callApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {};

const Login = (props: Props) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}` };
    const fetchStoreData = async () => {
      try {
        const response = await callAPI(`auth/fetch_profile_info`, "GET", null, headers);
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
        <div className="p-8 xs:p-2 smm:bg-[#F5F5F5] bg-white w-full rounded-lg flex-grow">
          <form className="w-full" onSubmit={handleSubmit}>
            <h1 className="text-[40px] font-[500] xs:text-[22px]">
              Login & Security
            </h1>
            <div className="py-5 w-full">
              <div className="xs:flex xs:flex-col grid grid-cols-2 gap-8 items-start w-full">
                <div className="w-full relative flex flex-col items-start">
                  <label>FIRST NAME</label>
                  <input
                    placeholder="John"
                    className="px-4 xs:w-full py-3 w-4/5 rounded-md border border-gray-300"
                    onChange={handleChange}
                    name="first_name"
                    value={formData?.first_name}
                  />
                  {/* <p className="absolute right-32 top-9 cursor-pointer text-[#E51B48]">Edit</p> */}
                </div>
                <div className="w-full  flex flex-col relative items-start">
                  <label>LAST NAME</label>
                  <input
                    placeholder="Clinton"
                    className="px-4 xs:w-full w-4/5 py-3 rounded-md border border-gray-300"
                    onChange={handleChange}
                    name="last_name"
                    value={formData?.last_name}

                  />
                  {/* <p className="absolute right-32 top-9 cursor-pointer text-[#E51B48]">Edit</p> */}
                </div>
                <div className="w-full flex flex-col items-start relative">
                  <label>EMAIL</label>
                  <input
                    placeholder="Johnclinton231@gmail.com"
                    className="px-4 xs:w-full w-4/5 py-3 rounded-md border border-gray-300"
                    onChange={handleChange}
                    name="email"
                    value={formData?.email}
                  />
                  {/* <p className="absolute right-32 top-9 cursor-pointer text-[#E51B48]">Edit</p> */}
                </div>
                <div className="w-full relative flex flex-col items-start">
                  <label>PHONE</label>
                  <input
                    placeholder="07036226327"
                    className="px-4 xs:w-full w-4/5 py-3 rounded-md border border-gray-300"
                    onChange={handleChange}
                    name="phone"
                    value={formData?.phone}

                  />
                  {/* <p className="absolute right-32 top-9 cursor-pointer text-[#E51B48]">Edit</p> */}
                </div>
                <div className="w-full flex flex-col items-start relative">
                  <label>PASSWORD</label>
                  <input
                    placeholder="*****"
                    type="password"
                    className="px-4 xs:w-full w-4/5 py-3 rounded-md border border-gray-300"
                  />
                  {/* <p className="absolute right-32 top-9 cursor-pointer text-[#E51B48]">Change</p> */}
                </div>
              </div>
            </div>
          </form>
        </div>
      </CustomerProfileLayout>
    </div>
  );
};

export default Login;
