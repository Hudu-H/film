import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
	plugins: [eslint()], // This runs ESLint automatically during development
});
