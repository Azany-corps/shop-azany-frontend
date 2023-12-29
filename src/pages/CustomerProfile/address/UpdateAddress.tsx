import React, { useState } from "react";
import CustomerProfileLayout from "../../../components/CustomerProfile/NewCustomerProfileLayout";

import { useNavigate, useLocation } from "react-router-dom";
import { FormInput } from "../../../components/Inputs";
import { useFormik } from "formik";
import CustomButton from "../../../components/Inputs/button";
import { getBearerToken } from "../../../Services/auth.service";
import callAPI from "../../../api/callApi";
import { APP_ROUTE } from "../../../helpers/constant";
import SuccessModal from "../../../components/Core/SuccessModal";

interface EditAddressProps {}

const UpdateAddressComponent: React.FC<EditAddressProps> = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const backButtonHandler = () => {
    navigate(-1);
  };
  const location = useLocation();

  const first_name = location.state.first_name;
  const last_name = location.state.last_name;
  const country = location.state.country;
  const state = location.state.state;
  const address = location.state.address;
  const city = location.state.city;
  const postal_code = location.state.postal_code;
  const delivery_options = location.state.delivery_options;
  const id = location.state.id;

  console.log(id);

  console.log(location.state);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate(`/customer-profile/address`);
  };

  const handleSubmit = async (values: any) => {
    try {
      setIsLoading(true);
      const res = await callAPI(
        `general/products/update_customer_delivery_info/${id}`,
        "PUT",
        values,
        {
          Authorization: getBearerToken(),
        }
      );
      console.log(res);
      setIsLoading(false);
      handleOpenModal();
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      alert(err);
    }
  };

  const Formik = useFormik({
    initialValues: {
      first_name: first_name,
      last_name: last_name,
      phone: "",
      address: address,
      country: country,
      state: state,
      city: city,
      postal_code: postal_code,
      additionalInfo: "",
      delivery_options: delivery_options,
    },
    onSubmit: (values, { resetForm }) => {
      alert("Still in progress");

      try {
        handleSubmit(values);
        // resetForm();
      } catch (err) {
        alert(err);
        console.error(err);
      }
    },
  });

  return (
    <CustomerProfileLayout>
      <SuccessModal
        title="Address successfully added"
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
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
              id="first_name"
              value={Formik?.values?.first_name}
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
              id="last_name"
              value={Formik?.values?.last_name}
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
              id="phone"
              value={Formik?.values?.phone}
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
              id="address"
              value={Formik?.values?.address}
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
          <div className="flex items-center mb-[26px]">
            <p className="mr-5 text-[#B3B7BB] text-sm font-medium max-w-[148px] w-[148px] flex justify-end">
              Country
            </p>
            <FormInput
              id="country"
              value={Formik?.values?.country}
              onChange={Formik?.handleChange}
              onBlur={Formik.handleBlur}
              type="text"
              style="max-h-[41px] max-w-[234px] rounded-[5px] border border-[#B3B7BB]"
            />
          </div>
          <div className="flex items-center mb-[26px]">
            <p className="mr-5 text-[#B3B7BB] text-sm font-medium max-w-[148px] w-[148px] flex justify-end">
              Postal code
            </p>
            <FormInput
              id="postal_code"
              value={Formik?.values?.postal_code}
              onChange={Formik?.handleChange}
              onBlur={Formik.handleBlur}
              type="text"
              style="max-h-[41px] max-w-[234px] rounded-[5px] border border-[#B3B7BB]"
            />
          </div>
          <div className="flex items-center mb-[26px]">
            <p className="mr-5 text-[#B3B7BB] text-sm font-medium max-w-[148px] w-[148px] flex justify-end">
              Delivery options
            </p>
            <FormInput
              id="delivery_options"
              value={Formik?.values?.delivery_options}
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
    </CustomerProfileLayout>
  );
};

export default UpdateAddressComponent;
