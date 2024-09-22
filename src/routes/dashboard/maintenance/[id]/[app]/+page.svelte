<script lang="ts">
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import * as Card from '$lib/components/ui/card/index.js';
	import Label from '$lib/components/ui/label/label.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
	import Breadcrumbs from '$lib/components/breadcrumbs/Breadcrumbs.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import dayjs from 'dayjs';
	import Switch from '$lib/components/ui/switch/switch.svelte';
	import Textarea from '$lib/components/ui/textarea/textarea.svelte';
	import type { PageData } from './$types';
	import { appendFile } from 'fs';

	export let data: PageData;
	let startTime = dayjs(data.alert?.startTime).format('YYYY-MM-DDTHH:mm');
	let endTime = dayjs(data.alert?.endTime).format('YYYY-MM-DDTHH:mm');
</script>

<main class="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
	<div class="flex items-center">
		<Breadcrumbs
			breadcrumbs={[
				{ label: 'Maintenance', url: '/dashboard/maintenance' },
				{
					label: data.alert?.title ?? 'Alert',
					url: `/dashboard/maintenance/${data.alert?.id}/${data.app}`
				}
			]}
		/>
	</div>
	<div class="flex flex-1 items-center justify-center">
		<Card.Root class="p-6">
			<Card.Header class="pb-3">
				<h1 class="mb-2 text-balance text-2xl font-bold tracking-tight">
					Update maintenance alert - {data.alert.title}
				</h1>
			</Card.Header>
			<Card.Content>
				<form method="POST" action="?/update" class="flex flex-col gap-6 md:min-w-80">
					<div class="grid gap-2">
						<Label for="app" class="">App</Label>
						<Input type="text" id="title" name="title" placeholder={data.app} disabled />
					</div>
					<div class="grid gap-2">
						<Label for="title" class="">Title</Label>
						<Input type="text" id="title" name="title" value={data.alert?.title} />
					</div>
					<div class="grid gap-2">
						<Label for="message">Message</Label>
						<Textarea id="message" name="message" value={data.alert?.content} />
					</div>
					<div class="grid gap-2">
						<Label for="startTime">Start Date Time</Label>
						<Input type="datetime-local" id="startTime" name="startTime" value={startTime} />
					</div>
					<div class="grid gap-2">
						<Label for="endTime">End Date Time</Label>
						<Input type="datetime-local" id="endTime" name="endTime" value={endTime} />
					</div>
					<div class="flex flex-col justify-center gap-6 md:grid md:grid-cols-2">
						<div class="grid gap-2">
							<Label for="button-text">Button Text</Label>
							<Input id="button-text" name="button-text" value={data.alert?.buttonText} />
						</div>
						<div class="grid gap-2">
							<Label for="dismissable">Dismissible</Label>
							<Switch id="dismissable" name="dismissable" checked={data.alert.dismissible} />
						</div>
					</div>
					<Button type="submit">Update</Button>
				</form>
			</Card.Content>
			<Card.Footer></Card.Footer>
		</Card.Root>
	</div>
</main>
