import express, { Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import DeckModel from "./models/Deck.js";

const PORT = 5000;

// Load environment variables
dotenv.config();

const app = express();

app.use(express.json());

app.post("/deck", async (req: Request, res: Response) => {
    console.log('hi')
  const newDeck = new DeckModel({
    title: "First Title of the First Deck.",
  });
  const savedResponse = await newDeck.save();
  console.log("hi hi :", savedResponse)
  res.send(savedResponse);
});

mongoose
  .connect(
    "mongodb+srv://rathne1997:0718003955@typecriptprojects.jtlmn.mongodb.net/notes_app?retryWrites=true&w=majority&appName=typecriptProjects"
  )
  .then(() => {
    console.log(`Connected to the DB | port : ${PORT}`);
    app.listen(PORT);
  });
