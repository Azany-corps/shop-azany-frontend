import React, { ChangeEvent, ReactNode } from "react";

interface ErrorProps {
  error: string;
}

const Error: React.FC<ErrorProps> = ({ error }) => (
  <p className="mt-2 text-sm text-red-600">
    <span className="font-medium">Oh, snapp!</span> {error}
  </p>
);

interface Option {
  value: string;
  label: string;
}

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
}

export const FormTextArea: React.FC<FormTextAreaProps> = ({
  error,
  touched,
  name,
  id,
  onChange,
  style,
  value,
  placeholder,
  labelStyle,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className={`${labelStyle} block text-sm mb-2 font-normal general-font uppercase text-black ${
          error && touched ? "text-red-700" : ""
        }`}
      >
        {name}
      </label>
      <textarea
        id={id}
        rows={4}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        className={`${style} bg-[#F5F5F5] border general-font border-[#C1C1C1] text-[black] text-sm rounded-[10px] focus:ring-[#D65D5B] focus:border-[#D65D5B] block w-full py-2.5 px-[24px]  placeholder:text-[#515151] placeholder:text-sm placeholder:font-normal  ${
          error && touched
            ? "border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500  focus:border-red-500"
            : ""
        }`}
      ></textarea>
      {error && touched ? <Error error={error} /> : null}
    </div>
  );
};

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

export const FormSelect: React.FC<FormSelectProps> = ({
  options,
  optionsLabel,
  error,
  touched,
  name,
  id,
  onChange,
  onBlur,
  style,
  value,
  labelStyle,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className={`${labelStyle} block text-base  general-font uppercase text-black ${
          error && touched ? "text-red-700" : ""
        }`}
      >
        {name}
      </label>
      <select
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`${style} bg-[#F5F5F5] border general-font border-[#C1C1C1] text-[black] text-sm rounded-[10px] focus:ring-[#D65D5B] focus:border-[#D65D5B] block w-full py-5 pl-6 ${
          value == optionsLabel ? "text-[#515151] " : "text-[black]"
        } `}
      >
        <option selected>{optionsLabel}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && touched ? <Error error={error} /> : null}
    </div>
  );
};

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

export const FormInput: React.FC<FormInputProps> = ({
  error,
  touched,
  name,
  id,
  onChange,
  onBlur,
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
        className={`${labelStyle} block  general-font text-black ${
          error && touched ? "text-red-700" : ""
        }`}
      >
        {name}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        className={`${style} bg-[#F5F5F5] border general-font border-[#C1C1C1] text-[black] text-sm rounded-[10px] focus:ring-[#D65D5B] focus:border-[#D65D5B] block w-full py-5 px-6 placeholder:text-[#515151] placeholder:text-sm placeholder:font-normal  ${
          error && touched
            ? "border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500  focus:border-red-500"
            : ""
        }`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        // required
      />
      {error && touched ? <Error error={error} /> : null}
    </div>
  );
};
