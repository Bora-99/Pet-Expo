import { Grid } from "@mui/material";
import anbackgroundImage from "../assets/anbackground.jpg";

export default function HomePage() {
  return (
    <>
      <Grid
        style={{
          position: "absolute",
          // left: 0,
          width: "99%",
          height: "85%",
          backgroundImage: `url(${anbackgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Grid>
      <Grid container>
        <Grid xs={6}>
          Cats are basically tiny creatures covered with silky fur. They have
          whiskers and ears which are highly sensitive. They have sharp eyes
          which helps them to see at night. Cats are social animals which like
          to spend time with people. Most of the time they like to sleep. But,
          they entertain and create happiness at home. If cats get irritated,
          they can strike with their claws. They only need love and affection
          from people. Cats are extremely lazy as they like to lie down in some
          corner of the house.{" "}
        </Grid>
        <Grid xs={6}></Grid>
      </Grid>
    </>
  );
}
