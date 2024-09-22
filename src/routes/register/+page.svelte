<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import * as Select from '$lib/components/ui/select/index.js';
	import SuperDebug, { superForm, type Infer, type SuperValidated } from 'sveltekit-superforms';
	import { formSchema, type FormSchema } from './schema';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import * as Form from '$lib/components/ui/form';
	import { Field } from 'formsnap';
	import FormLegend from '$lib/components/ui/form/form-legend.svelte';
	import { browser } from '$app/environment';
	import { capitalizeFirstLetter } from '$lib/utils';
	export let data: SuperValidated<Infer<FormSchema>>;

	const form = superForm(data, {
		validators: zodClient(formSchema),
		dataType: 'json'
	});

	const { form: formData, enhance } = form;

	$: selectedTeam = $formData.team
		? {
				label: capitalizeFirstLetter($formData.team),
				value: $formData.team
			}
		: undefined;
</script>

{#if browser}
	<SuperDebug data={$formData} />
{/if}
<main class="flex h-screen items-center justify-center">
	<form method="post" use:enhance>
		<Card.Root class="mx-auto max-w-sm">
			<Card.Header>
				<Card.Title class="text-xl">Sign Up</Card.Title>
				<Card.Description>Enter your information to create an account</Card.Description>
			</Card.Header>
			<Card.Content>
				<div class="grid gap-4">
					<div class="grid grid-cols-2 gap-4">
						<div class="grid gap-2">
							<Form.Field {form} name="firstname">
								<Form.Control let:attrs>
									<Label>Firstname</Label>
									<Input {...attrs} bind:value={$formData.firstname} placeholder="Max" />
								</Form.Control>
								<Form.FieldErrors />
							</Form.Field>
						</div>
						<div class="grid gap-2">
							<Form.Field {form} name="lastname">
								<Form.Control let:attrs>
									<Label>Lastname</Label>
									<Input {...attrs} bind:value={$formData.lastname} placeholder="Mustermann" />
								</Form.Control>
								<Form.FieldErrors />
							</Form.Field>
						</div>
					</div>
					<div class="grid gap-2">
						<Form.Field {form} name="team">
							<Form.Control let:attrs>
								<Label for="team">Team</Label>
								<Select.Root
									name="team"
									selected={selectedTeam}
									onSelectedChange={(v) => {
										v && ($formData.team = v.value);
									}}
								>
									<Select.Trigger {...attrs}>
										<Select.Value placeholder="Team" />
									</Select.Trigger>
									<Select.Content>
										<Select.Item value="booster" label="Booster">Booster</Select.Item>
										<Select.Item value="frodo" label="Frodo">Frodo</Select.Item>
										<Select.Item value="gollum" label="Gollum">Gollum</Select.Item>
									</Select.Content>
								</Select.Root>
								<input hidden bind:value={$formData.team} name={attrs.name} />
							</Form.Control>
							<Form.FieldErrors />
						</Form.Field>
					</div>
					<div class="grid gap-2">
						<Form.Field {form} name="username">
							<Form.Control let:attrs>
								<Label>Username</Label>
								<Input {...attrs} bind:value={$formData.username} placeholder="mobile_team" />
							</Form.Control>
							<Form.FieldErrors />
						</Form.Field>
					</div>
					<div class="grid gap-2">
						<Form.Field {form} name="password">
							<Form.Control let:attrs>
								<Label>Password</Label>
								<Input {...attrs} bind:value={$formData.password} type="password" />
							</Form.Control>
							<Form.FieldErrors />
						</Form.Field>
					</div>
					<Button type="submit" class="w-full">Create an account</Button>
					<Button variant="outline" class="w-full">Sign up with GitHub</Button>
				</div>
				<div class="mt-4 text-center text-sm">
					Already have an account?
					<a href="/login" class="underline">Sign in </a>
				</div>
			</Card.Content>
		</Card.Root>
	</form>
</main>
