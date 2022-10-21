<script>
	import webdev from '../assets/img/webdev.png';
	import overland from '../assets/img/overland/photo-2.jpg';

	import Contact from '../components/contact.svelte';
	import Testimonial from '../components/testimonial.svelte';

	const testimonials = [
		{
			name: 'J. Toscano',
			company: 'Founder & EIC of IntrigueMag',
			quote:
				"NOVAJED completed two projects for me in less than two months, and on both occasions, I was beyond pleased. Anytime you hire someone, you run the risk of disappointment; that risk runs even greater when it's a digital hire--someone you haven't met in person. NOVAJED certainly did not disappoint. They were prompt, professional, and communicative throughout the entire process."
		},
		{
			name: 'J. Robbins',
			company: 'CEO of Robbinsware',
			quote:
				"NOVAJED was great to work with. They're responsive and clear in communications. What's more, they took an active role and had personal buy-in to make my project better. I highly recommend them for whatever you decide to throw at them."
		}
	];
</script>

<svelte:head>
	<title>Novajed | Digital Creative Consultancy</title>
</svelte:head>

<div>
	<main>
		<div class="h-screen hero-bg md:bg-cover lg:flex">
			<div class="ml-4 lg:ml-8 py-24 grid lg:w-3/4 lg:grid-cols-2 self-center">
				<div class="mb-6 justify-self-center">
					<h2 class="text-zinc-100 text-5xl font-bold">
						The creative power your business deserves
					</h2>
					<p class="text-zinc-100 lg:text-lg">
						We operate at the intersection of art & science, delivering bespoke projects designed to
						get your business out in front.
					</p>
					<br />
					<a href="/contact">
						<h4
							class="mt-10 inline text-white lg:text-lg font-medium decoration-nova decoration-4 underline underline-offset-8"
						>
							Let's work together
						</h4>
					</a>
				</div>
			</div>
		</div>
		<div class=" m-auto w-full p-6">
			<div class="grid gap-4 lg:grid-cols-2">
				<div class="justify-self-center self-center">
					<h2 class="text-2xl lg:text-3xl">
						Growth campaigns built on the power of visual content
					</h2>
					<h3 class="text-lg">Our work brought over 600% in engagement for our client</h3>
					<p class="text-rusgreen"><a href="/case-studies/overland">See case study ↗</a></p>
				</div>
				<!-- Divider -->

				<div>
					<figure class="md:flex bg-slate-100 rounded-xl p-8 shadow-sm">
						<img
							class="w-24 h-24 md:w-48 md:h-48 rounded-full mx-auto object-cover"
							src={overland}
							alt="overland_lrd"
						/>
						<div class="pt-6 md:p-8 text-center md:text-left space-y-4">
							<p class="text-lg lg:text-2xl">
								"The rich visuals helped me share my build in a completely new way, which resulted
								in stronger relationships with my current followers and I met new ones! We even got
								the attention of brands who reposted visuals from NOVAJED's campaign."
							</p>
							<h3 class="font-bold">@Overland_LRD</h3>
						</div>
					</figure>
				</div>
			</div>
		</div>
		<div class="bg-gray-300 px-6 grid gap-4 lg:grid-cols-2 lg:px-28 lg:py-14 ">
			<div>
				<img class="lg:p-6" src={webdev} alt="webdev" />
			</div>
			<div class="self-center">
				<h2 class="text-2xl lg:text-3xl">Web design & development</h2>
				<h3 class="text-lg">
					From fully programmatic to low-code technology--we take an agnostic & plain english
					approach, delivering scalable web solutions aligned with your goals.
				</h3>
				<div />
			</div>
		</div>
		<br />
		<div class="ml-6 pr-14">
			<h2 class="text-2xl lg:text-center lg:text-3xl">More from our clients</h2>
		</div>
		<div class="grid lg:grid-cols-2 content-center my-4">
			{#each testimonials as { name, company, quote }}
				<div class="my-2">
					<Testimonial {name} {company} {quote} />
				</div>
			{/each}
		</div>
		<br />
		<div class="bg-blend-multiply bg-gray-300 flex items-center lg:h-96">
			<Contact />
		</div>
	</main>
</div>

<style>
	.hero-bg {
		background-image: url('../assets/img/overland/photo-6.jpg');
		background-repeat: no-repeat;
	}
</style>
