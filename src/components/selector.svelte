<script>
	export let presetName = '';
</script>

<div class="font-roboto font-bold mt-4 text-gray-400 text-center text-2xl">
	<button
		tabindex="0"
		on:click
		class="lg:mb-4 transition transform cursor-pointer focus:text-carrot">{presetName}</button
	>
</div>
