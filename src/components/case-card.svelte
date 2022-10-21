<script>
	import Label from '../components/category-label.svelte';

	export let cardTitle = '';
	export let categories = [''];
	export let route = '';
	export let imgSrc = '';

	console.log(imgSrc);
</script>

<a class="" href={route}>
	<div
		style="background-image: url('{imgSrc}'); background-size: cover"
		class="py-10  my-2 lg:h-[26rem] border-none drop-shadow-lg rounded-md z-0"
	>
		<div class="grid grid-rows-2 p-4 ml-4 lg:mt-40 text-white uppercase place-self-end z-0">
			<div class="flex">
				{#each categories as categories}
					<Label category={categories} />
				{/each}
			</div>
			<h1 class="font-montserrat text-3xl lg:text-4xl">{cardTitle}</h1>
		</div>
	</div>
</a>
