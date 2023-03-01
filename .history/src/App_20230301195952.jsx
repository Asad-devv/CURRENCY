import { Button,Container } from '@mui/material'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container maxWidth="md" sx={{background : "#222"}}>
      <Button>Stay A</Button>
    </Container>
  )
}

export default App
