import React from "react";
import UseAxios from "../hooks/UseAxios"
impor 


import { Grid, TextField ,InputAdornment} from "@mui/material";
const InputAmount = () => {
  return (
    <Grid item xs={12} md>
      <TextField
        label="Amount"
        fullWidth
        inputProps={{ type: "number",startAdornment :<InputAdornment position="start">qwnm$</InputAdornment> }}
        
      ></TextField>
      <UseAxios/>
    </Grid>
  );
};

export default InputAmount;
