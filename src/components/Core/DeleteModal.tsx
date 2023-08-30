import React, { useState } from "react";
import { Button, Modal, Typography } from "@material-ui/core";

interface DeleteBranchModalProps {
  branchName: string;
  onDelete: () => void;
  onCancel: () => void;
  onConfirm: () => void;
}

const DeleteBranchModal = ({ branchName, onDelete, onCancel, onConfirm }: DeleteBranchModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleDelete = () => {
    onDelete();
    setIsOpen(false);
  };

  return (
    <>
      <Modal open={isOpen} onClose={handleClose}>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#fff",
            padding: "3rem",
            outline: "none",
          }}
        >
          <Typography variant="h6">Are you sure you want to delete this Branch{branchName}?</Typography>
          <div style={{ display: "flex", justifyContent: "center" ,gap: 10}}>
            <Button variant="outlined" color="default" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="contained" color="secondary" onClick={handleDelete}>
              Delete
            </Button>
          </div>
        </div>
      </Modal>
      <Button variant="outlined" color="secondary" onClick={handleOpen}>
        Delete branch
      </Button>
    </>
  );
};

export default DeleteBranchModal;
