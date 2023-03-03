import { Button, Container,Typography,Grid } from "@mui/material";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import InputAmount from "./components/InputAmount";
import SelectCountry from "./components/selectCountry";
import SwitchCurrency from "./components/SwitchCurrency";
// import './App.css'

function App() {
  const [toCurrency, setToCurrency] = useState()
  const [fromCurrency, sToCurrency] = useState()


  const boxStyles ={ background: "#fddfff" ,textAlign : "center", color:"#222",minHeight:"20rem",borderRadius:2,padding : "4rem 2rem",boxShadow: "-8px 11px 23px -3px rgba(0,0,0,0.1)",position:"relative",mt:"10rem"}
  return (
    <Container maxWidth="md" sx={boxStyles}>
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
