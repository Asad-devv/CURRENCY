import React, { useContext } from "react";
import UseAxios from "../hooks/UseAxios"


import { Grid, TextField ,InputAdornment} from "@mui/material";
const InputAmount = () => {
  const {amount,setAmount } =useContext(CurrencyContext)


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
