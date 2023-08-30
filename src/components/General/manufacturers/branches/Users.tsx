/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import callAPI from "../../../../api/callApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface UserData {
  data: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    branch_id: number;
    branch: Branch[];
    created_at: string;
  };
}

type Branch = {
  id: number;
  branch_name: string;
  banner_url: string;
  country: string;
  created_at: string;
  user: number[];
};

const Users = ({ data }: UserData) => {
  const [showDeleteUserPopup, setShowDeleteUserPopup] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const createdAt = new Date(data.created_at);
  const formattedCreatedAt = `${createdAt.toLocaleDateString()} ${createdAt.toLocaleTimeString()}`;
  
  const deleteUser = async () => {
    try {
      const token = localStorage.getItem("token");
      const headers = { Authorization: `Bearer ${token}` };
      const response = await callAPI(`auth/delete_branch_user/${data.id}`, "DELETE", null, headers);
      if (response.status && response.status_code === 200) {
        console.log(`User with id ${data.id} has been deleted`);
        setShowModal(false);
        toast.success("Branch User deleted successfully", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        // Reload the page to reflect the updated user list
        window.location.reload();
      } else {
        throw new Error("Delete user failed");
      }
    } catch (error) {
      console.error(error);
      setShowModal(false);
      toast.error("Error deleting branch", {
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
    <div>
      <div className="shadow-md rounded-md items-center gap-4 w-full cursor-pointer bg-white p-6">
        <div className="flex justify-between">
          <div className="flex flex-row gap-4">
            <div>
              <img src="/images/userphoto.png" alt="photo" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="">{data.first_name + " " + data.last_name}</p>
              <p className="text-[#515151]">Created: {formattedCreatedAt} </p>
            </div>
          </div>

          <div className="flex flex-row gap-2">
            <p>{data.branch[0]?.branch_name || "Unassigned"}</p>
            <MoreVertIcon onClick={() => setShowDeleteUserPopup(true)} />
          </div>
        </div>
      </div>

      {/* Delete user confirmation popup */}
      {showDeleteUserPopup && (
        <div className="fixed z-50 top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-md">
            <p>
              Are you sure you want to delete Branch User: {data.first_name} {data.last_name}?
            </p>
            <div className="flex gap-4 mt-4">
              <button className="px-4 py-2 bg-[#515151] text-white rounded-md" onClick={() => setShowDeleteUserPopup(false)}>
                Cancel
              </button>
              <button className="px-4 py-2 bg-[#f44336] text-white rounded-md" onClick={deleteUser}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
