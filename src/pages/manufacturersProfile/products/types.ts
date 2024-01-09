import { FileWithPath } from "react-dropzone";

export interface DiscountOption {
  quantity: string;
  percentage: string;
}
export interface ColorizedText {
  id: string;
  text: string[];
}

export interface Attribute {
  id: number;
  name: string;
  items: string[];
}

export interface Category {
  id: number;
  title: string;
  business_type: string;
  parent_category_id?: string | null;
  subcategories: Category[];
}

export interface Brand {
  id: number;
  name: string;
}

export interface QuantityForm {
  id: number;
  values: {
    discount_quantity_fixed: number;
    price_per_unit: number;
  };
}

export interface DiscountPercentageForm {
  id: number;
  values: {
    discount_quantity: number;
    discount_percentage: number;
  };
}

export interface ShippingForm {
  id: number;
  values: {
    delivery_state: string;
    delivery_days: string;
    delivery_price: number;
  };
}
export interface ProductVariation {
  id: number;
  values: {
    variation_price: number;
    variation_sales_price: number;
    variation_quantity: number;
    variation_sku: string;
    variation_start_date: string;
    variation_end_date: string;
    variation_external_product_id: string;
    variation_image: FileWithPath[] | null;
    variation_product_name: string;
    variation_attr: Record<string, any>; // Dynamic attributes
  };
}
