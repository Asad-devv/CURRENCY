import React from 'react'
import {Autocomplete, Grid,Box } from "@mui/material"
const SelectCountry = () => {
  return (
    <Grid item>
    {/* <Autocomplete></Autocomplete> */}
    <Autocomplete
        {...defaultProps}
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