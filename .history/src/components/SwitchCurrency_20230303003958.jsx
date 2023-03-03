import React, { useContext } from "react";
import { Button, Grid } from "@mui/material";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { CurrencyContext } from "../context/CurrencyContext";

const SwitchCurrency = () => {

  const {
    fromCurrency,
      setFromCurrency,
      setToCurrency,
      toCurrency,
  }= useContext(CurrencyContext)

  import React from 'react'
  
  export const handleClick = () => {
    return (
      <div>handleClick</div>
    )
  }
  

  return (
    <Grid item xs={12} md="auto">
      <Button onClick={handleClick} sx={{ borderRadius: 1, height: "100%" }}>
        <CompareArrowsIcon sx={{ fontSize: 30 }} />
      </Button>
    </Grid>
  );
};

export default SwitchCurrency;
