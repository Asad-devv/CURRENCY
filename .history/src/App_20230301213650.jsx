import { Button, Container,Typography,Grid } from "@mui/material";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import InputAmount from "./components/InputAmount";
// import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container maxWidth="md" sx={{ background: "#fddfff" }}>
      <Typography variant = "h5"sx={{mt:"2rem"}}>Stay Ahead with Currency conversion</Typography>
      <Grid container spacing ={2}>
        <InputAmount/>
        <SelectCountry
        <Grid item>
          Item
        </Grid>
        <Grid item>
          Item
        </Grid>
        <Grid item>
          Item
        </Grid>
        <Grid item>
          Item
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
