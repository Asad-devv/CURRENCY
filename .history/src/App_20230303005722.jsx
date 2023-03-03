import { Button, Container,Typography,Grid } from "@mui/material";
import { useState ,useContext,useEffect} from "react";
import reactLogo from "./assets/react.svg";
import InputAmount from "./components/InputAmount";
import SelectCountry from "./components/selectCountry";
import SwitchCurrency from "./components/SwitchCurrency";
import { CurrencyContext } from "./context/CurrencyContext";
// import './App.css'

function App() {
  // const [toCurrency, setToCurrency] = useState("")
  // const [fromCurrency, setFromCurrency] = useState("")
const {
  fromCurrency,
    setFromCurrency,
    setToCurrency,
    toCurrency,
    amount, setAmount
}= useContext(CurrencyContext)

useEffect(() => {
  
if(amount){
  axios("https://api.freecurrencyapi.com/v1/latest",{params:{apikey:"3SqVVqmsdi8AhyfSPnFoAognno7DeVxNUWlrRBd0",base_currency	:"USD",currencies	}})
}
  
}, [amount])


  const boxStyles ={ background: "#fddfff" ,textAlign : "center", color:"#222",minHeight:"20rem",borderRadius:2,padding : "4rem 2rem",boxShadow: "-8px 11px 23px -3px rgba(0,0,0,0.1)",position:"relative",mt:"10rem"}
  return (
    <Container maxWidth="md" sx={boxStyles}>
      <Typography variant = "h5"sx={{mb:"2rem"}}>Stay Ahead with Currency conversion</Typography>
      <Grid container spacing ={2}>
        <InputAmount/>
        <SelectCountry text="From" value={fromCurrency} setValue={setFromCurrency} />
        <SwitchCurrency/> 
        <SelectCountry text="To" value={toCurrency} setValue={setToCurrency} />
      </Grid>
    </Container>
  );
}

export default App;
