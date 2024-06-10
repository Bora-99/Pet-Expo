import React from "react";
import { Grid, Stack,  } from "@mui/material";
import Map from "../components/Map";
import ContactUs from "../components/ContactUsForm";
import FollowCard from "../components/FollowUsCard";
import Footer from "../components/Footer";

export default function Contacts ()
{
  


  

  return (
    <Grid container>
      <Grid sx={{ padding: 2 }} xs={4}>
        <Map />
      </Grid>
      <Grid xs={6} sx={{paddingLeft: 20}}>
        <ContactUs />
        <FollowCard
          title={"Follow us on..."}
          subheader={""}
          sx={{ boxShadow: 2, paddingTop: 2, margin: 5 }}
        />
      </Grid>
      <Footer/>
    </Grid>
  );
}
