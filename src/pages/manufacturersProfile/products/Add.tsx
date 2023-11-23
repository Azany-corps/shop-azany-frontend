import React, { useEffect, useState } from "react";

import BottomHeader from "../../../components/General/BottomHeader";
import Footer from "../../../components/General/Footer";
import Header from "../../../components/General/Header";
import TopHeader from "../../../components/General/TopHeader";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import DiscountComponent from "../../../components/Core/Discount";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import callAPI from "../../../api/callApi";
import { useNavigate } from "react-router-dom";
import BackButton from "../../../components/Core/BackButton";
import MaterialSwitch from "../../../components/Core/MuiSwitchIcon";
import { DropdownComponent } from "../../../components/Core/DropdownComponent";
import AddImage from "../../../components/Core/AddImage";
import { FileWithPath } from "react-dropzone";
import useAuthToken from "../../../hooks/useAuthToken";
import { Editor } from "react-draft-wysiwyg";
import { convertToRaw, EditorState } from "draft-js";
import SubCategoryDropdown from "../../../components/Core/SubCategoryDropdown";
import draftToHtml from "draftjs-to-html";
import MobileHeader from "../../../components/General/MobileHeader";
import MobileFooter from "../../../components/General/MobileFooter";
import * as countryList from "../../../newCountries";

