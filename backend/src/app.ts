import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import frasesRoutes from "./routes/frases.routes.ts";

const app = express();

app.use(cors());
app.use(express.json());

// Rutas
app.use("/frases", frasesRoutes);

app.listen(3000, () => {
  console.log("Servidor escuchando en http://localhost:3000");
});



