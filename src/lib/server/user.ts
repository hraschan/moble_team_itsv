import { pgEnum, pgTable, text, timestamp } from 'drizzle-orm/pg-core';
export const TEAM_ENUM_ARRAY: readonly [string, ...string[]] = ['booster', 'gollum', 'frodo'];
export const teamEnum = pgEnum('team', TEAM_ENUM_ARRAY);
export const role = pgEnum('role', ['admin', 'user']);

export const userTable = pgTable('user', {
	id: text('id').primaryKey(),
	firstName: text('first_name').notNull(),
	lastName: text('last_name').notNull(),
	username: text('username').unique().notNull(),
	password_hash: text('password_hash').notNull(),
	role: role('role').notNull().default('user'),
	team: teamEnum('team').notNull(),
	createdAt: timestamp('created_at', {
		withTimezone: true,
		mode: 'date'
	})
		.notNull()
		.defaultNow(),
	updatedAt: timestamp('updated_at', {
		withTimezone: true,
		mode: 'date'
	})
		.notNull()
		.defaultNow()
});
