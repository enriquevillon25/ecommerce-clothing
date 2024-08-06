import React, { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { TextField } from "@mui/material";
export const Detail = () => {
  const min = 1;
  const max = 2;
  const handleChange = (event: any) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value >= min && value <= max) {
      setQuantity(value);
    }
  };
  const [quantity, setQuantity] = useState(min);

  return (
    <div>
      <div>
        <span> Cantidad</span>
        <TextField
          type="number"
          value={quantity}
          onChange={handleChange}
          inputProps={{ min, max }}
          size="small"
          variant="outlined"
          style={{ width: "60px", margin: "0 10px", background: "white" }}
        />
        {/* <div style={{ display: "flex", flexDirection: "column" }}>
          <KeyboardArrowUpIcon />
          <KeyboardArrowDownIcon />
        </div> */}
      </div>
    </div>
  );
};
