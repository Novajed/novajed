<script>
	export let name = '';
	export let company = '';
	export let quote = '';
</script>

<div
	class="drop-shadow-2xl border-l-8 border-rusgreen rounded-md bg-midgray text-gray-200 h-full w-5/6 m-auto p-10"
>
	<p class="text-lg">"{quote}"</p>
	<br />
	<p class="text-sm">{name}, <span class="text-sm">{company}</span></p>
</div>
