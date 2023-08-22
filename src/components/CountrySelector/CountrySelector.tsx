import React, { useContext, useEffect, useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { PhotoContext, PhotoContextType } from "../../contexts/PhotoContext";

type countriesResponse = Array<{
  name: {
    common: string;
  };
}>;

const CountrySelector: React.FC = () => {
  const { setSelectedCountry } = useContext(PhotoContext) as PhotoContextType;
  const [countries, setCountries] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data: countriesResponse = await response.json();
        setCountries(data.map((country) => country.name.common));
      } catch (error) {
        console.error("There was an error fetching the data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Autocomplete
      options={countries}
      getOptionLabel={(option) => option}
      onChange={(event, newValue) => setSelectedCountry(newValue || undefined)}
      renderInput={(params) => (
        <TextField {...params} label="Choose a country" variant="outlined" />
      )}
    />
  );
};

export default CountrySelector;
