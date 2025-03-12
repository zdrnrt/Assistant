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
				mapSetting: resolve(__dirname, 'src/html/mapSetting.html'),
				mapАnalysis: resolve(__dirname, 'src/html/mapАnalysis.html'),
				factor: resolve(__dirname, 'src/html/factor.html'),
				scenarios: resolve(__dirname, 'src/html/scenarios.html'),
				taskSetting: resolve(__dirname, 'src/html/taskSetting.html'),
				taskАnalytic: resolve(__dirname, 'src/html/taskАnalytic.html'),
				taskList: resolve(__dirname, 'src/html/taskList.html'),
				information: resolve(__dirname, 'src/html/information.html'),
				chatBot: resolve(__dirname, 'src/html/chatBot.html'),
			}
		}
	}
});