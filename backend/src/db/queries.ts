import { db } from "./db.ts";
import { frases } from "./schema.ts";
import { eq, ilike, sql } from "drizzle-orm";

// Obtener todas las frases
export async function getAllFrases() {
  return await db.select().from(frases);
}

// Crear una nueva frase
export async function createFrase(texto: string, categoria: string) {
  return await db
    .insert(frases)
    .values({ texto, categoria })
    .returning();
}

// Obtener frase por ID
export async function getFraseById(id: number) {
  return await db.select().from(frases).where(eq(frases.id, id));
}

// Editar frase
export async function updateFrase(id: number, texto: string, categoria?: string) {
  const updateData: { texto: string; categoria?: string } = { texto };
  if (categoria) updateData.categoria = categoria;
  return await db.update(frases).set(updateData).where(eq(frases.id, id)).returning();
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

// Buscar frases por categoría
export async function buscarFrasesPorCategoria(categoria: string) {
  return await db
    .select()
    .from(frases)
    .where(eq(frases.categoria, categoria));
}

// Frase aleatoria
export async function fraseAleatoria() {
  return await db
    .select()
    .from(frases)
    .orderBy(sql`RANDOM()`)
    .limit(1);
}

