import mongoose from "mongoose";

const animalModel = mongoose.Schema({
  animal_id: Number,
  name: String,
  species: String,
  family: String,
  habitat: String,
  placeOfFound: String,
  weight: Number,
  height: Number,
  diet: String,
  description: String,
});

export const Birds = mongoose.model("Birds", animalModel);
