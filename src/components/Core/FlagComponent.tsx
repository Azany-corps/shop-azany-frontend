import React, { useState, useEffect } from "react";
import axios from "axios";
import { countries } from "../../newCountries";

interface Option {
  label: string;
  value: string;
  flag: string;
  longitude?: number;
  latitude?: number;
}

interface Props {
  placeholder?: string;
  selectedValue?: string | number;
  setSelectedValue?: (value: string) => void;
  onChange?: any;
  styles?: string;
  onOptionSelect?: any;
  options?: Option[];
}

const FlagComponent: React.FC<Props> = ({
  placeholder,
  selectedValue,
  setSelectedValue,
  onChange,
  styles,
  onOptionSelect,
}) => {
  const [options, setOptions] = useState<Option[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
     
      const countryList = countries.map((country: any) => ({
        label: country.name,
        value: country.name,
        flag: country.emoji,
        longitude: country.longitude,
        latitude: country.latitude,
      }));
      setOptions(countryList);
    };
    fetchCountries();
  }, []);

  const renderOption = (option: Option, index: number) => (
    <option
      key={index}
      value={option.value}
      data-longitude={option.longitude}
      data-latitude={option.latitude}
      style={{
        paddingLeft: "32px",
      }}
    >
      {option.flag} {option.label}
    </option>
  );

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = options.find(
      (option) => option.value === event.target.value
    );
    if (setSelectedValue && selectedOption) {
      setSelectedValue(event.target.value.toString());
      const { longitude, latitude } = selectedOption;
      if (onOptionSelect) {
        console.log("Selected Country:", selectedOption.label);
        console.log("Longitude:", longitude);
        console.log("Latitude:", latitude);
        onOptionSelect(longitude, latitude);
      }
    }
  };

  return (
    <select
      value={selectedValue?.toString() || ""}
      onChange={onChange || handleSelectChange}
      className={`block appearance-none w-full bg-white border border-gray-400 h-[48px] hover:border-gray-500 px-4 py-3 pr-8 shadow leading-tight focus:outline-none focus:shadow-outline ${styles}`}
    >
      {placeholder && <option value="">{placeholder}</option>}
      {options.map(renderOption)}
    </select>
  );
};

export default FlagComponent;
export type { Option };
