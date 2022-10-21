<script>
	export let currentSelection;
	export let totalImages = 0;
	export let previewShowing;
	export let image = '';
	export let altImg = '';
</script>

<div class="max-w-2xl hide" class:show={previewShowing}>
	<div class="rounded-md drop-shadow-2xl">
		<div class="p-4">
			<img draggable="false" src={image} alt={altImg} />
		</div>
	</div>
</div>

<style>
	.hide {
		display: none;
	}

	.show {
		display: block;
	}
</style>
