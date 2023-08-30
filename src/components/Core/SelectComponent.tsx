import React from "react";

interface Option {
  label: string;
  value: number;
}

interface Props {
  options: Option[];
  placeholder?: string;
  selectedValue?: number 
  setSelectedValue?: (value: number) => void;
  onChange?: any;
}

const SelectComponent: React.FC<Props> = ({
  options,
  placeholder,
  selectedValue,
  setSelectedValue,
  onChange,
}) => {
  return (
    <>
      <select
        value={selectedValue || ""}
        onChange={onChange || ((event) => setSelectedValue && setSelectedValue(parseInt(event.target.value)))}
        className="block appearance-none w-full bg-white border border-gray-400 h-[48px] hover:border-gray-500 px-4 py-3 pr-8 rounded-l-md shadow leading-tight focus:outline-none focus:shadow-outline"
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectComponent;
