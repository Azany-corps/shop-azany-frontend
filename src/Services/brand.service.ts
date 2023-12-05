import axios from "axios";
// import { getBearerToken } from "./auth.service";
import { toast } from "react-toastify";
import { getBearerToken } from "./auth.service";
import callAPI from "../api/callApi";

const fetchBrands = async () => {
  const headers = { Authorization: getBearerToken() };
  try {
    const response = await callAPI(
      `auth/store/fetch_all_brands`,
      "GET",
      null,
      headers
    );
    return response.data.values;
  } catch (err) {
    console.log(err);
  }
};

export { fetchBrands };
