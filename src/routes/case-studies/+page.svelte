<script>
	import card1 from '../../assets/img/card-images/overland-wide-2-1.jpeg';
	import card2 from '../../assets/img/card-images/mazda-wide-1.jpeg';
	import CaseCard from '../../components/case-card.svelte';

	let caseStudies = [
		{
			title: '@Overland_LRD',
			categories: ['Content Strategy', 'Photography'],
			src: card1,
			route: 'case-studies/overland'
		}
		// {
		// 	title: 'Mazda3',
		// 	categories: ['Photography'],
		// 	src: card2,
		// 	route: '/mazda-3'
		// }
	];
</script>

<svelte:head>
	<title>Case Studies | Our work in action</title>
</svelte:head>

<div class="p-1">
	<div />

	<div class="grid lg:grid-cols-2 justify-center gap-6 p-4 z-0">
		{#each caseStudies as { title, categories, src, route }}
			<CaseCard cardTitle={title} {categories} imgSrc={src} {route} />
		{/each}
	</div>
</div>
