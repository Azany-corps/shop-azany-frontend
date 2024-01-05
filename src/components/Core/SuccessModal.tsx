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
            <div className="w-[252px] h-[252px]">
              <img
                src="/images/success-green-check-mark-icon.svg"
                alt="success"
              />
            </div>
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
