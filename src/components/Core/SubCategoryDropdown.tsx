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
  // categoryy?: string;
}

const SubCategoryDropdown: React.FC<Props> = ({ placeholder, selectedValue, setSelectedValue, onChange, styles,  }) => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    // console.log(categoryy)
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`https://test.shopazany.com/api/general/products/fetch_store_categories`);
        console.log(response.data.data.values);
        const subCategoryList = response.data.data.values.map((category: any) => ({
          label: category.category,
          value: category.category,
        }));
        console.log(subCategoryList);
        setCategories(subCategoryList);
      } catch (error) {
        console.error("Error fetching subcategories", error);
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
    >
      {placeholder && <option value="">{placeholder}</option>}
      {categories.map(renderOption)}
    </select>
  );
};

export default SubCategoryDropdown;
