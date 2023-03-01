import React from "react";

import { Grid, TextField } from "@mui/material";
const InputAmount = () => {
  return (
    <Grid item>
      <TextField
        label="Amount"
        fullWidth
        inputProps={{ type: "number",startAdornment :<Inpur }}
        
      ></TextField>
    </Grid>
  );
};

export default InputAmount;
