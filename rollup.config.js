import dotenv from 'dotenv';
import { sveltePreprocess } from 'svelte-preprocess/dist/autoProcess';
dotenv.config();

plugins: [
	svelte({
		preprocess: sveltePreprocess({
			replace: [['process.env.VITE_RECAPTCHA_SITE_KEY', process.env.VITE_RECAPTCHA_SITE_KEY]]
		})
	})
];
