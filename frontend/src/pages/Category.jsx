import CardInformation from "../components/CardInformation";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import axios from "axios";
import SearchBar from "../components/SearchBar";

export default function Category({ type }) {

  const [ data, setData ] = useState( [] );
    const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    axios
      .get(`https://freetestapi.com/api/v1/${type}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [ type ] );
  
  useEffect( () =>
  {
     
    const handleSearch = async ( ) =>
    {
     
      try
      {
        const response = await axios.get(
          `https://freetestapi.com/api/v1/${type}?search=${searchInput}`
        );
           setData(response.data);

      } catch ( error )
      {
        console.log( error );
      }
    }
    
     const timeoutId = setTimeout(() => {
       handleSearch()
     }, 500);
     return () => clearTimeout(timeoutId);
   }, [searchInput, type]);

  return (
    <Grid container>
      <Grid item sx={{ margin: 3 }} xs={4}>
        <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
      </Grid>
      <Grid item>
        <CardInformation type={type} data={data} />
      </Grid>
    </Grid>
  );
}
