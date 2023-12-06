import React, { useState } from "react";
import CustomerProfileLayout from "../../components/CustomerProfile/NewCustomerProfileLayout";
import { useNavigate, useLocation } from "react-router-dom";
import { FormInput } from "../../components/Inputs";
import { useFormik } from "formik";
import CustomButton from "../../components/Inputs/button";
import callAPI from "../../api/callApi";
import { getBearerToken } from "../../Services/auth.service";
import { APP_ROUTE } from "../../helpers/constant";
import SuccessModal from "../../components/Core/SuccessModal";

interface EditPersonalDetailsCompProps {}

const EditPersonalDetailsComp: React.FC<
  EditPersonalDetailsCompProps
> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const navigate = useNavigate();
  const location = useLocation();
  const backButtonHandler = () => {
    navigate(-1);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate(`/${APP_ROUTE?.customerProfile}`);
  };

  const first_name = location.state.first_name;
  const last_name = location.state.last_name;
  const phone = location.state.phone;
  const email = location.state.email;

  const handleEditProile = async (values: any) => {
    try {
      setIsLoading(true);
      const res = await callAPI("auth/customer_update_profile", "PUT", values, {
        Authorization: getBearerToken(),
        // "Content-Type": "multipart/form-data",
      });
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
      phone: phone,
      email: email,
      country: "1",
      state: "1",
      city: "1",
      address: "24, apatapiti",
      poster_code: "12yu6jj",
    },
    onSubmit: (values) => {
      try {
        handleEditProile(values);
        console.log(values);
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <CustomerProfileLayout>
      <SuccessModal
        title="Customer details successfully updated"
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
            Edit personal details
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
              Email
            </p>
            <FormInput
              id="email"
              value={Formik.values.email}
              onChange={Formik?.handleChange}
              onBlur={Formik.handleBlur}
              type="email"
              style="max-h-[41px] max-w-[234px] rounded-[5px] border border-[#B3B7BB]"
            />
          </div>

          <CustomButton
            styles="mb-[26px]"
            name={isLoading ? "Saving..." : "Save"}
            disabled={isLoading}
            type="submit"
          />
        </form>
      </div>
    </CustomerProfileLayout>
  );
};

export default EditPersonalDetailsComp;
