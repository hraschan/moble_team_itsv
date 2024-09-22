import { redirect } from '@sveltejs/kit';

export const actions = {
	update: async ({ request }) => {
		const formData = await request.formData();

		console.log(formData);
		redirect(300, '/dashboard/maintenance');
		// …
	},
	delete: async ({ request }) => {
		// …
	}
};
