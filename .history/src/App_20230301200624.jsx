import { Button, Container,Typography } from "@mui/material";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container maxWidth="md" sx={{ background: "#222" }}>
      <Typography>Stay Ahead with Currency conversion</Typography>
    </Container>
  );
}

export default App;
