import React from 'react'
import {
  Button,
  Grid,
  TextField,
  Typography,
  styled,
  Container,
  Box,
} from "@mui/material";



export default function ContactUs() {
  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography sx={{fontSize: 20}}>Contact Us in the Form below :)</Typography>
      <Box component="form" sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} >
            <TextField  label={"Name"} />
          </Grid>
          <Grid item xs={6}>
            <TextField label={"SurName"} />
          </Grid>
          <Grid item xs={6}>
            <TextField label={"Email"} />
          </Grid>
          <Grid item xs={6}>
            <TextField label={"Phone"} />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label={"Message..."}
            />
          </Grid>
          <Grid item xs={12} sx={{ heigh: "80px" }}>
            <TextField
              fullWidth
              label={"Reference"}
            />
          </Grid>
        </Grid>
      </Box>
      <Button
        type="submit"
        variant="outlined"
        color="success"
        size="large"
        sx={{ mt: "20px" }}
      >
        Submit
      </Button>
    </Box>
  );
}
