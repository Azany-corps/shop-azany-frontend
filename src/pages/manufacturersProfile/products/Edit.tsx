import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React, { useEffect, useState } from "react";
import { FileWithPath } from "react-dropzone";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import callAPI from "../../../api/callApi";
import BackButton from "../../../components/Core/BackButton";
import DiscountComponent from "../../../components/Core/Discount";
import { DropdownComponent } from "../../../components/Core/DropdownComponent";
import MaterialSwitch from "../../../components/Core/MuiSwitchIcon";
import BottomHeader from "../../../components/General/BottomHeader";
import Footer from "../../../components/General/Footer";
import Header from "../../../components/General/Header";
import TopHeader from "../../../components/General/TopHeader";
import SubCategoryDropdown from "../../../components/Core/SubCategoryDropdown";
import { countries } from "../../../newCountries";
import MobileHeader from "../../../components/General/MobileHeader";
import MobileFooter from "../../../components/General/MobileFooter";

interface DiscountOption {
  quantity: string;
  percentage: string;
}

interface ProductDetails {
  description: string;
  specifications: string;
  country: string;
  state: string;
  city: string;
}

interface Country {
  name: string;
  id: string;
  currency: string;
}

interface State {
  name: string;
  id: string;
}

interface FormData {
  sub_category: string;
  product_name: string;
  stock: string;
  product_details: ProductDetails[];
  currency: string;
  price: number;
  discount: number;
  weight: number;
  dimension: {
    height: number;
    length: number;
    width: number;
  };
  quantity: number;
  image: string | Blob;
}

