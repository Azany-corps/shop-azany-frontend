import React from "react";
import ManufacturersProfileLayoutComp from "../../../components/General/manufacturers/profile/LayoutComp";
// import cardImage from "../../../../public/images/cardFormat.svg";

interface PaymentMehodsProps {}

const PaymentMethodsComponent: React.FC<PaymentMehodsProps> = () => {
  return (
    <ManufacturersProfileLayoutComp>
      <div className="pt-[80px]">
        <p className="capitalize text-xl font-semibold font-baloo">
          Payment methods
        </p>
        <p className="text-xl font-baloo font-normal text-[#B3B7BB]">
          Save and manage your payment details for fast checkout
        </p>
        <div className="max-w-[256.67px] flex flex-col justify-center">
          <div
            className="w-[256.67px] h-[150px] bg-cover bg-no-repeat mt-[27px] rounded-[24.4px] px-8 flex flex-col justify-between pt-[24.37px] pb-[14.14px]"
            style={{
              backgroundImage: `url("/images/cardTemplate.svg")`,
            }}
          >
            <div className="flex justify-between">
              <div className="text-[11.48px] font-normal font-poppins">
                <p className="text-[#f6f6f68a]">Zenith Bank</p>
                <p className="text-[#F6F6F6]">John Doe</p>
              </div>
              <img src="/images/master card.svg" alt="icon" />
            </div>

            <div className="text-[11.48px] font-normal font-poppins text-[#F6F6F6] flex justify-between items-center">
              <p>52** **** **** **89</p>
              <p>**/**</p>
            </div>
          </div>
          <div className="flex items-center text-[#D65D5B] font-public-sans text-[12.524px] mx-auto mt-[27px] cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M4.5 14.25C4.5 15.075 5.175 15.75 6 15.75H12C12.825 15.75 13.5 15.075 13.5 14.25V6.75C13.5 5.925 12.825 5.25 12 5.25H6C5.175 5.25 4.5 5.925 4.5 6.75V14.25ZM13.5 3H11.625L11.0925 2.4675C10.9575 2.3325 10.7625 2.25 10.5675 2.25H7.4325C7.2375 2.25 7.0425 2.3325 6.9075 2.4675L6.375 3H4.5C4.0875 3 3.75 3.3375 3.75 3.75C3.75 4.1625 4.0875 4.5 4.5 4.5H13.5C13.9125 4.5 14.25 4.1625 14.25 3.75C14.25 3.3375 13.9125 3 13.5 3Z"
                fill="#D65D5B"
              />
            </svg>
            <p>Delete</p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full mt-[225.36px] cursor-pointer">
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
          <p className="text-[25.8px] text-[#B8BACC]">Add a new card</p>
        </div>
      </div>
    </ManufacturersProfileLayoutComp>
  );
};

export default PaymentMethodsComponent;
