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

export default function CreateAnimalForm() {
  const { register, reset, control } = useFormContext();
  const { id } = useParams();

  useEffect( () =>
  {
    if (!id) return;
    axios
      .get(`http://localhost:5173/animals/${id}`)
      .then((response) => {
        const animalInformation = response.data;
        const test = {
          name: animalInformation.name,
          description: animalInformation.description,
          species: animalInformation.species,
          habitat: animalInformation.habitat,
          family: animalInformation.family,
          height: animalInformation.height,
          placeOfFound: animalInformation.placeOfFound,
          weight: animalInformation.weight,
          diet: animalInformation.diet
        };
        reset(test);
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
              <TextField
                InputLabelProps={{ shrink: true }}
                {...register("name")}
                label={"Name"}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name="species"
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    InputLabelProps={{ shrink: value }}
                    helperText={error ? error.message : null}
                    size="large"
                    error={!!error}
                    onChange={onChange}
                    value={value}
                    fullWidth
                    label={"Spieces"}
                    variant="outlined"
                  />
                )}
              />
              {/* <TextField value={{ ...register("species") }} label={"Spieces"} /> */}
            </Grid>
            <Grid item xs={6}>
              <TextField
                InputLabelProps={{ shrink: true }}
                {...register("family")}
                label={"Family"}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                InputLabelProps={{ shrink: true }}
                {...register("habitat")}
                label={"Habitat"}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                InputLabelProps={{ shrink: true }}
                {...register("placeOfFound")}
                fullWidth
                label={"Place of Found"}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField                 InputLabelProps={{ shrink: true }}
 {...register("diet")} label={"Diet"} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField {...register("weight")} label={"Weight kg"} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField {...register("height")} label={"Height cm"} />
            </Grid>
            <Grid item xs={12} sx={{ heigh: "80px" }}>
              <TextField
                {...register("description")}
                fullWidth
                label={"Description"}
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
