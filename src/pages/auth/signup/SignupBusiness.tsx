import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormData from "form-data";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import callAPI from "../../../api/callApi";
import CategoryDropdown from "../../../components/Core/CategoryDropdown";

const SignupBusiness = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedLogo, setSelectedLogo] = useState<File | null>(null);
  const [selectedValue, setSelectedValue] = useState("");
  const [accountType, setAccountType] = useState("");

  const handleLogoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setSelectedLogo(files[0]);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}` };
    const fetchStoreData = async () => {
      try {
        const response = await callAPI(`auth/fetch_profile_info`, "GET", null, headers);
        setFormData(response?.data?.values[0]?.profile[0]);
        setAccountType(response?.data?.values[0]?.profile[0]?.account_type);
        console.log(response?.data?.values[0]?.profile[0]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchStoreData();
  }, []);

  const isFarmer = accountType === "Farmer";

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
    poster_code: "",
    registration_number: "",
    business_category: "",
    document: "",
    logo: "",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      let data = new FormData();
      data.append("first_name", formData.first_name);
      data.append("last_name", formData.last_name);
      data.append("business_name", formData.business_name);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("address", formData.address);
      data.append("country", formData.country);
      data.append("state", formData.state);
      data.append("city", formData.city);
      data.append("poster_code", formData.poster_code);
      data.append("registration_number", formData.registration_number);
      // data.append("business_category", selectedValue);
      if (selectedFile) {
        data.append("document", selectedFile);
      }
      if (selectedLogo) {
        data.append("logo", selectedLogo);
      }

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

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = event.target.value;
    setSelectedValue(selectedCategory);
  };

  useEffect(() => {
    if (isFarmer) {
      setSelectedValue("Farm");
    }
  }, [isFarmer]);
  console.log(selectedValue);

  return (
    <div className="bg-[#F5F5F5]">
      <div className="flex xs:flex-col-reverse sm:flex-col-reverse md:flex-col-reverse xl:justify-between 2xl:justify-between xl:h-screen xs:w-screen">
        <div className="flex flex-col gap-4 p-10 xs:p-4 xs:h-full md:h-screen xl:w-full">
          <div className="bg-white rounded-md py-2 px-4 ">
            <p className="text-[40px] xs:text-[18px] font-[500]">Business Information</p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="bg-white rounded-md p-4 w-[760px] xs:w-full md:w-full overflow-y-scroll h-[420px] md:h-full xs:h-full flex flex-col gap-4">
              <div className="flex flex-row xs:flex-col gap-4">
                <div className="w-full relative flex flex-col items-start">
                  <label className="font-normal text-[12px] text-gray-600">FIRST NAME</label>
                  <input
                    placeholder=""
                    className="p-3 xs:p-2 w-full rounded-md border border-gray-300 bg-[#F5F5F5]"
                    onChange={handleChange}
                    name="first_name"
                    value={formData?.first_name}
                  />
                </div>
                <div className="w-full relative flex flex-col items-start">
                  <label className="font-normal text-[12px] text-gray-600">LAST NAME</label>
                  <input
                    placeholder=""
                    className="p-3 xs:p-2 w-full rounded-md border border-gray-300 bg-[#F5F5F5]"
                    onChange={handleChange}
                    name="last_name"
                    value={formData?.last_name}
                  />
                </div>
                <div className="w-full relative flex flex-col items-start">
                  <label className="font-normal text-[12px] text-gray-600">BUSINESS NAME</label>
                  <input
                    placeholder=""
                    className="p-3 xs:p-2 w-full rounded-md border border-gray-300 bg-[#F5F5F5]"
                    onChange={handleChange}
                    required
                    name="business_name"
                    value={formData?.business_name}
                  />
                </div>
              </div>
              <div className="flex flex-row gap-4">
                <div className="w-full relative flex flex-col items-start">
                  <label className="font-normal text-[12px] text-gray-600">EMAIL</label>
                  <input
                    placeholder=""
                    className="p-3 xs:p-2 w-full rounded-md border border-gray-300 bg-[#F5F5F5]"
                    onChange={handleChange}
                    name="email"
                    value={formData?.email}
                  />
                </div>
                <div className="w-full relative flex flex-col items-start">
                  <label className="font-normal text-[12px] text-gray-600">PHONE</label>
                  <input
                    placeholder="+234"
                    className="p-3 xs:p-2 w-full rounded-md border border-gray-300 bg-[#F5F5F5]"
                    onChange={handleChange}
                    name="phone"
                    value={formData?.phone}
                  />
                </div>
              </div>
              <p className="font-medium">Business Mailing Address</p>

              <div className="flex xs:flex-col flex-row gap-4">
                <div className="w-full relative flex flex-col items-start">
                  <label className="font-normal text-[12px] text-gray-600">STREET ADDRESS 1</label>
                  <input
                    placeholder=""
                    className="p-3 xs:p-2 w-full rounded-md border border-gray-300 bg-[#F5F5F5]"
                    onChange={handleChange}
                    name="address"
                    value={formData?.address}
                  />
                </div>
                <div className="w-full relative flex flex-col items-start">
                  <label className="font-normal text-[12px] text-gray-600">STREET ADDRESS 2</label>
                  <input
                    placeholder=""
                    className="p-3 xs:p-2 w-full rounded-md border border-gray-300 bg-[#F5F5F5]"
                    onChange={handleChange}
                    name=""
                  />
                </div>
              </div>
              <div className="flex xs:flex-col justify-between gap-4">
                <div className="w-full relative flex flex-col items-start">
                  <label className="font-normal text-[12px] text-gray-600">COUNTRY</label>
                  <input
                    placeholder="Kenya"
                    className="p-3 xs:p-2 w-full rounded-md border border-gray-300 bg-[#F5F5F5]"
                    onChange={handleChange}
                    name="country"
                    value={formData?.country}
                  />
                </div>
                <div className="w-full  flex flex-col relative items-start">
                  <label className="font-normal text-[12px] text-gray-600">STATE/ PROVINCE</label>
                  <input
                    placeholder="Nairobi"
                    className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
                    onChange={handleChange}
                    name="state"
                    value={formData?.state}
                  />
                </div>
                <div className="w-full  flex flex-col relative items-start">
                  <label className="font-normal text-[12px] text-gray-600">CITY</label>
                  <input
                    placeholder="Nairobi"
                    className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
                    onChange={handleChange}
                    name="city"
                    value={formData?.city}
                  />
                </div>
              </div>
              <div className="flex flex-row gap-4">
                <div className="w-full  flex flex-col relative items-start">
                  <label className="font-normal text-[12px] text-gray-600">POSTAL CODE</label>
                  <input
                    placeholder="263001"
                    className="px-4 w-3/2 py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
                    onChange={handleChange}
                    name="poster_code"
                    value={formData?.poster_code}
                  />
                </div>
              </div>
              <p className="font-medium">Business Registration Details</p>
              <div className="flex justify-between">
                <div className="flex flex-col relative items-start">
                  <label className="font-normal text-[12px] text-gray-600">BUSINESS REGISTRATION NUMBER</label>
                  <input
                    placeholder=""
                    className="px-4 w-3/2 py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
                    onChange={handleChange}
                    name="registration_number"
                    required
                  />
                </div>
              </div>
              <div className="flex xs:flex-col xs:gap-4 justify-between">
                <div className="flex flex-col relative items-start">
                  <label className="font-normal text-[12px] text-gray-600">ADD LOGO</label>
                  <input type="file" id="logoInput" accept=".svg,.png,.jpg,.jpeg" onChange={handleLogoChange} />
                  {selectedLogo && <p>Selected logo: {selectedLogo.name}</p>}
                </div>
                <div className="flex flex-col relative items-start">
                  <label htmlFor="document" className="font-normal text-[12px] text-gray-600">
                    ADD DOCUMENT
                  </label>
                  <input type="file" accept=".pdf,.docx,.jpeg,.png" onChange={handleFileChange} className="w-3/2" name="document" />
                  {selectedFile && <p>Selected file: {selectedFile.name}</p>}
                </div>
              </div>
              <div className="w-3/2">
                {/* <label htmlFor="document" className="font-normal text-[12px] text-gray-600">
                  CATEGORY
                </label> */}
                {/* <CategoryDropdown
                  placeholder={isFarmer ? "Farm" : "Select a Category"}
                  selectedValue={selectedValue}
                  setSelectedValue={setSelectedValue}
                  onChange={handleCategoryChange}
                  styles={isFarmer ? "rounded-md bg-gray-300" : "rounded-md"}
                  disabled={isFarmer}
                /> */}
              </div>
            </div>
            <div className="bg-white rounded-md py-8 px-4 flex items-center w-full">
              <button disabled={loading ? true : false} className="py-2 px-20 bg-[#E51B48] hover:bg-red-700 rounded-md text-white w-full">
                {loading ? "Loading..." : "Continue"}
              </button>
            </div>
          </form>
        </div>
        <div className="relative xl:w-3/4">
          <img src="/images/signupbanner.jpg" alt="" className="xs:max-h-20 sm:max-h-40 h-screen w-full md:max-h-40 object-cover" />
          <div className="absolute top-0 left-0 w-full h-full bg-[#1B7CFC] opacity-70 flex justify-center items-center">
            <span className="text-white text-4xl text-[86px] md:text-[60px] xs:text-[40px] font-bold">AZANY</span>
          </div>
          <Link to="/" className="absolute top-4 left-4">
            <div className="flex-[5%] xs:w-14 md:w-30 w-24">
              <img src="/images/azanylogofinal.png" />
            </div>
          </Link>
          <div className="absolute bottom-0 left-0 w-full bg-transparent flex justify-center items-end">
            <span className="text-white text-center text-lg xs:text-sm px-4 py-2">{`Get started absolutely free. No credit needed`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupBusiness;
