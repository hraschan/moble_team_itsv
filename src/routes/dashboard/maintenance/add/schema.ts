import { z } from 'zod';
export const TEAM_ENUM_ARRAY: readonly [string, ...string[]] = ['booster', 'gollum', 'frodo'];

export const formSchema = z.object({
	app: z.enum(['OeGKApp', 'bvaebApp', 'svStatApp']),
	title: z.string().min(1).max(100),
	message: z.string().min(1),
	startTime: z.string().datetime().is,
	endTime: z.string().datetime(),
	buttonText: z.string().min(1).max(100),
	dismissable: z.boolean(),
	team: z.enum(TEAM_ENUM_ARRAY)
});

export type FormSchema = typeof formSchema;
