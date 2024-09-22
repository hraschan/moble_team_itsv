<script lang="ts">
	import CircleUser from 'lucide-svelte/icons/circle-user';
	import { LineChart } from 'lucide-svelte/icons';
	import Package from 'lucide-svelte/icons/package';
	import { Home } from 'lucide-svelte/icons';
	import ShoppingCart from 'lucide-svelte/icons/shopping-cart';
	import Bell from 'lucide-svelte/icons/bell';
	import Menu from 'lucide-svelte/icons/menu';
	import Package2 from 'lucide-svelte/icons/package-2';
	import Search from 'lucide-svelte/icons/search';
	import { Users } from 'lucide-svelte';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import * as Sheet from '$lib/components/ui/sheet/index.js';
	import { ServerCog } from 'lucide-svelte';
	import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';
	import { page } from '$app/stores';
	import type { Icon } from 'lucide-svelte';

	import type { ComponentType } from 'svelte';
	import { Mobile } from 'svelte-radix';
	import { ModeWatcher } from 'mode-watcher';
	import type { PageData } from './$types';
	import { enhance } from '$app/forms';
	type MenuItem = {
		name: string;
		href: string;
		icon: ComponentType<Icon>;
	};

	export let data: PageData;
	const { team, role } = data;
	let form: HTMLFormElement;
	const menu: MenuItem[] = [
		{ name: 'Home', href: '/dashboard/home', icon: Home },
		{ name: 'Maintenance', href: '/dashboard/maintenance', icon: ServerCog }
	];

	role === 'admin' && menu.push({ name: 'Users', href: '/dashboard/users', icon: Users });

	console.log('$page.url.pathname', $page.url);
</script>

<div class="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
	<div class="hidden border-r bg-muted/40 md:block">
		<div class="flex h-full max-h-screen flex-col gap-2">
			<div class="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
				<a href="/" class="flex items-center gap-2 font-semibold">
					<!-- <Mobile class="h-8 w-8" /> -->
					<div class="flex flex-col">
						<div class="flex gap-1">
							<span class="text-base">{data.firstname} </span>
							<span class="hidden lg:block">{data.lastname}</span>
						</div>
						<span class="hidden text-sm font-normal text-muted-foreground lg:block">{team}</span>
					</div>
				</a>
				<Button variant="outline" size="icon" class="ml-auto h-8 w-8">
					<Bell class="h-4 w-4" />
					<span class="sr-only">Toggle notifications</span>
				</Button>
			</div>
			<div class="flex-1">
				<nav class="grid items-start px-2 text-sm font-medium lg:px-4">
					{#each menu as menuItem}
						<a
							href={menuItem.href}
							class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
							class:active={$page.url.pathname.includes(menuItem.href)}
						>
							<svelte:component this={menuItem.icon} class="h-4 w-4" />
							{menuItem.name}
						</a>
					{/each}
				</nav>
			</div>
		</div>
	</div>
	<div class="flex flex-col">
		<header class="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
			<Sheet.Root>
				<Sheet.Trigger asChild let:builder>
					<Button variant="outline" size="icon" class="shrink-0 md:hidden" builders={[builder]}>
						<Menu class="h-5 w-5" />
						<span class="sr-only">Toggle navigation menu</span>
					</Button>
				</Sheet.Trigger>
				<Sheet.Content side="left" class="flex flex-col">
					<nav class="grid gap-2 text-lg font-medium">
						{#each menu as menuItem}
							<a
								href={menuItem.href}
								class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary"
								class:active={$page.url.pathname == menuItem.href}
							>
								<svelte:component this={menuItem.icon} class="h-4 w-4" />
								{menuItem.name}
							</a>
						{/each}
					</nav>
					<div class="mt-auto"></div>
				</Sheet.Content>
			</Sheet.Root>
			<!-- <div class="w-full flex-1">
				<form>
					<div class="relative">
						<Search class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
						<Input
							type="search"
							placeholder="Search products..."
							class="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
						/>
					</div>
				</form>
			</div> -->
			<ThemeSwitch class="ml-auto" />
			<DropdownMenu.Root>
				<DropdownMenu.Trigger asChild let:builder>
					<Button builders={[builder]} variant="secondary" size="icon" class="rounded-full">
						<CircleUser class="h-5 w-5" />
						<span class="sr-only">Toggle user menu</span>
					</Button>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content align="end">
					<DropdownMenu.Label>My Account</DropdownMenu.Label>
					<DropdownMenu.Separator />
					<DropdownMenu.Item>Settings</DropdownMenu.Item>
					<DropdownMenu.Item>Support</DropdownMenu.Item>
					<DropdownMenu.Separator />
					<form method="post" action="/dashboard?/logout" use:enhance bind:this={form}>
						<!-- <button type="submit" class="w-full text-left">Logout</button> -->

						<DropdownMenu.Item type="submit" on:click={() => form.submit()}
							>Logout</DropdownMenu.Item
						>
					</form>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</header>
		<slot />
	</div>
</div>

<style>
	.active {
		color: #facc15;
	}
</style>
