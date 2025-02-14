import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default {
	plugins: [vanillaExtractPlugin()],
	test: {
		environment: 'jsdom',
		globals: true,
		setupFiles: ['./scripts/vitest-setup.ts'],
	},
};
