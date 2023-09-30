import ManufacturersProfileLayout from "../../components/General/manufacturers/profile/Layout";
import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import FormData from "form-data";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import callAPI from "../../api/callApi";
import { Icon } from "@iconify/react";

const MBusiness = () => {
  const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/jpeg,image/png";
    input.onchange = (event) => {
      const fileInput = event.target as HTMLInputElement;
      const file = fileInput.files?.[0];
      if (file) {
        setSelectedFile(file);
      }
    };
    input.click();
  };

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
    business_name: "",
    email: "",
    phone: "",
    address: "",
    country: "",
    state: "",
    city: "",
    zip_code: "",
    registration_number: "",
    document_url: "",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      const formDataToSend = new URLSearchParams();
      formDataToSend.append("first_name", formData.first_name);
      formDataToSend.append("last_name", formData.last_name);
      formDataToSend.append("business_name", formData.business_name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("address", formData.address);
      formDataToSend.append("country", formData.country);
      formDataToSend.append("state", formData.state);
      formDataToSend.append("city", formData.city);
      formDataToSend.append("poster_code", formData.zip_code);
      formDataToSend.append("registration_number", formData.registration_number);
      if (selectedFile) {
        formDataToSend.append("document_url", selectedFile.name);
      }

      const token = localStorage.getItem("token");
      if (token === null) {
        throw new Error("Token not found in local storage");
      }

      const response = await callAPI("auth/update_profile_info", "PUT", formDataToSend.toString(), {
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
      window.location.reload();
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
    <div className="bg-[#F5F5F5]">
      <ManufacturersProfileLayout>
        <form className="p-8 xs:p-4 w-full bg-white rounded-lg" onSubmit={handleSubmit}>
          <div className="w-full">
            <h1 className="text-[40px] xs:text-[26px] font-[500]">Business Information</h1>
            <p>Lorem ipsum dolor sit amet consectetur....</p>
            <div className="py-5 w-full">
              <div className="flex flex-col w-full gap-8">
                <div className="flex xs:flex-col justify-between gap-4">
                  <div className="w-full relative flex flex-col items-start">
                    <label className="font-normal text-sm text-gray-600">FIRST NAME</label>
                    <input
                      placeholder=""
                      className="px-4 py-3 w-full rounded-md border border-gray-300 bg-[#F5F5F5]"
                      onChange={handleChange}
                      name="first_name"
                      value={formData?.first_name}
                    />
                    <p className="absolute inset-y-0 right-0 pr-3 mt-4 flex items-center cursor-pointer text-[#E51B48]">Edit</p>
                  </div>
                  <div className="w-full  flex flex-col relative items-start">
                    <label className="font-normal text-sm text-gray-600">LAST NAME</label>
                    <input
                      placeholder=""
                      className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
                      onChange={handleChange}
                      name="last_name"
                      value={formData?.last_name}
                    />
                    <p className="absolute inset-y-0 right-0 pr-3 mt-4 flex items-center cursor-pointer text-[#E51B48]">Edit</p>
                  </div>
                  <div className="w-full  flex flex-col relative items-start">
                    <label className="font-normal text-sm text-gray-600">BUSINESS NAME</label>
                    <input
                      placeholder=""
                      className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
                      onChange={handleChange}
                      name="business_name"
                      value={formData?.business_name}
                    />
                    <p className="absolute inset-y-0 right-0 pr-3 mt-4 flex items-center cursor-pointer text-[#E51B48]">Edit</p>
                  </div>
                </div>

                <div className="flex justify-between gap-4 xs:flex-col">
                  <div className="w-full flex flex-col items-start relative">
                    <label className="font-normal text-sm text-gray-600">EMAIL</label>
                    <input
                      placeholder=""
                      className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
                      onChange={handleChange}
                      name="email"
                      value={formData?.email}
                    />
                    <p className="absolute inset-y-0 right-0 pr-3 mt-4 flex items-center cursor-pointer text-[#E51B48]">Edit</p>
                  </div>
                  <div className="w-full relative flex flex-col items-start">
                    <label className="font-normal text-sm text-gray-600">PHONE</label>
                    <input
                      placeholder=""
                      className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
                      onChange={handleChange}
                      name="phone"
                      value={formData?.phone}
                    />
                    <p className="absolute inset-y-0 right-0 pr-3 mt-4 flex items-center cursor-pointer text-[#E51B48]">Edit</p>
                  </div>
                </div>

                <p className="font-[500]">Business Mailing Address</p>
                <div className="flex justify-between gap-4 xs:flex-col">
                  <div className="w-full relative flex flex-col items-start">
                    <label className="font-normal text-sm text-gray-600">STREET ADDRESS</label>
                    <input
                      placeholder=""
                      className="px-4 w-full h-[100px] py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
                      onChange={handleChange}
                      name="address"
                      value={formData?.address}
                    />
                    <p className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-[#E51B48]">Edit</p>
                  </div>
                  <div className="w-full relative flex flex-col items-start">
                    <label className="font-normal text-sm text-gray-600">STREET ADDRESS 2</label>
                    <input
                      placeholder=""
                      className="px-4 w-full h-[100px] py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
                      onChange={handleChange}
                      name=""
                    />
                    <p className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-[#E51B48]">Edit</p>
                  </div>
                </div>

                <div className="flex xs:flex-col justify-between gap-4">
                  <div className="w-full relative flex flex-col items-start">
                    <label className="font-normal text-sm text-gray-600">COUNTRY</label>
                    <input
                      placeholder=""
                      className="px-4 py-3 w-full rounded-md border border-gray-300 bg-[#F5F5F5]"
                      onChange={handleChange}
                      name="country"
                      value={formData?.country}
                    />
                  </div>
                  <div className="w-full  flex flex-col relative items-start">
                    <label className="font-normal text-sm text-gray-600">STATE/ PROVINCE</label>
                    <input
                      placeholder=""
                      className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
                      onChange={handleChange}
                      name="state"
                      value={formData?.state}
                    />
                  </div>
                  <div className="w-full  flex flex-col relative items-start">
                    <label className="font-normal text-sm text-gray-600">CITY</label>
                    <input
                      placeholder=""
                      className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
                      onChange={handleChange}
                      name="city"
                      value={formData?.city}
                    />
                  </div>
                </div>

                <div className="w-full  flex flex-col relative items-start">
                  <label className="font-normal text-sm text-gray-600">POSTAL CODE</label>
                  <input
                    placeholder=""
                    className="px-4 w-1/3 py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
                    onChange={handleChange}
                    name="zip_code"
                    value={formData?.zip_code}
                  />
                </div>

                <p className="font-[500]">Business Registration Details</p>
                <div className="flex items-center justify-between gap-4 xs:flex-col">
                  <div className="w-full flex flex-col items-start relative">
                    <label className="font-normal text-sm text-gray-600">BUSINESS REGISTRATION NUMBER</label>
                    <input
                      placeholder=""
                      className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
                      onChange={handleChange}
                      name="registration_number"
                      value={formData?.registration_number}
                    />
                  </div>
                  <div className="w-full relative flex flex-col items-start">
                    <label className="font-normal text-sm text-gray-600">ADD DOCUMENT</label>
                    <div className="relative cursor-pointer" onClick={handleFileChange}>
                      {selectedFile ? (
                        <img src={URL.createObjectURL(selectedFile)} alt="banner" className="w-full h-[120px] object-cover" />
                      ) : formData?.document_url ? (
                        <img src={formData.document_url} alt="banner" className="w-full h-[120px] rounded-md object-cover" />
                      ) : (
                        <Icon icon="ph:upload-fill" width="40" height="40" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
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

export default MBusiness;
