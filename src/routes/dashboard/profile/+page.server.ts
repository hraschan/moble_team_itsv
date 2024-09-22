import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	return {
		id: locals.user.id,
		username: locals.user.username,
		team: locals.user.team,
		firstname: locals.user.firstname,
		lastname: locals.user.lastname,
		role: locals.user.role
	};
};
