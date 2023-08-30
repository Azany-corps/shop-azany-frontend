import { useState } from "react";
import { useNavigate } from "react-router-dom";
import callAPI from "../../../../api/callApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ProductData {
  data: {
    id: number;
    product_name: string;
    price: string;
    discount_enabled: string;
    category: string;
    sub_category: string;
    stock: string;
    currency: string;
    image_url: string;
    images: string;
    created_at: string;
    updated_at: string;
    product_details: ProductDetails[];
  };
}

type ProductDetails = {
  city: string;
  country: string;
  created_at: string;
  description: string;
  id: number;
  product_id: number;
  specifications: string;
  state: string;
  updated_at: string;
};

const ProductActive = ({ data }: ProductData) => {
  const [showDeleteUserPopup, setShowDeleteUserPopup] = useState(false);
  const [, setShowModal] = useState(false);
  const changeTImeStampToDDYY = (timestamp: string) => {
    const dateObj = new Date(timestamp);

    const month = dateObj.getUTCMonth() + 1;
    const year = dateObj.getUTCFullYear() % 100;

    const mm_yy = `${month.toString().padStart(2, "0")}/${year
      .toString()
      .padStart(2, "0")}`;
    return mm_yy;
  };
  const navigate = useNavigate();
  const deleteProduct = async () => {
    try {
      const token = localStorage.getItem("token");
      const headers = { Authorization: `Bearer ${token}` };
      const response = await callAPI(
        `auth/store/delete_product/${data.product_details[0].product_id}`,
        "DELETE",
        null,
        headers
      );
      if (response.status && response.status_code === 200) {
        console.log(`Product with has been deleted sucessfully`);
        setShowModal(false);
        toast.success("Product deleted successfully", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        // Reload the page to reflect the updated product list
        window.location.reload();
      } else {
        throw new Error("Delete product failed");
      }
    } catch (error) {
      console.error(error);
      setShowModal(false);
      toast.error("Error deleting product", {
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

  return (
    <div className="flex flex-col gap-6">
      <div className="flex smm:gap-3 gap-2 flex-col smm:p-4 px-2 py-4 bg-white rounded-md shadow-md">
        <div className=" flex justify-between gap-2">
          <div className="flex flex-row smm:gap-4 gap-2">
            <img
              src={data?.image_url ? data?.image_url : ""}
              className="object-cover h-[70px] !w-[70px] rounded-lg"
              alt=""
            />
            <div className="flex flex-col smm:gap-4 gap-1 smm:text-[16px] text-sm">
              <p className="font-medium smm:text-[16px] text-sm line-clamp-2">
                {data?.product_name}
              </p>
              <p className="smm:font-medium font-light">{data.stock}</p>
              <p className="smm:font-medium font-light">
                {changeTImeStampToDDYY(data?.updated_at)}
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between items-end">
            <p className="font-medium smm:text-[24px] text-sm text-right">
              {data.currency} {data.price}
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-row gap-2">
            <button className="smm:text-[12px] text-sm p-1 bg-[#F3F3F3] rounded-md">
              231 Views
            </button>
            <button className="smm:text-[12px] text-sm p-1 bg-[#F3F3F3] rounded-md">
              20 Orders
            </button>
          </div>
          <div className="flex flex-row gap-2">
            <a
              className="text-[#515151] cursor-pointer"
              href={"/manufacturers-profile/edit-product/" + data.id}
            >
              Edit
            </a>
            <p
              className="text-[#E51B48] hover:text-red-700 cursor-pointer"
              onClick={() => setShowDeleteUserPopup(true)}
            >
              Delete
            </p>
          </div>
        </div>
      </div>
      {showDeleteUserPopup && (
        <div className="fixed z-50 top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-80">
          <div className="bg-white p-4 flex flex-col items-center rounded-md">
            <p>Are you sure you want to delete {data.product_name}?</p>
            <div className="flex gap-4 mt-4">
              <button
                className="px-4 py-2 bg-[#515151] hover:bg-gray-500 text-white rounded-md"
                onClick={() => setShowDeleteUserPopup(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-[#f44336] hover:bg-red-600 text-white rounded-md"
                onClick={deleteProduct}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductActive;
