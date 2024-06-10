import SearchIcon from "@mui/icons-material/Search";
import { TextField, IconButton, InputAdornment } from "@mui/material";

export default function SearchBar({ searchInput, setSearchInput }) {

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
