import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import envCompatible from 'vite-plugin-env-compatible';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

export default defineConfig({
	plugins: [envCompatible(), process.env.ESLINT_NO_DEV_ERRORS === 'true' ? null : eslint()].filter(
		Boolean
	),
});
