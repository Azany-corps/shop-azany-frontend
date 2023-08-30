import React, { useEffect, useState } from "react";
import ManufacturersProfileLayout from "../../components/General/manufacturers/profile/Layout";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import callAPI from "../../api/callApi";
import AddImage from "../../components/Core/AddImage";
import { FileWithPath } from "react-dropzone";

const EditStore = () => {
  const [selectedLogo, setSelectedLogo] = useState<File | null>(null);
  const [selectedBanner, setSelectedBanner] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [selectedImages, setSelectedImages] = useState<FileWithPath[]>([]);
  const [store, setStore] = useState({
    logo_url: "",
    banner_url: "",
  });


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

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageSelect = (images: FileWithPath[]) => {
    setSelectedImages(images);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}` };
    const fetchStore = async () => {
      try {
        const response = await callAPI("auth/store/fetch_my_store_detail", "GET", null, headers);
        setStore(response.data?.values[0]);
        setFormData(response.data?.values[0]);
        console.log(response.data?.values[0]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchStore();
  }, []);

  const [formData, setFormData] = useState({
    store_name: "",
    about: "",
    facebook: "",
    twitter: "",
    instagram: "",
    logo: "",
    banner: "",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      let data = new FormData();
      data.append("store_name", formData.store_name);
      data.append("about", formData.about);
      data.append("facebook", formData.facebook);
      data.append("twitter", formData.twitter);
      data.append("instagram", formData.instagram);
      data.append("logo", selectedLogo ? selectedLogo : "");
      data.append("banner", selectedBanner ? selectedBanner : "");
      for (let i = 0; i < selectedImages.length; i++) {
        data.append("image[]", selectedImages[i]);
      }
      const response = await callAPI("auth/store/update_store_page_content", "POST", data, {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      });
      console.log(response);
      if (response.status && response.status_code === 200) {
        setLoading(false);
        toast.success("Store information edited successfully", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        window.location.reload();
      } else {
        setLoading(false);
        toast.error("Error editing store  Information", {
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
      toast.error("Error editing store", {
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
        <div className="p-8 xs:p-4 w-full bg-white rounded-lg">
          <div className="w-full">
            <div className="flex">
              <div>
                <h1 className="text-[40px] xs:text-[26px] font-[500]">
                  Edit Store
                </h1>
                <p>
                  Manage your product store catalog here. Streamline product
                  updates and enhance your store operations.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex gap-3">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.3567 13.2512C11.7316 13.8761 10.8839 14.2272 10 14.2272C9.11612 14.2272 8.26843 13.8761 7.64333 13.2512M7.5 9.22787H7.50833M12.5 9.22787H12.5083M17.5 10.8945C17.5 11.8794 17.306 12.8547 16.9291 13.7647C16.5522 14.6746 15.9997 15.5014 15.3033 16.1978C14.6069 16.8943 13.7801 17.4467 12.8701 17.8236C11.9602 18.2005 10.9849 18.3945 10 18.3945C9.01509 18.3945 8.03982 18.2005 7.12987 17.8236C6.21993 17.4467 5.39314 16.8943 4.6967 16.1978C4.00026 15.5014 3.44781 14.6746 3.0709 13.7647C2.69399 12.8547 2.5 11.8794 2.5 10.8945C2.5 8.90541 3.29018 6.99775 4.6967 5.59123C6.10322 4.18471 8.01088 3.39453 10 3.39453C11.9891 3.39453 13.8968 4.18471 15.3033 5.59123C16.7098 6.99775 17.5 8.90541 17.5 10.8945Z"
                      stroke="#515151"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span>Followers</span>
                </div>
                1,021
              </div>
            </div>
            <form
              className="py-5 w-full flex flex-col gap-8"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col gap-2">
                <p className="font-[500]">Background Image</p>
                <div className="relative cursor-pointer" onClick={handleClick}>
                  {selectedBanner ? (
                    <img
                      src={URL.createObjectURL(selectedBanner)}
                      alt="banner"
                      className="w-full h-[120px] object-cover"
                    />
                  ) : store?.banner_url ? (
                    <img
                      src={store.banner_url}
                      alt="banner"
                      className="w-full h-[120px] rounded-md object-cover"
                    />
                  ) : (
                    <img
                      src="/images/eimage1.png"
                      alt="banner"
                      className="w-full h-[120px] rounded-md object-cover"
                    />
                  )}
                </div>
              </div>

              <div className="flex flex-row gap-4 items-center">
                <p className="font-[500]">Logo</p>
                <div
                  className="relative cursor-pointer"
                  onClick={handleClickLogo}
                >
                  {selectedLogo ? (
                    <img
                      src={URL.createObjectURL(selectedLogo)}
                      alt="logo"
                      className="w-[50px] h-[50px] object-cover"
                    />
                  ) : store?.logo_url ? (
                    <img
                      src={store.logo_url}
                      alt="logo"
                      className="w-[50px] h-[50px] object-cover"
                    />
                  ) : (
                    <img
                      src="/images/logoo.png"
                      alt="logo"
                      className="w-[50px] h-[50px] rounded-md object-cover"
                    />
                  )}
                </div>

                <div>
                  <img src="/images/upload.png" alt="upload" />
                </div>
              </div>

              <div className="w-full flex flex-col relative items-start gap-2">
                <label className="font-[500]">Store Name</label>
                <input
                  placeholder=""
                  className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
                  onChange={handleChange}
                  name="store_name"
                  value={formData?.store_name}
                />
                <p className="absolute inset-y-0 right-0 pr-3 mt-8 flex items-center cursor-pointer text-[#E51B48]">
                  Edit
                </p>
              </div>

              <div className="w-full flex flex-col relative items-start gap-2">
                <label className="font-[500]">About</label>
                <textarea
                  id="description"
                  name="about"
                  className="px-4 w-full h-[250px] py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
                  rows={10}
                  cols={50}
                  onChange={handleChange}
                  style={{ height: "250px" }}
                  value={formData?.about}
                />
                <p className="absolute inset-y-0 right-0 pr-3 mb-40 flex items-center cursor-pointer text-[#E51B48]">
                  Edit
                </p>
              </div>

              <div className="w-full flex flex-col relative items-start gap-2">
                <label className="font-[500]">Links</label>
                <input
                  placeholder="http://facebook.com/mamagold"
                  className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
                  onChange={handleChange}
                  name="facebook"
                  value={formData?.facebook}
                />
                <input
                  placeholder="http://twitter.com/mamagold"
                  className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
                  onChange={handleChange}
                  name="twitter"
                  value={formData?.twitter}
                />
                <input
                  placeholder="http://instagram.com/mamagold"
                  className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
                  onChange={handleChange}
                  name="instagram"
                  value={formData?.instagram}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-[500]">Pictures</label>
                <AddImage onImageSelect={handleImageSelect} />
              </div>
              <button
                type="submit"
                disabled={loading ? true : false}
                className="py-2 px-20 bg-[#E51B48] hover:bg-red-700 rounded-md text-white"
              >
                {loading ? "Loading..." : "Save"}
              </button>
            </form>
          </div>
        </div>
      </ManufacturersProfileLayout>
    </div>
  );
};

export default EditStore;
