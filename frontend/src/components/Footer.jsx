import React from "react";
import { Grid} from "@mui/material";
import { FaInstagram, FaLinkedin, FaGoogle } from "react-icons/fa";


export default function Footer() {
  return (
    <Grid
      sx={{
        left: 0,
        bottom: 0,
        width: "100%",
        backgroundColor: "#b6cdbd",
        color: "white",
        textAlign: "center",
      }}
    >
      <footer>
        <div>
          <h3>Animal Library</h3>

          <FaGoogle size={30} color="#DB4437" />

          <FaInstagram size={30} color="#C13584" />

          <FaLinkedin size={30} color="#0077B5" />
        </div>
        <div className="footer-bottom">
          <p>
            copyright &copy; <a href="#">Animal Page</a>
          </p>
        </div>
      </footer>
    </Grid>
  );
}
