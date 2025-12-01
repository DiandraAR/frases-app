import dotenv from "dotenv";
dotenv.config();

import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { frases } from "./schema.ts";

const client = postgres(process.env.DATABASE_URL!, {
  connect_timeout: 10,
  idle_timeout: 10,
});

export const db = drizzle(client);
console.log("URL DB:", process.env.DATABASE_URL);




