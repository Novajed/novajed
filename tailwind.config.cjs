const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			sans: ['Arial', 'sans-serif'],
			roboto: ['Roboto', 'sans-serif'],
			montserrat: ['Montserrat', 'sans-serif'],
			robotomono: ['Roboto Mono', 'monospace']
		},
		extend: {
			colors: {
				lightgray: '#CFCBCA',
				midgray: '#242424',
				blkcoffee: '#32292F',
				charcoal: '#373F47',
				cinnabar: '#DB4C40',
				svelte: '#FF3E00',
				carrot: '#F18F01',
				nova: '#FF650F',
				rusgreen: '#70864E',
				gbcrayola: '#058ED9',
				tailwind: '#0EA5E9',
				graytrans: 'rgba(0, 0, 0, 0.3)'
			},
			backgroundImage: {
				'preview-box': "linear-gradient(to top, var(--tw-gradient-stops)), url('/assets/p-1.jpeg')",
				overland_lrd: "url('./assets/img/card-images/overland-lrd.jpg')"
			}
		}
	},

	plugins: []
};

module.exports = config;
