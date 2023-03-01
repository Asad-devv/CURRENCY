import React from "react";

import { Grid, TextField ,InputAdornment} from "@mui/material";
const InputAmount = () => {
  return (
    <Grid item>
      <TextField
        label="Amount"
        fullWidth
        inputProps={{ type: "number",startAdornment :<InputAdornment position="start">qwnm$</InputAdornment> }}
        
      ></TextField>
    </Grid>
  );
};

export default InputAmount;