interface DiscountOption {
  quantity: string;
  percentage: string;
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

const AddProduct = () => {
  const data = new FormData();
  const [loading, setLoading] = useState(false);
  const [IsInStock, setIsInStock] = useState(false);
  const [store, setStore] = useState<any>(null);
  const [optionsString, setOptionsString] = useState("");
  const [selectedValue, setSelectedValue] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("");
  // const [category, setCategory] = useState("");
  const [selectedImages, setSelectedImages] = useState<FileWithPath[]>([]);
  const [authToken] = useAuthToken();
  const [country, setCountry] = useState<Country>({
    name: "",
    id: "",
    currency: "",
  });
  const [state, setState] = useState<State>({ name: "", id: "" });
  const [city, setCity] = useState<State>({ name: "", id: "" });
  const [countries, setCountries] = useState<any[]>([]);
  const [states, setStates] = useState<any[]>([]);
  const [cities, setCities] = useState<any[]>([]);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [description, setDescription] = useState("");

  //const onEditorStateChange = (editorState: any) => {
  //setEditorState(editorState);
  //setDescription(editorState.getCurrentContent().getPlainText());
  //};

  const onEditorStateChange = (editorState: EditorState) => {
    setEditorState(editorState);
    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    const htmlContent = draftToHtml(rawContentState);
    const strippedContent = htmlContent.replace(/<\/?[^>]+(>|$)/g, "");
    setDescription(strippedContent);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}` };

    const fetchCountriesData = async () => {
      try {
        setCountries(countryList.countries);
      } catch (error) {
        console.error(error);
      }
    };
    const fetchStoreData = async () => {
      try {
        const response = await callAPI(
          `auth/store/fetch_my_store_detail`,
          "GET",
          null,
          headers
        );
        const storeCategory = response.data.values[0].store_category;
        setStore(response?.data?.values?.[0]);
        // handleChangeCountry(response.data.values?.[0].country);
        // setCategory(storeCategory);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCountriesData();
    fetchStoreData();
  }, []);

  const handleChangeCountry = (selectedCountryName: string) => {
    console.log(selectedCountryName);
    if (countries.length > 0) {
      const selectedCountry = countries.find(
        (country) => country?.name === selectedCountryName
      );
      console.log(selectedCountryName);
      setCountry(selectedCountry!);
      setSelectedValue(selectedCountry?.currency);
      getStatesInCountry(selectedCountry?.id);
    }
  };

  useEffect(() => {
    if (store !== undefined && store !== null) {
      handleChangeCountry(store?.country);
    }
  }, [countries, store]);
  useEffect(() => {
    if (store !== undefined && store !== null) {
      handleChangeCountry(store?.country);
    }
  }, [countries, store]);

  const handleChangeState = (selectedStateName: string) => {
    const selectedstate = states.find(
      (state) => state.name === selectedStateName
    );

    setState(selectedstate!);
    console.log(selectedstate);

    getCitiesInState(selectedstate?.id);
  };

  const handleChangeCity = (selectedCityName: string) => {
    const selectedCity = cities.find((city) => city.name === selectedCityName);
    setCity(selectedCity!);
    console.log(selectedCity);
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

  const vendor = [{ label: country?.currency, value: country?.currency }];

  const handleImageSelect = (images: FileWithPath[]) => {
    setSelectedImages(images);
  };

  const handleStockStatusChange = (stockStatus: string) => {
    setIsInStock(stockStatus === "In Stock");
    setFormData({ ...formData, stock: stockStatus });
  };

  const handleDiscountOptionsChange = (options: DiscountOption[]) => {
    try {
      const updatedOptions = options.map((option) => {
        return {
          quantity: option.quantity.toString(),
          percentage: option.percentage.toString(),
        };
      });
      const optionsStr = JSON.stringify(updatedOptions);
      const formattedOptionsStr = `"${optionsStr.replace(/"/g, '\\"')}"`;

      data.append("discount", formattedOptionsStr);
      data.append("contentType", "application/json");
      setOptionsString(formattedOptionsStr);
    } catch (error) {
      console.error("Invalid discount options format", error);
    }
  };

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    sub_category: "",
    product_name: "",
    stock: "",
    description: "",
    specification: "",
    country: "",
    state: "",
    city: "",
    currency: "",
    price: "",
    discount: "",
    width: "",
    height: "",
    length: "",
    quantity: "",
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    const parsedValue =
      name === "price" || name === "discount" ? parseFloat(value) : value;
    setFormData({ ...formData, [name]: parsedValue });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      data.append("sub_category", selectedCategory);
      data.append("product_name", formData.product_name);
      data.append("stock", formData.stock);
      data.append("description", description);
      data.append("specification", formData.specification);
      data.append("country", country?.name);
      data.append("state", state?.name);
      data.append("city", city?.name);
      data.append("currency", selectedValue);
      data.append("price", formData.price);
      data.append("discount", optionsString);
      data.append("quantity", formData.quantity);
      data.append("height", formData.height);
      data.append("length", formData.length);
      data.append("width", formData.width);
      for (let i = 0; i < selectedImages.length; i++) {
        data.append("image_1[]", selectedImages[i]);
      }
      const response = await callAPI(
        "auth/store/create_store_product",
        "POST",
        data,
        {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${authToken}`,
        }
      );
      console.log(response);
      if (response.status && response.status_code === 200) {
        setLoading(false);
        toast.success("Product added successfully", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        navigate("/manufacturers-profile/product");
      } else {
        setLoading(false);
        const errorMessage = response.data.data.errors[0];
        toast.error(errorMessage, {
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

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const chosenCategory = event.target.value;
    setSelectedCategory(chosenCategory);
  };

  return (
    <div className="bg-[#F5F5F5] xs:overflow-x-hidden">
      {/* <TopHeader /> */}
      <BottomHeader style={"bg-[#1B7CFC] py-2 xs:hidden"} />
      <MobileHeader />
      <Header style={"bg-[#70ADFF] xs:hidden"} />
      <div className="flex-row gap-2 p-2 w-[90%] flex mx-auto items-center xs:hidden">
        <p>Home</p>
        <ArrowForwardIosIcon fontSize="small" />
        <p>Your Account</p>
        <ArrowForwardIosIcon fontSize="small" />
        <p className="text-gray-700">Add Product</p>
      </div>
      <div className="sm:hidden lg:hidden md:hidden 2xl:hidden xl:hidden p-2">
        <BackButton />
      </div>
      <div className="p-10 xs:p-4 w-[90%] xs:w-[94%] mx-auto mb-10 bg-white rounded-lg">
        <div className="flex justify-between xs:hidden">
          <BackButton />
        </div>
        <div className="w-[60%] xs:w-full mx-auto">
          <div>
            <h1 className="text-[40px] xs:text-[26px] font-[500]">
              Add Product
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
              />
            </div>
            <div className="w-full flex flex-col relative items-start gap-2">
              <label className="font-[500]">PRODUCT CATEGORY</label>
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
                <MaterialSwitch onStockStatusChange={handleStockStatusChange} />
              </label>
              <input
                placeholder="Enter quantity of product in stock"
                type="number"
                className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
                name="quantity"
                onChange={handleChange}
              />
            </div>
            <div className="smm:w-[300px] w-full">
              <DiscountComponent
                label="Discount"
                onOptionsChange={handleDiscountOptionsChange}
              />
            </div>

            <div>
              <label htmlFor="">PRODUCT IMAGES</label>
              <AddImage onImageSelect={handleImageSelect} />
            </div>
            <div className="w-full flex flex-col relative items-start gap-2">
              <label className="font-[500]">DESCRIPTION</label>
              <Editor
                toolbarClassName="flex"
                wrapperClassName="border border-gray-300 rounded-md"
                editorClassName="p-2 bg-white"
                editorState={editorState}
                onEditorStateChange={onEditorStateChange}
                toolbar={{
                  options: [
                    "inline",
                    "blockType",
                    "fontSize",
                    "fontFamily",
                    "list",
                    "textAlign",
                    "link",
                    "emoji",
                    "remove",
                    "history",
                  ],
                }}
              />
            </div>

            <div className="w-full flex flex-col relative items-start gap-2">
              <label className="font-[500] mr-4">SPECIFICATIONS</label>
              <input
                placeholder=""
                className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
                name="specification"
                onChange={handleChange}
              />
            </div>

            <div className="w-full flex flex-col relative items-start gap-2">
              <label className="font-[500] mr-4">
                Shipping Details{" "}
                <span className="font-light text-sm">(package dimensions)</span>
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                    className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
                    onChange={(e) => {
                      handleChangeCountry(e.target.value);
                    }}
                  >
                    <option value="" disabled>
                      Choose country
                    </option>
                    {countries?.map((country: Country) => (
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
                    className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
                    onChange={(e) => {
                      handleChangeState(e.target.value);
                    }}
                  >
                    <option value="" disabled>
                      Choose state/ province
                    </option>
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
                    id=""
                    className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]"
                    onChange={(e) => handleChangeCity(e.target.value)}
                  >
                    <option value="" disabled>
                      Choose city
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
                  error="Failed to select currency"
                  placeholder="Currency"
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
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading ? true : false}
              className="py-2 px-20 bg-[#E51B48] hover:bg-red-700 rounded-md text-white"
            >
              {loading ? "Loading..." : "Add Product"}
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
      <Footer style={"bg-[#1B7CFC] py-10 px-10 xs:hidden"} />
      <MobileFooter
        style={
          "bg-[#1B7CFC] sm:hidden lg:hidden md:hidden 2xl:hidden xl:hidden"
        }
      />
    </div>
  );
};

export default AddProduct;
