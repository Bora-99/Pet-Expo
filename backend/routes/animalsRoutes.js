import express from "express";
import { Birds } from "../models/animalSchema.js";

const router = express.Router();

//Route for saving animals

router.post("/", async (req, res) => {
  const newBird = {
    animal_id: req.body.animal_id,
    name: req.body.name,
    species: req.body.species,
    family: req.body.family,
    placeOfFound: req.body.placeOfFound,
    weight: req.body.weight,
    height: req.body.height,
    habitat: req.body.habitat,
    diet: req.body.diet,
    description: req.body.description,
  };

  const bird = await Birds.create(newBird);

  return res.status(201).send(bird);
});

//Route for Get all birds from database

router.get("/", async (req, res) => {
  try {
    const birds = await Birds.find( {} );
    return res.status(200).json({
      count: birds.length,
      data: birds,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//Route for Get One Book from database with id

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const bird = await Birds.findById(id);
    return res.status(200).json(bird);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//Route for updating a Bird

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const bird = await Birds.findByIdAndUpdate(id, req.body);
    if (!bird) {
      return res.status(404).json({ message: "Bird not found" });
    }
    return res.status(200).send({ message: "Bird was updated successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//Route for deleting a bird

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const bird = await Birds.findByIdAndDelete(id);
    if (!bird) {
      return res.status(404).json({ message: "Bird not found" });
    }
    return res.status(200).send({ message: "Bird was deleted successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

export default router;
