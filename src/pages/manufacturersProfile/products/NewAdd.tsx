import React, { useEffect, useState } from "react";
import ManufacturersProfileLayout from "../../../components/General/manufacturers/profile/LayoutComp";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import callAPI from "../../../api/callApi";
import { useNavigate } from "react-router-dom";
import { FileWithPath } from "react-dropzone";
import useAuthToken from "../../../hooks/useAuthToken";
import { Icon } from "@iconify/react";
import { ModalSelect } from "../../../components/Core/ModalSelect copy";
import AddImageComp from "../../../components/Core/AddImageComp";
import TextColorizer from "./ClickInput";
import { IProduct } from "./nwproduct.type";
import {
  fetchCategories,
  fetchCategory,
} from "../../../Services/category.service";
import { fetchBrands } from "../../../Services/brand.service";
import {
  ProductInput,
  ProductInputSelectForm,
  ProductSelect,
  ProductTextArea,
} from "../../../components/Inputs/ProductInput";
import ImageUpload from "../../../components/Core/ImgUploader";
import { nigeriaStates } from "./States";

interface DiscountOption {
  quantity: string;
  percentage: string;
}
interface ColorizedText {
  id: string;
  text: string[];
}

interface Attribute {
  id: number;
  name: string;
  items: string[];
}

interface Category {
  id: number;
  title: string;
  business_type: string;
  parent_category_id?: string | null;
  subcategories: Category[];
}

interface Brand {
  id: number;
  name: string;
}

interface Form {
  id: number;
  values: {
    discount_quantity_fixed: number;
    price_per_unit: number;
  };
}

interface DiscountPercentageForm {
  id: number;
  values: {
    discount_quantity: number;
    discount_percentage: number;
  };
}

interface ShippingForm {
  id: number;
  values: {
    delivery_state: string;
    delivery_price: number;
  };
}
interface ProductVariation {
  id: number;
  values: {
    size: number;
    color: string;
    variation_price: number;
    variation_sales_price: number;
    variation_quantity: number;
    variation_sku: string;
    variation_image: string;
  };
}

