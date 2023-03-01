import React from 'react'
import {Autocomplete, Grid,Box } from "@mui/material"
const SelectCountry = () => {
  return (
    <Grid item>
    {/* <Autocomplete></Autocomplete> */}
    <Autocomplete
        options = {["opt1","opt2"]}
        id="disable-clearable"
        disableClearable
        renderInput={(params) => (
          <TextField {...params} label="disableClearable" variant="standard" />
        )}
      />
  </Grid>
  )
}

export default SelectCountry