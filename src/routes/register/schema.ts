import { z } from 'zod';
export const TEAM_ENUM_ARRAY: readonly [string, ...string[]] = ['booster', 'gollum', 'frodo'];

export const formSchema = z.object({
	username: z
		.string()
		.min(3)
		.max(34)
		.regex(/^[a-zA-Z0-9_]+$/, 'Username must be alphanumeric and contain no spaces'),
	password: z
		.string()
		.min(12)
		.max(100)
		.regex(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])[A-Za-z\d!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{12,100}$/,
			'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
		),
	firstname: z.string().min(1).max(100),
	lastname: z.string().min(1).max(100),
	team: z.enum(TEAM_ENUM_ARRAY)
});

export type FormSchema = typeof formSchema;
