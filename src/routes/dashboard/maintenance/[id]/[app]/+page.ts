import { getAllMaintenanceMock } from '$lib/mock/maintenance.js';
import type { APP_TYPE } from '$lib/types/maintenance.js';
import { error } from '@sveltejs/kit';

export const load = ({ params }) => {
	const app = params.app as string;
	const id = params.id as string;

	if (!app || !id) {
		throw error(404, { message: 'Maintenance alert with this id or appid was not found' });
	}

	const alert = getAllMaintenanceMock(app as APP_TYPE).find((alert) => alert.id === id);
	if (!alert) {
		throw error(404, { message: 'Alert not found' });
	}

	return {
		alert,
		app
	};
};
