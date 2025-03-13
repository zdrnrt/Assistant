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
				dataInfo: resolve(__dirname, 'src/html/dataInfo.html'),
				dataOptimisation: resolve(__dirname, 'src/html/dataOptimisation.html'),
				clustering: resolve(__dirname, 'src/html/clustering.html'),
				norming: resolve(__dirname, 'src/html/norming.html'),
				targets: resolve(__dirname, 'src/html/targets.html'),
				mapSetting: resolve(__dirname, 'src/html/mapSetting.html'),
				mapАnalysis: resolve(__dirname, 'src/html/mapАnalysis.html'),
				factorSetting: resolve(__dirname, 'src/html/factorSetting.html'),
				factorAnalysis: resolve(__dirname, 'src/html/factorAnalysis.html'),
				scenariosSetting: resolve(__dirname, 'src/html/scenariosSetting.html'),
				scenariosAnalysis: resolve(__dirname, 'src/html/scenariosAnalysis.html'),
				taskSetting: resolve(__dirname, 'src/html/taskSetting.html'),
				taskAnalytic: resolve(__dirname, 'src/html/taskAnalytic.html'),
				taskList: resolve(__dirname, 'src/html/taskList.html'),
				information: resolve(__dirname, 'src/html/information.html'),
				chatBot: resolve(__dirname, 'src/html/chatBot.html'),
			}
		}
	}
});