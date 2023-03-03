import React from "react";
import {
  Autocomplete,
  CircularProgress,
  Grid,
  Box,
  TextField,
} from "@mui/material";
import UseAxios from "../hooks/UseAxios";
// import * as React from 'react';
// import  from '@mui/material/CircularProgress';

const SelectCountry = () => {
  const [data, loaded] = UseAxios(" https://restcountries.com/v3.1/all");
  // console.log(data)
  if(loaded){
    return(
    <Box sx={{ display: 'flex' }}>
    <CircularProgress />
  </Box>
    )
  }
  const dataFilter = data.filter((item) => "currencies" in item);
  console.log(dataFilter);
  const dataCountries = dataFilter.map((item) => {
    return `${item.flag} ${Object.keys(item.currencies)[0]} - ${
      item.name.common
    }`;
  });
  console.log(dataCountries);
  return (
    <Grid item xs={12} md={3}>
      {/* <Autocomplete></Autocomplete> */}
      <Autocomplete
        value="option1"
        options={dataCountries}
        id="disable-clearabasle"
        disableClearable
        renderInput={(params) => (
          <TextField {...params} label="input" variant="standard" />
        )}
      />
    </Grid>
  );
};

export default SelectCountry;
