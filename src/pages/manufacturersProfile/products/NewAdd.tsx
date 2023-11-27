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
import StockCheckbox from "./StockCheck";
import {
  FormInput,
  FormSelect,
  FormTextArea,
} from "../../../components/Inputs";
import { useFormik } from "formik";
import AddImageComp from "../../../components/Core/AddImageComp";
import TextColorizer from "./ColorText";
import { IProduct } from "./product.type";

interface DiscountOption {
  quantity: string;
  percentage: string;
}
interface ColorizedText {
  text: string;
}

const AddProduct = () => {
  const data = new FormData();

  const [selectedImages, setSelectedImages] = useState<FileWithPath[]>([]);
  // const [status, setStatus] = useState("status");
  const [parentColorizedTexts, setParentColorizedTexts] = useState<
    ColorizedText[]
  >([]);

  const [formData, setFormData] = useState<IProduct>({
    product_name: "",
    product_category: "",
    stock: "",
    currency: "",
    price: "",
    brand: "",
    weight: "",
    short_description: "",
    product_description: "",
    certification: "",
    main_material: "",
    material_family: "",
    model: "",
    production_country: "",
    production_line: "",
    size: "",
    warranty_duration: "",
    warranty_type: "",
    note: "",
    color: "",
    ram_size: "",
    cpu_core: "",
    operating_system: "",
    screen_size: "",
    display_features: "",
    battery_size: "",
    product_attributes: "",
    sale_price: "",
    sale_start_date: "",
    sale_end_date: "",
    stock_quantity: "",
  });

  const handleColorizedTextsChange = (colorizedTexts: ColorizedText[]) => {
    // Access the colorizedTexts value in the parent component
    console.log("Colorized Texts in Parent Component:", colorizedTexts);
    setParentColorizedTexts(colorizedTexts);
  };

  const handleStockStatusChange = (status: string) => {
    setFormData({ ...formData, stock: status });
  }

  const handleImageSelect = (images: FileWithPath[]) => {
    setSelectedImages(images);
  };

  const Formik = useFormik({
    initialValues: {
      product_name: "",
      product_category: "",
      stock: "",
      currency: "",
      price: "",
      brand: "",
      weight: "",
      short_description: "",
      product_description: "",
      certification: "",
      main_material: "",
      material_family: "",
      model: "",
      production_country: "",
      production_line: "",
      size: "",
      warranty_duration: "",
      warranty_type: "",
      note: "",
      color: "",
      ram_size: "",
      cpu_core: "",
      operating_system: "",
      screen_size: "",
      display_features: "",
      battery_size: "",
      product_attributes: "",
      sale_price: "",
      sale_start_date: "",
      sale_end_date: "",
      stock_quantity: "",
    },

    onSubmit: (values: any) => {
      console.log(values);
    }
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event?.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("formd: ", formData)

    // setLoading(true);
    // try {
    //   let data = new FormData();
    //   data.append("email", formData.email);
    //   data.append("first_name", formData.first_name);
    //   data.append("last_name", formData.last_name);
    //   data.append("phone", formData.phone);
    //   data.append("account_type", formData.seller_type);
    //   data.append("password", formData.password);
    //   data.append("password_confirmation", formData.password_confirmation);
    //   data.append("shop_name", formData.shop_name);
    //   data.append("business_type", formData.account_type || "");
    //   data.append("business_owner_first_name", formData.rep_first_name);
    //   data.append("business_owner_middle_name", formData.rep_middle_name);
    //   data.append("business_owner_last_name", formData.rep_last_name);
    //   data.append("company_name", formData.company_name);
    //   data.append("company_phone", formData.company_phone);
    //   data.append("company_additional_phone", formData.other_phone);
    //   data.append("company_address", formData.address);
    //   data.append("company_poster_code", formData.postal_code);
    //   data.append("company_country", formData.country);
    //   data.append("company_state", formData.state);
    //   data.append("company_city", formData.city);
    //   data.append("country_shipping_from", formData.shipping_address);
    //   data.append("cac_registration_number", formData.cac_number);
    //   data.append("cac_certificate", formData.cac_document);
    //   data.append("tin", formData.tax_number);
    //   data.append("tin_certificate", formData.tax_document);
    //   data.append("account_name", formData.account_name);
    //   data.append("account_number", formData.account_number);
    //   data.append("bank", formData.bank_name);

    //   const response = await callAPI("auth/seller_register", "POST", data, {
    //     "Content-Type": "multipart/form-data",
    //   });
    //   console.log(response);
    //   localStorage.setItem("user_id", response.data.user.id);
    //   toast.success("Success message", {
    //     position: "top-center",
    //     autoClose: 3000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //   });
    //   navigate("/auth/otp-business");
    // } catch (err: any) {
    //   console.log(err);
    //   setLoading(false);
    //   toast.error(err?.response?.data?.data?.errors?.[0], {
    //     position: "top-center",
    //     autoClose: 3000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //   });
    // }
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
        <div className="pl-0 md:pl-40 w-full mx-auto">
          <div className="flex justify-between items-start">
            <h1 className="md:text-[36px] text-[26px] font-medium general-font">
              Add Product
            </h1>

            <div className="mb-16">
              <div className="relative mb-8">
                <img src="/images/addProductBg.svg" alt="add product" />
                <div className="absolute bottom-0 left-0 transform translate-x-[20%] translate-y-[70%]">
                  <img src="/images/addProductSubImg.svg" alt="profile" />
                </div>
              </div>
              <div className="w-full pl-[-10px]">
                <MaterialSwitch onStockStatusChange={handleStockStatusChange} />
                {/* <StockCheckbox /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[70%] w-full mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="w-full mb-10">
              <FormInput
                labelStyle="mb-[22px] text-base font-semibold uppercase"
                type="text"
                id="product_name"
                name="Product name*"
                value={formData?.product_name}
                onChange={handleChange}
              // error={Formik?.errors?.product_name as string}
              // touched={Formik?.touched?.product_name as boolean}
              // onBlur={Formik.handleBlur}
              />
            </div>
            <div className="w-full mb-10">
              <FormSelect
                name="Product category*"
                id="product_category"
                value={formData?.product_category}
                onChange={handleChange}
                // onBlur={Formik.handleBlur}
                // error={Formik?.errors?.product_category as string}
                // touched={Formik?.touched?.product_category as boolean}
                options={[
                  { label: "Euro", value: "EUR" },
                  { label: "US Dollars", value: "USD" },
                ]}
                optionsLabel="Choose a currency"
                labelStyle="font-semibold mb-[22px]"
              />
            </div>
            <div className="w-full mb-10 grid grid-cols-3 gap-x-[18.9px]">
              <div className="w-full col-span-2">
                <FormSelect
                  name="Product brand*"
                  id="brand"
                  value={formData?.brand}
                  onChange={handleChange}
                  // onBlur={Formik.handleBlur}
                  // error={Formik?.errors?.brand as string}
                  // touched={Formik?.touched?.brand as boolean}
                  options={[
                    { label: "Euro", value: "EUR" },
                    { label: "US Dollars", value: "USD" },
                  ]}
                  optionsLabel="Select brand"
                  labelStyle="font-semibold mb-[22px]"
                />
              </div>
              <div className="w-full col-span-1">
                <FormInput
                  labelStyle="capitalize mb-[22px] text-base font-semibold"
                  type="text"
                  id="weight"
                  name="Weight (kg)*"
                  value={formData?.weight}
                  onChange={handleChange}
                // error={Formik?.errors?.weight as string}
                // touched={Formik?.touched?.weight as boolean}
                // onBlur={Formik.handleBlur}
                />
              </div>
            </div>
            <div className="w-full mb-10">
              <p className="block mb-[22px] text-base font-semibold general-font uppercase text-black">
                Description*
              </p>
              <div className="w-full my-5">
                <FormTextArea
                  labelStyle="font-semibold"
                  placeholder="Input short description"
                  id="short_description"
                  name="short description"
                  value={formData?.short_description}
                  onChange={handleChange}
                // error={Formik?.errors?.short_description as string}
                // touched={Formik?.touched?.short_description as boolean}
                />
              </div>
              <div className="w-full">
                <FormTextArea
                  labelStyle="font-semibold"
                  placeholder="Input product description"
                  id="product_description"
                  name="product description"
                  value={formData?.product_description}
                  onChange={handleChange}
                // error={Formik?.errors?.product_description as string}
                // touched={Formik?.touched?.product_description as boolean}
                />
              </div>
            </div>

            <div className="w-full mb-10">
              <p className="block mb-[22px] text-base font-semibold general-font uppercase text-black">
                Images*
              </p>
              <div className="">
                <AddImageComp onImageSelect={handleImageSelect} />
              </div>
            </div>
            <div className="w-full mb-10">
              <p className="block mb-[22px] text-base font-semibold general-font uppercase text-black">
                Specification*
              </p>
              <div className="grid grid-cols-3 w-full gap-x-5 mb-5">
                <div className="w-full col-span-1">
                  <FormSelect
                    name="Certification"
                    id="certification"
                    value={formData?.certification}
                    onChange={handleChange}
                    // onBlur={Formik.handleBlur}
                    // error={Formik?.errors?.certification as string}
                    // touched={Formik?.touched?.certification as boolean}
                    options={[
                      { label: "Euro", value: "EUR" },
                      { label: "US Dollars", value: "USD" },
                    ]}
                    optionsLabel="Certifications"
                    labelStyle="block text-sm mb-2 font-normal general-font capitalize text-black"
                  />
                </div>
                <div className="w-full col-span-1">
                  <FormInput
                    labelStyle="capitalize mb-2 font-normal text-sm"
                    type="text"
                    id="main_material"
                    name="Main material"
                    value={formData?.main_material}
                    onChange={handleChange}
                    // error={Formik?.errors?.main_material as string}
                    // touched={Formik?.touched?.main_material as boolean}
                    // onBlur={Formik.handleBlur}
                    placeholder="Material of the product"
                  />
                </div>
                <div className="w-full col-span-1">
                  <FormInput
                    labelStyle="capitalize mb-2 font-normal text-sm"
                    type="text"
                    id="material_family"
                    name="Material family"
                    value={formData?.material_family}
                    onChange={handleChange}
                    // error={Formik?.errors?.material_family as string}
                    // touched={Formik?.touched?.material_family as boolean}
                    // onBlur={Formik.handleBlur}
                    placeholder="Material family of the product"
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 w-full gap-x-5 mb-5">
                <div className="w-full col-span-1">
                  <FormInput
                    name="Model"
                    id="model"
                    value={formData?.model}
                    onChange={handleChange}
                    // onBlur={Formik.handleBlur}
                    // error={Formik?.errors?.model as string}
                    // touched={Formik?.touched?.model as boolean}
                    type="text"
                    labelStyle="block text-sm mb-2 font-normal general-font capitalize text-black"
                    placeholder="Model ID or Manufacturer part Number"
                  />
                </div>
                <div className="w-full col-span-1">
                  <FormInput
                    labelStyle="capitalize mb-2 font-normal text-sm"
                    type="text"
                    id="production_country"
                    name="Production country"
                    value={formData?.production_country}
                    onChange={handleChange}
                    // error={Formik?.errors?.production_country as string}
                    // touched={Formik?.touched?.production_country as boolean}
                    // onBlur={Formik.handleBlur}
                    placeholder="Material of the product"
                  />
                </div>
                <div className="w-full col-span-1">
                  <FormInput
                    labelStyle="capitalize mb-2 font-normal text-sm"
                    type="text"
                    id="production_line"
                    name="Production line"
                    value={formData?.production_line}
                    onChange={handleChange}
                    // error={Formik?.errors?.production_line as string}
                    // touched={Formik?.touched?.production_line as boolean}
                    // onBlur={Formik.handleBlur}
                    placeholder="Production line"
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 w-full gap-x-5 mb-5">
                <div className="w-full col-span-1">
                  <FormInput
                    name="Size (L x X x H cm)"
                    id="size"
                    value={formData?.size}
                    onChange={handleChange}
                    // onBlur={Formik.handleBlur}
                    // error={Formik?.errors?.size as string}
                    // touched={Formik?.touched?.size as boolean}
                    placeholder="Input size"
                    type="text"
                    labelStyle="block text-sm mb-2 font-normal general-font text-black"
                  />
                </div>
                <div className="w-full col-span-1">
                  <FormSelect
                    name="Warranty Duration"
                    id="warranty_duration"
                    value={formData?.warranty_duration}
                    onChange={handleChange}
                    // onBlur={Formik.handleBlur}
                    // error={Formik?.errors?.warranty_duration as string}
                    // touched={Formik?.touched?.warranty_duration as boolean}
                    options={[
                      { label: "Euro", value: "EUR" },
                      { label: "US Dollars", value: "USD" },
                    ]}
                    optionsLabel="Warranty duration of product"
                    labelStyle="block text-sm mb-2 font-normal general-font capitalize text-black"
                  />
                </div>
                <div className="w-full col-span-1">
                  <FormSelect
                    name="Warranty type"
                    id="warranty_type"
                    value={formData?.warranty_type}
                    onChange={handleChange}
                    // onBlur={Formik.handleBlur}
                    // error={Formik?.errors?.warranty_type as string}
                    // touched={Formik?.touched?.warranty_type as boolean}
                    options={[
                      { label: "Euro", value: "EUR" },
                      { label: "US Dollars", value: "USD" },
                    ]}
                    optionsLabel="Warranty type of product"
                    labelStyle="block text-sm mb-2 font-normal general-font capitalize text-black"
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 w-full gap-x-5 mb-5">
                <div className="w-full col-span-2">
                  <FormInput
                    name="note"
                    id="note"
                    value={formData?.note}
                    onChange={handleChange}
                    // onBlur={Formik.handleBlur}
                    // error={Formik?.errors?.note as string}
                    // touched={Formik?.touched?.note as boolean}
                    placeholder="Note/Comment"
                    type="text"
                    labelStyle="block text-sm mb-2 font-normal general-font text-black"
                  />
                </div>

                <div className="w-full col-span-1">
                  <FormInput
                    name="color"
                    id="color"
                    value={formData?.color}
                    onChange={handleChange}
                    // onBlur={Formik.handleBlur}
                    // error={Formik?.errors?.color as string}
                    // touched={Formik?.touched?.color as boolean}
                    placeholder="Input color"
                    type="text"
                    labelStyle="block text-sm mb-2 font-normal general-font text-black"
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 w-full gap-x-5 mb-5">
                <div className="w-full col-span-1">
                  <FormInput
                    name="RAM Size (GB)"
                    id="ram_size"
                    value={formData?.ram_size}
                    onChange={handleChange}
                    // onBlur={Formik.handleBlur}
                    // error={Formik?.errors?.ram_size as string}
                    // touched={Formik?.touched?.ram_size as boolean}
                    placeholder="RAM Size (GB)"
                    type="text"
                    labelStyle="block text-sm mb-2 font-normal general-font text-black"
                  />
                </div>

                <div className="w-full col-span-1">
                  <FormInput
                    name="CPU Cores"
                    id="cpu_core"
                    value={formData?.cpu_core}
                    onChange={handleChange}
                    // onBlur={Formik.handleBlur}
                    // error={Formik?.errors?.cpu_core as string}
                    // touched={Formik?.touched?.cpu_core as boolean}
                    placeholder="CPU Cores"
                    type="text"
                    labelStyle="block text-sm mb-2 font-normal general-font text-black"
                  />
                </div>

                <div className="w-full col-span-1">
                  <FormInput
                    name="Operating System"
                    id="operating_system"
                    value={formData?.operating_system}
                    onChange={handleChange}
                    // onBlur={Formik.handleBlur}
                    // error={Formik?.errors?.operating_system as string}
                    // touched={Formik?.touched?.operating_system as boolean}
                    placeholder="Operating System"
                    type="text"
                    labelStyle="block text-sm mb-2 font-normal general-font text-black"
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 w-full gap-x-5 mb-5">
                <div className="w-full col-span-1">
                  <FormInput
                    name="Screen Size"
                    id="screen_size"
                    value={formData?.screen_size}
                    onChange={handleChange}
                    // onBlur={Formik.handleBlur}
                    // error={Formik?.errors?.screen_size as string}
                    // touched={Formik?.touched?.screen_size as boolean}
                    placeholder="Screen Size"
                    type="text"
                    labelStyle="block text-sm mb-2 font-normal general-font text-black"
                  />
                </div>

                <div className="w-full col-span-1">
                  <FormInput
                    name="Display Features"
                    id="display_features"
                    value={formData?.display_features}
                    onChange={handleChange}
                    // onBlur={Formik.handleBlur}
                    // error={Formik?.errors?.display_features as string}
                    // touched={Formik?.touched?.display_features as boolean}
                    placeholder="Display Features"
                    type="text"
                    labelStyle="block text-sm mb-2 font-normal general-font text-black"
                  />
                </div>

                <div className="w-full col-span-1">
                  <FormInput
                    name="Battery Size"
                    id="battery_size"
                    value={formData?.battery_size}
                    onChange={handleChange}
                    // onBlur={Formik.handleBlur}
                    // error={Formik?.errors?.battery_size as string}
                    // touched={Formik?.touched?.battery_size as boolean}
                    placeholder="Battery Size"
                    type="text"
                    labelStyle="block text-sm mb-2 font-normal general-font text-black"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 w-full mb-10">
              <TextColorizer
                attributeText={["lorem", "ipsum", "jeje", "glow", "wine"]}
                name="exampleName"
                onColorizedTextsChange={handleColorizedTextsChange}
              />
              <FormInput
                name=""
                id="product_attributes"
                value={formData?.product_attributes}
                onChange={handleChange}
                // onBlur={Formik.handleBlur}
                // error={Formik?.errors?.product_attributes as string}
                // touched={Formik?.touched?.product_attributes as boolean}
                placeholder=""
                type="text"
                labelStyle="block text-sm mb-2 font-normal general-font text-black uppercase"
              />
              <p className="text-[#515151] w-2/3 text-sm"><span className="text-black">Related Attributes: </span> Color,  Size,  Branding,  Depth,  Logo,  Color,  Size,  Branding,  Depth,  Logo,  Color,  Size,  Branding,  Depth,  Logo,</p>
            </div>
            <div className="w-full mb-10">
              <p className="block mb-[22px] text-base font-normal general-font uppercase text-black">
                Price*
              </p>
              <div className="w-full mb-5">
                <FormInput
                  name="Global Price (NGN)"
                  id="price"
                  value={formData?.price}
                  onChange={handleChange}
                  // onBlur={Formik.handleBlur}
                  // error={Formik?.errors?.price as string}
                  // touched={Formik?.touched?.price as boolean}
                  placeholder=""
                  type="text"
                  labelStyle="block text-sm mb-2 font-normal general-font text-black capitalize"
                />
              </div>
              <div className="w-full grid grid-cols-3 gap-x-5">
                <div className="w-full col-span-1">
                  <FormInput
                    name="Sale Price (NGN)"
                    id="sale_price"
                    value={formData?.sale_price}
                    onChange={handleChange}
                    // onBlur={Formik.handleBlur}
                    // error={Formik?.errors?.sale_price as string}
                    // touched={Formik?.touched?.sale_price as boolean}
                    placeholder="Input product description"
                    type="text"
                    labelStyle="block text-sm mb-2 font-normal general-font text-black capitalize"
                  />
                </div>
                <div className="w-full col-span-1">
                  <FormInput
                    name="Sale Start Date"
                    id="sale_start_date"
                    value={formData?.sale_start_date}
                    onChange={handleChange}
                    // onBlur={Formik.handleBlur}
                    // error={Formik?.errors?.sale_start_date as string}
                    // touched={Formik?.touched?.sale_start_date as boolean}
                    placeholder="Select date"
                    type="date"
                    labelStyle="block text-sm mb-2 font-normal general-font text-black capitalize"
                  />
                </div>
                <div className="w-full col-span-1">
                  <FormInput
                    name="Sale End Date"
                    id="sale_end_date"
                    value={formData?.sale_end_date}
                    onChange={handleChange}
                    // onBlur={Formik.handleBlur}
                    // error={Formik?.errors?.sale_end_date as string}
                    // touched={Formik?.touched?.sale_end_date as boolean}
                    placeholder="Select date"
                    type="date"
                    labelStyle="block text-sm mb-2 font-normal general-font text-black capitalize"
                  />
                </div>
              </div>
            </div>
            <div className="w-full mb-[70px]">
              <p className="block mb-[22px] text-base font-normal general-font uppercase text-black">
                Stock Management*
              </p>
              <div className="w-full mb-5">
                <FormInput
                  name="Stock quantity"
                  id="stock_quantity"
                  value={formData?.stock_quantity}
                  onChange={handleChange}
                  // onBlur={Formik.handleBlur}
                  // error={Formik?.errors?.stock_quantity as string}
                  // touched={Formik?.touched?.stock_quantity as boolean}
                  placeholder="Select stock quantity"
                  type="text"
                  labelStyle="block text-sm mb-2 font-normal general-font text-black capitalize"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full focus:outline-none text-white bg-[#E51B48] hover:bg-[#E51B48] focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-5 "
            >
              Add Product
            </button>
            <div className="max-w-[808px]">
              <p className=" text-sm font-normal general-font text-[#515151]">
                By clicking add product, you accept the Terms of Use, confirm
                that you will abide by the Safety Tips, and declare that this
                posting does not include any Prohibited Items
              </p>
            </div>
          </form>
        </div>
      </div>
      <Footer style={"bg-[#1B7CFC] py-10 px-10 hidden"} />
      <MobileFooter
        style={
          "bg-[#1B7CFC] md:hidden"
        }
      />
    </div>
  );
};

export default AddProduct;
