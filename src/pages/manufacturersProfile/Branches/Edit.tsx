/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import BottomHeader from "../../../components/General/BottomHeader";
import Footer from "../../../components/General/Footer";
import Header from "../../../components/General/Header";
import TopHeader from "../../../components/General/TopHeader";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useNavigate, useParams } from "react-router-dom";
import callAPI from "../../../api/callApi";
import BackButton from "../../../components/Core/BackButton";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DeleteModal from "../../../components/Core/DeleteModal";
import SelectComponent from "../../../components/Core/SelectComponent";
import MobileHeader from "../../../components/General/MobileHeader";

type Branch = {
  id: number;
  branch_name: "";
  address: "";
  country: "";
  state: "";
  city: "";
  logo: "";
};

const EditBranch = () => {
  const { id } = useParams<{ id: string }>(); // set type for id
  const [selectedLogo, setSelectedLogo] = useState<File | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedBanner, setSelectedBanner] = useState<File | null>(null);
  const [selectedUser, setSelectedUser] = useState<number>(0);

  const [branchUsers, setBranchUsers] = useState<{ label: string; value: number }[]>([]);
  const navigate = useNavigate();

  const handleDeleteClick = () => {
    setShowModal(true);
  };

  const handleDeleteUser = async () => {
    try {
      const token = localStorage.getItem("token");
      const headers = { Authorization: `Bearer ${token}` };
      await callAPI(`auth/delete_branch/${id}`, "DELETE", null, headers);
      console.log(`User with id ${id} has been deleted`);
      setShowModal(false);
      toast.success("Branch deleted successfully", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate(-1);
    } catch (error) {
      console.error(error);
      setShowModal(false);
      toast.error("Error deleting branch", {
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

  const [branch, setBranch] = useState<Branch | null>(null);
  const [formData, setFormData] = useState({
    branch_name: "" as string,
    address: "" as string,
    country: "",
    state: "",
    city: "",
    logo: "",
    // id: id,
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}` };

    const fetchBranchUsers = async () => {
      try {
        const response = await callAPI(`auth/fetch_user_list`, "GET", null, headers);
        setBranchUsers(
          response.data?.values.map((user: any) => ({
            value: user?.id,
            label: user?.first_name + " " + user?.last_name,
          }))
        );
        // console.log(response.data?.values)
      } catch (error) {
        console.error(error);
      }
    };

    const fetchBranch = async () => {
      try {
        const response = await callAPI(`auth/fetch_single_branch/${id}`, "GET", null, headers);
        setBranch(response.data?.values[0]);
        setFormData(response.data?.values[0]);
        console.log(response.data?.values[0]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBranchUsers();

    fetchBranch();
  }, [id]);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      let data = new FormData();
      data.append("user_id", `${selectedUser}`);
      data.append("branch name", formData.branch_name);
      data.append("address", formData.address);
      data.append("country", formData.country);
      data.append("state", formData.state);
      data.append("city", formData.city);
      data.append("logo", selectedLogo!);
      console.log();
      const response = await callAPI(
        `auth/update_business_branch/${branch?.id}?user_id=${3}&branch_name=${formData.branch_name}&address= ${formData.address}&country= ${
          formData.country
        }&state= ${formData.state}&city= ${formData.city}`,
        "PUT",
        data,
        {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        }
      );

      console.log(response);
      if (response.status && response.status_code === 200) {
        setLoading(false);
        toast.success("Branch edited successfully", {
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
        toast.error("Error editing branch", {
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
      toast.error("Error editing branch", {
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
        <p className="text-gray-700">Edit Branch</p>
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
        <form className="w-[60%] xs:text-[26px] xs:w-full mx-auto mb-10" onSubmit={handleSubmit}>
          <div>
            <h1 className="text-[40px] font-[500]">Edit Branch</h1>
            <p>Use this form to edit a new branch. You can modify the existing details of your branch here</p>
          </div>
          <div className="py-5 w-full flex flex-col gap-8">
            <div className="relative cursor-pointer" onClick={handleClick}>
              {selectedBanner ? (
                <img src={URL.createObjectURL(selectedBanner)} alt="create banner" />
              ) : (
                <img src="/images/createbanner.png" alt="create banner" />
              )}
              <div
                id="logo-div"
                className="absolute bottom-0 left-0 transform translate-x-[20%] translate-y-[70%] cursor-pointer"
                onClick={handleClickLogo}
              >
                {selectedLogo ? (
                  <img
                    src={URL.createObjectURL(selectedLogo)}
                    alt="profile picture"
                    className="rounded-full w-[80px] h-[80px] object-cover object-center"
                  />
                ) : (
                  <img src="/images/bannerprofile.png" alt="profile picture" className="rounded-full w-[80px] h-[80px] object-cover object-center" />
                )}
              </div>
            </div>
            <button type="button" onClick={handleDeleteClick} className="flex gap-2 text-[#E51B48] ml-auto">
              <DeleteOutlineOutlinedIcon />
              Delete
            </button>
            {showModal && (
              <DeleteModal
                onCancel={() => setShowModal(false)}
                onConfirm={() => console.log("Branch deleted")}
                branchName={""}
                onDelete={handleDeleteUser}
              />
            )}
            <div className="w-full flex flex-col relative items-start gap-2">
              <label className="font-[500]">BRANCH NAME</label>
              <input
                placeholder=""
                className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5] "
                name="branch_name"
                onChange={handleChange}
                value={formData?.branch_name}
              />
            </div>

            <div className="w-full flex flex-col relative items-start gap-2">
              <label className="font-[500]">ADDRESS</label>
              <input
                placeholder=""
                className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5] "
                name="address"
                onChange={handleChange}
                value={formData?.address}
              />
            </div>

            <div className="w-full flex flex-col relative items-start gap-2">
              <label className="font-[500]">LOCATION</label>
              <div className="flex xs:flex-col justify-between gap-4">
                <div className="w-full relative flex flex-col items-start">
                  <label className="font-normal text-sm text-gray-600">COUNTRY</label>
                  <input
                    placeholder="Kenya"
                    className="px-4 py-3 w-full rounded-md border border-gray-300 bg-[#F5F5F5]"
                    name="country"
                    onChange={handleChange}
                    value={formData?.country}
                  />
                </div>
                <div className="w-full  flex flex-col relative items-start">
                  <label className="font-normal text-sm text-gray-600">STATE/PROVINCE</label>
                  <input
                    placeholder="Nairobi"
                    className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5] "
                    name="state"
                    onChange={handleChange}
                    value={formData?.state}
                  />
                </div>
                <div className="w-full  flex flex-col relative items-start">
                  <label className="font-normal text-sm text-gray-600">CITY</label>
                  <input
                    placeholder="Embakasi"
                    className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5] "
                    name="city"
                    onChange={handleChange}
                    value={formData?.city}
                  />
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col relative items-start gap-2">
              <label className="font-[500]">ASSIGN USER(Optional)</label>
              <label className="font-normal text-sm text-gray-600">USER</label>
              <SelectComponent
                options={[...branchUsers]}
                placeholder="Select User"
                selectedValue={selectedUser}
                setSelectedValue={setSelectedUser}
                onChange={(e: { target: { value: React.SetStateAction<number> } }) => e && setSelectedUser(e.target.value)}
              />
            </div>

            <button type="submit" disabled={loading ? true : false} className="py-2 px-20 bg-[#E51B48] hover:bg-red-700 rounded-md text-white">
              {loading ? "Loading..." : "Edit Branch"}
            </button>
          </div>
        </form>
      </div>
      <Footer style={"bg-[#1B7CFC] py-10 px-10"} />
    </div>
  );
};

export default EditBranch;
