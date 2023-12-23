import React, { ChangeEvent, ReactNode } from "react";

interface FormInputProps {
  error?: string | undefined;
  touched?: boolean | undefined;
  name?: string;
  id: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
  style?: string;
  type: string;
  value: string;
  placeholder?: string;
  labelStyle?: string;
}

export const ProductInput: React.FC<FormInputProps> = ({
  name,
  id,
  onChange,
  style,
  type,
  value,
  placeholder,
  labelStyle,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className={`${labelStyle} block mb-2 text-app-gray-300
            }`}
      >
        {name}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        className={`${style} bg-transparent border border-app-gray-100 text-app-gray-300 text-sm rounded-[10px] focus:ring-gray-900 focus:border-gray-900 block w-full p-2.5 placeholder:text-app-brown-300
          }`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {/* {error && touched ? <Error error={error} /> : null} */}
    </div>
  );
};

interface FormInputSelectProps {
  error?: string | undefined;
  touched?: boolean | undefined;
  name?: string;
  id: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  style?: string;
  type: string;
  value: string;
  placeholder?: string;
  labelStyle?: string;

  options: Option[];
  optionsLabel?: string;
  selectId: string;
  onSelectChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  selectValue: string;
  inputStyle?: string;
}

export const ProductInputSelectForm: React.FC<FormInputSelectProps> = ({
  name,
  id,
  onChange,
  onSelectChange,
  style,
  inputStyle,
  type,
  value,
  selectValue,
  placeholder,
  labelStyle,
  options,
  selectId,
  optionsLabel,
}) => {
  return (
    <div>
      <label className={`${labelStyle} block mb-2 text-app-gray-300`}>
        {name}
      </label>
      <div
        className={`${style} border border-[#DCDCE4] max-w-70 rounded-[10px] font-DM-sans flex justify-between items-center text-app-gray-300 text-sm h-[45px] relative`}
      >
        <input
          type={type}
          value={value}
          id={id}
          className={`${inputStyle} border-none w-[65%] text-app-gray-300 text-sm font-DM-sans placeholder:text-app-brown-30 p-2.5 rounded-[10px] outline-none focus:ring-0`}
          onChange={onChange}
          placeholder={placeholder}
        />
        <select
          id={selectId}
          value={selectValue}
          onChange={onSelectChange}
          className="border-none text-[#29020266] bg-transparent outline-none focus:ring-0 w-[60px]"
        >
          <option value="" selected disabled>
            {optionsLabel}
          </option>
          {options?.map((option, index) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

interface FormTextAreaProps {
  error?: string | undefined;
  touched?: boolean | undefined;
  name?: string;
  id: string;
  onChange?: any;
  style?: string;
  value: string;
  placeholder?: string;
  labelStyle?: string;
  wordsLimit?: string;
}

export const ProductTextArea: React.FC<FormTextAreaProps> = ({
  name,
  id,
  onChange,
  style,
  value,
  placeholder,
  labelStyle,
  wordsLimit,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className={`${labelStyle} mb-2 text-app-gray-300 flex justify-between items-center w-full`}
      >
        <p>{name}</p>
        <p className="text-[#29020266]">{wordsLimit}</p>
      </label>
      <textarea
        id={id}
        name={id}
        rows={4}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${style} block p-2.5 w-full text-sm text-gray-900 bg-transparent border-app-gray-100 text-app-gray-300 rounded-[10px] placeholder:text-app-brown-300`}
      ></textarea>
      {/* {error && touched ? <Error error={error} /> : null} */}
    </div>
  );
};

interface Option {
  value: any;
  label: string;
}

interface FormSelectProps {
  options: Option[];
  optionsLabel: string;
  error?: string | undefined;
  touched?: boolean | undefined;
  name?: string;
  id: string;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: (event: ChangeEvent<HTMLSelectElement>) => void;
  style?: string;
  value: string;
  labelStyle?: string;
}

export const ProductSelect: React.FC<FormSelectProps> = ({
  options,
  optionsLabel,
  name,
  id,
  onChange,
  style,
  value,
  labelStyle,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className={`${labelStyle} block mb-2 text-app-gray-300
          }`}
      >
        {name}
      </label>
      <select
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        className={`${style} bg-transparent border border-app-gray-100 text-app-gray-300 text-sm rounded-[10px] focus:ring-0 focus:ring-none focus:border-gray-900 block w-full p-2.5`}
      >
        <option disabled selected>
          {optionsLabel}
        </option>
        {options?.map((option: any) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {/* {error && touched ? <Error error={error} /> : null} */}
    </div>
  );
};
