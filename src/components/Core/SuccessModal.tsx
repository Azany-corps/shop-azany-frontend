import React from "react";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  // Add any other props you may need
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  isOpen,
  onClose,
  title,
}) => {
  return (
    <div
      onClick={onClose}
      id="staticModal"
      data-modal-backdrop="static"
      aria-hidden="true"
      className={`${
        isOpen ? "fixed" : "hidden"
      } top-0 left-0 right-0 z-50 w-full h-screen p-4 overflow-x-hidden overflow-y-auto md:inset-0  max-h-full flex justify-center items-center bg-[#000000] bg-opacity-70`}
    >
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
              {title || "Your password has been changed"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