const AddProduct = () => {
  const navigate = useNavigate();

  const [quantityDiscountForms, setQuantityDiscountForms] = useState<Form[]>([
    {
      id: new Date().getTime(),
      values: {
        discount_quantity_fixed: 0,
        price_per_unit: 0,
      },
    },
  ]);

  const [percentageDiscountForms, setPercentageDiscountForms] = useState<
    DiscountPercentageForm[]
  >([
    {
      id: new Date().getTime(),
      values: {
        discount_percentage: 0,
        discount_quantity: 0,
      },
    },
  ]);

  const [shippingForm, setShippingForm] = useState<ShippingForm[]>([
    {
      id: new Date().getTime(),
      values: {
        delivery_state: "",
        delivery_price: 0,
      },
    },
  ]);

  const [productVariations, setProductVariations] = useState<
    ProductVariation[]
  >([
    {
      id: new Date().getTime(),
      values: {
        size: 0,
        color: "",
        variation_price: 0,
        variation_sales_price: 0,
        variation_quantity: 0,
        variation_sku: "",
        variation_image: "",
      },
    },
  ]);

  const [discountIsChecked, setDiscountIsChecked] = useState<boolean>(false);

  const [id, setId] = useState<number>(0);
  const [discountType, setDiscountType] = useState<string>("");
  const [uploadedImages, setUploadedImages] = useState<any[]>([]);

  const [selectedImages, setSelectedImages] = useState<FileWithPath[]>([]);
  const [attributes, setAttributes] = useState<Attribute[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [authToken] = useAuthToken();
  const [parentColorizedTexts, setParentColorizedTexts] = useState<
    ColorizedText[]
  >([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [brands, setBrands] = useState<Brand[]>([]);

  const [isCategoryModal, setIsCategoryModal] = useState<boolean>(false);

  const initialFormData: IProduct = {
    product_name: "",
    product_category: "",
    stock: "",
    currency: "",
    price: "",
    brand: "",
    weight: "",
    short_description: "",
    product_description: "",
    certification: "",
    main_material: "",
    material_family: "",
    model: "",
    production_country: "",
    production_line: "",
    size: "",
    warranty_duration: "",
    warranty_type: "",
    note: "",
    color: "",
    ram_size: "",
    cpu_core: "",
    operating_system: "",
    screen_size: "",
    display_features: "",
    battery_size: "",
    product_attributes: [],
    sale_price: "",
    sale_start_date: "",
    sale_end_date: "",
    stock_quantity: "",
    sku: "",
    quantity: "",
    manufacturer: "",
    length: "",
    length_unit: "",
    width: "",
    width_unit: "",
    height: "",
    height_unit: "",
    product_weight: "",
    weight_unit: "",
    package_weight: "",
    package_weight_unit: "",
    external_product_id: "",
    product_discount: [],
    manage_stock_quantity: "",
    product_local_delivery: [],
    no_product_id: 0,
  };
  const [formData, setFormData] = useState<IProduct>(initialFormData);

  formData.product_discount = quantityDiscountForms.map((quantity) => {
    return quantity.values;
  });

  const handleColorizedTextsChange = (colorizedTexts: ColorizedText) => {
    // Access the colorizedTexts value in the parent component

    // Create a new array with updated colorizedTexts
    const newColorizedTexts: ColorizedText[] = parentColorizedTexts?.map(
      (parentT: ColorizedText) => {
        if (parentT.id === colorizedTexts.id) {
          // If IDs match, update the text property
          return {
            id: colorizedTexts.id,
            text: [...colorizedTexts.text],
          };
        } else {
          // Otherwise, keep the existing colorizedText
          return { ...parentT };
        }
      }
    );

    // Update the state with the new array
    setParentColorizedTexts(newColorizedTexts || []);
  };

  const handleStockStatusChange = (status: string) => {
    setFormData({ ...formData, stock: status });
  };

  const handleImageSelect = (images: FileWithPath[]) => {
    setSelectedImages(images);
  };

  const imageClick = (clicked: any) => {
    clicked();
  };
  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = event?.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("formd: ", formData);

    setLoading(true);
    console.log("parent: ", parentColorizedTexts);

    try {
      let data = new FormData();
      data.append("no_product_id", formData.no_product_id.toString());
      data.append("manage_stock_quantity", formData.manage_stock_quantity);
      data.append("sku", formData.sku);
      data.append("external_product_id", formData.external_product_id);
      data.append("width", formData.width);
      data.append("width_unit", formData.width_unit);
      data.append("manufacturer", formData.manufacturer);
      data.append("length", formData.width);
      data.append("length_unit", formData.width_unit);
      data.append("weight", formData.width);
      data.append("weight_unit", formData.width_unit);
      data.append("category", formData.product_category);
      data.append("product_name", formData.product_name);
      data.append("stock", formData.stock);
      data.append("quantity", formData.quantity);
      data.append("currency", formData.currency);
      data.append("price", formData.price);
      data.append("brand_id", formData.brand);
      data.append("description", formData.product_description);
      data.append("short_description", formData.short_description);
      data.append("weight", formData.weight);
      data.append("sales_price", formData.sale_price);
      data.append("start_date", formData.sale_start_date);
      data.append("end_date", formData.sale_end_date);

      if (hasVartion) data.append("has_variation", "1");
      else {
        data.append("has_variation", "0");
      }

      const productLocalDeliveryValues = shippingForm.map(
        (shipping) => shipping.values
      );

      productLocalDeliveryValues.forEach((product, index) => {
        Object.entries(product).forEach(([key, value]) => {
          data.append(`${key}[${index}]`, value.toString());
        });
      });

      const productDiscountValues = quantityDiscountForms.map(
        (discount) => discount.values
      );

      productDiscountValues.forEach((discount, index) => {
        Object.entries(discount).forEach(([key, value]) => {
          data.append(`${key}[${index}]`, value.toString());
        });
      });

      const percentageDiscount = percentageDiscountForms.map(
        (percentage) => percentage.values
      );

      percentageDiscount.forEach((percentage, index) => {
        Object.entries(percentage).forEach(([key, value]) => {
          data.append(`${key}[${index}]`, value.toString());
        });
      });

      const variations = productVariations.map((variation) => variation.values);

      variations.forEach((variation, index) => {
        Object.entries(variation).forEach(([key, value]) => {
          data.append(`${key}[${index}]`, value.toString());
        });
      });

      parentColorizedTexts.forEach(
        (attribute: ColorizedText, index: number) => {
          data.append(`attribute_id[${index}]`, attribute.id);

          const texts = parentColorizedTexts[index].text.join(",");
          data.append(`attribute_value[${index}]`, texts);
        }
      );

      attributes.forEach((attribute: Attribute, index: number) => {
        data.append(`attribute_key[${index}]`, attribute.name);
      });

      selectedImages?.forEach((image, index) => {
        data.append(`image_1[${index}]`, image);
      });

      console.log(data);

      const response = await callAPI(
        "auth/store/create_store_product",
        "POST",
        data,
        {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${authToken}`,
        }
      );
      console.log(data);

      console.log(response);

      if (response.status && response.status_code === 200) {
        setLoading(false);
        setAttributes([]);
        setParentColorizedTexts([]);
        setFormData(initialFormData);

        toast.success("Product added successfully", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        navigate("/manufacturers-profile/product");
      } else {
        setLoading(false);
        const errorMessage = response.data.data.errors[0];
        toast.error(errorMessage, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      navigate("/manufacturers-profile/product");
    } catch (err: any) {
      console.log(err);
      setLoading(false);
      toast.error(err?.response?.data?.data?.errors?.[0], {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleCategorySelect = async (category: string, id: number) => {
    setFormData({ ...formData, product_category: category });
    fetchCategory(id)
      .then((res: any) => {
        const attributes: Attribute[] = res.category_attributes?.map(
          (attribute: any, index: number) => {
            console.log(attribute);
            return {
              id: attribute.attribute.id,
              name: attribute.attribute.attribute_name,
              items: [...attribute.attribute.items],
            };
          }
        );

        const attributeText: ColorizedText[] = res.category_attributes?.map(
          (attribute: any, index: number) => {
            return {
              id: attribute.attribute.id.toString(),
              text: [],
            };
          }
        );

        setParentColorizedTexts(attributeText);

        console.log("attr: ", attributes);

        setAttributes(attributes);
      })
      .catch((error) => {
        console.log(error);
      });
    closeCategoryModal();
  };

  const closeCategoryModal = () => {
    setIsCategoryModal(false);
  };

  const openCategoryModal = () => {
    setIsCategoryModal(true);
  };

  useEffect(() => {
    fetchCategories()
      .then((res) => {
        // console.log(res);
        setCategories(res);
      })
      .catch((error) => {
        console.log(error);
      });

    fetchBrands()
      .then((res) => {
        console.log(res);
        setBrands(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(brands);

  const [selectedProductId, setSelectedProductId] = useState("");
  const [sizes2Checked, setSizes2Checked] = useState(false);
  const [color2Checked, setColor2Checked] = useState(false);
  const [material2Checked, setMaterial2Checked] = useState(false);

  const handleSizes2Checked = () => {
    setSizes2Checked((prev) => !prev);
  };

  const handleColor2Checked = () => {
    setColor2Checked((prev) => !prev);
  };

  const handleMaterial2Checked = () => {
    setMaterial2Checked((prev) => !prev);
  };

  const handleSelectedVariation = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedProductId(event.target.value);
  };

  const handleAddForm = () => {
    setQuantityDiscountForms((prevForms) => [
      ...prevForms,
      {
        id: new Date().getTime(),
        values: {
          discount_quantity_fixed: 0,
          price_per_unit: 0,
        },
      },
    ]);
  };

  const handleAddPercentageForm = () => {
    setPercentageDiscountForms((prevForms) => [
      ...prevForms,
      {
        id: new Date().getTime(),
        values: {
          discount_quantity: 0,
          discount_percentage: 0,
        },
      },
    ]);
  };

  const handleAddShippingForm = () => {
    setShippingForm((prevForms) => [
      ...prevForms,
      {
        id: new Date().getTime(),
        values: {
          delivery_state: "",
          delivery_price: 0,
        },
      },
    ]);
  };

  const handleAddProductVariations = () => {
    setProductVariations((prevForms) => [
      ...prevForms,
      {
        id: new Date().getTime(),
        values: {
          size: 0,
          color: "",
          variation_price: 0,
          variation_sales_price: 0,
          variation_quantity: 0,
          variation_sku: "",
          variation_image: "",
        },
      },
    ]);
  };
  const handleRemoveForm = (formId: number) => {
    setQuantityDiscountForms((prevForms) =>
      prevForms.filter((form) => form.id !== formId)
    );
  };

  const handleRemovePercentageForm = (formId: number) => {
    setPercentageDiscountForms((prevForms) =>
      prevForms.filter((form) => form.id !== formId)
    );
  };

  const handleRemoveShippingForm = (formId: number) => {
    setShippingForm((prevForms) =>
      prevForms.filter((form) => form.id !== formId)
    );
  };

  const handleRemoveProductVariations = (formId: number) => {
    setProductVariations((prevForms) =>
      prevForms.filter((form) => form.id !== formId)
    );
  };

  const handleInputChange = (
    formId: number,
    fieldName: string,
    value: string
  ) => {
    setQuantityDiscountForms((prevForms) =>
      prevForms.map((form) => {
        if (form.id === formId) {
          return {
            ...form,
            values: {
              ...form.values,
              [fieldName]: value,
            },
          };
        }
        return form;
      })
    );
  };

  const handlePercentageInputChange = (
    formId: number,
    fieldName: string,
    value: string
  ) => {
    setPercentageDiscountForms((prevForms) =>
      prevForms.map((form) => {
        if (form.id === formId) {
          return {
            ...form,
            values: {
              ...form.values,
              [fieldName]: value,
            },
          };
        }
        return form;
      })
    );
  };

  const handleShippingInputChange = (
    formId: number,
    fieldName: string,
    value: string
  ) => {
    setShippingForm((prevForms) =>
      prevForms.map((form) => {
        if (form.id === formId) {
          return {
            ...form,
            values: {
              ...form.values,
              [fieldName]: value,
            },
          };
        }
        return form;
      })
    );
  };

  const handleVariationChange = (
    formId: number,
    fieldName: string,
    value: string
  ) => {
    setProductVariations((prevForms) =>
      prevForms.map((form) => {
        if (form.id === formId) {
          return {
            ...form,
            values: {
              ...form.values,
              [fieldName]: value,
            },
          };
        }
        return form;
      })
    );
  };

  const handleSubmitDiscountForms = () => {
    // console.log(quantityDiscountForms);
  };

  const handleSubmitShippingForms = () => {
    // console.log(shippingForm);
  };

  const handleSubmitPercentageForms = () => {
    // console.log(percentageDiscountForms);
  };

  const handleSubmitProductVariationForms = () => {
    console.log(productVariations);
  };

  const [checkboxStates, setCheckboxStates] = useState<{
    [key: string]: boolean;
  }>({});

  const [variationCheckboxStates, setVariationsCheckboxStates] = useState<{
    [key: string]: boolean;
  }>({});

  const handleCheckboxChange = (attributeName: string) => {
    setCheckboxStates((prevStates) => ({
      ...prevStates,
      [attributeName]: !prevStates[attributeName],
    }));
  };

  const handleVariationCheckboxChange = (attributeName: string) => {
    setVariationsCheckboxStates((prevStates) => ({
      ...prevStates,
      [attributeName]: !prevStates[attributeName],
    }));
  };

  const handleInputChangeUnit = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { id, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [id]: value }));
  };

  const handleUnitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { id, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const [isLocalChecked, setIsLocalChecked] = useState(false);
  const [isIntChecked, setIsIntChecked] = useState(false);

  const handleLocalCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsLocalChecked(event.target.checked);
  };
  const handleIntCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsIntChecked(event.target.checked);
  };

  const [variationImage, setVariationImage] = useState<string>("");

  const handleVariationImageUploader = (imageDataUrl: string) =>
    setVariationImage(imageDataUrl);

  const handleVariationImageUpload = (imageDataUrl: string) => {
    console.log("Image uploaded:", imageDataUrl);
  };

  const handleIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newId = Number(event.target.value);
    setId(isNaN(newId) ? 0 : newId);
    setFormData({ ...formData, no_product_id: id });
  };

  const handleDiscountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDiscountType(event.target.value);
  };

  const [hasVartion, setHasVariation] = useState<boolean>(false);
  const handleHasVariation = () => {
    setHasVariation(!hasVartion);
  };

  const handleDiscountChecked = () => {
    setDiscountIsChecked(!discountIsChecked);
  };

  console.log(selectedImages);

  return (
    <ManufacturersProfileLayout>
      <div className="px-[30px] font-DM-sans">
        <div className="mb-[30px] flex justify-between">
          <div>
            <p className="font-medium text-sm text-[#29020280]">Add products</p>
            <p className="text-[34px] text-[#290202] font-bold">Products</p>
          </div>
          <div className="bg-white py-[10px] px-[11px] flex items-center rounded-[30px]">
            <button
              className="px-[14px] py-[9px] bg-[#01B574] rounded-[20px] mr-[30px]"
              onClick={handleSubmit}
            >
              <p className="text-white font-DM-sans font-medium text-sm flex items-center">
                Add Products
              </p>
            </button>
            <button className="px-[14px] py-[9px] bg-[#F6F6F6] rounded-[20px] border border-[#00000019] mr-2.5">
              <p className="text-[#29020266] font-DM-sans font-medium text-sm flex items-center">
                Save to Draft
              </p>
            </button>
            <button className="px-[14px] py-[9px] bg-[#F6F6F6] rounded-[20px] border border-[#00000019]">
              <p className="text-[#29020266] font-DM-sans font-medium text-sm flex items-center">
                Discard
              </p>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-[30px]">
          <div className="col-span-1 flex flex-col ">
            <div className="bg-white w-full rounded-[20px] mb-10 py-[19px] px-[31px]">
              <p className="text-[#4F4141] font-DM-sans font-bold text-2xl mb-[27px]">
                Product Image
              </p>
              <div className="w-full">
                <AddImageComp onImageSelect={handleImageSelect} />
              </div>
            </div>
            <div className="bg-white w-full rounded-[20px] py-[19px] px-[31px]">
              <p className="text-[#4F4141] font-DM-sans font-bold text-2xl mb-[27px]">
                Shipping & Delivery
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <ProductInputSelectForm
                  type="text"
                  name="Items Weight"
                  id="weight"
                  onChange={handleInputChangeUnit}
                  onSelectChange={handleUnitChange}
                  value={formData.weight}
                  selectValue={formData.weight_unit}
                  placeholder="18.00"
                  optionsLabel="kg"
                  options={[
                    { value: "kg", label: "kg" },
                    { value: "m", label: "m" },
                    { value: "g", label: "g" },
                  ]}
                  selectId="weight_unit"
                />

                <ProductInputSelectForm
                  type="text"
                  name="Items Length"
                  id="length"
                  onChange={handleInputChangeUnit}
                  onSelectChange={handleUnitChange}
                  value={formData.length}
                  selectValue={formData.length_unit}
                  placeholder="18.00"
                  optionsLabel="kg"
                  options={[
                    { value: "kg", label: "kg" },
                    { value: "m", label: "m" },
                    { value: "g", label: "g" },
                  ]}
                  selectId="length_unit"
                />

                <ProductInputSelectForm
                  type="text"
                  name="Items Width"
                  id="width"
                  onChange={handleInputChangeUnit}
                  onSelectChange={handleUnitChange}
                  value={formData.width}
                  selectValue={formData.width_unit}
                  placeholder="18.00"
                  optionsLabel="kg"
                  options={[
                    { value: "kg", label: "kg" },
                    { value: "m", label: "m" },
                    { value: "g", label: "g" },
                  ]}
                  selectId="width_unit"
                />

                <ProductInputSelectForm
                  type="text"
                  name="Items Height"
                  id="height"
                  onChange={handleInputChangeUnit}
                  onSelectChange={handleUnitChange}
                  value={formData.height}
                  selectValue={formData.height_unit}
                  placeholder="18.00"
                  optionsLabel="kg"
                  options={[
                    { value: "kg", label: "kg" },
                    { value: "m", label: "m" },
                    { value: "g", label: "g" },
                  ]}
                  selectId="height_unit"
                />
              </div>
              <div className="grid mb-[123px]">
                <ProductInputSelectForm
                  type="text"
                  name="Package Weight"
                  id="package_weight"
                  onChange={handleInputChangeUnit}
                  onSelectChange={handleUnitChange}
                  value={formData.package_weight}
                  selectValue={formData.package_weight_unit}
                  placeholder="245.82"
                  optionsLabel="kg"
                  options={[
                    { value: "kg", label: "kg" },
                    { value: "m", label: "m" },
                    { value: "g", label: "g" },
                  ]}
                  selectId="package_weight_unit"
                />
              </div>
              <p className="text-[#4F4141] font-DM-sans font-medium text-xl mb-[27px]">
                Select Delivery Coverages
              </p>
              <div className="mb-[14px]">
                <div className="flex items-center">
                  <input
                    id="link-checkbox"
                    type="checkbox"
                    checked={isLocalChecked}
                    onChange={handleLocalCheckboxChange}
                    className="w-4 h-4 text-[#FF1818] bg-gray-100 border-gray-300 rounded focus:ring-0"
                  />
                  <label
                    htmlFor="link-checkbox"
                    className="ms-2 text-base font-bold text-[#4F4141] font-DM-sans"
                  >
                    Local Delivery (Fulfilled by Sellers)
                  </label>
                </div>
                {isLocalChecked && (
                  <p className="text-sm font-normal font-DM-sans text-[#4F4141]">
                    <span className="font-medium">For Local Delivery,</span>
                    Fulfilment will be handle by seller but will monitored in
                    each order stage by Azany
                  </p>
                )}
              </div>
              <div>
                <div className="flex items-center">
                  <input
                    id="link-checkbox"
                    type="checkbox"
                    checked={isIntChecked}
                    onChange={handleIntCheckboxChange}
                    className="w-4 h-4 text-[#FF1818] bg-gray-100 border-gray-300 rounded focus:ring-0"
                  />
                  <label
                    htmlFor="link-checkbox"
                    className="ms-2 text-base font-bold text-[#4F4141] font-DM-sans"
                  >
                    International Delivery (Fulfilled by Azany)
                  </label>
                </div>
                {isIntChecked && (
                  <p className="text-sm font-normal font-DM-sans text-[#4F4141]">
                    <span className="font-medium">
                      For international shipping,
                    </span>{" "}
                    Azany will be handling fulfillment
                  </p>
                )}
              </div>
              {isLocalChecked && (
                <div
                  className="col-span-2 w-full bg-white rounded-[20px] relative px-[21px] py-[21px] mb-[46px] mt-[32px]"
                  style={{
                    boxShadow: "0px 15px 40px 0px rgba(112, 144, 176, 0.12)",
                  }}
                >
                  <p
                    className="text-[#01B574] text-sm font-medium flex items-center absolute right-0 top-0"
                    onClick={handleAddShippingForm}
                  >
                    <span>
                      <img src="/images/circle-plus.svg" alt="icon" />
                    </span>
                    <span>Add..</span>
                  </p>
                  <p className="text-[18px] font-bold font-DM-sans text-app-gray-300 mt-4 mb-[5px]">
                    Shipping Fee
                  </p>
                  <div className="grid grid-cols-3 gap-4 text-[#A3AED0] font-medium text-sm border-b border-[#E9EDF7] font-DM-sans pb-[6px] mb-[13px] ">
                    <p>State</p>
                    <p>Shipping cost</p>
                  </div>

                  {shippingForm.map((form) => (
                    <div
                      className="grid grid-cols-3 gap-x-4 pb-[13px] items-center"
                      key={form.id}
                    >
                      <ProductSelect
                        // name="Brand Name"
                        id="delivery_state"
                        onChange={(e) =>
                          handleShippingInputChange(
                            form.id,
                            "delivery_state",
                            e.target.value
                          )
                        }
                        value={form.values.delivery_state}
                        optionsLabel="Select"
                        options={nigeriaStates?.map((state) => ({
                          value: state.value,
                          label: state.label,
                        }))}
                      />
                      {/* <input
                      type="text"
                      id="delivery_state"
                      // aria-describedby="helper-text-explanation"
                      value={form.values.delivery_state}
                      onChange={(e) =>
                        handleShippingInputChange(
                          form.id,
                          "delivery_state",
                          e.target.value
                        )
                      }
                      className="bg-transparent border border-[#DCDCE4] rounded-[10px] text-gray-900 text-sm block w-full p-2.5"
                      placeholder="0"
                    /> */}

                      <div className="relative w-full">
                        <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none"></div>
                        <input
                          type="number"
                          id="delivery_price"
                          value={form.values.delivery_price}
                          onChange={(e) =>
                            handleShippingInputChange(
                              form.id,
                              "delivery_price",
                              e.target.value
                            )
                          }
                          className="bg-transparent border border-[#DCDCE4] rounded-[10px] text-gray-900 text-sm block w-full p-2.5"
                          placeholder="0"
                        />
                      </div>
                      <img
                        src="/images/close-icon.svg"
                        alt="icon"
                        className="cursor-pointer"
                        onClick={() => handleRemoveShippingForm(form.id)}
                      />

                      <input />
                    </div>
                  ))}
                  <button
                    className="px-[14px] py-[9px] bg-[#01B574] rounded-[10px]"
                    onClick={handleSubmitShippingForms}
                    type="button"
                  >
                    <p className="text-white font-DM-sans font-medium text-sm flex items-center">
                      Add Fee
                    </p>
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="col-span-2 flex flex-col">
            <div className="bg-white w-full rounded-[20px] mb-10 py-[19px] px-[31px]">
              <p className="text-[#4F4141] font-DM-sans font-bold text-2xl mb-[27px]">
                Product Details
              </p>
              <form
                className="font-DM-sans text-sm font-normal"
                // onSubmit={}
              >
                <div className="mb-6">
                  <ProductInput
                    name="Product Name"
                    id="product_name"
                    value={formData?.product_name}
                    onChange={handleChange}
                    type="text"
                    placeholder="Advanced Snail 92, All in One Cream"
                  />
                </div>
                <div className="mb-6 grid grid-cols-2 gap-4">
                  <div onClick={openCategoryModal}>
                    <ProductInput
                      name="Product Categoory"
                      id="name"
                      value={
                        formData.product_category
                          ? formData.product_category
                          : "Select"
                      }
                      type="text"
                      placeholder="Select"
                    />
                  </div>
                  <div>
                    <ProductSelect
                      name="Brand Name"
                      id="brand"
                      onChange={handleChange}
                      value={formData?.brand}
                      optionsLabel="Reckitt Benckiser"
                      options={brands?.map((brand, index) => ({
                        value: brand.id,
                        label: brand.name,
                      }))}
                    />
                  </div>
                </div>
                <div className="mb-6 grid grid-cols-2 gap-4 ">
                  <div>
                    <ProductInput
                      name="Manufacturer"
                      id="manufacturer"
                      value={formData?.manufacturer}
                      onChange={handleChange}
                      type="text"
                      placeholder="Reckitt Benckiser"
                    />
                  </div>
                  <div>
                    <p className="block mb-2 text-app-gray-300">
                      Don’t have a product ID?
                    </p>
                    <div className="flex mt-4">
                      <div className="flex items-center mr-4 ">
                        <input
                          type="radio"
                          value="1"
                          checked={id === 1}
                          onChange={handleIdChange}
                          className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 outline-none focus:ring-0"
                        />
                        <label
                          htmlFor="default-radio-1"
                          className="ms-2 text-sm font-medium text-gray-900"
                        >
                          Yes
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          value="0"
                          checked={id === 0}
                          onChange={handleIdChange}
                          className="w-4 h-4 text-[#FF1818] focus:ring-0 focus:ring-none bg-gray-100 border-gray-300"
                        />
                        <label
                          htmlFor="default-radio-2"
                          className="ms-2 text-sm font-medium text-[#FF1818"
                        >
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-6 grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="countries"
                      className="block mb-2 text-app-gray-300"
                    >
                      Ext. Product ID type
                    </label>
                    <select
                      id="countries"
                      className="bg-transparent border border-app-gray-100 text-app-gray-300 text-sm rounded-[10px] focus:ring-0 focus:ring-none focus:border-gray-900 block w-full p-2.5"
                    >
                      <option selected>Select</option>
                      <option value="EAN">EAN</option>
                      <option value="UPC">UPC</option>
                      <option value="ISBN">ISBN</option>
                      <option value="GTIN">GTIN</option>
                    </select>
                  </div>
                  <div>
                    <ProductInput
                      name="External Product ID"
                      id="external_product_id"
                      value={formData?.external_product_id}
                      onChange={handleChange}
                      type="text"
                      placeholder="EAN/UPC/ISBN/GTINr"
                    />
                  </div>
                </div>

                <div className="flex items-center mb-[37px]">
                  <input
                    type="checkbox"
                    checked={hasVartion}
                    onChange={handleHasVariation}
                    className="w-4 h-4 text-[#FF1818] bg-gray-100 border-gray-300 rounded focus:ring-0"
                  />
                  <label
                    htmlFor="link-checkbox"
                    className="ms-2 text-base font-bold text-[#4F4141] font-DM-sans"
                  >
                    Create Variation & prices
                  </label>
                </div>
                <div className="mb-6">
                  {attributes.length >= 1 && (
                    <p className="block mb-2 text-app-gray-300">Attributes</p>
                  )}
                  <div className="flex items-center">
                    {attributes.map((attribute) => (
                      <div className="flex items-center mr-[30px]">
                        <input
                          id="size"
                          type="checkbox"
                          onChange={() => {
                            handleCheckboxChange(attribute.name);
                          }}
                          checked={checkboxStates[attribute.name] || false}
                          className="w-4 h-4 text-[#FF1818] bg-gray-100 border-gray-300 rounded focus:ring-0"
                        />
                        <label
                          htmlFor="link-checkbox"
                          className="ms-2 text-base font-bold text-[#4F4141] font-DM-sans"
                        >
                          {attribute.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mb-6 grid grid-cols-2 gap-4">
                  {attributes.length !== 0 ? (
                    attributes?.map((attribute: Attribute, index: number) => {
                      // console.log(attribute);
                      if (checkboxStates[attribute.name])
                        return (
                          <TextColorizer
                            key={index}
                            id={attribute.id.toString()}
                            attributeText={attribute.items}
                            name={attribute.name}
                            onColorizedTextsChange={handleColorizedTextsChange}
                          />
                        );
                    })
                  ) : (
                    <p className="text-app-gray-300 text-sm">
                      {/* Select Category */}
                    </p>
                  )}
                </div>
                <div className="mb-6">
                  <ProductTextArea
                    name="Short Description"
                    id="short_description"
                    onChange={handleChange}
                    value={formData.short_description}
                    placeholder="Write down the Short Description"
                    wordsLimit="0 / 500"
                  />
                </div>
                <div className="mb-6">
                  <ProductTextArea
                    name="Full Description"
                    id="product_description"
                    onChange={handleChange}
                    value={formData.product_description}
                    placeholder="Write down the Full Description"
                    wordsLimit="0 / 500"
                  />
                </div>
              </form>
            </div>
            <div className="bg-white w-full rounded-[20px] py-[19px] px-[31px]">
              <p className="text-[#4F4141] font-DM-sans font-bold text-2xl mb-[27px]">
                Stocks & Pricing
              </p>
              <form className="font-DM-sans text-sm font-normal">
                <div className="mb-6 grid grid-cols-3 gap-4">
                  <div>
                    <ProductSelect
                      name="Currency"
                      id="currency"
                      onChange={handleChange}
                      value={formData?.currency}
                      optionsLabel="US$"
                      options={[
                        { value: "USD", label: "US$" },
                        { value: "NGN", label: "NGN₦" },
                      ]}
                    />
                  </div>

                  <div>
                    <ProductInput
                      name="Regular Price"
                      id="price"
                      value={formData?.price}
                      onChange={handleChange}
                      type="text"
                      placeholder="Enter Price"
                    />
                  </div>
                  <div>
                    <ProductInput
                      name="Sales Price"
                      id="sale_price"
                      value={formData?.sale_price}
                      onChange={handleChange}
                      type="text"
                      placeholder="Enter Price"
                    />
                  </div>
                  <div>
                    <ProductInput
                      name="Store Keeping Unit (SKU)"
                      id="sku"
                      value={formData.sku}
                      onChange={handleChange}
                      type="text"
                      placeholder="#### - #### - ####"
                    />
                  </div>
                </div>
                <div className="mb-6 grid grid-cols-3 gap-4">
                  <div>
                    <ProductInput
                      name="Sales Duration (START)"
                      id="sale_start_date"
                      value={formData?.sale_start_date}
                      onChange={handleChange}
                      type="date"
                      placeholder="select"
                    />
                  </div>
                  <div>
                    <ProductInput
                      name="Sales Duration (END)"
                      id="sale_end_date"
                      value={formData?.sale_end_date}
                      onChange={handleChange}
                      type="date"
                      placeholder="select"
                    />
                  </div>
                  <div>
                    <ProductInput
                      name="Quantity"
                      id="quantity"
                      value={formData?.quantity}
                      onChange={handleChange}
                      type="number"
                      placeholder="Enter quantity in stock"
                    />
                  </div>
                </div>
                <div className="mb-6 grid grid-cols-3 gap-4">
                  <div>
                    <ProductInput
                      name="Minimum Stock"
                      id="manage_stock_quantity"
                      value={formData.manage_stock_quantity}
                      onChange={handleChange}
                      type="number"
                      placeholder="Set a low stock alert"
                    />
                  </div>
                </div>
                <div className="flex items-center mb-[30px]">
                  <input
                    type="checkbox"
                    checked={discountIsChecked}
                    onChange={handleDiscountChecked}
                    className="w-4 h-4 text-[#FF1818] bg-gray-100 border-gray-300 rounded focus:ring-0"
                  />
                  <label
                    htmlFor="link-checkbox"
                    className="ms-2 text-base font-bold text-[#4F4141] font-DM-sans"
                  >
                    Enable Quantity discount pricing?
                  </label>
                </div>

                {discountIsChecked && (
                  <>
                    {" "}
                    <div className="mb-6 grid  gap-4">
                      <div>
                        {/* <p className="block mb-2 text-app-gray-300">
                      Don’t have a product ID?
                    </p> */}
                        <div className="flex">
                          <div className="flex items-center mr-4 ">
                            <input
                              type="radio"
                              value="fixed"
                              checked={discountType === "fixed"}
                              onChange={handleDiscountChange}
                              className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 outline-none focus:ring-0"
                            />
                            <label
                              htmlFor="default-radio-1"
                              className="ms-2 text-sm font-medium text-gray-900"
                            >
                              Fixed Prices
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="radio"
                              value="percentage"
                              checked={discountType === "percentage"}
                              onChange={handleDiscountChange}
                              className="w-4 h-4 text-[#FF1818] focus:ring-0 focus:ring-none bg-gray-100 border-gray-300"
                            />
                            <label
                              htmlFor="default-radio-2"
                              className="ms-2 text-sm font-medium text-[#FF1818"
                            >
                              Percent off
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    {discountType === "fixed" && (
                      <div className="grid grid-cols-3">
                        <div
                          className="col-span-2 w-full bg-white rounded-[20px] relative px-[21px] py-[21px] mb-[46px]"
                          style={{
                            boxShadow:
                              "0px 15px 40px 0px rgba(112, 144, 176, 0.12)",
                          }}
                        >
                          <p
                            className="text-[#01B574] text-sm font-medium flex items-center absolute right-0 top-0"
                            onClick={handleAddForm}
                          >
                            <span>
                              <img src="/images/circle-plus.svg" alt="icon" />
                            </span>
                            <span>Add..</span>
                          </p>
                          <p className="text-[18px] font-bold font-DM-sans text-app-gray-300 mt-4 mb-[5px]">
                            Quantity discounts
                          </p>
                          <div className="grid grid-cols-3 gap-4 text-[#A3AED0] font-medium text-sm border-b border-[#E9EDF7] font-DM-sans pb-[6px] mb-[13px] ">
                            <p>Minimum Quantity</p>
                            <p>Price/Unit</p>
                          </div>

                          {quantityDiscountForms.map((form) => (
                            <div
                              className="grid grid-cols-3 gap-x-4 pb-[13px] items-center"
                              key={form.id}
                            >
                              <input
                                type="number"
                                id="number-input"
                                aria-describedby="helper-text-explanation"
                                value={form.values.discount_quantity_fixed}
                                onChange={(e) =>
                                  handleInputChange(
                                    form.id,
                                    "discount_quantity_fixed",
                                    e.target.value
                                  )
                                }
                                className="bg-transparent border border-[#DCDCE4] rounded-[10px] text-gray-900 text-sm block w-full p-2.5"
                                placeholder="0"
                              />

                              <div className="relative w-full">
                                <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none"></div>
                                <input
                                  type="number"
                                  id="currency-input"
                                  value={form.values.price_per_unit}
                                  onChange={(e) =>
                                    handleInputChange(
                                      form.id,
                                      "price_per_unit",
                                      e.target.value
                                    )
                                  }
                                  className="bg-transparent border border-[#DCDCE4] rounded-[10px] text-gray-900 text-sm block w-full p-2.5"
                                  placeholder="0"
                                />
                              </div>
                              <img
                                src="/images/close-icon.svg"
                                alt="icon"
                                className="cursor-pointer"
                                onClick={() => handleRemoveForm(form.id)}
                              />

                              <input />
                            </div>
                          ))}
                          <button
                            className="px-[14px] py-[9px] bg-[#01B574] rounded-[10px]"
                            onClick={handleSubmitDiscountForms}
                            type="button"
                          >
                            <p className="text-white font-DM-sans font-medium text-sm flex items-center">
                              Add Price
                            </p>
                          </button>
                        </div>
                      </div>
                    )}
                    {discountType === "percentage" && (
                      <div className="grid grid-cols-3">
                        <div
                          className="col-span-2 w-full bg-white rounded-[20px] relative px-[21px] py-[21px] mb-[46px]"
                          style={{
                            boxShadow:
                              "0px 15px 40px 0px rgba(112, 144, 176, 0.12)",
                          }}
                        >
                          <p
                            className="text-[#01B574] text-sm font-medium flex items-center absolute right-0 top-0"
                            onClick={handleAddPercentageForm}
                          >
                            <span>
                              <img src="/images/circle-plus.svg" alt="icon" />
                            </span>
                            <span>Add..</span>
                          </p>
                          <p className="text-[18px] font-bold font-DM-sans text-app-gray-300 mt-4 mb-[5px]">
                            Quantity discounts
                          </p>
                          <div className="grid grid-cols-3 gap-4 text-[#A3AED0] font-medium text-sm border-b border-[#E9EDF7] font-DM-sans pb-[6px] mb-[13px] ">
                            <p>Minimum Quantity</p>
                            <p>Percentage</p>
                          </div>

                          {percentageDiscountForms.map((form) => (
                            <div
                              className="grid grid-cols-3 gap-x-4 pb-[13px] items-center"
                              key={form.id}
                            >
                              <input
                                type="number"
                                id="number-input"
                                aria-describedby="helper-text-explanation"
                                value={form.values.discount_quantity}
                                onChange={(e) =>
                                  handlePercentageInputChange(
                                    form.id,
                                    "discount_quantity",
                                    e.target.value
                                  )
                                }
                                className="bg-transparent border border-[#DCDCE4] rounded-[10px] text-gray-900 text-sm block w-full p-2.5"
                                placeholder="0"
                              />

                              <div className="relative w-full">
                                <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none"></div>
                                <input
                                  type="number"
                                  id="discount_percentag"
                                  value={form.values.discount_percentage}
                                  onChange={(e) =>
                                    handlePercentageInputChange(
                                      form.id,
                                      "discount_percentage",
                                      e.target.value
                                    )
                                  }
                                  className="bg-transparent border border-[#DCDCE4] rounded-[10px] text-gray-900 text-sm block w-full p-2.5"
                                  placeholder="0"
                                />
                              </div>
                              <img
                                src="/images/close-icon.svg"
                                alt="icon"
                                className="cursor-pointer"
                                onClick={() =>
                                  handleRemovePercentageForm(form.id)
                                }
                              />

                              <input />
                            </div>
                          ))}
                          <button
                            className="px-[14px] py-[9px] bg-[#01B574] rounded-[10px]"
                            onClick={handleSubmitPercentageForms}
                            type="button"
                          >
                            <p className="text-white font-DM-sans font-medium text-sm flex items-center">
                              Add Price
                            </p>
                          </button>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </form>

              {hasVartion && (
                <>
                  {" "}
                  <p className="text-[#4F4141] font-DM-sans font-bold text-2xl mb-[27px]">
                    Variation & Pricing
                  </p>
                  <div className="mb-6">
                    <p className="block mb-2 text-app-gray-300">
                      Choose your attribute*
                    </p>
                    <div className="flex items-center">
                      {attributes.map((attribute) => (
                        <div className="flex items-center mr-[30px] mb-4">
                          <input
                            id="size"
                            type="checkbox"
                            onChange={() => {
                              handleVariationCheckboxChange(attribute.name);
                            }}
                            checked={
                              variationCheckboxStates[attribute.name] || false
                            }
                            className="w-4 h-4 text-[#FF1818] bg-gray-100 border-gray-300 rounded focus:ring-0"
                          />
                          <label
                            htmlFor="link-checkbox"
                            className="ms-2 text-base font-bold text-[#4F4141] font-DM-sans"
                          >
                            {attribute.name}
                          </label>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-3 gap-4 items-center mb-[52px]">
                      {sizes2Checked && (
                        <div>
                          <ProductInput
                            name="Sizes"
                            id="brand"
                            value=""
                            onChange={() => {}}
                            onBlur={() => {}}
                            type="text"
                            placeholder=""
                          />
                        </div>
                      )}
                      {color2Checked && (
                        <div>
                          <ProductInput
                            name="Color"
                            id="brand"
                            value=""
                            onChange={() => {}}
                            onBlur={() => {}}
                            type="text"
                            placeholder=""
                          />
                        </div>
                      )}
                      {material2Checked && (
                        <div>
                          <ProductInput
                            name="Material"
                            id="brand"
                            value=""
                            onChange={() => {}}
                            onBlur={() => {}}
                            type="text"
                            placeholder=""
                          />
                        </div>
                      )}
                      {/* <div className="mt-5">
                        <button className="px-[14px] py-[9px] bg-[#01B574] rounded-[10px] mr-[30px]">
                          <p className="text-white font-DM-sans font-medium text-sm flex items-center">
                            Add
                          </p>
                        </button>
                      </div> */}
                    </div>

                    <div
                      className="col-span-2 w-full bg-white rounded-[20px] relative px-[21px] py-[21px] mb-[46px]"
                      style={{
                        boxShadow:
                          "0px 15px 40px 0px rgba(112, 144, 176, 0.12)",
                      }}
                    >
                      <p
                        className="text-[#01B574] text-sm font-medium flex items-center absolute right-0 top-0 cursor-pointer"
                        onClick={handleAddProductVariations}
                      >
                        <span>
                          <img src="/images/circle-plus.svg" alt="icon" />
                        </span>
                        <span>More..</span>
                      </p>
                      <p className="text-[18px] font-bold font-DM-sans text-app-gray-300 mt-4 mb-[5px]">
                        Modify variation/s
                      </p>
                      <div className="grid grid-cols-8 gap-4 text-[#A3AED0] font-medium text-sm border-b border-[#E9EDF7] font-DM-sans pb-[6px] mb-[13px] ">
                        <p>Size</p>
                        <p>Color</p>
                        <p>Regular price</p>
                        <p>Salse price</p>
                        <p>Quanity</p>
                        <p>Sku</p>
                        <p>Image</p>
                      </div>

                      {productVariations.map((form) => (
                        <div
                          className="grid grid-cols-8 gap-x-4 pb-[13px] items-center"
                          key={form.id}
                        >
                          <div className="relative w-full">
                            {/* <input
                          type="number"
                          id="number-input"
                          aria-describedby="helper-text-explanation"
                          value={form.values.discount_quantity_fixed}
                          onChange={(e) =>
                            handleInputChange(
                              form.id,
                              "discount_quantity_fixed",
                              e.target.value
                            )
                          }
                          className="bg-transparent border border-[#DCDCE4] rounded-[10px] text-gray-900 text-sm block w-full p-2.5"
                          placeholder="0"
                        /> */}

                            <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none"></div>
                            <input
                              type="number"
                              // id="size"
                              value={form.values.size}
                              onChange={(e) =>
                                handleVariationChange(
                                  form.id,
                                  "size",
                                  e.target.value
                                )
                              }
                              className="bg-transparent border border-[#DCDCE4] rounded-[10px] text-gray-900 text-sm block w-full p-2.5"
                              placeholder="0"
                            />
                          </div>
                          <div className="relative w-full">
                            <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none"></div>
                            <input
                              type="text"
                              // id="color"
                              value={form.values.color}
                              onChange={(e) =>
                                handleVariationChange(
                                  form.id,
                                  "color",
                                  e.target.value
                                )
                              }
                              className="bg-transparent border border-[#DCDCE4] rounded-[10px] text-gray-900 text-sm block w-full p-2.5"
                              placeholder="0"
                            />
                          </div>
                          <div className="relative w-full">
                            <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none"></div>
                            <input
                              type="number"
                              // id="variation_price"
                              value={form.values.variation_price}
                              onChange={(e) =>
                                handleVariationChange(
                                  form.id,
                                  "variation_price",
                                  e.target.value
                                )
                              }
                              className="bg-transparent border border-[#DCDCE4] rounded-[10px] text-gray-900 text-sm block w-full p-2.5"
                              placeholder="0"
                            />
                          </div>
                          <div className="relative w-full">
                            <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none"></div>
                            <input
                              type="number"
                              id="variation_sales_price"
                              value={form.values.variation_sales_price}
                              onChange={(e) =>
                                handleVariationChange(
                                  form.id,
                                  "variation_sales_price",
                                  e.target.value
                                )
                              }
                              className="bg-transparent border border-[#DCDCE4] rounded-[10px] text-gray-900 text-sm block w-full p-2.5"
                              placeholder="0"
                            />
                          </div>
                          <div className="relative w-full">
                            <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none"></div>
                            <input
                              type="number"
                              id="variation_quantity"
                              value={form.values.variation_quantity}
                              onChange={(e) =>
                                handleVariationChange(
                                  form.id,
                                  "variation_quantity",
                                  e.target.value
                                )
                              }
                              className="bg-transparent border border-[#DCDCE4] rounded-[10px] text-gray-900 text-sm block w-full p-2.5"
                              placeholder="0"
                            />
                          </div>
                          <div className="relative w-full">
                            <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none"></div>
                            <input
                              type="text"
                              // id="variation_sku"
                              value={form.values.variation_sku}
                              onChange={(e) =>
                                handleVariationChange(
                                  form.id,
                                  "variation_sku",
                                  e.target.value
                                )
                              }
                              className="bg-transparent border border-[#DCDCE4] rounded-[10px] text-gray-900 text-sm block w-full p-2.5"
                              placeholder="0"
                            />
                          </div>
                          <div className="max-w-[52px] max-h-[52px]">
                            {/* <ImageUpload
                              onImageUpload={handleVariationImageUploader}
                            /> */}
                          </div>

                          <img
                            src="/images/close-icon.svg"
                            alt="icon"
                            className="cursor-pointer"
                            onClick={() =>
                              handleRemoveProductVariations(form.id)
                            }
                          />

                          <input />
                        </div>
                      ))}
                      <button
                        className="px-[14px] py-[9px] bg-[#01B574] rounded-[10px]"
                        onClick={handleSubmitProductVariationForms}
                        type="button"
                      >
                        <p className="text-white font-DM-sans font-medium text-sm flex items-center">
                          Add
                        </p>
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        {isCategoryModal && (
          <div
            className={`fixed top-0 left-0 right-0 z-50 bg-[#000000] bg-opacity-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 max-h-full flex justify-center items-center`}
          >
            <div
              className="p-4 w-full max-w-[590px] max-h-[500px]"
              style={{ maxHeight: "500px" }}
            >
              <div className="relative bg-white rounded-[26.7px] shadow px-[20px] pb-[28.69px]">
                <span
                  className="hover:cursor-pointer flex justify-end pt-4"
                  onClick={closeCategoryModal}
                >
                  <Icon
                    icon="ic:outline-cancel"
                    color="black"
                    width="24"
                    height="24"
                  />
                </span>
                <ModalSelect
                  categories={categories}
                  handleCategorySelect={handleCategorySelect}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </ManufacturersProfileLayout>
  );
};

export default AddProduct;
