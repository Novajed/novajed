<script>
	import { onMount } from 'svelte';
	import Fa from 'svelte-fa';
	import { faInstagram } from '@fortawesome/free-brands-svg-icons';
	import '../app.postcss';
	import logo from '../assets/img/NOVAJED-FULL.svg';

	let toggleMobileMenu = false;

	const navItems = [
		{ label: 'Home', href: '/' },
		{ label: 'Case Studies', href: '/case-studies' },
		{ label: 'Creative Pack', href: '/preset' },
		{ label: 'Contact', href: '/contact' },
		{ label: 'About', href: '/about' }
	];

	const handleMobileTap = () => (toggleMobileMenu = !toggleMobileMenu);

	const mediaQueryHandler = (e) => {
		if (!e.matches) {
			toggleMobileMenu = false;
		}
	};

	onMount(() => {
		const mediaListener = window.matchMedia('(max-width: 767px)');

		mediaListener.addEventListener('change', mediaQueryHandler);
	});
</script>

<div
	class="grid grid-cols-2 lg:grid-cols-4 justify-items-center p-3 lg:p-6 bg-midgray lg:drop-shadow-md"
>
	<div class="flex items-center">
		<a href="/">
			<img draggable="false" class="select-none w-7/12 lg:w-6/12" src={logo} alt="Novajed Logo" />
		</a>
	</div>

	<!-- Mobile Nav -->
	<nav class="lg:hidden mobile-nav">
		<div class="inner z-50">
			<ul class={`navbar-list${toggleMobileMenu ? ' mobile' : ''}`}>
				{#each navItems as item}
					<li class="text-center" on:click={handleMobileTap}>
						<a class="font-medium" href={item.href}>{item.label}</a>
					</li>
				{/each}
			</ul>
			<div on:click={handleMobileTap} class={`mobile-icon${toggleMobileMenu ? ' active' : ''}`}>
				<div class="middle-line" />
			</div>
		</div>
	</nav>
	<div class="col-span-2">
		<nav
			class="font-medium w-full hidden col-auto lg:flex items-center tracking-widest transition-all duration-500 text-gray-300"
		>
			<a class="hover:text-rusgreen lg:px-2.5 py-4" href="/">Home</a>
			<a class="hover:text-rusgreen lg:px-2.5 py-4" href="/case-studies">Case Studies</a>
			<a class="hover:text-rusgreen lg:px-2.5 py-4" href="/preset">Creative Pack</a>
			<a class="hover:text-rusgreen lg:px-2.5 py-4" href="/contact">Contact</a>
			<a class="hover:text-rusgreen lg:px-2.5 py-4" href="/about">About</a>
		</nav>
	</div>
	<div class="hidden lg:flex justify-self-end items-center">
		<a href="/contact">
			<button class="contact-btn bg-rusgreen ml-auto">
				<h4 class="text-black text-lg font-medium">Let's talk</h4>
			</button>
		</a>
	</div>
</div>
<slot />

<div class="mt-2 py-8 px-4">
	<hr class="place-content-center m-auto h-px bg-gray-700 border-0 dark:bg-gray-700 opacity-25" />
	<footer class="grid grid-cols-2 my-4">
		<div>
			<h1 class="whitespace-pre-wrap text-2xl lg:text-5xl lg:w-2/3 font-bold text-black">
				Be perpetually uncompromising.
			</h1>
			<a
				class="inline-block mt-2 lg:ml-2"
				href="https://www.instagram.com/novajed.llc/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Fa icon={faInstagram} size="2x" />
			</a>
		</div>

		<div class="grid lg:grid-cols-2 text-right lg:text-left font-thin">
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/case-studies">Case studies</a></li>
				<li><a href="/preset">Creative pack</a></li>
			</ul>
			<ul>
				<li><a href="/contact">Contact</a></li>
				<li><a href="/about">About</a></li>
			</ul>
			<div />
		</div>
		<div class="flex" />
	</footer>
	<hr class="place-content-center m-auto h-px bg-gray-700 border-0 dark:bg-gray-700 opacity-25" />

	<div class="mt-6 grid grid-cols-2 gap-2 text-xs">
		<div>
			<p class="text-xs">Copyright © 2022 - NOVAJED LLC</p>
			<br />
			<p class="text-xs font-robotomono">
				Made with 🧡 using <span class="text-svelte"
					><a href="https://svelte.dev/" target="_blank" rel="noopener noreferrer">Svelte</a></span
				>
				&
				<span class="text-tailwind"
					><a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer"
						>TailwindCSS</a
					></span
				>
			</p>
		</div>

		<ul class="grid grid-cols-3 gap-4 text-center text-xs">
			<li><a href="/terms-of-use">Terms & Conditions</a></li>
			<li><a href="/privacy-policy">Privacy Policy</a></li>
			<li><a href="/sitemap">Sitemap</a></li>
		</ul>
	</div>
</div>

<style>
	.contact-btn {
		min-height: 3em;
		width: 100%;
		padding: 0.5em 3em;
	}

	.mobile-nav {
		background-color: rgb(36, 36, 36);
		font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
		height: 45px;
		justify-self: end;
	}

	.inner {
		max-width: 980px;
		padding-left: 20px;
		padding-right: 20px;
		margin: auto;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		height: 100%;
	}

	.mobile-icon {
		width: 25px;
		height: 14px;
		position: relative;
		cursor: pointer;
		padding: 5px;
		z-index: 2;
	}

	.mobile-icon:after,
	.mobile-icon:before,
	.middle-line {
		content: '';
		position: absolute;
		width: 100%;
		height: 2px;
		background-color: #fff;
		transition: all 0.4s;
		transform-origin: center;
	}

	.mobile-icon:before,
	.middle-line {
		top: 0;
	}

	.mobile-icon:after,
	.middle-line {
		bottom: 0;
	}

	.mobile-icon:before {
		width: 66%;
	}

	.mobile-icon:after {
		width: 33%;
	}

	.middle-line {
		margin: auto;
	}

	.mobile-icon:hover:before,
	.mobile-icon:hover:after,
	.mobile-icon.active:before,
	.mobile-icon.active:after,
	.mobile-icon.active .middle-line {
		width: 100%;
	}

	.mobile-icon.active:before,
	.mobile-icon.active:after {
		top: 50%;
		transform: rotate(-45deg);
	}

	.mobile-icon.active .middle-line {
		transform: rotate(45deg);
	}

	.navbar-list {
		display: none;
		width: 100%;
		justify-content: space-between;
		margin: 0;
		padding: 0 50px;
		z-index: 1;
	}

	.navbar-list.mobile {
		padding: 3em;
		background-color: rgba(0, 0, 0, 0.8);
		backdrop-filter: blur(12px);
		position: fixed;
		display: block;
		height: 100%;
		bottom: 0;
		left: 0;
		overflow: hidden;
	}

	.navbar-list li {
		list-style-type: none;
		position: relative;
	}

	.navbar-list li:before {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 1px;
	}

	.navbar-list a {
		color: #fff;
		text-decoration: none;
		display: flex;
		height: 45px;
		align-items: center;
		padding: 0 10px;
		font-size: 13px;
		margin-bottom: 2em;
	}

	@media only screen and (min-width: 1024px) {
		.mobile-icon {
			display: none;
		}

		.navbar-list {
			display: flex;
			padding: 0;
		}

		.navbar-list a {
			display: inline-flex;
		}
	}
</style>
