import { defineConfig } from 'vite';
import {resolve} from "path";

export default defineConfig({
  base: '/Assistant/', 
  build: {
		outDir: 'dist',
		rollupOptions: {
			input: {
				index: resolve(__dirname, "index.html")
			}
		}
	}
});