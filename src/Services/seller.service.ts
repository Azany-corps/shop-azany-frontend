import { toast } from "react-toastify";
import qs from 'qs';
import callAPI from "../api/callApi";

const token = localStorage.getItem("token");

const getSellerDetails = async (sellerId: string | undefined) => {
  const headers = { Authorization: `Bearer ${token}` };
  try {
    const response = await callAPI(
      `seller/store_front/${sellerId}`,
      "GET",
      null,
      headers
    );
    return response.data.values;
  } catch (err) {
    console.log(err);
  }
};

const getSellerLogoBanner = async (sellerId: string | undefined) => {
  const headers = { Authorization: `Bearer ${token}` };
  try {
    const response = await callAPI(
      `seller/single-logo-and-banner/${sellerId}`,
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
  getSellerDetails,
  getSellerLogoBanner
};
