import React, { useState, useEffect } from "react";
import axios from "axios";

interface Category {
  label: string;
  value: string;
}

interface Props {
  placeholder?: string;
  selectedValue?: string | number;
  setSelectedValue?: (value: string) => void;
  onChange?: any;
  styles?: string;
  disabled?: boolean; // Add disabled prop
}

const CategoryDropdown: React.FC<Props> = ({ placeholder, selectedValue, setSelectedValue, onChange, styles, disabled }) => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("https://shopazanyb2b.urbantour.org/api/general/products/fetch_store_categories");
        const categoryList = response.data.data.values.map((category: any) => ({
          label: category.category,
          value: category.category,
        }));
        setCategories(categoryList);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const renderOption = (category: Category, index: number) => (
    <option
      key={index}
      value={category.value}
      style={{
        paddingLeft: "32px",
      }}
    >
      {category.label}
    </option>
  );

  return (
    <select
      value={selectedValue?.toString() || ""}
      onChange={onChange || ((event) => setSelectedValue && setSelectedValue(event.target.value.toString()))}
      className={`block appearance-none w-full bg-white border border-gray-400 h-[48px] hover:border-gray-500 px-4 py-3 pr-8 shadow leading-tight focus:outline-none focus:shadow-outline ${styles}`}
      disabled={disabled} 
    >
      {placeholder && <option value="">{placeholder}</option>}
      {categories.map(renderOption)}
    </select>
  );
};

export default CategoryDropdown;
