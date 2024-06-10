import SearchIcon from "@mui/icons-material/Search";
import { TextField, IconButton, InputAdornment } from "@mui/material";

export default function SearchBar({ searchInput, setSearchInput }) {

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         `https://freetestapi.com/api/v1/${type}?search=[query]`
  //       );
  //       // setSearchQuery( response.data );
  //         console.log(response, "response");
  //       return response

  //     } catch (error) {
  //       console.log(error);
  //     }

  //   };
  //   fetchData();
  // }, [type]);

  // const handleSearch = (value) => {
  //   // setSearchQuery(e);
  //   // const filteredResults = searchResults.filter((result) =>
  //   //   result.title.includes(e)
  //   // );
  //   // setSearchResults(filteredResults);
  //   //  try {
  //   //   const response = await axios.get(
  //   //     `https://freetestapi.com/api/v1/${type}?search=[query]`
  //   //   );

  //   // } catch (error) {
  //   //   console.log(error);
  //   // }

  // };

  console.log(searchInput, "searchResult");

  return (
    <TextField
      label={"Search"}
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
      InputProps={{
        endAdornment: (
          <InputAdornment>
            <IconButton>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}
