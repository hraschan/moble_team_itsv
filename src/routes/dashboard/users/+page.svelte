<script lang="ts">
	import UsersTable from '../../../lib/components/UsersTable.svelte';
	import Breadcrumbs from '$lib/components/breadcrumbs/Breadcrumbs.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<main class="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
	<div class="flex items-center">
		<Breadcrumbs breadcrumbs={[{ label: 'Users', url: '/dashboard/users' }]} />
	</div>
	<div class="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
		<UsersTable users={data.users} />
	</div>
</main>
