import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { getAllFrases, createFrase } from "./db/queries.ts";


const app = express();

app.use(cors());
app.use(express.json());

// Obtener todas las frases
app.get("/frases", async (req, res) => {
  const frases = await getAllFrases();
  res.json(frases);
});

// Crear frase
app.post("/frases", async (req, res) => {
  const { texto } = req.body;
  const nuevaFrase = await createFrase(texto);
  res.json(nuevaFrase);
});

app.listen(3000, () => {
  console.log("Servidor escuchando en http://localhost:3000");
});


