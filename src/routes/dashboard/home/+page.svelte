<script lang="ts">
	import Breadcrumbs from '$lib/components/breadcrumbs/Breadcrumbs.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { Code, GitlabIcon, Phone, Smartphone } from 'lucide-svelte';
	import type { PageData } from './$types';
	import { Mobile } from 'svelte-radix';
	export let data: PageData;
</script>

<main class="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
	<div class="flex items-center">
		<Breadcrumbs breadcrumbs={[{ label: 'Home', url: '/dashboard/home' }]} />
	</div>
	<div class="grid gap-8 md:grid-cols-3">
		<ProjectCard
			title={'Meine ÖGK'}
			links={[
				{
					name: 'Gitlab',
					icon: GitlabIcon,
					url: 'https://gitlab.seu.sozvers.at/SVAPPS/MEINEOEGK-EXPO'
				},
				{ name: 'EAS Expo', icon: Code, url: 'https://expo.dev/accounts/itsv/projects/meineoegk' },
				{ name: 'Expo Docs', icon: Smartphone, url: 'https://docs.expo.dev/' }
			]}
		/>
		<ProjectCard title={'MeineBVAEB'} />
		<ProjectCard title={'MAAP'} />
		<ProjectCard title={'EIPAPP'} />
	</div>
</main>
