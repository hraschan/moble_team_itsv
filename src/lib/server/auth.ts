import { Lucia, TimeSpan } from 'lucia';
import { DrizzlePostgreSQLAdapter } from '@lucia-auth/adapter-drizzle';
import { userTable } from './user';
import { sessionTable } from './session';
import { db } from '../';
import { dev } from '$app/environment';
import { capitalizeFirstLetter } from '$lib/utils';

const adapter = new DrizzlePostgreSQLAdapter(db, sessionTable, userTable);

interface DatabaseUserAttributes {
	username: string;
	firstName: string;
	lastName: string;
	team: string;
	role: string;
}

export const lucia = new Lucia(adapter, {
	sessionExpiresIn: new TimeSpan(2, 'w'),
	sessionCookie: {
		attributes: {
			// set to `true` when using HTTPS
			secure: !dev
		}
	},
	getUserAttributes: (attributes) => {
		return {
			// attributes has the type of DatabaseUserAttributes
			username: attributes.username,
			firstname: attributes.firstName,
			lastname: attributes.lastName,
			team: capitalizeFirstLetter(attributes.team),
			role: attributes.role
		};
	}
});

declare module 'lucia' {
	interface Register {
		Lucia: typeof lucia;
		DatabaseUserAttributes: DatabaseUserAttributes;
	}
}
