import { db } from "./db.ts";
import { frases } from "./schema.ts";
import { eq } from "drizzle-orm";

// Obtener todas las frases
export async function getAllFrases() {
  return await db.select().from(frases);
}

// Crear una nueva frase
export async function createFrase(texto: string) {
  return await db.insert(frases).values({ texto }).returning();
}

