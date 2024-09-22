<script lang="ts">
	import Breadcrumbs from '$lib/components/breadcrumbs/Breadcrumbs.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import File from 'lucide-svelte/icons/file';
	import ListFilter from 'lucide-svelte/icons/list-filter';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import * as Table from '$lib/components/ui/table/index.js';
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import dayjs from 'dayjs';
	import type { PageData } from './$types';
	import clsx from 'clsx';
	import MaintenanceTable from '$lib/components/maintenanceTable.svelte';
	import { goto } from '$app/navigation';
	import type { MaintenanceAlert } from '$lib/types/maintenance';

	export let data: PageData;

	const getStatus = (alert: MaintenanceAlert) => {
		const today = dayjs();
		const startDate = dayjs(alert.startTime);
		const endDate = dayjs(alert.endTime);

		if (today.isBefore(startDate)) {
			return 'Upcoming';
		}

		if (today.isAfter(endDate)) {
			return 'Expired';
		}

		return 'Active';
	};
</script>

<main class="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
	<div class="flex items-center">
		<Breadcrumbs breadcrumbs={[{ label: 'Maintenance', url: '/dashboard/maintenance' }]} />
	</div>
	<div class="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
		<Card.Root class=" lg:max-w-[50%]">
			<Card.Header class="pb-3">
				<Card.Title>Your Maintenance alerts</Card.Title>
				<Card.Description class="max-w-lg text-balance leading-relaxed">
					Introducing Our Dynamic Orders Dashboard for Seamless Management and Insightful Analysis.
				</Card.Description>
			</Card.Header>
			<Card.Footer>
				<Button href="/dashboard/maintenance/add">Add Maintenance Alert</Button>
			</Card.Footer>
		</Card.Root>
		<Tabs.Root value="oegk">
			<div class="flex items-center">
				<Tabs.List>
					<Tabs.Trigger value="oegk">MeineÖGK</Tabs.Trigger>
					<Tabs.Trigger value="bveab">MeineBVAEB</Tabs.Trigger>
					<Tabs.Trigger value="svstat">SVStat</Tabs.Trigger>
				</Tabs.List>
				<div class="ml-auto flex items-center gap-2">
					<DropdownMenu.Root>
						<DropdownMenu.Trigger asChild let:builder>
							<Button variant="outline" size="sm" class="h-7 gap-1 text-sm" builders={[builder]}>
								<ListFilter class="h-3.5 w-3.5" />
								<span class="sr-only sm:not-sr-only">Filter</span>
							</Button>
						</DropdownMenu.Trigger>
						<DropdownMenu.Content align="end">
							<DropdownMenu.Label>Filter by</DropdownMenu.Label>
							<DropdownMenu.Separator />
							<DropdownMenu.CheckboxItem checked>Fulfilled</DropdownMenu.CheckboxItem>
							<DropdownMenu.CheckboxItem>Declined</DropdownMenu.CheckboxItem>
							<DropdownMenu.CheckboxItem>Refunded</DropdownMenu.CheckboxItem>
						</DropdownMenu.Content>
					</DropdownMenu.Root>
					<Button size="sm" variant="outline" class="h-7 gap-1 text-sm">
						<File class="h-3.5 w-3.5" />
						<span class="sr-only sm:not-sr-only">Export</span>
					</Button>
				</div>
			</div>
			<Tabs.Content value="oegk">
				<MaintenanceTable alerts={data.maintenanceAlertsOegk} title={'Alerts'} app={'OeGKApp'} />
			</Tabs.Content>
			<Tabs.Content value="bveab">
				<MaintenanceTable alerts={data.maintenanceAlertsBvaeb} app={'bvaebApp'} />
			</Tabs.Content>
			<Tabs.Content value="svstat">
				<MaintenanceTable alerts={data.maintenanceAlertsSvStat} app={'svStatApp'} />
			</Tabs.Content>
		</Tabs.Root>
	</div>
</main>
