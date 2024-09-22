import { defineConfig } from 'drizzle-kit';
import dotenv from 'dotenv';
dotenv.config();
export default defineConfig({
	dialect: 'postgresql', // "mysql" | "sqlite" | "postgresql"
	schema: './src/lib/server/*',
	out: './drizzle',
	migrations: {
		prefix: 'timestamp'
	},
	dbCredentials: {
		url: process.env.AUTH_DRIZZLE_URL ?? ''
	},
	verbose: true,
	strict: true
});
