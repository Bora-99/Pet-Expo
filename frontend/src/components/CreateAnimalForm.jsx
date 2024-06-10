import {
  Button,
  Grid,
  TextField,
  Typography,
  Container,
  Box,
} from "@mui/material";
import  { useEffect } from "react";
import { useFormContext, Controller } from "react-hook-form";
import axios from "axios";
import { useParams } from "react-router-dom";
import { CustomTextField } from "./common/CustomTextField";

export default function CreateAnimalForm() {
  const { register, reset, control } = useFormContext();
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    axios
      .get(`http://localhost:5173/animals/${id}`)
      .then((response) => {
        const animalInformation = response.data;
        const animalData = {
          name: animalInformation.name,
          description: animalInformation.description,
          species: animalInformation.species,
          habitat: animalInformation.habitat,
          family: animalInformation.family,
          height: animalInformation.height,
          placeOfFound: animalInformation.placeOfFound,
          weight: animalInformation.weight,
          diet: animalInformation.diet,
        };
        reset(animalData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id, reset]);

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography>Create a New Animal :)</Typography>
        <Box component="form" sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <CustomTextField name="name" label="Name" control={control} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                name="species"
                label="Species"
                control={control}
              />
            </Grid>
            <Grid item xs={6}>
              <CustomTextField name="family" label="Family" control={control} />
            </Grid>
            <Grid item xs={6}>
              <CustomTextField
                name="habitat"
                label="Habitat"
                control={control}
              />
            </Grid>
            <Grid item xs={12}>
              <CustomTextField
                name="placeOfFound"
                label="Place of Found"
                control={control}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <CustomTextField name="diet" label="Diet" control={control} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <CustomTextField
                name="weight"
                label="Weight kg"
                control={control}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <CustomTextField name="height" label="Height" control={control} />
            </Grid>
            <Grid item xs={12} sx={{ heigh: "80px" }}>
              <CustomTextField
                name="description"
                label="Description"
                control={control}
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
    </Container>
  );
}
