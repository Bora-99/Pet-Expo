import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Grid, Container } from "@mui/material";
import aboutimg from "../assets/aboutimg.jpg";
import { FaInstagram, FaLinkedin, FaGoogle } from "react-icons/fa";
import birds from "../assets/birds.jpg";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import Footer from "../components/Footer";

export default function AboutUs() {
  const styleImage = {
    borderRadius: "50%",
    width: "250px",
    height: "250px",
    display: "block",
    backgroundPosition: "center",
    backgroundSize: "auto 80px",
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Grid item xs={5} sm={6}>
        <Typography sx={{ color: "green", fontWeight: 20, fontSize: 40 }}>
          Our Vision
        </Typography>
        <Typography
          sx={{ color: "black", fontFamily: "inherit", fontSize: 20 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </Grid>
      <Grid item xs={5} component="main" maxWidth="xs">
        <Box
          sx={{
            borderRadius: "30%",
            display: "absolut",
            width: "100px",
            mt: 8,
            padding: 25,
            backgroundImage: `url(${aboutimg})`,
          }}
        />
      </Grid>

      <Grid item sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography sx={{ color: "green", fontWeight: 20, fontSize: 30 }}>
          Our History
        </Typography>
        <img src={birds} style={styleImage} alt="birdsImage" />
        <Grid item xs={6}>
          <Typography
            sx={{ color: "black", fontFamily: "inherit", fontSize: 20 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          paddingTop: 5,
        }}
      >
        <Grid item>
          <Typography sx={{ fontFamily: "sans-serif", fontSize: 60 }}>
            All you want to know about animals
          </Typography>
        </Grid>
        <Grid
          item
          sx={{ display: "flex", alignItems: "center", paddingLeft: 20 }}
        >
          <KeyboardDoubleArrowLeftIcon fontSize="large" />
          <Typography>MORE INFORMATION</Typography>
        </Grid>
      </Grid>
      <Grid item>
        <Typography sx={{ color: "lightgray", fontSize: 60 }}>
          Learn more about endangered species in your country
        </Typography>
      </Grid>
      <Grid item sx={ { display: 'flex', justifyContent: "center", alignItems:'center' }}>
        <Typography sx={{ fontSize: 50, color: "#b6cdbd" }}>
          Take care of animals
        </Typography>
      </Grid>
      <Footer/>
    </Grid>
  );
}
