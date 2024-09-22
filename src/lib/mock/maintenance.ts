import type { APP_TYPE } from '$lib/types/Maintenance';
import OeGKAppAlerts from './OeGKAppAlerts.json';
import bvaebAppAlerts from './bvaebAppAlerts.json';
import svStatAppAlerts from './svStatAppAlerts.json';

export const getAllMaintenanceMock = (app: APP_TYPE) => {
	switch (app) {
		case 'OeGKApp':
			return OeGKAppAlerts.OeGKAppAlerts;
		case 'bvaebApp':
			return bvaebAppAlerts.bvaebAppAlerts;
		case 'svStatApp':
			return svStatAppAlerts.svStatAppAlerts;
		default:
			return [];
	}
};
