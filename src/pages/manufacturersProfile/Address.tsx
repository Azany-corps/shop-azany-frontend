import React from "react";
import ManufacturersProfileLayoutComp from "../../components/General/manufacturers/profile/LayoutComp";
import { useNavigate } from "react-router-dom";

interface AddressProps {}

const AddressComponent: React.FC<AddressProps> = () => {
  const navigate = useNavigate();

  const addAddressHandler = () => {
    navigate("/manufacturers-profile/address/edit");
  };

  const name = `${localStorage.getItem("name")} ${localStorage.getItem(
    "last_name"
  )}`;

  const country = localStorage.getItem("country");
  const state = localStorage.getItem("state");

  return (
    <ManufacturersProfileLayoutComp>
      <div className="pt-[80px] font-public-sans">
        <p className="capitalize text-xl font-semibold font-baloo">Address</p>
        <p className="text-xl font-baloo font-normal text-[#B3B7BB]">
          View and edit your delivery addresses
        </p>
        <div className="flex flex-col rounded-[22px] bg-[#f7dfde57] h-[324px] max-w-[494px] px-[19px] py-[11px] mt-[15px]">
          <div className="font-public-sans font-normal mb-[18px] ">
            <p className="text-[#B3B7BB] text-xs">Name</p>
            <p className="text-xl text-[#231F20]">{name || ""}</p>
          </div>
          <div className="font-public-sans font-normal mb-[18px] ">
            <p className="text-[#B3B7BB] text-xs">House number, street, city</p>
            <p className="text-xl text-[#231F20]">
              No 24 sokoto street, Area 1, Garki
            </p>
          </div>
          <div className="font-public-sans font-normal mb-[18px] ">
            <p className="text-[#B3B7BB] text-xs">State</p>
            <p className="text-xl text-[#231F20]">{state}</p>
          </div>
          <div className="font-public-sans font-normal mb-[18px] ">
            <p className="text-[#B3B7BB] text-xs">Country</p>
            <p className="text-xl text-[#231F20]">{country}</p>
          </div>
          <div className="flex justify-center w-full">
            <button
              type="button"
              className="text-black bg-transparent border border-[#D65D5B] focus:ring-4 focus:ring-[#cf7372] font-medium rounded-[16px] text-sm px-2 py-2.5 me-2 mb-2 focus:outline-none item mt-auto max-w-[130px] w-[130px] cursor-pointer"
            >
              <p className="w-[114px] text-[12px] font-medium">Edit</p>
            </button>
            <button
              type="button"
              className="text-white bg-[#D65D5B] hover:bg-[#b53f3d] focus:ring-4 focus:ring-[#cf7372] font-medium rounded-[16px] text-sm px-2 py-2.5 me-2 mb-2 focus:outline-none item mt-auto max-w-[130px] w-[130px] cursor-pointer"
            >
              <p className="w-[114px] text-[12px] font-medium">Delete</p>
            </button>
          </div>
        </div>
        <div
          className="flex items-center justify-center w-full mt-[45px] cursor-pointer"
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
      </div>
    </ManufacturersProfileLayoutComp>
  );
};

export default AddressComponent;
