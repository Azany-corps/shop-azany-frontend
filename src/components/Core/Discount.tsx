import React, { useEffect, useState } from "react";
import Switch from "@mui/material/Switch";
import { Icon } from "@iconify/react";

interface DiscountProps {
  label: string;
  onOptionsChange: (options: DiscountOption[]) => void;
  initialOptions?: DiscountOption[];
  isDiscountOpen?: boolean;
}

interface DiscountOption {
  quantity: string;
  percentage: string;
}

const DiscountComponent: React.FC<DiscountProps> = ({ label, onOptionsChange, initialOptions }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<DiscountOption[]>([{ quantity: "", percentage: "" }]);

  useEffect(() => {
    if (initialOptions) {
      setOptions([...initialOptions]);
      setIsOpen(true);
      onOptionsChange([...options]);
    }
  }, [initialOptions]);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setOptions([{ quantity: "", percentage: "" }]);
      onOptionsChange([]);
    }
  };

  const addOption = () => {
    if (options.length < 3) {
      setOptions([...options, { quantity: "", percentage: "" }]);
    }
  };

  const removeOption = (index: number) => {
    if (options.length > 1) {
      const updatedOptions = [...options];
      updatedOptions.splice(index, 1);
      setOptions(updatedOptions);
      onOptionsChange(updatedOptions);
    }
  };

  const handleOptionValueChange = (index: number, key: keyof DiscountOption, value: string) => {
    const updatedOptions = [...options];
    updatedOptions[index] = { ...updatedOptions[index], [key]: value };
    setOptions(updatedOptions);
    onOptionsChange(updatedOptions)
   
  };
  

  return (
    <div className="discount-container">
      <div className="flex justify-between items-center bg-[#F5F5F5] border p-2 rounded-t-md">
        <div className="text-[16px]">{label}</div>
        <div className="discount-switch">
          <Switch checked={isOpen} onClick={toggleOpen} />
        </div>
      </div>
      {isOpen && (
        <div className="border p-2 ">
          {options!?.slice(0, 3).map((option, index) => (
            <div className="flex gap-2 mb-2" key={index}>
              <div className="flex flex-1 gap-4">
                <input
                  type="number"
                  placeholder="Quantity"
                  value={option.quantity}
                  required
                  onChange={(e) =>
                    handleOptionValueChange(index, "quantity", e.target.value)
                  }
                  className="border flex-1 rounded-md w-[100px] p-2"
                  name="quantity"
                />
                <input
                  type="number"
                  placeholder="% Discount"
                  value={option.percentage}
                  required
                  onChange={(e) =>
                    handleOptionValueChange(index, "percentage", e.target.value)
                  }
                  className="border flex-1 rounded-md w-[100px] p-2"
                  name="percentage"
                />
              </div>
              {options.length > 1 && (
                <button
                  className="p-1"
                  onClick={() => removeOption(index)}
                  type="button"
                >
                  <Icon icon="mdi:minus-circle-outline" />
                </button>
              )}
            </div>
          ))}
          {options!?.length < 3 && (
            <div className="flex justify-center p-2">
              <button
                type="button"
                onClick={addOption}
                className="flex flex-row gap-2 items-center"
              >
                <Icon icon="material-symbols:add-circle-outline" /> Add Discount
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DiscountComponent;

