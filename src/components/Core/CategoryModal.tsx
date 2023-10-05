import React, { useEffect, useState, useRef, useCallback } from "react";
import cx from "classnames";
import { Icon } from "@iconify/react";
import callAPI from "../../api/callApi";
import { Link, useNavigate } from "react-router-dom";
import useAuthToken from "../../hooks/useAuthToken";

interface CategoryModalProps {
  show: boolean;
  onClose?: () => void;
}

interface Category {
  id: number;
  category: string;
  created_at: string;
  updated_at: string;
}

const CategoryModal: React.FC<CategoryModalProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [subCategories, setSubCategories] = useState<string[]>([]);
  const modalRef = useRef<HTMLDivElement>(null);
  const username = localStorage.getItem("name");
  const navigate = useNavigate();
  const [, deleteAuthToken] = useAuthToken();
  const handleLogout = () => {
    navigate("/auth");
    localStorage.removeItem("name");
    console.log("logged out");
    deleteAuthToken("");
  };
  const handleBackClick = () => {
    setSelectedCategory(null);
  };

  const handleCategoryClick = async (category: Category) => {
    try {
      const response = await callAPI(`general/products/fetch_sub_categories/${encodeURIComponent(category.category)}`, "GET", null);
      const subCategoriesData = response.data?.values;
      if (Array.isArray(subCategoriesData)) {
        const subCategoriesStrings = subCategoriesData.map((subCategory: any) => subCategory.name);
        setSubCategories(subCategoriesStrings);
        setSelectedCategory(category);
      }
      // console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await callAPI(`general/products/fetch_store_categories`, "GET", null);
        setCategories(response.data?.values);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCategories();
  }, []);

  const { onClose } = props;

  const handleClose = useCallback(() => {
    setIsOpen(false);
    onClose && onClose();
  }, [onClose]);

  // useEffect(() => {
  //   const handleOutsideClick = (event: MouseEvent) => {
  //     if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
  //       handleClose();
  //     }
  //   };
  //   document.addEventListener("mousedown", handleOutsideClick);
  //   return () => {
  //     document.removeEventListener("mousedown", handleOutsideClick);
  //   };
  // }, [handleClose]);

  useEffect(() => {
    setIsOpen(props.show);
  }, [props.show]);

  const handleSubCategoryClick = (subCategory: string) => {
    navigate(`/categories/${selectedCategory?.category!}/${subCategory}`);
  };

  return isOpen ? (
    <>
      {/* Modal Background */}
      <div aria-hidden="false" className="fixed top-0 left-0 z-20 w-1/4 xs:w-3/4 h-full overflow-auto  overflow-x-hidden flex bg-white">
        {/* Modal */}
        <div
          ref={modalRef}
          onClick={() => {}}
          className={cx({
            "relative z-50 h-full w-full": true,
            "max-w-lg bg-white shadow": true,
            "animate-slide-in-from-left": isOpen,
          })}
        >
          {/* MODAL HEADER */}
          <div className="flex items-start items-center justify-between py-3 px-6 bg-[#1B7CFC]">
            <Icon icon="gg:profile" width="40" height="40" />
            <h3 className="text-[18px] font-bold ml-[12px] font-medium text-white">Hello {username}</h3>
            <button
              aria-label="Close"
              className="ml-auto inline-flex items-center rounded-lg bg-transparent text-white"
              type="button"
              onClick={handleClose}
            >
              <Icon icon="material-symbols:close" />
            </button>
          </div>
          <div className="bg-[#70ADFF] py-2 px-6">
            <p className="font-medium text-[14px]">
              {selectedCategory ? (
                <button className="text-white underline" onClick={handleBackClick}>
                  Back
                </button>
              ) : (
                "Categories"
              )}
            </p>
          </div>

          {/* MODAL BODY */}
          <div className="px-6 text-black mt-4 mb-4 bg-white font-medium">
            {selectedCategory ? (
              <>
                <h4 className="text-lg font-bold">{selectedCategory.category}</h4>
                <ul>
                  {subCategories.map((subCategory) => (
                    <li
                      key={subCategory}
                      className="mt-4 cursor-pointer flex flex-row justify-between items-center hover:text-[#515151]"
                      onClick={() => handleSubCategoryClick(subCategory)}
                    >
                      {subCategory}
                      <Icon icon="material-symbols:chevron-right-rounded" width="24" height="24" />
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <ul>
                {categories.map((category) => (
                  <li
                    key={category.id}
                    className="mb-4 cursor-pointer flex flex-row justify-between items-center hover:text-[#515151]"
                    onClick={() => handleCategoryClick(category)}
                  >
                    {category.category}
                    <Icon icon="material-symbols:chevron-right-rounded" width="24" height="24" />
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="border-t border-gray-400"></div>
          <div className="px-6 flex font-medium flex-col mb-4 py-4 gap-4 text-black">
            <Link to="/manufacturers-profile/">
              <p className="font-medium hover:text-[#515151]">Account</p>
            </Link>
            <div className="flex flex-row gap-2 font-medium">
              <Icon icon="circle-flags:us" width="24" height="24" /> <p>English</p>
            </div>
            <p>Customer Service</p>
            <p onClick={handleLogout} className="text-red-400 hover:text-red-600 cursor-pointer">
              Sign Out
            </p>
          </div>
        </div>
      </div>
    </>
  ) : null;
};

export { CategoryModal };
