<script>
	import PresetSlider from '../../components/preset-slider.svelte';
	import Selector from '../../components/selector.svelte';
	import p1 from '../../assets/img/p-1.png';
	import p2 from '../../assets/img/p-2.jpeg';
	import p3 from '../../assets/img/p-3.jpeg';
	import p4 from '../../assets/img/p-4.jpeg';

	let previews = [
		{
			id: 0,
			name: 'LowMellow',
			src: p1,
			alt: 'preview one'
		},
		{
			id: 1,
			name: 'NVJD Beach',
			src: p2,
			alt: 'preview two'
		},
		{
			id: 2,
			name: 'Cool Evening',
			src: p3,
			alt: 'preview three'
		},
		{
			id: 3,
			name: 'Supra',
			src: p4,
			alt: 'four'
		}
	];

	let selectedPreview = 0;

	const selectPreview = (previewNumber) => (selectedPreview = previewNumber);
</script>

<svelte:head>
	<title>NOVAJED Creative Preset Pack Vol 1 | Novajed</title>
</svelte:head>

<div class="p-6">
	<div
		class="grid md:grid-cols-2 gap-x-1 gap-y-4 md:gap-x-4 md:p-3 place-content-center p-3 lg:p-14 lg:ml-5"
	>
		<div class="m-auto">
			{#each previews as { id, src, alt }}
				<PresetSlider
					image={src}
					totalimages={previews.length}
					previewShowing={id === selectedPreview}
					currentSelection={id + 1}
					altImg={alt}
				/>
			{/each}

			<div class="max-w-lg grid grid-cols-2 m-auto">
				{#each previews as { id, name }}
					<Selector presetName={name} on:click={() => selectPreview(id)} />
				{/each}
			</div>
		</div>
		<div class="mt-6">
			<h2 class="font-bold whitespace-pre-wrap text-2xl lg:text-3xl lg:w-2/3 ">
				NOVAJED Creative Pack Vol 1
			</h2>
			<h3 class="text-lg font-bold">$15 USD</h3>
			<h2 class="whitespace-pre-wrap text-2xl lg:text-3xl text-charcoal">
				Enhance your creative workflow with custom Lightroom Presets
			</h2>
			<ul class="p-2">
				<li>- 10 Adobe Lightroom Presets (XMP Files)</li>
				<li>- Installation Guide (PDF)</li>
				<li>- Primarily suitable for daytime photograhpy</li>
				<li>- Compatible with Adobe Lightroom CC, Classic, and Mobile</li>
				<li>- Requires Lightroom V7 and above</li>
			</ul>

			<button class="bg-rusgreen mt-6 mb-6 purchase-btn">
				<a
					href="https://buy.stripe.com/aEU02g9xJ1dnaVa7ss"
					target="_blank"
					rel="noopener noreferrer"
				>
					<h4 class="text-black text-lg font-medium">Purchase</h4>
				</a>
			</button>
			<p>
				<span class="font-bold">Terms of Agreement:</span> Returns, cancellations, and exchanges will
				not be accepted. Preset-related inquiries can be directed to 'info@novajed.com'
			</p>
			<br />
		</div>
	</div>
</div>

<style>
	.purchase-btn {
		min-height: 4em;
		width: 40%;
		padding: 0.5em 0em;
	}
</style>
