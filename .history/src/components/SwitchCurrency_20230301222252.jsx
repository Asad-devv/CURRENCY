import React from 'react'
import {Button, Grid } from "@mui/material"
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

const SwitchCurrency = () => {
  return (
    <Grid item>
    <Button><CompareArrowsIcon sx={{fontSIze}}/></Button>
  </Grid>
  )
}

export default SwitchCurrency