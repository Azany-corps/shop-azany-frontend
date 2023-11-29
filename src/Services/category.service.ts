import axios from "axios";
// import { getBearerToken } from "./auth.service";
import { toast } from "react-toastify";
import { getBearerToken } from "./auth.service";
import callAPI from "../api/callApi";


const fetchCategories = async () => {
  const headers = { Authorization: getBearerToken() };
  try {
    const response = await callAPI(
      `general/products/fetch_store_categories`,
      "GET",
      null,
      headers
    );
    return response.data.values;
  } catch (err) {
    console.log(err);
  }
};


export { fetchCategories };
