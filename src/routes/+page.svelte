<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
</script>

<div class="w-full md:grid md:grid-cols-2">
	<div class="bg-muted">
		<img
			src={'https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?q=80&w=3465&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D '}
			alt="placeholder"
			class="h-full w-full object-contain dark:brightness-[0.2] dark:grayscale"
		/>
	</div>
	<div class="flex flex-col items-center justify-center gap-2 p-12">
		<h1 class="scroll-m-20 text-balance text-4xl font-extrabold tracking-tight lg:text-5xl">
			Mobile Team Dashboard
		</h1>

		<h3 class="scroll-m-20 text-balance text-2xl font-semibold tracking-tight text-foreground/50">
			Maintenance and more!
		</h3>
		<Button href="/dashboard/maintenance" class="mt-4">Go to dashboard</Button>
	</div>
</div>
