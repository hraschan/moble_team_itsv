<script lang="ts">
	import Breadcrumbs from '$lib/components/breadcrumbs/Breadcrumbs.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
</script>

<main class="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
	<div class="flex items-center">
		<Breadcrumbs breadcrumbs={[{ label: 'Dashboard', url: '/dashboard' }]} />
	</div>
	<div class="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
		<div class="flex flex-col items-center gap-1 text-center">
			<h3 class="text-2xl font-bold tracking-tight">You have no products</h3>
			<p class="text-sm text-muted-foreground">
				You can start selling as soon as you add a product.
			</p>
			<Button class="mt-4">Add Product</Button>
		</div>
	</div>
</main>
