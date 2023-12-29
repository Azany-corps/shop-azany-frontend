import React from "react";

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  onClick: () => void;
  // Add any other props you may need
}

const DeleteModalComp: React.FC<DeleteModalProps> = ({
  isOpen,
  onClose,
  title,
  onClick,
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
        <div
          className="relative bg-white rounded-[26.7px] shadow px-[47px] pb-[28.69px]"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="px-4 md:px-5 space-y-4 flex flex-col justify-between items-center pt-[90px]">
            <img src="/images/delete-icon.svg" alt="icon" />
            <p className="text-center text-[17px] z-20 font-semibold pt-[37px] pb-[66px]">
              {title || "Your password has been changed"}
            </p>
            <div className="w-full flex justify-between">
              <button
                // disabled={loading ? true : false}
                type="button"
                onClick={() => {
                  onClose();
                }}
                className="bg-[#000000] font-bold text-white rounded-[22px] text-[17px] py-4 w-[200px]"
              >
                {/* {loading ? "Loading..." : "Verify"} */}
                Cancel
              </button>
              <button
                // disabled={loading ? true : false}
                type="button"
                onClick={() => {
                  onClose();
                  onClick();
                }}
                className="bg-[#000000] font-bold text-white rounded-[22px] text-[17px] py-4 w-[200px]"
              >
                {/* {loading ? "Loading..." : "Verify"} */}
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModalComp;
