import { db } from "./db.ts";
import { frases } from "./schema.ts";
import { eq, ilike, sql } from "drizzle-orm";

// Obtener todas las frases
export async function getAllFrases() {
  return await db.select().from(frases);
}

// Crear una nueva frase
export async function createFrase(texto: string) {
  return await db.insert(frases).values({ texto }).returning();
}

// Obtener frase por ID
export async function getFraseById(id: number) {
  return await db.select().from(frases).where(eq(frases.id, id));
}

// Editar frase
export async function updateFrase(id: number, texto: string) {
  return await db.update(frases).set({ texto }).where(eq(frases.id, id)).returning();
}

// Borrar frase
export async function deleteFrase(id: number) {
  return await db.delete(frases).where(eq(frases.id, id)).returning();
}

// Buscar frases por texto (case insensitive)
export async function buscarFrasesPorTexto(texto: string) {
  return await db
    .select()
    .from(frases)
    .where(ilike(frases.texto, `%${texto}%`));
}

// Frase aleatoria
export async function fraseAleatoria() {
  return await db
    .select()
    .from(frases)
    .orderBy(sql`RANDOM()`)
    .limit(1);
}



