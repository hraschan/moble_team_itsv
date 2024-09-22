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

	import * as Form from '$lib/components/ui/form';
	import * as Select from '$lib/components/ui/select';
	import SuperDebug, { superForm, type Infer, type SuperValidated } from 'sveltekit-superforms';
	import { formSchema, type FormSchema } from './schema';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { capitalizeFirstLetter } from '$lib/utils';
	export let data: SuperValidated<Infer<FormSchema>>;

	const form = superForm(data, {
		validators: zodClient(formSchema),
		dataType: 'json'
	});

	const { form: formData, enhance } = form;

	$: selectedApp = $formData.app
		? {
				label: capitalizeFirstLetter($formData.app),
				value: $formData.app
			}
		: undefined;
</script>

<main class="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
	<div class="flex items-center">
		<Breadcrumbs
			breadcrumbs={[
				{ label: 'Maintenance', url: '/dashboard/maintenance' },
				{
					label: 'Add Maintenance Alert',
					url: `/dashboard/maintenance/add`
				}
			]}
		/>
	</div>
	<div class="flex flex-1 items-center justify-center">
		<Card.Root class="p-6">
			<Card.Header class="pb-3">
				<h1 class="mb-2 text-balance text-2xl font-bold tracking-tight">Add maintenance alert</h1>
			</Card.Header>
			<Card.Content>
				<form method="POST" action="?/update" class="flex flex-col gap-4 md:min-w-80" use:enhance>
					<div class="grid gap-2">
						<Form.Field {form} name="team">
							<Form.Control let:attrs>
								<Label for="team">App</Label>
								<Select.Root
									name="team"
									selected={selectedApp}
									onSelectedChange={(v) => {
										v && ($formData.app = v.value);
									}}
								>
									<Select.Trigger {...attrs}>
										<Select.Value placeholder="App" />
									</Select.Trigger>
									<Select.Content>
										<Select.Item value="OeGKApp">MeineÖGK</Select.Item>
										<Select.Item value="bvaebApp">MeineBVAEB</Select.Item>
										<Select.Item value="svStatApp">SV Stat</Select.Item>
									</Select.Content>
								</Select.Root>
								<input hidden bind:value={$formData.team} name={attrs.name} />
							</Form.Control>
							<Form.FieldErrors />
						</Form.Field>
					</div>
					<div class="grid gap-2">
						<Form.Field {form} name="title">
							<Form.Control let:attrs>
								<Label>Title</Label>
								<Input
									{...attrs}
									bind:value={$formData.title}
									placeholder="Allgemeine Information"
								/>
							</Form.Control>
						</Form.Field>
					</div>
					<div class="grid gap-2">
						<Form.Field {form} name="message">
							<Form.Control let:attrs>
								<Label>Message</Label>
								<Textarea
									{...attrs}
									bind:value={$formData.message}
									placeholder="Enter your message here"
								/>
							</Form.Control>
						</Form.Field>
					</div>

					<div class="grid gap-2">
						<Form.Field {form} name="startTime">
							<Form.Control let:attrs>
								<Label>Start date time</Label>
								<Input type="datetime-local" {...attrs} bind:value={$formData.startTime} />
							</Form.Control>
						</Form.Field>
					</div>
					<div class="grid gap-2">
						<Form.Field {form} name="endTime">
							<Form.Control let:attrs>
								<Label>End date time</Label>
								<Input type="datetime-local" {...attrs} bind:value={$formData.endTime} />
							</Form.Control>
						</Form.Field>
					</div>

					<Button type="submit">Create</Button>
				</form>
			</Card.Content>
			<Card.Footer></Card.Footer>
		</Card.Root>
	</div>
</main>
