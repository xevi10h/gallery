import { useContext, useEffect, useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { PhotoContext, PhotoContextType } from "../../contexts/PhotoContext";
import { Search } from "@mui/icons-material";
import "./CountrySelector.css";
import { fetchCountries } from "../../services/contriesService";

export default function CountrySelector() {
  const { setSelectedCountry } = useContext(PhotoContext) as PhotoContextType;
  const [countries, setCountries] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const countriesList = await fetchCountries();
      setCountries(countriesList);
    };
    fetchData();
  }, []);

  return (
    <Autocomplete
      className="search"
      options={countries}
      getOptionLabel={(option) => option}
      onChange={(event, newValue) => setSelectedCountry(newValue || undefined)}
      renderInput={(params) => (
        <TextField
          className="searchItem"
          {...params}
          placeholder="Choose the country you want to see"
          InputProps={{
            ...params.InputProps,
            startAdornment: <Search className="searchIcon" />,
          }}
        />
      )}
    />
  );
}
