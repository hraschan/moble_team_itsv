ALTER TYPE "team" ADD VALUE 'booster';--> statement-breakpoint
ALTER TYPE "team" ADD VALUE 'gollum';--> statement-breakpoint
ALTER TYPE "team" ADD VALUE 'frodo';--> statement-breakpoint
ALTER TABLE "user" DROP CONSTRAINT "user_email_unique";--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN IF EXISTS "email";--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN IF EXISTS "email_verified";