// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://axithem.fr',
	integrations: [mdx(), sitemap()],
	image: {
		service: {
			entrypoint: 'astro/assets/services/noop'
		}
	}
});
