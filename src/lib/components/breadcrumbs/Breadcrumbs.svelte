<script lang="ts">
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
	import type { BreadcrumbsProps } from './Breadcrumbs';

	export let breadcrumbs: BreadcrumbsProps['breadcrumbs'] = [];
</script>

<Breadcrumb.Root>
	<Breadcrumb.List>
		{#each breadcrumbs as breadcrumb, index}
			<Breadcrumb.Item>
				{#if index < breadcrumbs.length - 1}
					<Breadcrumb.Link href={breadcrumb.url}>{breadcrumb.label}</Breadcrumb.Link>
				{:else}
					<Breadcrumb.Page>{breadcrumb.label}</Breadcrumb.Page>
				{/if}
			</Breadcrumb.Item>
			{#if index < breadcrumbs.length - 1}
				<Breadcrumb.Separator />
			{/if}
		{/each}
	</Breadcrumb.List>
</Breadcrumb.Root>
