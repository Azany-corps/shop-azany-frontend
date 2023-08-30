import React, { useEffect, useState } from "react";
import BottomHeader from "../../../components/General/BottomHeader";
import Footer from "../../../components/General/Footer";
import Header from "../../../components/General/Header";
import TopHeader from "../../../components/General/TopHeader";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import BackButton from "../../../components/Core/BackButton";
import { useNavigate } from "react-router-dom";
import callAPI from "../../../api/callApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SelectComponent from "../../../components/Core/SelectComponent";
import MobileHeader from "../../../components/General/MobileHeader";
import MobileFooter from "../../../components/General/MobileFooter";

const CreateUser = () => {
  const [loading, setLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState<number>(0);
  const [branchUsers, setBranchUsers] = useState<{ label: string; value: number }[]>([]);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
    password_confirmation: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}` };

    const fetchBranch = async () => {
      try {
        const response = await callAPI(`auth/fetch_branch_list`, "GET", null, headers);
        setBranchUsers(
          response.data?.values.map((branch: any) => ({
            value: branch?.id,
            label: branch?.branch_name,
          }))
        );
        console.log(response.data?.values);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBranch();
  }, []);

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
      data.append("branch_id", `${selectedUser}`);
      data.append("first_name", formData.first_name);
      data.append("last_name", formData.last_name);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("password", formData.password);
      data.append("password_confirmation", formData.password_confirmation);
      const response = await callAPI("auth/create_branch_user", "POST", data, {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      });
      console.log(response);
      if (response.status && response.status_code === 200) {
        setLoading(false);
        toast.success("Branch User created successfully", {
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
        toast.error("Error creating User", {
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
      toast.error("Error creating User", {
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
        <p className="text-gray-700">Create User</p>
      </div>
      <div className="sm:hidden lg:hidden md:hidden 2xl:hidden xl:hidden py-2">
        <BackButton />
      </div>
      <div className="p-10 xs:p-4 w-[90%] xs:w-[94%] mx-auto mb-10 bg-white rounded-lg">
        <div className="flex justify-between xs:hidden">
          <BackButton />
          <div>
            <img src="/images/bookinglogo.png" alt="" />
          </div>
        </div>
        <form className="w-[60%] xs:w-full mx-auto" onSubmit={handleSubmit}>
          <div>
            <h1 className="text-[40px] xs:text-[26px] font-[500]">Create User</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Et sapien...</p>
          </div>

          <div className="py-5 w-full flex flex-col gap-8">
            <div>
              <label className="font-[500]">USER NAME</label>
              <div className="flex flex-row gap-4">
                <div className="w-full relative flex flex-col items-start">
                  <label className="font-normal text-sm text-gray-600">FIRST NAME</label>
                  <input
                    placeholder=""
                    className="px-4 py-3 w-full rounded-md border border-gray-300 bg-[#F5F5F5]"
                    name="first_name"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="w-full  flex flex-col relative items-start">
                  <label className="font-normal text-sm text-gray-600">LAST NAME</label>
                  <input
                    placeholder=""
                    className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
                    name="last_name"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col relative items-start gap-2">
              <label className="font-[500]">EMAIL</label>
              <input
                type="email"
                className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
                name="email"
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-full flex flex-col relative items-start gap-2">
              <label className="font-[500]">PHONE</label>
              <input
                type="tel"
                className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
                name="phone"
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-full flex flex-col relative gap-2">
              <label className="font-[500]">CREATE USER PASSWORD</label>
              <div className="flex flex-col gap-4">
                <div className="w-full relative flex flex-col items-start">
                  <label className="font-normal text-sm text-gray-600">PASSWORD</label>
                  <input
                    type="password"
                    className="px-4 py-3 w-full rounded-md border border-gray-300 bg-[#F5F5F5]"
                    name="password"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="w-full relative flex flex-col items-start">
                  <label className="font-normal text-sm text-gray-600">CONFIRM PASSWORD</label>
                  <input
                    type="password"
                    className="px-4 py-3 w-full rounded-md border border-gray-300 bg-[#F5F5F5]"
                    onChange={handleChange}
                    name="password_confirmation"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col relative items-start gap-2">
              <label className="font-[500]">ASSIGN BRANCH(Optional)</label>
              <label className="font-normal text-sm text-gray-600">SELECT BRANCH</label>
              <SelectComponent
                options={[...branchUsers]}
                placeholder="Select Branch"
                selectedValue={selectedUser}
                setSelectedValue={setSelectedUser}
                onChange={(e: { target: { value: React.SetStateAction<number> } }) => e && setSelectedUser(e.target.value)}
              />
            </div>
            <button disabled={loading ? true : false} className="py-2 px-20 bg-[#E51B48] hover:bg-red-700 rounded-md text-white">
              {loading ? "Loading..." : "Create Branch User"}
            </button>
          </div>
        </form>
      </div>
      <Footer style={"bg-[#1B7CFC] py-10 px-10 xs:hidden"} />
      <MobileFooter style={"bg-[#1B7CFC] sm:hidden lg:hidden md:hidden 2xl:hidden xl:hidden"} />{" "}
    </div>
  );
};

export default CreateUser;
