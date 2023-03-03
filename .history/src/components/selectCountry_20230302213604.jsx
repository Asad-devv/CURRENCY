import React from 'react'
import {Autocomplete, Grid,Box ,TextField} from "@mui/material"
import UseAxios from '../hooks/UseAxios'


const SelectCountry = () => {
  const [data] = UseAxios(" https://restcountries.com/v3.1/all")
  // console.log(data)
  const dataFilter = data.filter(item => "currencies" in item)
  console.log(dataFilter)
  const dataCountries 
  return (
    <Grid item xs={12} md={3}>
    {/* <Autocomplete></Autocomplete> */}
    <Autocomplete
        value="option1"
        options = {["opt1","opt2","opt3"]}
        id="disable-clearabasle"
        disableClearable
        renderInput={(params) => (
          <TextField {...params} label="input" variant="standard" />
        )}
      />
  </Grid>
  )
}

export default SelectCountry