const EditProduct = () => {
  const data = new FormData();
  const { id } = useParams<{ id: string }>();
  const [selectedCategory, setSelectedCategory] = React.useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [isInStock, setIsInStock] = useState(false);
  const [optionsString, setOptionsString] = useState<any>("");
  const [selectedValue, setSelectedValue] = React.useState<any>("");
  const [selectedImages, setSelectedImages] = useState<FileWithPath[]>([]);
  const [defaultDiscount, setDefaultDiscount] = useState([]);
  const [store, setStore] = useState<any>(null);
  const [images, setImages] = useState<FileWithPath[]>([]);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [dimension, setDimension] = useState<any>(null);
  const [formData, setFormData] = useState<FormData>({
    sub_category: "",
    product_name: "",
    stock: "",
    product_details: [
      {
        description: "",
        specifications: "",
        country: "",
        state: "",
        city: "",
      },
    ],
    currency: "",
    price: 0,
    weight: 0,
    discount: 0,
    image: "",
    dimension: {
      width: 0,
      height: 0,
      length: 0,
    },
    quantity: 0,
  });
  const [productDetails, setProductDetails] = useState({
    description: "",
    specifications: "",
    country: "",
    state: "",
    city: "",
  });
  const [country, setCountry] = useState<any>({
    name: "",
    id: "",
    currency: "",
  });
  const [state, setState] = useState<State>({ name: "", id: "" });
  const [city, setCity] = useState<State>({ name: "", id: "" });
  // const [countries, ] = useState<any[]>([]);
  const [states, setStates] = useState<any[]>([]);
  const [cities, setCities] = useState<any[]>([]);

  // async function fetchImages(urls: string[]): Promise<File[]> {
  //   const files: File[] = [];

  //   for (const url of urls) {
  //     const response = await fetch(url);
  //     const blob = await response.blob();
  //     const file = new File([blob], "image.jpg", { type: "image/jpeg" });
  //     setImageFiles([...imageFiles, file]);
  //   }
  //   return files;
  // }

  const navigate = useNavigate();

  const vendor = [
    { label: "NGN", value: "NGN" },
    { label: "CAD", value: "CAD" },
    { label: "USD", value: "USD" },
    { label: "GBP", value: "GBP" },
  ];

  const handleImageSelect = (images: FileWithPath[]) => {
    setSelectedImages(images);
  };

  const handleStockStatusChange = (stockStatus: string) => {
    setIsInStock(stockStatus === "In Stock");
    setFormData({ ...formData, stock: stockStatus });
  };

  const handleDiscountOptionsChange = (options: DiscountOption[] | null) => {
    console.log(options);
    try {
      const updatedOptions = options
        ? options!?.map((option) => {
            return {
              quantity: option.quantity.toString(),
              percentage: option.percentage.toString(),
            };
          })
        : null;
      const optionsStr = updatedOptions ? JSON.stringify(updatedOptions) : null;

      const formattedOptionsStr = optionsStr
        ? `"${optionsStr.replace(/"/g, '\\"')}"`
        : null;

      if (formattedOptionsStr) {
        data.append("discount", formattedOptionsStr);
      }
      data.append("contentType", "application/json");
      setOptionsString(formattedOptionsStr);
    } catch (error) {
      console.error("Invalid discount options format", error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files: any = event.target.files;
    const MAX_IMAGES = 6 - images.length;
    const MAX_SIZE = 3 * 1024 * 1024;

    // Loop through the selected files
    for (let i = 0; i < files.length && i < MAX_IMAGES; i++) {
      const file = files?.[i];
      console.log(file);
      if (file?.size > MAX_SIZE) {
        // handle error for files exceeding MAX_SIZE
        alert("file too large");
      }

      const reader = new FileReader();
      reader.readAsDataURL(file!);
      reader.onload = async () => {
        addImage(await reader.result, file);
        setImageFiles([...imageFiles, file]);
        //  console.log(imageFiles);
      };
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    try {
      const user_id = localStorage.getItem("main_id");
      const token = localStorage.getItem("token");
      if (user_id === null) {
        throw new Error("User ID not found in local storage");
      }
      // let data = new FormData();
      data.append("product_id", id!);
      data.append("sub_category", formData.sub_category);
      data.append("product_name", formData.product_name);
      data.append("stock", formData.stock);
      data.append("description", formData.product_details[0].description);
      data.append("specification", productDetails.specifications);
      data.append("country", country?.name);
      data.append("state", state?.name);
      data.append("city", city?.name);
      data.append("currency", selectedValue);
      data.append("price", String(formData.price));
      data.append("quantity", String(formData.quantity));
      data.append("height", String(dimension.height));
      data.append("length", String(dimension.length));
      data.append("width", String(dimension.width));
      data.append("weight", String(formData.weight));

      if (optionsString) {
        data.append("discount", optionsString);
      } else {
      }
      for (let i = 0; i < imageFiles.length; i++) {
        data.append("image_1[]", imageFiles[i]);
      }

      const response = await callAPI(
        "auth/store/update_store_product",
        "POST",
        data,
        {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        }
      );
      if (response.status && response.status_code === 200) {
        setLoading(false);
        toast.success("Product updated successfully", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        // navigate("/manufacturers-profile/product");
      } else {
        setLoading(false);
        toast.error("Error adding a product", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }

      console.log(Object.fromEntries(data));
    } catch (err) {
      console.log(err);
      setLoading(false);
      toast.error("Error adding a product", {
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

  const deleteImage = async (index: number) => {
    const token = localStorage.getItem("token");
    try {
      const response = await callAPI(
        `auth/store/remove_product_img?product_id=${id}&key_num=${index}`,
        "POST",
        null,
        {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        }
      );
      if (response.status && response.status_code === 200) {
        setImages(images.filter((image) => images.indexOf(image) !== index));
        setImageFiles(
          imageFiles.filter((image) => images.indexOf(image) !== index)
        );
        toast.success("image deleted successfully", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        setLoading(false);
        toast.error("Error deleting image", {
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
      toast.error("Error deleting image", {
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

  const addImage = (newImage: any, imageFile: any) => {
    setImages([...images, newImage]);
    console.log(images);
    setImageFiles([...imageFiles, imageFile]);
    console.log(imageFiles);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}` };
    const fetchProduct = async () => {
      try {
        const response = await callAPI(
          `auth/store/fetch_single_product/${id}`,
          "GET",
          null,
          headers
        );

        setFormData(response.data?.values[0]);
        setCategory(response.data?.values?.[0]?.sub_category);
        setDimension(JSON.parse(response.data?.values?.[0]?.dimension));
        setProductDetails(response.data.values[0].product_details[0]);
        setSelectedValue(
          vendor.find(
            (item) => item.value === response.data?.values[0].currency
          )?.value
        );
        setImages(JSON.parse(response.data?.values[0].images));
        // fetchImages(JSON.parse(response.data?.values[0].images));
        setDefaultDiscount(response.data?.values[0].product_discounts);
        handleImageSelect(JSON.parse(response.data?.values[0].images));
      } catch (error) {
        console.error(error);
      }
    };
    fetchProduct();
  }, [id]);

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const chosenCategory = event.target.value;
    setSelectedCategory(chosenCategory);
  };

  const handleChangeCountry = (selectedCountryName: string) => {
    if (countries.length > 0) {
      const selectedCountry = countries.find(
        (country) => country?.name === selectedCountryName
      );
      data.append("country", selectedCountryName);
      setCountry(selectedCountry);
      setSelectedValue(selectedCountry?.currency);
      getStatesInCountry(selectedCountry?.id);
    }
  };

  useEffect(() => {
    handleChangeCountry(productDetails?.country);
  }, [productDetails, country]);

  // useEffect(() => {
  //   if (country !== undefined && country !== null) {
  //     handleChangeState(productDetails?.state);
  //   }
  // }, []);

  //  useEffect(() => {
  //    if (store !== undefined && store !== null) {
  //      handleChangeCity(store?.city);
  //    }
  //  }, [city, store]);

  const handleChangeState = (selectedStateName: string) => {
    const selectedstate = states.find(
      (state) => state.name === selectedStateName
    );

    setState(selectedstate!);
    data.append("state", selectedStateName);
    getCitiesInState(selectedstate?.id);
  };

  const handleChangeCity = (selectedCityName: string) => {
    const selectedCity = cities.find((city) => city.name === selectedCityName);
    setCity(selectedCity!);
    data.append("city", selectedCityName);
  };

  const getStatesInCountry = async (countryId: any) => {
    try {
      const response = await callAPI(
        `general/products/populate_states_by_country/${countryId}`,
        "GET",
        null,
        Headers
      );

      setStates(response?.data?.values);
    } catch (error) {
      console.log(error);
    }
  };

  const getCitiesInState = async (id: any) => {
    try {
      console.log({ id });
      const response = await callAPI(
        `general/products/populate_cities_by_state/${id}`,
        "GET",
        null,
        Headers
      );
      setCities(response?.data?.values);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-[#F5F5F5] xs:overflow-x-hidden">
      <TopHeader />
      <BottomHeader style={"bg-[#1B7CFC] py-2 xs:hidden"} />
      <Header style={"bg-[#70ADFF] xs:hidden"} />
      <MobileHeader hideScrollMenu={false} />
      <div className="flex-row gap-2 p-2 smm:w-[90%] flex mx-auto items-center ">
        <p>Home</p>
        <ArrowForwardIosIcon fontSize="small" />
        <p>Your Account</p>
        <ArrowForwardIosIcon fontSize="small" />
        <p className="text-gray-700">Edit Product</p>
      </div>
      <div className="smm:px-0 px-2">
        <div className="p-10 smm:w-[90%] w-full smm:px-10 px-2 mb-10 smm:mx-auto bg-white rounded-lg">
          <div className="flex justify-between mb-3 smm:mb-0">
            <BackButton />
          </div>
          <div className="smm:w-[60%] w-full mx-auto bg-white rounded-lg">
            <div>
              <h1 className="smm:text-[40px] text-2xl font-[500]">
                Edit Product
              </h1>
            </div>
            <form
              className="py-5 w-full flex flex-col gap-8"
              onSubmit={handleSubmit}
            >
              <div className="relative mb-16">
                <img src="/images/eimage.png" alt="add product" />
                <div className="absolute bottom-0 left-0 transform translate-x-[20%] translate-y-[70%]">
                  <img src="/images/bookinglogo.png" alt="profile" />
                </div>
              </div>
              <div className="w-full flex flex-col relative items-start gap-2">
                <label className="font-[500]">PRODUCT NAME</label>
                <input
                  placeholder=""
                  className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
                  name="product_name"
                  onChange={handleChange}
                  value={formData?.product_name}
                />
              </div>
              <div className="w-full flex flex-col relative items-start gap-2">
                <label className="font-[500]">PRODUCT SUB-CATEGORY</label>
                <SubCategoryDropdown
                  styles={"rounded-md"}
                  selectedValue={selectedCategory}
                  setSelectedValue={setSelectedCategory}
                  onChange={handleCategoryChange}
                  // categoryy={category}
                />
              </div>
              <div className="w-full flex flex-col relative items-start gap-2">
                <label className="font-[500] w-full items-center flex justify-between">
                  <p>Quantity </p>
                  <MaterialSwitch
                    onStockStatusChange={handleStockStatusChange}
                  />
                </label>
                <input
                  placeholder="Enter quantity of product in stock"
                  type="number"
                  className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
                  defaultValue={0}
                  name="product_quantity"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      quantity: parseInt(e.target.value),
                    })
                  }
                  value={formData?.quantity}
                />
              </div>
              <div className="smm:w-[300px] w-full">
                <DiscountComponent
                  label="Discount"
                  onOptionsChange={handleDiscountOptionsChange}
                  isDiscountOpen={defaultDiscount.length <= 0 ? false : true}
                  initialOptions={defaultDiscount}
                />{" "}
              </div>
              {/* update product images trail */}{" "}
              <label htmlFor="">PRODUCT IMAGES</label>
              <div className="flex flex-col gap-4">
                <div className="flex flex-row justify-start gap-2 overflow-x-scroll snap-mandatory snap-x snap-start">
                  {images?.map(
                    (image, index) =>
                      index < 6 && (
                        <div className="relative" key={index}>
                          <label
                            htmlFor="productImage"
                            className="relative cursor-pointer"
                          >
                            <input
                              type="file"
                              accept="image/*"
                              className="hidden"
                              name="productImage"
                              // id="productImage"
                              // onChange={handleImageChange}
                            />
                            <div
                              className="w-[120px] rounded-lg bg-[#D9D9D9] h-[120px] flex justify-center items-center relative"
                              style={{
                                backgroundImage: `url(${image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                              }}
                            >
                              <svg
                                width="33"
                                height="28"
                                viewBox="0 0 33 28"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M4.6209 4C3.56837 4 2.55895 4.42143 1.81471 5.17157C1.07046 5.92172 0.652344 6.93913 0.652344 8V24C0.652344 25.0609 1.07046 26.0783 1.81471 26.8284C2.55895 27.5786 3.56837 28 4.6209 28H28.4322C29.4847 28 30.4942 27.5786 31.2384 26.8284C31.9827 26.0783 32.4008 25.0609 32.4008 24V8C32.4008 6.93913 31.9827 5.92172 31.2384 5.17157C30.4942 4.42143 29.4847 4 28.4322 4H25.2852C24.7589 3.99989 24.2543 3.7891 23.8823 3.414L21.6579 1.172C20.9138 0.421802 19.9046 0.00022655 18.8521 0H14.201C13.1485 0.00022655 12.1393 0.421802 11.3952 1.172L9.17084 3.414C8.79881 3.7891 8.29418 3.99989 7.76796 4H4.6209ZM16.5266 22C17.3083 22 18.0824 21.8448 18.8046 21.5433C19.5268 21.2417 20.1831 20.7998 20.7358 20.2426C21.2886 19.6855 21.7271 19.0241 22.0263 18.2961C22.3254 17.5681 22.4794 16.7879 22.4794 16C22.4794 15.2121 22.3254 14.4319 22.0263 13.7039C21.7271 12.9759 21.2886 12.3145 20.7358 11.7574C20.1831 11.2002 19.5268 10.7583 18.8046 10.4567C18.0824 10.1552 17.3083 10 16.5266 10C14.9478 10 13.4336 10.6321 12.3173 11.7574C11.2009 12.8826 10.5737 14.4087 10.5737 16C10.5737 17.5913 11.2009 19.1174 12.3173 20.2426C13.4336 21.3679 14.9478 22 16.5266 22Z"
                                  fill="#5A5A5A"
                                />
                              </svg>
                            </div>
                          </label>
                          <svg
                            viewBox="0 0 24 24"
                            focusable="false"
                            className="w-5 h-5 bg-white p-1 absolute top-0 right-0 z-40 cursor-pointer rounded-full"
                            onClick={() => deleteImage(index)}
                            aria-hidden="true"
                          >
                            <path
                              fill="red"
                              d="M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
                            ></path>
                          </svg>
                        </div>
                      )
                  )}
                  {images.length >= 6 ? null : (
                    <label htmlFor="uploadImage" className="cursor-pointer">
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        name="uploadImage"
                        id="uploadImage"
                        multiple
                        onChange={handleImageChange}
                      />
                      <div className="w-[120px] rounded-lg bg-[#D9D9D9] h-[120px] flex justify-center items-center">
                        <svg
                          width="32"
                          height="31"
                          viewBox="0 0 32 31"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.9633 11.625V15.5M15.9633 15.5V19.375M15.9633 15.5H19.8078M15.9633 15.5H12.1188M27.4969 15.5C27.4969 17.0266 27.1986 18.5383 26.619 19.9487C26.0393 21.3591 25.1898 22.6406 24.1188 23.7201C23.0478 24.7996 21.7763 25.6559 20.377 26.2401C18.9777 26.8243 17.4779 27.125 15.9633 27.125C14.4487 27.125 12.9489 26.8243 11.5496 26.2401C10.1503 25.6559 8.8788 24.7996 7.8078 23.7201C6.73681 22.6406 5.88725 21.3591 5.30763 19.9487C4.72801 18.5383 4.42969 17.0266 4.42969 15.5C4.42969 12.4169 5.64483 9.45999 7.8078 7.27988C9.97077 5.09977 12.9044 3.875 15.9633 3.875C19.0222 3.875 21.9558 5.09977 24.1188 7.27988C26.2818 9.45999 27.4969 12.4169 27.4969 15.5Z"
                            stroke="#515151"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </label>
                  )}
                </div>
                <div>
                  <p>
                    First picture is the title picture. Grab & drag photos to
                    change the order
                  </p>
                  <p className="text-[#515151]">
                    Supported formats are .jpg, .png
                  </p>
                </div>
              </div>
              <div className="w-full flex flex-col relative items-start gap-2">
                <label className="font-[500]">DESCRIPTION</label>
                <input
                  placeholder=""
                  className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
                  onChange={(e) =>
                    setProductDetails({
                      ...productDetails,
                      description: e.target.value,
                    })
                  }
                  name="description"
                  value={productDetails.description}
                />
              </div>
              <div className="w-full flex flex-col relative items-start gap-2">
                <label className="font-[500]">SPECIFICATIONS</label>
                <input
                  placeholder=""
                  className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
                  name="specifications"
                  onChange={(e) =>
                    setProductDetails({
                      ...productDetails,
                      specifications: e.target.value,
                    })
                  }
                  value={productDetails.specifications}
                />
              </div>
              <div className="w-full flex flex-col relative items-start gap-2">
                <label className="font-[500] mr-4">
                  Shipping Details{" "}
                  <span className="font-light text-sm">
                    (package dimensions)
                  </span>
                </label>
                <div className="flex xs:flex-col justify-between w-full gap-4">
                  <div className="w-full flex flex-col gap-2">
                    <div className="w-full flex flex-col relative items-start gap-0 uppercase flex-1">
                      <label className="font-normal text-[12px] text-gray-600">
                        Width
                      </label>
                      <input
                        placeholder="Enter package width"
                        type="number"
                        className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
                        name="width"
                        value={dimension?.width}
                        onChange={(e) => {
                          setDimension({
                            ...dimension,
                            width: e.target.value,
                          });
                        }}
                      />
                    </div>
                    <div className="w-full flex flex-col relative items-start gap-0 uppercase flex-1">
                      <label className="font-normal text-[12px] text-gray-600">
                        Length
                      </label>
                      <input
                        placeholder="Enter package length"
                        type="number"
                        className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
                        name="length"
                        value={dimension?.length}
                        onChange={(e) => {
                          setDimension({
                            ...dimension,
                            length: e.target.value,
                          });
                        }}
                      />
                    </div>
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <div className="w-full flex flex-col relative items-start gap-0 uppercase flex-1">
                      <label className="font-normal text-[12px] text-gray-600">
                        Height
                      </label>
                      <input
                        placeholder="Enter package height"
                        type="number"
                        className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
                        name="height"
                        value={dimension?.height}
                        onChange={(e) => {
                          setDimension({
                            ...dimension,
                            height: e.target.value,
                          });
                        }}
                      />
                    </div>
                    <div className="w-full flex flex-col relative items-start gap-0 uppercase flex-1">
                      <label className="font-normal text-[12px] text-gray-600">
                        weight
                      </label>
                      <input
                        placeholder="Enter package weight"
                        type="number"
                        className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
                        name="weight"
                        value={formData.weight}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            weight: parseInt(e.target.value),
                          });
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col relative items-start gap-2">
                <label className="font-[500]">LOCATION</label>
                <div className="flex xs:flex-col justify-between w-full gap-4">
                  <div className="w-full relative flex flex-col items-start">
                    <label className="font-normal text-[12px] text-gray-600">
                      COUNTRY
                    </label>
                    <select
                      name="country"
                      value={country?.name}
                      id=""
                      defaultValue={productDetails?.country}
                      className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
                      onChange={(e) => {
                        handleChangeCountry(e.target.value);
                      }}
                    >
                      {/* <option value={productDetails?.country}>
                      {productDetails?.country}
                    </option> */}
                      {countries?.map((country: any) => (
                        <option key={country.id} value={country?.name}>
                          {country?.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="w-full  flex flex-col relative items-start">
                    <label className="font-normal text-[12px] text-gray-600">
                      STATE/ PROVINCE
                    </label>

                    <select
                      name="state"
                      id=""
                      defaultValue={productDetails?.state}
                      className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
                      onChange={(e) => {
                        handleChangeState(e.target.value);
                      }}
                    >
                      {/* <option value={productDetails?.state}>
                      {productDetails?.state}
                    </option> */}
                      {states?.map((state: State) => (
                        <option value={state?.name}>{state?.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="w-full  flex flex-col relative items-start">
                    <label className="font-normal text-[12px] text-gray-600">
                      CITY
                    </label>
                    <select
                      name="cities"
                      defaultValue={productDetails?.city}
                      id=""
                      className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
                      onChange={(e) => handleChangeCity(e.target.value)}
                    >
                      <option value={productDetails?.city}>
                        {productDetails?.city}
                      </option>
                      {cities?.map((city: any) => (
                        <option value={city?.name}>{city?.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center">
                <div className="w-1/3 bg-[#F5F5F5]">
                  <DropdownComponent
                    options={vendor}
                    error="To be Repeated Every"
                    placeholder="CURRENCY"
                    selectedValue={selectedValue}
                    setSelectedValue={setSelectedValue}
                    onChange={(e: {
                      target: { value: React.SetStateAction<string> };
                    }) => e && setSelectedValue(e.target.value)}
                  />
                </div>
                <div className="w-full">
                  <input
                    placeholder=""
                    type="number"
                    className="px-4 w-full py-3 rounded-r-md border border-gray-300 bg-[#F5F5F5]"
                    onChange={handleChange}
                    name="price"
                    value={formData?.price}
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={loading ? true : false}
                className="py-2 px-20 bg-[#E51B48] hover:bg-red-700 rounded-md text-white"
              >
                {loading ? "Loading..." : "Save"}
              </button>
              <p className="text-[#515151]">
                By clicking add product, you accept the{" "}
                <span className="text-[#1B7CFC]">Terms of Use</span> , confirm
                that you will abide by the Safety Tips, and declare that this
                posting does not include any Prohibited Items
              </p>
            </form>
          </div>
        </div>
      </div>
      <Footer style={"bg-[#1B7CFC] py-10 px-10 xs:hidden"} />
      <MobileFooter
        style={
          "bg-[#1B7CFC] sm:hidden lg:hidden md:hidden 2xl:hidden xl:hidden"
        }
      />
    </div>
  );
};

export default EditProduct;
