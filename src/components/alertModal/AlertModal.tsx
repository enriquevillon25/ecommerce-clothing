import React from "react";
import { BaseModal } from "../baseModal/BaseModal";
import { Box, Button, Typography } from "@mui/material";

interface IAlertModal {
  open: boolean;
  handleClose: () => void;
}
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const AlertModal = ({ open, handleClose }: IAlertModal) => {
  return (
    <BaseModal open={open} handleClose={handleClose}>
      <Box sx={style}>
        <Typography>
          Solo puedes comprar máximo 2 productos por compra
        </Typography>
        <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
          <Button variant="contained" color="primary" onClick={handleClose}>
            Aceptar
          </Button>
        </Box>
      </Box>
    </BaseModal>
  );
};
