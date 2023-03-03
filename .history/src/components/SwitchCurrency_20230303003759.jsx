import React, { useContext } from "react";
import { Button, Grid } from "@mui/material";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";

const SwitchCurrency = () => {

  const {
    fromCurrency,
      setFromCurrency,
      setToCurrency,
      toCurrency,
  }= useContext(CurrencyContext)
  

  return (
    <Grid item xs={12} md="auto">
      <Button onClick={(event)=>console.log(event)} sx={{ borderRadius: 1, height: "100%" }}>
        <CompareArrowsIcon sx={{ fontSize: 30 }} />
      </Button>
    </Grid>
  );
};

export default SwitchCurrency;
