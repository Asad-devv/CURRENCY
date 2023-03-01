import { Button, Container,Typography } from "@mui/material";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container maxWidth="md" sx={{ background: "#fddfff" }}>
      <Typography variant = ""sx={{mt:"2rem"}}>Stay Ahead with Currency conversion</Typography>
    </Container>
  );
}

export default App;
