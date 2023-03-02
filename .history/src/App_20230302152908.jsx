import { Button, Container,Typography,Grid } from "@mui/material";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import InputAmount from "./components/InputAmount";
import SelectCountry from "./components/selectCountry";
import SwitchCurrency from "./components/SwitchCurrency";
// import './App.css'

function App() {
  const boxStyles ={ background: "#fddfff" ,textAlign : "center", color}
  return (
    <Container maxWidth="md" sx={{}}>
      <Typography variant = "h5"sx={{mb:"2rem"}}>Stay Ahead with Currency conversion</Typography>
      <Grid container spacing ={2}>
        <InputAmount/>
        <SelectCountry/>
        <SwitchCurrency/> 
        <SelectCountry/>
      </Grid>
    </Container>
  );
}

export default App;
