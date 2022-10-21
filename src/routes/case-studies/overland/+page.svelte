<script>
	import topPhoto from '../../../assets/img/overland/photo-1.jpg';
	import photo2 from '../../../assets/img/overland/photo-2.jpg';
	import photo3 from '../../../assets/img/overland/photo-3.jpg';
	import photo4 from '../../../assets/img/overland/photo-4.jpg';
	import photo5 from '../../../assets/img/overland/photo-5.jpg';
	import photo6 from '../../../assets/img/overland/photo-6.jpg';
	import photo7 from '../../../assets/img/overland/photo-7.jpg';
</script>

<svelte:head>
	<title>Case Study | Overland_LRD</title>
</svelte:head>

<div class="p-4">
	<div class="grid lg:grid-cols-2">
		<div>
			<h1
				class="pt-6 pl-6 mt-6 mb-2 font-montserrat font-bold text-2xl text-charcoal hover:text-black transition-all lg:text-left lg:text-5xl "
			>
				<a href="https://www.instagram.com/overland_lrd/" target="_blank" rel="noopener noreferrer">
					@OVERLAND_LRD
				</a>
			</h1>
		</div>
		<div>
			<div class="lg:p-6">
				<img class="mx-auto w-10/12 " src={topPhoto} alt="Header" />
			</div>
		</div>
	</div>

	<p
		class="decoration-nova decoration-4 underline underline-offset-8 font-thin uppercase text-xs tracking-widest p-6 lg:mx-10"
	>
		Premise
	</p>
	<div class="grid lg:grid-cols-2 p-6 lg:mx-10">
		<div>
			<h1 class="font-montserrat font-bold text-2xl ">
				Deliver images capable of reaching a national community, in one hour
			</h1>
		</div>
		<div>
			<p>
				With only one chance to meet, we produced content that resulted in a combined reach of over
				11K accounts. Our collaborative and flexible approach enabled us to deliver well-aligned
				visuals that gained interest of official brands and created organic interactions with
				enthusiasts.
			</p>
		</div>
	</div>
	<p
		class="decoration-nova decoration-4 underline underline-offset-8 font-thin uppercase text-xs tracking-widest p-6 lg:mx-10"
	>
		Execution
	</p>
	<div class="grid lg:grid-cols-2 p-6 lg:mx-10">
		<div>
			<h1 class="font-montserrat font-bold text-2xl ">
				A well-defined strategy that builds connections
			</h1>
		</div>
		<div>
			<p>
				Our content production project was centered around the very experience Overland_LRD is all
				about: exploring the great outdoors.
			</p>
		</div>
	</div>
	<p
		class="decoration-nova decoration-4 underline underline-offset-8 font-thin uppercase text-xs tracking-widest p-6 lg:mx-10"
	>
		Results
	</p>
	<div class="grid lg:grid-cols-2 p-6 lg:mx-10">
		<div>
			<h1 class="font-montserrat font-bold text-2xl ">
				Driving social media growth over 600%, with just two posts
			</h1>
		</div>
		<div>
			<p>
				We published effective, thoughtfully-designed posts that reached all-time analytic highs
				without paid promotion. Of note:
			</p>
			<br />
			<div>
				<p class="text-lg font-bold mb-2">
					Website Clicks <span class="text-green-600">+200%</span>
				</p>
				<p class="text-lg font-bold mb-2">
					Post Interactions <span class=" text-green-600">+130%</span>
				</p>
				<p class="text-lg font-bold mb-2">
					Accounts engaged <span class=" text-green-600">+376%</span>
				</p>
				<p class="text-lg font-bold mb-2">Impressions <span class=" text-green-600">+791%</span></p>
			</div>
		</div>
	</div>
	<div>
		<h1 class="p-6 mb-2 font-montserrat font-bold text-2xl lg:text-left lg:text-5xl ">
			DELIVERABLES
		</h1>
		<div class="grid grid-cols-2 lg:grid-cols-3 gap-4">
			<img src={photo2} alt="featured item 1" />
			<img src={photo3} alt="featured item 2" />
			<img src={photo4} alt="featured item 3" />
			<img src={photo5} alt="featured item 4" />
			<img src={photo6} alt="featured item 5" />
			<img src={photo7} alt="featured item 6" />
		</div>
	</div>
</div>
