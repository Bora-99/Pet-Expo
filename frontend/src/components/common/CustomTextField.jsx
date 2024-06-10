import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

export const CustomTextField = ({ name, label, control }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          InputLabelProps={{ shrink: value }}
          helperText={error ? error.message : null}
          size="large"
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          label={label}
          variant="outlined"
        />
      )}
    />
  );
};
