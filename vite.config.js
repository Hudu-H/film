import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
	plugins: [(process.env.ESLINT_NO_DEV_ERRORS = 'true' ? 'null' : eslint())].filter(Boolean),
});
