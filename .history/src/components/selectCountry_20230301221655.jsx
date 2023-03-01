import React from 'react'
import {Autocomplete, Grid,Box ,TextField} from "@mui/material"
const SelectCountry = () => {
  return (
    <Grid item>
    {/* <Autocomplete></Autocomplete> */}
    <Autocomplete
        value=""
        options = {["opt1","opt2","opt3"]}
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