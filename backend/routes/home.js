import express from "express";
import { Birds } from "../models/animalSchema.js";

const router = express.Router();


router.get("/", function (req, res) {
  res.render("frontend/pages/HomePage.jsx");
});

module.exports = router;


