import type { LayoutServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: LayoutServerLoad = async ({ locals }) => {
	if (!locals.user) redirect(302, '/login');

	return {
		id: locals.user.id,
		username: locals.user.username,
		team: locals.user.team,
		firstname: locals.user.firstname,
		lastname: locals.user.lastname,
		role: locals.user.role
	};
};
