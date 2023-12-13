import React, { useEffect, useState } from "react";
import CustomerProfileLayout from "../../../components/CustomerProfile/NewCustomerProfileLayout";
import { useNavigate, Link } from "react-router-dom";
import callAPI from "../../../api/callApi";
import useAuthToken from "../../../hooks/useAuthToken";
import { APP_ROUTE } from "../../../helpers/constant";
import Loader from "../../../components/Core/Loader";
import DeleteModalComp from "../../../components/Core/DeleteModalComp";

interface AddressProps {}

interface Address {
  first_name: string;
  last_name: string;
  street: string;
  city: string;
  state: string;
  country: string;
  address: string;
  postal_code: string;
  delivery_options: string;
  // Add other properties as needed
}

const AddressComponent: React.FC<AddressProps> = () => {
  const navigate = useNavigate();
  const [addresses, setAdresses] = useState<Address[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const addAddressHandler = () => {
    navigate("/customer-profile/add-address");
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate(`/customer-profile/address`);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const getCustomerDeliveryInfo = async () => {
      setIsLoading(true);
      const headers = { Authorization: `Bearer ${token}` };
      try {
        const response = await callAPI(
          `general/products/fetch_customer_delivery_info`,
          "GET",
          null,
          headers
        );
        setAdresses(response.data.values);
        setIsLoading(false);
        return response.data.values;
      } catch (err) {
        console.log(err);
        alert(err);
        setIsLoading(false);
      }
    };

    getCustomerDeliveryInfo();
  }, []);

  console.log(addresses);

  return (
    <CustomerProfileLayout>
      <DeleteModalComp
        title="Are you sure you want to delete this address"
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
      {isLoading && <Loader />}
      <div className="pt-[80px] w-full font-public-sans">
        <p className="capitalize text-xl font-semibold font-baloo">Address</p>
        <p className="text-xl font-baloo font-normal text-[#B3B7BB]">
          View and edit your delivery addresses
        </p>
        {addresses.length < 1 && (
          <div className="w-full h-full flex flex-col justify-center items-center">
            <img src="/images/MysteryBox1.svg" />
            <p className="mt-[17px] font-public-sans text-xl font-semibold">
              No address yet, add address
            </p>
          </div>
        )}
        <div className="w-full grid grid-cols-1 gap-8 lg:grid-cols-2">
          {addresses.length >= 1 &&
            addresses.map((address: Address) => (
              <div className="font-public-sans">
                <div className="flex flex-col rounded-[22px] bg-[#f7dfde57] h-[324px] max-w-[494px] px-[19px] py-[11px] mt-[15px]">
                  <div className="font-public-sans font-normal mb-[18px] ">
                    <p className="text-[#B3B7BB] text-xs">Name</p>
                    <p className="text-xl text-[#231F20]">
                      {`${address?.first_name} ${address?.last_name}` || ""}
                    </p>
                  </div>
                  <div className="font-public-sans font-normal mb-[18px] ">
                    <p className="text-[#B3B7BB] text-xs">
                      House number, street, city
                    </p>
                    <p className="text-xl text-[#231F20]">
                      {`${address?.address}, ${address?.city}` || ""}
                    </p>
                  </div>
                  <div className="font-public-sans font-normal mb-[18px] ">
                    <p className="text-[#B3B7BB] text-xs">State</p>
                    <p className="text-xl text-[#231F20]">
                      {address?.state || ""}
                    </p>
                  </div>
                  <div className="font-public-sans font-normal mb-[18px] ">
                    <p className="text-[#B3B7BB] text-xs">Country</p>
                    <p className="text-xl text-[#231F20]">
                      {address?.country || ""}
                    </p>
                  </div>
                  <div className="flex justify-center w-full">
                    <Link
                      to="/customer-profile/edit-address"
                      state={{
                        first_name: address?.first_name,
                        last_name: address?.last_name,
                        address: address?.address,
                        city: address?.city,
                        state: address?.state,
                        country: address?.country,
                        postal_code: address?.postal_code,
                        delivery_options: address?.delivery_options,
                      }}
                    >
                      <button
                        type="button"
                        className="text-black bg-transparent border border-[#D65D5B] focus:ring-4 focus:ring-[#cf7372] font-medium rounded-[16px] text-sm px-2 py-2.5 me-2 mb-2 focus:outline-none item mt-auto max-w-[130px] w-[130px] cursor-pointer"
                      >
                        <p className="w-[114px] text-[12px] font-medium">
                          Edit
                        </p>
                      </button>
                    </Link>
                    <button
                      type="button"
                      onClick={handleOpenModal}
                      className="text-white bg-[#D65D5B] hover:bg-[#b53f3d] focus:ring-4 focus:ring-[#cf7372] font-medium rounded-[16px] text-sm px-2 py-2.5 me-2 mb-2 focus:outline-none item mt-auto max-w-[130px] w-[130px] cursor-pointer"
                    >
                      <p className="w-[114px] text-[12px] font-medium">
                        Delete
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      {addresses.length < 5 && (
        <Link
          className="pb-8"
          to={APP_ROUTE?.customerProfileAddAddress}
          state={{
            first_name: addresses[0]?.first_name,
            last_name: addresses[0]?.last_name,
          }}
        >
          <div
            className="flex items-center justify-center w-full mt-[45px] cursor-pointer mb-8"
            onClick={addAddressHandler}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
            >
              <path
                d="M12.9018 2.15039C6.97778 2.15039 2.15039 6.97778 2.15039 12.9018C2.15039 18.8259 6.97778 23.6532 12.9018 23.6532C18.8259 23.6532 23.6533 18.8259 23.6533 12.9018C23.6533 6.97778 18.8259 2.15039 12.9018 2.15039ZM17.2024 13.7082H13.7082V17.2024C13.7082 17.6432 13.3426 18.0087 12.9018 18.0087C12.461 18.0087 12.0955 17.6432 12.0955 17.2024V13.7082H8.60125C8.16044 13.7082 7.79489 13.3426 7.79489 12.9018C7.79489 12.461 8.16044 12.0955 8.60125 12.0955H12.0955V8.60125C12.0955 8.16044 12.461 7.79489 12.9018 7.79489C13.3426 7.79489 13.7082 8.16044 13.7082 8.60125V12.0955H17.2024C17.6432 12.0955 18.0088 12.461 18.0088 12.9018C18.0088 13.3426 17.6432 13.7082 17.2024 13.7082Z"
                fill="#B8BACC"
              />
            </svg>
            <p className="text-[25.8px] text-[#B8BACC]">Add new address</p>
          </div>
        </Link>
      )}
    </CustomerProfileLayout>
  );
};

export default AddressComponent;
