import { toast } from "react-toastify";
import qs from "qs";
import callAPI from "../api/callApi";

const token = localStorage.getItem("token");

const updateProductOrderStatus = async (orderID: number, status: number) => {
  const headers = {
    Authorization: `Bearer ${token}`,
    "content-type": "application/x-www-form-urlencoded",
  };
  try {
    const data = { status: status };
    const response = await callAPI(
      `product/update_product_order_status/${orderID}`,
      "PUT",
      qs.stringify(data),
      headers
    );
    toast.success(response?.message, {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    return response;
  } catch (err: any) {
    if (err.response.data.status_code === 422) {
      toast.warning(err.response.data.message, {
        position: "top-center",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log(err.response.data.message, err.response.status_code);
    }
  }
};

const updateCustomerProductOrderStatus = async (
  orderID: number,
  status: number
) => {
  const headers = {
    Authorization: `Bearer ${token}`,
    "content-type": "application/x-www-form-urlencoded",
  };
  try {
    const data = { status: status };
    const response = await callAPI(
      `product/update_product_order_status/${orderID}`,
      "PUT",
      qs.stringify(data),
      headers
    );
    toast.success(response?.message, {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    return response;
  } catch (err: any) {
    if (err.response.data.status_code === 422) {
      toast.warning(err.response.data.message, {
        position: "top-center",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log(err.response.data.message, err.response.status_code);
    }
  }
};

const getProductOrders = async () => {
  const headers = { Authorization: `Bearer ${token}` };
  try {
    const response = await callAPI(
      `product/fetch_product_orders`,
      "GET",
      null,
      headers
    );
    return response.data.values;
  } catch (err) {
    console.log(err);
  }
};

const getCustomerProductOrders = async () => {
  const headers = { Authorization: `Bearer ${token}` };
  try {
    const response = await callAPI(
      `product/fetch_customer_product_order`,
      "GET",
      null,
      headers
    );
    return response.data.values;
  } catch (err) {
    console.log(err);
  }
};

const getProductOrder = async (productID: number) => {
  const headers = { Authorization: `Bearer ${token}` };
  try {
    const response = await callAPI(
      `product/fetch_product_orders/${productID}`,
      "GET",
      null,
      headers
    );
    return response.data.values;
  } catch (err) {
    console.log(err);
  }
};

const getCustomerProductOrder = async (productID: number) => {
  const headers = { Authorization: `Bearer ${token}` };
  try {
    const response = await callAPI(
      `product/fetch_customer_product_order/${productID}`,
      "GET",
      null,
      headers
    );
    return response.data.values;
  } catch (err) {
    console.log(err);
  }
};

export {
  updateProductOrderStatus,
  updateCustomerProductOrderStatus,
  getProductOrders,
  getCustomerProductOrders,
  getProductOrder,
  getCustomerProductOrder,
};
