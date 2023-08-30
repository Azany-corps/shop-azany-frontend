import React, { useState, KeyboardEvent, ChangeEvent } from 'react';

interface ExpiryInputProps {
  id: string;
  className: string;
  delimiter: string;
  placeholder: string;
  value:string;
  handleInputChange: any;
}

const ExpiryInput: React.FC<ExpiryInputProps> = ({
  id,
  className,
  delimiter,
  placeholder,
  value,
  handleInputChange,
}) => {
  const [maxLength, setMaxLength] = useState<number>(delimiter.length + 4);
  

  const correctInput = (event: KeyboardEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    const key = event.key;
    let typeKey: string;
    const monthMin = "01";
    const monthMax = "12";
    const yearMin = new Date().getFullYear() - 2000;
    const yearMax = new Date().getFullYear() - 2000 + 25;

    if (/(\d|ArrowLeft|ArrowRight|Backspace|Delete|Tab)/.test(key)) {
      if (/(\d)/.test(key)) {
        typeKey = "number";
      } else {
        typeKey = "specSymbol";
      }

      if (value.length === 0 && key > "1") {
        // 2 -> 02/
        target.value = "0" + key + delimiter;
        event.preventDefault();
      }

      if (value.length === 1 && value[0] !== "0" && key > "2") {
        // 16 -> 12/
        target.value = monthMax + delimiter;
        event.preventDefault();
        return;
      }

      if (value.length === 1 && typeKey !== "specSymbol") {
        // 12 backspace -> 1
        target.value = target.value + key + delimiter;
        event.preventDefault();
      }

      if (value.length === 2 && typeKey !== "specSymbol") {
        // 2 -> 02/
        target.value = target.value + delimiter + key;
        event.preventDefault();
        return;
      }

      if (value === "0" && key === "0") {
        // 00 -> 01
        target.value = monthMin + delimiter;
        event.preventDefault();
        return;
      }

      if (target.value.length + 1 === maxLength) {
        // 12/11 -> 12/16
        const arr = target.value.split(delimiter);

        if (arr[0].length === 2 && parseInt(arr[1] + key) < yearMin) {
          target.value = arr[0] + delimiter + yearMin;
          event.preventDefault();
          return;
        }

        if (arr[0].length === 2 && parseInt(arr[1] + key) > yearMax) {
          // 12/55 -> 12/41
          target.value = arr[0] + delimiter + yearMax;
          event.preventDefault();
          return;
        }
      }
    } else {
      event.preventDefault();
      return;
    }
  };

 

  return (
    <input
      id={id}
      onKeyDown={correctInput}
      onChange={handleInputChange}
      className={className}
      maxLength={maxLength}
      placeholder={placeholder}
      type="text"
      value={value}
    />
  );
};



export default ExpiryInput;