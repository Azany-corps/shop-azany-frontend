import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import callAPI from "../../api/callApi";

interface CloseAccountModalProps {
  onClose: () => void;
}

const CloseAccountModal: React.FC<CloseAccountModalProps> = ({ onClose }) => {
  const navigate = useNavigate();

  const handleDeleteAccount = async () => {
    try {
      const token = localStorage.getItem("token");
      const headers = { Authorization: `Bearer ${token}` };

      await callAPI("auth/delete_user_account", "DELETE", null, headers);

      toast.success("Account deleted successfully", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      navigate("/login");
    } catch (error) {
      console.error(error);
      toast.error("Error deleting account", {
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
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-4 rounded-lg">
        <p className="text-lg font-medium mb-4">Are you sure you want to close your account?</p>
        <div className="flex justify-end">
          <button className="mr-2 px-4 py-2 bg-red-600 text-white rounded-md" onClick={onClose}>
            Cancel
          </button>
          <button className="px-4 py-2 bg-red-600 text-white rounded-md" onClick={handleDeleteAccount}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default CloseAccountModal;
