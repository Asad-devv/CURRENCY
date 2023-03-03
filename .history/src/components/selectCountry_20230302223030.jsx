import React from "react";
import {
  Autocomplete,
  CircularProgress,
  Grid,
  Box,
  TextField,
  Skeleton,
} from "@mui/material";
import UseAxios from "../hooks/UseAxios";



const SelectCountry = (text,value,setValue) => {
  const [data, loaded] = UseAxios(" https://restcountries.com/v3.1/all");
  // console.log(data)
  if(loaded){
    return(
    <Grid item xs={12} md={3}>
    <Skeleton variant = "round" height= {60}/>
  </Grid>
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
        value="optrion"
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
