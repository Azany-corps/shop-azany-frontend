import React from "react";
import CustomerProfileLayout from "../../components/CustomerProfile/NewCustomerProfileLayout";
import { useNavigate } from "react-router-dom";
import { FormInput } from "../../components/Inputs";
import { useFormik } from "formik";
import CustomButton from "../../components/Inputs/button";

interface EditPersonalDetailsCompProps {}

const EditPersonalDetailsComp: React.FC<
  EditPersonalDetailsCompProps
> = ({}) => {
  const navigate = useNavigate();
  const backButtonHandler = () => {
    navigate(-1);
  };

  const first_name = localStorage.getItem("name")!;
  const last_name = localStorage.getItem("last_name")!;
  const phone = localStorage.getItem("phone")!;
  const email = localStorage.getItem("email")!;

  console.log(email);

  const Formik = useFormik({
    initialValues: {
      firstName: first_name,
      lastName: last_name,
      phoneNumber: phone,
      email: email,
    },
    onSubmit: (values, { resetForm }) => {
      //   console.log(values);
      resetForm();
    },
  });

  return (
    <CustomerProfileLayout>
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
              Phone number
            </p>
            <FormInput
              id="email"
              value={Formik?.values?.email}
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

export default EditPersonalDetailsComp;
