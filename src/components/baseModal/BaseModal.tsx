import { Modal } from "@mui/material";
import React, { ReactElement } from "react";

interface IBaseModal {
  children: ReactElement;
  open: boolean;
  handleClose: () => void;
}
export const BaseModal = ({ children, open, handleClose }: IBaseModal) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {children}
    </Modal>
  );
};
