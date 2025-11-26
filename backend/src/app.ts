import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

console.log("Servidor iniciado con TypeScript");

// Necesario para usar __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = new Hono();

// Ruta correcta del archivo frases.json
const dataPath = path.join(__dirname, '../data/frases.json');

// Ruta principal
app.get('/', (c) => {
  return c.json({ message: "API de frases funcionando" });
});

// GET /frases → devuelve todas las frases del JSON
app.get('/frases', (c) => {
  const file = readFileSync(dataPath, 'utf8');
  const frases = JSON.parse(file);
  return c.json(frases);
});

// Iniciar servidor
serve({
  fetch: app.fetch,
  port: 3000,
});

console.log("Servidor escuchando en http://localhost:3000");
