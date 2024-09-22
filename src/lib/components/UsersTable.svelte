<script lang="ts">
	import * as Table from '$lib/components/ui/table/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import Button from './ui/button/button.svelte';
	import { Delete, Edit, Trash } from 'lucide-svelte';
	import dayjs from 'dayjs';

	interface User {
		id: string;
		firstname: string;
		lastname: string;
		username: string;
		team: string;
		role: 'user' | 'admin';
		created_at: Date;
	}

	export let users: User[] = [];

	export let title = 'Users';

	function editUser(user: User) {
		// goto(`/dashboard/maintenance/${user.id}/${app}`);
		console.log(user);
	}

	const deleteUser = (user: User) => {
		console.log(user);
	};
</script>

<Card.Root>
	<Card.Header class="px-7">
		<Card.Title>{title}</Card.Title>
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
					<Table.Head class="">Firstname</Table.Head>
					<Table.Head class="">Lastname</Table.Head>
					<Table.Head class="hidden lg:table-cell">Username</Table.Head>
					<Table.Head class="hidden md:table-cell">Role</Table.Head>
					<Table.Head class="hidden lg:table-cell">Team</Table.Head>
					<Table.Head class="hidden lg:table-cell">Created At</Table.Head>
					<Table.Head class="hidden lg:table-cell">Edit</Table.Head>
					<Table.Head class="hidden lg:table-cell">Delete</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each users as user}
					<Table.Row class="min-h-64">
						<Table.Cell>
							<div class="">{user.id}</div>
						</Table.Cell>
						<Table.Cell class=" font-semibold ">{user.firstname}</Table.Cell>
						<Table.Cell>
							<div class="font-semibold">{user.lastname}</div>
						</Table.Cell>
						<Table.Cell class="hidden lg:table-cell">{user.username}</Table.Cell>
						<Table.Cell class="hidden lg:table-cell">{user.role}</Table.Cell>
						<Table.Cell class="hidden lg:table-cell">{user.team}</Table.Cell>
						<Table.Cell class="hidden lg:table-cell"
							>{dayjs(user.created_at).format('DD.MM.YYYY HH:mm')}</Table.Cell
						>
						<Table.Cell class="hidden text-center md:table-cell">
							<Button variant="outline" size="icon" class="h-8 w-8" on:click={() => editUser(user)}>
								<Edit class="h-4 w-4" />
								<span class="sr-only">Edit</span>
							</Button>
						</Table.Cell>
						<Table.Cell class="text-cente hidden md:table-cell">
							<Button
								variant="outline"
								size="icon"
								class="h-8 w-8 "
								on:click={() => deleteUser(user)}
							>
								<Trash class="h-4 w-4 text-red-600" />
								<span class="sr-only">Delete</span>
							</Button>
						</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	</Card.Content>
</Card.Root>
