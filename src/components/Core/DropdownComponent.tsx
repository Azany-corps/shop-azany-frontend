import React, { useState } from "react";

interface Option {
  value: string | null;
  label: string;
  icon?: React.ReactNode;
}

export interface DropdownProps {
  options: Option[];
  error?: string;
  selectedValue?: string;
  setSelectedValue: (value: string) => void;
  showOptions?: boolean;
  setShowOptions?: (value: boolean) => void;
  setCategoryError?: (value: string) => void;
  placeholder?: string;
  onChange: any;
  isSubmitted?: boolean;
}

const DropdownComponent: React.FC<DropdownProps> = ({
  options,
  error,
  placeholder,
  selectedValue,
  setSelectedValue,
  onChange,
  isSubmitted,
}) => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="relative w-full">
      {" "}
      <input
        className="block appearance-none w-full bg-white border border-gray-400 h-[48px] hover:border-gray-500 px-4 py-3 pr-8 rounded-l-md shadow leading-tight focus:outline-none focus:shadow-outline"
        value={selectedValue}
        placeholder={placeholder}
        onClick={() => setShowOptions(!showOptions)}
        readOnly
      />{" "}
      <div className="inset-y-0 right-0 pr-2 flex items-center pointer-events-none">
        {" "}
        <svg
          className="absolute top-0 right-0 mt-5 mr-3"
          width="12"
          height="10"
          viewBox="0 0 12 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <path
            d="M5.18077 8.82967L0.541993 2.20285C-0.107529 1.27496 0.556286 -8.85647e-07 1.68892 -8.36138e-07L10.3111 -4.59251e-07C11.4437 -4.09742e-07 12.1075 1.27496 11.458 2.20285L6.81923 8.82967C6.42113 9.39839 5.57887 9.39838 5.18077 8.82967Z"
            fill="#A4A4A4"
          />{" "}
        </svg>{" "}
      </div>{" "}
      {showOptions && (
        <ul className="z-50 absolute w-full bg-white border border-gray-400 shadow rounded py-1">
          {" "}
          {options.map((option) => (
            <li
              key={option.value}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer flex items-center"
              onClick={() => {
                setSelectedValue(option.label);
                setShowOptions(false);
                onChange();
              }}
            >
              <span>
                <b>{option.icon}</b>&nbsp;
              </span>
              <span className="mr-2">{option.label}</span>
            </li>
          ))}
        </ul>
      )}
      {isSubmitted && !selectedValue && error && (
        <p className="text-red-500 text-xs italic mt-2">{error}</p>
      )}
    </div>
  );
};

export { DropdownComponent };
