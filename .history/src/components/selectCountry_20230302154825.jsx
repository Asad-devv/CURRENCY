import React from 'react'
import {Autocomplete, Grid,Box ,TextField} from "@mui/material"
import axios from "axios"
const SelectCountry = () => {
  console.log(axios)
  return (
    <Grid item xs={12} md={3}>
    {/* <Autocomplete></Autocomplete> */}
    <Autocomplete
        value="option1"
        options = {["opt1","opt2","opt3"]}
        id="disable-clearable"
        disableClearable
        renderInput={(params) => (
          <TextField {...params} label="input" variant="standard" />
        )}
      />
  </Grid>
  )
}

export default SelectCountry