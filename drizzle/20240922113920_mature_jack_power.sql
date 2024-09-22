DO $$ BEGIN
 CREATE TYPE "public"."team" AS ENUM('Booster', 'Gollum', 'Frodo');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
