import { toast } from "react-toastify";
import callAPI from "../api/callApi";

const token = localStorage.getItem("token");

const addProductToCart = async (quantity = 1, product_id: number) => {
  const headers = { Authorization: `Bearer ${token}` };
  try {
    const response = await callAPI(
      `general/products/add_product_to_cart?product_id=${product_id}&quantity=${quantity}`,
      "POST",
      null,
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
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    console.log(err);
  }
};

const updateProductQuantityInCart = async (
  cartItem_id: number,
  quantity = 2,
  product_id: number
) => {
  const headers = { Authorization: `Bearer ${token}` };
  try {
    const response = await callAPI(
      `general/products/update_cart_product/${cartItem_id}?product_id=${product_id}&quantity=${quantity}`,
      "PUT",
      null,
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
  } catch (err:any) {
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

const getCartProducts = async () => {
  const headers = { Authorization: `Bearer ${token}` };
  try {
    const response = await callAPI(
      `general/products/fetch_product_cart_list`,
      "GET",
      null,
      headers
    );
    return response;
  } catch (err) {
    console.log(err);
  }
};

function calculateTotalPrice(data: any[]) {
  let totalPrice = 0;
  for (let i = 0; i < data?.length; i++) {
    totalPrice += parseFloat(data[i].sub_total);
  }
  return totalPrice;
}

const reomveProductFromCartService = async (productID: number) => {
  const token = localStorage.getItem("token");
  const headers = { Authorization: `Bearer ${token}` };
  try {
    const response = await callAPI(
      `general/products/delete_cart_product/${productID}`,
      "DELETE",
      null,
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
  } catch (err) {
    console.log(err);
  }
};

export {
  addProductToCart,
  updateProductQuantityInCart,
  getCartProducts,
  calculateTotalPrice,
  reomveProductFromCartService,
};
