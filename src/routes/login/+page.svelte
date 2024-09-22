<script lang="ts">
	import { Root } from '$lib/components/ui/breadcrumb';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import login_image from '$lib/assets/login_background.webp';
	import * as Form from '$lib/components/ui/form';
	import { formSchema, type FormSchema } from './schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	export let data: SuperValidated<Infer<FormSchema>>;

	const form = superForm(data, {
		validators: zodClient(formSchema),
		dataType: 'json'
	});

	const { form: formData, enhance } = form;
</script>

<div class="h-screen w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
	<div class="hidden lg:block">
		<img
			src={login_image}
			alt="Login background"
			class="h-full w-full object-cover dark:brightness-[0.5] dark:grayscale"
		/>
	</div>
	<div class="flex h-screen items-center justify-center py-12">
		<form method="post" class="" use:enhance>
			<Card.Root class="mx-auto grid w-[400px] gap-6 p-6">
				<div class="grid gap-2">
					<h1 class="text-3xl font-bold">Login</h1>
					<p class="text-balance text-muted-foreground">
						Enter your username below to login to your account
					</p>
				</div>
				<div class="grid gap-4">
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
								<div class="flex items-center">
									<Label>Password</Label>
									<a href="##" class="ml-auto inline-block text-sm underline"
										>Forgot your password?
									</a>
								</div>
								<Input {...attrs} bind:value={$formData.password} type="password" />
							</Form.Control>

							<Form.FieldErrors />
						</Form.Field>
					</div>
					<Button type="submit" class="w-full">Login</Button>
					<Button variant="outline" class="w-full">Login with Github</Button>
				</div>
				<div class="mt-4 text-center text-sm">
					Don&apos;t have an account?
					<a href="/register" class="underline"> Sign up</a>
				</div>
			</Card.Root>
		</form>
	</div>
</div>
