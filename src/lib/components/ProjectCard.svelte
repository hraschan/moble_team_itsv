<script lang="ts">
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import * as Card from '$lib/components/ui/card/index.js';
	import { GitlabIcon } from 'lucide-svelte';
	import Gitlab from 'lucide-svelte/icons/gitlab';

	export let title = 'Project';
	export let description =
		'Welcome to your dashboard. Here you can manage your products, orders, and customers.';
	export let links = [{ name: 'Gitlab', url: 'https://gitlab.com', icon: GitlabIcon }];
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>{title}</Card.Title>
		<Card.Description>
			{description}
		</Card.Description>
		<Card.Content class="flex flex-wrap gap-2 p-0 pt-2">
			{#each links as link}
				<a href={link.url} target="_blank">
					<Badge class="">
						<svelte:component this={link.icon} class="mr-1 h-4 w-4" />
						{link.name}
					</Badge>
				</a>
			{/each}
		</Card.Content>
	</Card.Header>
</Card.Root>
