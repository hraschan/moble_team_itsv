<script lang="ts">
	import { Sun } from 'lucide-svelte';

	import { toggleMode } from 'mode-watcher';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Moon } from 'lucide-svelte';

	import type { HTMLButtonAttributes } from 'svelte/elements';
	let className: HTMLButtonAttributes['class'] = undefined;
	export { className as class };
</script>

<Button on:click={toggleMode} variant="outline" size="icon" class={className}>
	<Sun
		class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
	/>
	<Moon
		class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
	/>
	<span class="sr-only">Toggle theme</span>
</Button>
