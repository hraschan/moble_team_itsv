<script lang="ts">
	import { Badge } from '$lib/components/ui/badge/index.js';
	import * as Table from '$lib/components/ui/table/index.js';
	import dayjs from 'dayjs';
	import clsx from 'clsx';
	import type { APP_TYPE, MaintenanceAlert, MaintenanceAlerts } from '$lib/types/Maintenance';
	import * as Card from '$lib/components/ui/card/index.js';
	import { goto } from '$app/navigation';
	import Button from './ui/button/button.svelte';
	import { Delete, Edit, Trash } from 'lucide-svelte';

	export let alerts: MaintenanceAlerts = [];
	export let app: APP_TYPE;
	export let isLoading = false;
	export let title = 'Maintenance Alerts';
	export let subtitle = 'List of all maintenance alerts';

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

	function editAlert(alert: MaintenanceAlert) {
		goto(`/dashboard/maintenance/${alert.id}/${app}`);
		console.log(alert);
	}

	const deleteAlert = (alert: MaintenanceAlert) => {
		console.log(alert);
	};
</script>

<Card.Root>
	<Card.Header class="px-7">
		<Card.Title>{title}</Card.Title>
		<Card.Description>{subtitle}</Card.Description>
	</Card.Header>

	<Card.Content>
		<div
			class="mb-2 text-balance rounded-lg border-2 border-primary bg-primary/20 p-2 text-primary md:hidden"
		>
			Please rotate your device in order to see more data fields!
		</div>
		<Table.Root>
			<Table.Header>
				<Table.Row>
					<Table.Head class="">ID</Table.Head>
					<Table.Head class="">Title</Table.Head>
					<Table.Head class="">Messsage</Table.Head>
					<Table.Head class="hidden lg:table-cell">Button Text</Table.Head>
					<Table.Head class="hidden md:table-cell">Status</Table.Head>
					<Table.Head class="hidden lg:table-cell">Date From</Table.Head>
					<Table.Head class="hidden lg:table-cell">Date Till</Table.Head>
					<Table.Head class="hidden lg:table-cell">Dissmissable</Table.Head>
					<Table.Head class="hidden md:table-cell">Edit</Table.Head>
					<Table.Head class="hidden md:table-cell">Delete</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each alerts as alert}
					<Table.Row class="min-h-64">
						<Table.Cell>
							<div class="">{alert.id}</div>
						</Table.Cell>
						<Table.Cell class=" font-semibold ">{alert.title}</Table.Cell>
						<Table.Cell>
							<div class="font-normal md:max-w-48">{alert.content}</div>
						</Table.Cell>
						<Table.Cell class="hidden lg:table-cell">{alert.buttonText}</Table.Cell>
						<Table.Cell class="hidden md:table-cell">
							<Badge
								class={clsx(`text-sm text-white`, {
									'bg-primary': getStatus(alert) === 'Active',
									'bg-slate-500': getStatus(alert) === 'Upcoming',
									'bg-red-700': getStatus(alert) === 'Expired'
								})}
								variant="secondary">{getStatus(alert)}</Badge
							>
						</Table.Cell>
						<Table.Cell class="hidden lg:table-cell"
							>{dayjs(alert.startTime).format('DD.MM.YYYY HH:mm')}</Table.Cell
						>
						<Table.Cell class="hidden lg:table-cell"
							>{dayjs(alert.endTime).format('DD.MM.YYYY HH:mm')}</Table.Cell
						>
						<Table.Cell class="hidden lg:table-cell">
							{alert.dismissible ? 'Yes' : 'No'}
						</Table.Cell>
						<Table.Cell class="hidden text-center md:table-cell">
							<Button
								variant="outline"
								size="icon"
								class="h-8 w-8"
								on:click={() => editAlert(alert)}
							>
								<Edit class="h-4 w-4" />
								<span class="sr-only">Edit</span>
							</Button>
						</Table.Cell>
						<Table.Cell class="text-cente hidden md:table-cell">
							<Button
								variant="outline"
								size="icon"
								class="h-8 w-8 "
								on:click={() => deleteAlert(alert)}
							>
								<Trash class="h-4 w-4 text-red-600" />
								<span class="sr-only">Edit</span>
							</Button>
						</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	</Card.Content>
</Card.Root>
