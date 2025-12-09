import { Router } from "express";
import { 
  getAllFrases, 
  createFrase, 
  getFraseById, 
  updateFrase, 
  deleteFrase,
  buscarFrasesPorTexto,
  fraseAleatoria,
  buscarFrasesPorCategoria
} from "../db/queries.ts";

const router = Router();

// Obtener todas las frases
router.get("/", async (req, res) => {
  const frases = await getAllFrases();
  res.json(frases);
});

// Crear una frase
router.post("/", async (req, res) => {
  const { texto, categoria } = req.body;
  if (!texto || !categoria) {
    return res.status(400).json({ error: "Falta texto o categoría" });
  }
  const nuevaFrase = await createFrase(texto, categoria);
  res.json(nuevaFrase);
});

// Buscar por texto 
router.get("/buscar/:texto", async (req, res) => {
  const resultados = await buscarFrasesPorTexto(req.params.texto);
  res.json(resultados);
});

// Frase aleatoria 
router.get("/random", async (req, res) => {
  const aleatoria = await fraseAleatoria();
  res.json(aleatoria);
});

// Obtener por ID 
router.get("/:id", async (req, res) => {
  const frase = await getFraseById(Number(req.params.id));
  res.json(frase);
});

// Editar frase
router.put("/:id", async (req, res) => {
  const { texto, categoria } = req.body;
  const frase = await updateFrase(Number(req.params.id), texto, categoria);
  res.json(frase);
});

// Borrar frase
router.delete("/:id", async (req, res) => {
  const eliminada = await deleteFrase(Number(req.params.id));
  res.json({ mensaje: "Frase eliminada", eliminada });
});

// Obtener frases por categoría
router.get("/categoria/:categoria", async (req, res) => {
  const categoria = req.params.categoria;
  const frases = await buscarFrasesPorCategoria(categoria);
  res.json(frases);
});

export default router;

