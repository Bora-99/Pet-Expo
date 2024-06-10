import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Birds } from "./models/animalSchema.js";
import animalsRoutes from "./routes/animalsRoutes.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/animals", animalsRoutes);

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("welcome to mern project");
});



mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App is connected to database");
    app.listen(PORT, () => {
      console.log(`App is running in port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
