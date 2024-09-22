import { getAllMaintenanceMock } from '$lib/mock/maintenance.js';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ locals }) => {
	// if (!locals.user) redirect(302, '/login');
	const headers = new Headers();
	headers.set('Authorization', 'Basic ' + btoa('admin' + ':' + 'admin'));

	const test = await fetch(
		'http://lvgmobapps02e.test.sozvers.at:8180/mbc-maintenance/api/rest/dashboard/maintenance/all?X-sv-mobile-appid=OeGKApp',
		{
			mode: 'no-cors',
			method: 'GET',
			credentials: 'include',
			headers: {
				Authorization: 'Basic YWRtaW46YWRtaW4=',
				Accept: 'application/json',
				'User-Agent':
					'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
			}
		}
	).catch((error) => {
		console.error('Error:', error);
	});
	console.log(test);
	// const maintenanceAlertsOegk = await axios.get(
	// 	'http://lvgmobapps02e.test.sozvers.at:8180/mbc-maintenance/api/rest/dashboard/maintenance/all?X-sv-mobile-appid=OeGKApp',
	// 	{
	// 		headers: {
	// 			Authorization: 'Basic YWRtaW46YWRtaW4=',
	// 			Accept: 'application/json',
	// 			'Access-Control-Allow-Origin': 'localhost',
	// 			'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS'
	// 		}
	// 	}
	// );
	// console.log(maintenanceAlertsOegk);

	const maintenanceAlertsOegk = getAllMaintenanceMock('OeGKApp').sort(
		(a, b) => Date.parse(b.startTime) - Date.parse(a.startTime)
	);

	const maintenanceAlertsBvaeb = getAllMaintenanceMock('bvaebApp').sort(
		(a, b) => Date.parse(b.startTime) - Date.parse(a.startTime)
	);

	const maintenanceAlertsSvStat = getAllMaintenanceMock('svStatApp').sort(
		(a, b) => Date.parse(b.startTime) - Date.parse(a.startTime)
	);

	return {
		maintenanceAlertsOegk,
		maintenanceAlertsBvaeb,
		maintenanceAlertsSvStat
	};
};
