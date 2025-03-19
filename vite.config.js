import { defineConfig, loadEnv } from 'vite';
import eslint from 'vite-plugin-eslint';

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd());

	return {
		define: {
			'import.meta.env': env,
		},
		plugins: [env.VITE_ESLINT_NO_DEV_ERRORS === 'true' ? null : eslint()].filter(Boolean),
	};
});
