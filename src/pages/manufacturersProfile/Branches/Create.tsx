import BottomHeader from "../../../components/General/BottomHeader";
import Footer from "../../../components/General/Footer";
import Header from "../../../components/General/Header";
import TopHeader from "../../../components/General/TopHeader";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import FormData from "form-data";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import callAPI from "../../../api/callApi";
import BackButton from "../../../components/Core/BackButton";
import SelectComponent from "../../../components/Core/SelectComponent";
import MobileHeader from "../../../components/General/MobileHeader";
import MobileFooter from "../../../components/General/MobileFooter";

const CreateBranch = () => {
  const [loading, setLoading] = useState(false);
  const [selectedLogo, setSelectedLogo] = useState<File | null>(null);
  const [selectedBanner, setSelectedBanner] = useState<File | null>(null);
  const [selectedUser, setSelectedUser] = useState<number>(0);
  const [branchUsers, setBranchUsers] = useState<{ label: string; value: number }[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}` };

    const fetchBranchUsers = async () => {
      try {
        const response = await callAPI(`auth/fetch_user_list`, "GET", null, headers);
        console.log(response.data?.values);
        setBranchUsers(
          response.data?.values.map((user: any) => ({
            value: user?.id,
            label: user?.last_name + " " + user?.first_name,
          }))
        );
      } catch (error) {
        console.error(error);
      }
    };
    fetchBranchUsers();
  }, []);

  const handleClick = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/jpeg,image/png";
    input.onchange = (event) => {
      const fileInput = event.target as HTMLInputElement;
      const file = fileInput.files?.[0];
      if (file) {
        setSelectedBanner(file);
      }
    };
    input.click();
  };

  const handleClickLogo = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/jpeg,image/png";
    input.onchange = (event) => {
      const fileInput = event.target as HTMLInputElement;
      const file = fileInput.files?.[0];
      if (file) {
        setSelectedLogo(file);
      }
    };
    input.click();
  };

  const [formData, setFormData] = useState({
    branch_name: "",
    address: "",
    country: "",
    state: "",
    city: "",
    logo: "",
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      let data = new FormData();
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      data.append("user_id", selectedUser), data.append("branch_name", formData.branch_name);
      data.append("address", formData.address);
      data.append("country", formData.country);
      data.append("state", formData.state);
      data.append("city", formData.city);
      data.append("logo", selectedLogo!);
      const response = await callAPI("auth/create_business_branch", "POST", data, {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      });
      console.log(response);
      if (response.status && response.status_code === 200) {
        setLoading(false);
        toast.success("Branch created successfully", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        navigate(-1);
      } else {
        setLoading(false);
        toast.error("Error creating branch", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
      toast.error("Error creating branch", {
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
    <div className="bg-[#F5F5F5] xs:overflow-x-hidden">
      <TopHeader />
      <BottomHeader style={"bg-[#1B7CFC] py-2 xs:hidden"} />
      <MobileHeader />
      <Header style={"bg-[#70ADFF] xs:hidden"} />
      <div className="flex-row gap-2 p-2 w-[90%] flex mx-auto items-center xs:hidden">
        <p>Home</p>
        <ArrowForwardIosIcon fontSize="small" />
        <p>Your Account</p>
        <ArrowForwardIosIcon fontSize="small" />
        <p className="text-gray-700">Create Branch</p>
      </div>
      <div className="sm:hidden lg:hidden md:hidden 2xl:hidden xl:hidden py-2">
      <BackButton />
      </div>
      <div className="p-10 xs:p-4 w-[90%] xs:w-[94%] mx-auto mb-10 bg-white rounded-lg">
        <div className="flex justify-between xs:hidden">
          <BackButton />
          <div className="">
            <img src="/images/bookinglogo.png" alt="" />
          </div>
        </div>
        <form className="w-[60%] xs:w-full mx-auto mb-10" onSubmit={handleSubmit}>
          <div>
            <h1 className="text-[40px] xs:text-[26px] font-[500]">Create Branch</h1>
            <p>Use this form to create a new branch.</p>
          </div>
          <div className="py-5 w-full flex flex-col gap-8">
            <div className="relative cursor-pointer" onClick={handleClick}>
              {selectedBanner ? (
                <img src={URL.createObjectURL(selectedBanner)} alt="create banner" className="w-full h-[120px] rounded-md" />
              ) : (
                <img src="/images/createbanner.png" alt="create banner" className="w-full h-[120px] rounded-md" />
              )}
              <div
                id="logo-div"
                className="absolute bottom-0 left-0 transform translate-x-[20%] translate-y-[70%] cursor-pointer"
                onClick={handleClickLogo}
              >
                {selectedLogo ? (
                  <img src={URL.createObjectURL(selectedLogo)} alt="profile" className="rounded-full w-[80px] h-[80px] object-cover object-center" />
                ) : (
                  <img src="/images/bannerprofile.png" alt="profile" className="rounded-full w-[80px] h-[80px] object-cover object-center" />
                )}
              </div>
            </div>

            <div className="w-full flex flex-col relative items-start gap-2 mt-20">
              <label className="font-[500]">BRANCH NAME</label>
              <input
                placeholder=""
                className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
                name="branch_name"
                onChange={handleChange}
              />
            </div>

            <div className="w-full flex flex-col relative items-start gap-2">
              <label className="font-[500]">ADDRESS</label>
              <input
                placeholder=""
                className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
                name="address"
                onChange={handleChange}
              />
            </div>

            <div className="w-full flex flex-col  items-start gap-2">
              <label className="font-[500]">LOCATION</label>
              <div className="flex justify-between gap-4 xs:flex-col xs:w-full">
                <div className="w-full relative flex flex-col items-start">
                  <label className="font-normal text-sm text-gray-600">COUNTRY</label>
                  <input
                    placeholder="Select Country"
                    className="px-4 py-3 xs:w-full w-full rounded-md border border-gray-300 bg-[#F5F5F5]"
                    name="country"
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full  flex flex-col relative items-start">
                  <label className="font-normal text-sm text-gray-600">STATE/PROVINCE</label>
                  <input
                    placeholder="Select State"
                    className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
                    name="state"
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full  flex flex-col relative items-start">
                  <label className="font-normal text-sm text-gray-600">CITY</label>
                  <input
                    placeholder="Select User"
                    className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
                    name="city"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col relative items-start gap-2">
              <label className="font-[500]">ASSIGN USER(Optional)</label>
              <label className="font-normal text-sm text-gray-600">USER</label>
              <SelectComponent
                options={[...branchUsers]}
                placeholder="Select Branch User"
                selectedValue={selectedUser}
                setSelectedValue={setSelectedUser}
                onChange={(e: { target: { value: React.SetStateAction<number> } }) => e && setSelectedUser(e.target.value)}
              />
            </div>

            <button disabled={loading ? true : false} className="py-2 px-20 bg-[#E51B48] hover:bg-red-700 rounded-md text-white">
              {loading ? "Loading..." : "Create Branch"}
            </button>
          </div>
        </form>
      </div>
      <Footer style={"bg-[#1B7CFC] py-10 px-10 xs:hidden"} />
      <MobileFooter style={"bg-[#1B7CFC] sm:hidden lg:hidden md:hidden 2xl:hidden xl:hidden"} />

    </div>
  );
};

export default CreateBranch;
