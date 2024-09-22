import { db } from '$lib';
import { userTable } from '$lib/server/user';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	if (locals.user && locals.user.role !== 'admin') {
		return error(403, 'Forbidden');
	}

	try {
		const users = await db
			.select({
				id: userTable.id,
				firstname: userTable.firstName,
				lastname: userTable.lastName,
				username: userTable.username,
				team: userTable.team,
				role: userTable.role,
				created_at: userTable.createdAt
			})
			.from(userTable)
			.limit(10);

		return {
			users
		};
	} catch (e) {
		console.error(e);
		return error(500, 'Internal Server Error');
	}
};
