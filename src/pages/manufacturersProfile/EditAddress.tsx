import React from "react";
import ManufacturersProfileLayoutComp from "../../components/General/manufacturers/profile/LayoutComp";
import { useNavigate } from "react-router-dom";
import { FormInput } from "../../components/Inputs";
import { useFormik } from "formik";
import CustomButton from "../../components/Inputs/button";

interface EditAddressProps {}

const EditAddressComponent: React.FC<EditAddressProps> = () => {
  const navigate = useNavigate();
  const backButtonHandler = () => {
    navigate(-1);
  };

  const first_name = localStorage.getItem("name")!;
  const last_name = localStorage.getItem("last_name")!;
  const phone = localStorage.getItem("phone")!;

  const Formik = useFormik({
    initialValues: {
      firstName: first_name,
      lastName: last_name,
      phoneNumber: phone,
      strAddress: "",
      state: "",
      city: "",
      additionalInfo: "",
    },
    onSubmit: (values, { resetForm }) => {
      //   console.log(values);
      resetForm();
    },
  });

  return (
    <ManufacturersProfileLayoutComp>
      <div className="pt-[80px] font-public-sans">
        <div
          className="flex items-center cursor-pointer"
          onClick={backButtonHandler}
        >
          <img src="/images/backArrowNew.svg" alt="icon" />
          <p className="capitalize text-xl font-semibold font-baloo ml-[11px]">
            Address
          </p>
        </div>
        <form
          onSubmit={Formik.handleSubmit}
          className="w-full mx-auto flex flex-col items-center pt-[50px] mt-[22px] font-public-sans bg-[#d0d0d059] rounded-[22px]"
        >
          <div className="flex items-center mb-[26px]">
            <p className="mr-5 text-[#B3B7BB] text-sm font-medium max-w-[148px] w-[148px] flex justify-end">
              First name
            </p>
            <FormInput
              id="firstName"
              value={Formik?.values?.firstName}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              type="text"
              style="max-h-[41px] max-w-[234px] rounded-[5px] border border-[#B3B7BB]"
            />
          </div>
          <div className="flex items-center mb-[26px]">
            <p className="mr-5 text-[#B3B7BB] text-sm font-medium max-w-[148px] w-[148px] flex justify-end">
              Last name
            </p>
            <FormInput
              id="lastName"
              value={Formik?.values?.lastName}
              onChange={Formik?.handleChange}
              onBlur={Formik.handleBlur}
              type="text"
              style="max-h-[41px] max-w-[234px] rounded-[5px] border border-[#B3B7BB]"
            />
          </div>
          <div className="flex items-center mb-[26px]">
            <p className="mr-5 text-[#B3B7BB] text-sm font-medium max-w-[148px] w-[148px] flex justify-end">
              Phone number
            </p>
            <FormInput
              id="phoneNumber"
              value={Formik?.values?.phoneNumber}
              onChange={Formik?.handleChange}
              onBlur={Formik.handleBlur}
              type="text"
              style="max-h-[41px] max-w-[234px] rounded-[5px] border border-[#B3B7BB]"
            />
          </div>
          <div className="flex items-center mb-[26px]">
            <p className="mr-5 text-[#B3B7BB] text-sm font-medium max-w-[148px] w-[148px] flex justify-end">
              Street Address
            </p>
            <FormInput
              id="strAddress"
              value={Formik?.values?.strAddress}
              onChange={Formik?.handleChange}
              onBlur={Formik.handleBlur}
              type="text"
              style="max-h-[41px] max-w-[234px] rounded-[5px] border border-[#B3B7BB]"
            />
          </div>
          <div className="flex items-center mb-[26px]">
            <p className="mr-5 text-[#B3B7BB] text-sm font-medium max-w-[148px] w-[148px] flex justify-end">
              State
            </p>

            <FormInput
              id="state"
              value={Formik?.values?.state}
              onChange={Formik?.handleChange}
              onBlur={Formik.handleBlur}
              type="text"
              style="max-h-[41px] max-w-[234px] rounded-[5px] border border-[#B3B7BB]"
            />
          </div>
          <div className="flex items-center mb-[26px]">
            <p className="mr-5 text-[#B3B7BB] text-sm font-medium max-w-[148px] w-[148px] flex justify-end">
              City
            </p>
            <FormInput
              id="city"
              value={Formik?.values?.city}
              onChange={Formik?.handleChange}
              onBlur={Formik.handleBlur}
              type="text"
              style="max-h-[41px] max-w-[234px] rounded-[5px] border border-[#B3B7BB]"
            />
          </div>
          <div className="flex items-center mb-[42px]">
            <p className="mr-5 text-[#B3B7BB] text-sm font-medium max-w-[148px] w-[148px] flex justify-end">
              Additional information
            </p>
            <FormInput
              id="additionalInfo"
              value={Formik?.values?.additionalInfo}
              onChange={Formik?.handleChange}
              onBlur={Formik.handleBlur}
              type="text"
              style="max-h-[41px] max-w-[234px] rounded-[5px] border border-[#B3B7BB]"
            />
          </div>
          <CustomButton styles="mb-[26px]" name="Save" type="submit" />
        </form>
      </div>
    </ManufacturersProfileLayoutComp>
  );
};

export default EditAddressComponent;
