import React, { useState } from "react";
import CustomerProfileLayout from "../../components/CustomerProfile/NewCustomerProfileLayout";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import callAPI from "../../api/callApi";
import { getBearerToken } from "../../Services/auth.service";
import { APP_ROUTE } from "../../helpers/constant";
type each = {
  image: string;
  title: string;
  subheading: string;
};

type Props = {};

const IndexPage = (props: Props) => {
  const [active, setActive] = useState<each>();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showSuccessModal, setSuccessShowModal] = useState<boolean>(false);

  const navigate = useNavigate();

  const name = localStorage.getItem("name");
  const last_name = localStorage.getItem("last_name");
  const phone = localStorage.getItem("phone");
  const email = localStorage.getItem("email");

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const handleSubmit = async (values: any) => {
    let data = new FormData();
    data.append("password", values?.password);
    data.append("old_password", values?.old_password);
    data.append("password_confirmation", values?.password_confirmation);
    try {
      setIsLoading(true);
      const res = await callAPI("auth/change_password", "POST", data, {
        Authorization: getBearerToken(),
        "Content-Type": "multipart/form-data",
      });
      console.log(res);
      setIsLoading(false);
      setSuccessShowModal(true);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      old_password: "",
      password: "",
      password_confirmation: "",
    },
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      try {
        handleSubmit(values);
        resetForm();
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <div className="bg-[#F5F5F5]">
      <CustomerProfileLayout>
        {/* {
          <Grid item xs={12} md={4} display={{ xs: "block", sm: "none" }}>
            <div className="w-full bg-transparent mx-auto">
              <div className="flex-col flex gap-3">
                <div className="flex bg-white flex-col xs:flex-row xs:justify-between gap-4 p-2">
                  <div className="flex flex-row gap-4">
                    <div>
                      <img src="/images/walleticon.png" alt="wallet" />
                    </div>
                    <div className="flex flex-col justify-start">
                      <Link to="/customers-profile/wallet-history">
                        <h1 className="font-bold text-[24px] text-[#1B7CFC]">
                          Wallet
                        </h1>
                        <p>Lorem ipsum dolor sit.</p>
                        <p className="text-[24px] font-medium">$4,450,500.00</p>
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 sef-end justify-between">
                    <div className="ml-auto sm:hidden lg:hidden md:hidden 2xl:hidden xl:hidden">
                      <p className="text-[#1B7CFC] underline">RP</p>
                    </div>
                    <button className="w-full xs:w-18 xs:h-10 border text-[#E51B48] p-2 rounded-md bg-white border-red-600 hover:bg-white hover:text-red-600 hover:border-600">
                      Fund
                    </button>
                  </div>
                </div>
                <div className="py-1 gap-1 items-center smm:hidden flex smm:bg-white bg-[#F5F5F5] ">
                  <Link to={"/"} className="w-fit items-center flex">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.7068 5.29279C12.8943 5.48031 12.9996 5.73462 12.9996 5.99979C12.9996 6.26495 12.8943 6.51926 12.7068 6.70679L9.41379 9.99979L12.7068 13.2928C12.8889 13.4814 12.9897 13.734 12.9875 13.9962C12.9852 14.2584 12.88 14.5092 12.6946 14.6946C12.5092 14.88 12.2584 14.9852 11.9962 14.9875C11.734 14.9897 11.4814 14.8889 11.2928 14.7068L7.29279 10.7068C7.10532 10.5193 7 10.265 7 9.99979C7 9.73462 7.10532 9.48031 7.29279 9.29279L11.2928 5.29279C11.4803 5.10532 11.7346 5 11.9998 5C12.265 5 12.5193 5.10532 12.7068 5.29279Z"
                        fill="black"
                      />
                    </svg>
                    <p>Home</p>
                  </Link>
                </div>
                <div className="py-5 bg-white">
                  <div className="px-2 space-y-2 ">
                    {data.map((each, index) => (
                      <div
                        className={`list-itemed xs:shadow-md text-black ${
                          active === each ? "bg-[#E51B48]" : ""
                        } hover:bg-[#E51B48] hover:text-white focus:bg-[#E51B48]`}
                        key={index}
                        onClick={() => {
                          setActive(each);
                          navigate(`/customer-profile${each.path}`);
                        }}
                      >
                        <div className="group flex justify-between items-center">
                          <div className="py-2">
                            <h2 className="font-bold ">{each.title}</h2>
                            <p className="group-hover:text-white text-gray-500">
                              {each.subheading}
                            </p>
                          </div>
                          <p> &gt;</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        } */}
        {showModal && (
          <div
            onClick={() => {
              setSuccessShowModal(false);
              setShowModal(false);
            }}
            id="staticModal"
            data-modal-backdrop="static"
            aria-hidden="true"
            className="fixed top-0 left-0 right-0 z-50 w-full h-screen p-4 overflow-x-hidden overflow-y-auto md:inset-0  max-h-full flex justify-center items-center bg-black bg-opacity-70"
          >
            {!showSuccessModal && (
              <div
                className="relative p-4 w-full max-w-[590px] max-h-[500px]"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <div className="relative bg-white rounded-[26.7px] shadow  px-[47px]">
                  <div className="flex items-center justify-between py-4 md:p-5 border-b border-dashed rounded-t">
                    <h3 className="text-[12.5px] font-bold text-gray-900 ">
                      Change password
                    </h3>
                    <button
                      type="button"
                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                      data-modal-hide="static-modal"
                      onClick={() => {
                        closeModalHandler();
                        // onClose?.();
                        // setResetModal(false);
                      }}
                    >
                      <img src="/images/modalClose.svg" alt="modal-close" />
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>
                  <div className="flex flex-col justify-center items-center w-full mt-[23.6px] mb-[28px]">
                    <p className="text-xl text-[#231F20] font-public-sans font-semibold">
                      Create your new password
                    </p>
                    <p className="text-xs text-[#8B909A] font-public-sans font-medium mt-[20px] text-center max-w-[354px]">
                      Password must be 8 characters and above with combination
                      of alphabet, number and special characters
                    </p>
                  </div>

                  <div className="p-4 md:p-5 space-y-4">
                    <form
                      onSubmit={formik?.handleSubmit}
                      className="flex z-20 flex-col justify-center items-center w-full"
                    >
                      <div className="flex flex-col w-full items-center justify-between mb-[26px]">
                        <input
                          id="old_password"
                          className="bg-transparent text-xs max-w-[234px] w-[234px] h-[41px] placeholder:text-xs px-3 outline-none placeholder:text-[#B3B7BB] placeholder:text-center border rounded-2xl border-[#B3B7BB]"
                          placeholder="Enter old password"
                          value={formik?.values?.old_password}
                          onChange={formik?.handleChange}
                          name="old_password"
                          type="text"
                        />
                      </div>
                      <div className="flex flex-col w-full items-center justify-between mb-[26px]">
                        <input
                          className="bg-transparent text-xs max-w-[234px] w-[234px] h-[41px] placeholder:text-xs px-3 outline-none placeholder:text-[#B3B7BB] placeholder:text-center border rounded-2xl border-[#B3B7BB]"
                          id="password"
                          placeholder="Enter new password"
                          value={formik?.values?.password}
                          onChange={formik?.handleChange}
                          name="password"
                          type="text"
                        />
                      </div>
                      <div className="flex flex-col w-full items-center justify-between mb-[50px]">
                        <input
                          className="bg-transparent text-xs max-w-[234px] w-[234px] h-[41px] placeholder:text-xs px-3 outline-none placeholder:text-[#B3B7BB] placeholder:text-center border rounded-2xl border-[#B3B7BB]"
                          id="password_confirmation"
                          placeholder="Re-enter password"
                          value={formik?.values?.password_confirmation}
                          onChange={formik?.handleChange}
                          name="password_confirmation"
                          type="text"
                        />
                      </div>

                      <button
                        // disabled={loading ? true : false}
                        type="submit"
                        className="bg-black font-bold text-white rounded-[22px] text-[17px] py-4 w-[200px]"
                      >
                        {/* {loading ? "Loading..." : "Verify"} */}
                        save
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            )}

            {showSuccessModal && !isLoading && (
              <div className="relative p-4 w-full max-w-[590px] max-h-[500px]">
                <div className="relative bg-white rounded-[26.7px] shadow px-[47px]">
                  <div className="px-4 md:px-5 space-y-4 flex flex-col justify-between items-center pt-[90px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="253"
                      height="253"
                      viewBox="0 0 253 253"
                      fill="none"
                    >
                      <path
                        d="M185.973 21.8191C187.592 18.9926 186.62 15.3749 183.721 13.889C179.378 11.663 174.909 9.69094 170.338 7.98263C167.286 6.84225 163.958 8.56206 162.962 11.6637C161.965 14.7653 163.678 18.073 166.724 19.228C170.517 20.6661 174.23 22.3049 177.848 24.1374C180.755 25.6094 184.353 24.6457 185.973 21.8191Z"
                        fill="#00A91B"
                      />
                    </svg>
                    <p className="text-center text-[17px] z-20 font-semibold mt-[34px] pb-[85px]">
                      Your password has been changed
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        <div className="pt-[80px] ">
          <p className="capitalize text-xl font-semibold font-baloo">
            Personal details
          </p>
          <p className="text-xl font-baloo font-normal text-[#B3B7BB]">
            Update your name, email, and account password at any time.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[61px] mb-4 px-4 md:px-[48px] mt-[43px] font-public-sans">
            <div className="flex flex-col items-center rounded-[22px] bg-[#d0d0d059] h-[455px] py-[47px] px-[38px]">
              <img src="/images/personIcon.svg" className="mb-[18px]" />

              <p className="font-semibold text-[15px] text-black mb-[21px]">
                Account management
              </p>

              <table className="w-full text-sm text-left rtl:text-right flex justify-center items-center overflow-hidden truncate">
                <tbody>
                  <tr>
                    <th className="whitespace-nowrap bg-transparent font-public-sans text-[#B3B7BB] text-sm font-normal pt-[13px] pr-12">
                      First name
                    </th>
                    <td className="text-sm font-normal text-black pt-[13px] w-[50%] font-public-sans">
                      {name || ""}
                    </td>
                  </tr>
                  <tr>
                    <th className="text-sm font-normalwhitespace-nowrap bg-transparent font-public-sans text-[#B3B7BB] pt-[13px]">
                      Last name
                    </th>
                    <td className="text-sm font-normal text-black pt-[13px] w-[50%] font-public-sans">
                      {last_name || ""}
                    </td>
                  </tr>
                  <tr>
                    <th className="whitespace-nowrap bg-transparent font-public-sans text-[#B3B7BB] text-sm font-normal pt-[13px]">
                      Phone number
                    </th>
                    <td className="text-sm font-normal text-black pt-[13px] w-[50%] font-public-sans">
                      {phone || ""}
                    </td>
                  </tr>
                  <tr>
                    <th className="whitespace-nowrap bg-transparent font-public-sans text-[#B3B7BB] text-sm font-normal pt-[13px]">
                      Email
                    </th>
                    <td className="text-sm font-normal text-black pt-[13px] w-[50%] font-public-sans">
                      {email || ""}
                    </td>
                  </tr>
                </tbody>
              </table>

              <button
                onClick={() => {
                  navigate(APP_ROUTE?.editCustomerPersonnalDetails);
                }}
                type="button"
                className="text-white bg-[#D65D5B] hover:bg-[#b53f3d] focus:ring-4 focus:ring-[#cf7372] font-medium rounded-[16px] text-sm px-2 py-2.5 me-2 mb-2 focus:outline-none item mt-auto max-w-[130px] w-[130px] cursor-pointer"
              >
                <p className="w-[114px] text-[12px] font-medium">Edit</p>
              </button>
            </div>

            <div className="flex flex-col items-center rounded-[22px] bg-[#d0d0d059] h-[455px] py-[47px] px-[38px]">
              <img src="/images/lockIcon.svg" className="mb-[30px]" />
              <p className="font-medium text-[12px] text-[#8B909A] text-center">
                Guard Your Account: Strong Passwords, Easy Changes. Keep your
                Azany account secure by choosing a strong password. Change it
                anytime in your account settings for added protection. Your
                safety matters to us.
              </p>
              <button
                disabled={isLoading}
                onClick={() => {
                  setShowModal(true);
                }}
                type="button"
                className="text-white bg-[#D65D5B] hover:bg-[#b53f3d] focus:ring-4 focus:ring-[#cf7372] font-medium rounded-[16px] text-sm px-2 py-2.5 me-2 mb-2 focus:outline-none item mt-auto max-w-[130px] w-[130px] cursor-pointer"
              >
                <p className="w-[114px] text-[12px] font-medium">
                  {isLoading ? "Saving..." : "Change passowrd"}
                </p>
              </button>
            </div>
          </div>
        </div>
      </CustomerProfileLayout>
    </div>
  );
};

export default IndexPage;
