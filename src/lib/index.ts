import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import dotenv from 'dotenv';
dotenv.config();
const connectionString = process.env.AUTH_DRIZZLE_URL ?? '';
console.log('DATABASE CONNECTION', connectionString);
const pool = postgres(connectionString, { max: 1 });
export const db = drizzle(pool);
