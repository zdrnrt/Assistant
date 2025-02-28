import { defineConfig } from 'vite';
import {resolve} from "path";

export default defineConfig({
  base: '/Assistant/', 
  build: {
		outDir: 'dist',
		rollupOptions: {
			input: {
				index: resolve(__dirname, "index.html"),
				data: resolve(__dirname, 'src/html/data.html'),
				clustering: resolve(__dirname, 'src/html/clustering.html'),
				norming: resolve(__dirname, 'src/html/norming.html'),
				targets: resolve(__dirname, 'src/html/targets.html'),
			}
		}
	}
});