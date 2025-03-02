import express, { Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors'
import DeckModel from "./models/Deck.js";

const PORT = 5000;

// Load environment variables
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors())

app.post("/deck", async (req: Request, res: Response) => {
  const { title } = req.body;
  const newDeck = new DeckModel({
    title: title,
  });
  const savedResponse = await newDeck.save();
  res.send(savedResponse);
});

mongoose.connect(process.env.DB_CONNECTION ?? "").then(() => {
  console.log(`Connected to the DB | port : ${PORT}`);
  app.listen(PORT);
});
