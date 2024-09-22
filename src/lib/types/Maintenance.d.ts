export type MaintenanceAlert = {
	id: string;
	title: string;
	content: string;
	buttonText: string;
	dismissible: boolean;
	startTime: string;
	endTime: string;
};

export type MaintenanceAlerts = Array<MaintenanceAlert>;

export type APP_TYPE = 'OeGKApp' | 'bvaebApp' | 'svStatApp';
