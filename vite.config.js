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
				targetsIndex: resolve(__dirname, 'src/html/targetsIndex.html'),
				targetsFunctions: resolve(__dirname, 'src/html/targetsFunctions.html'),
				mapSetting: resolve(__dirname, 'src/html/mapSetting.html'),
				mapAnalysis: resolve(__dirname, 'src/html/mapAnalysis.html'),
				factorSetting: resolve(__dirname, 'src/html/factorSetting.html'),
				factorAnalysis: resolve(__dirname, 'src/html/factorAnalysis.html'),
				scenariosSetting: resolve(__dirname, 'src/html/scenariosSetting.html'),
				scenariosAnalysis: resolve(__dirname, 'src/html/scenariosAnalysis.html'),
				taskSetting: resolve(__dirname, 'src/html/taskSetting.html'),
				taskAnalytic: resolve(__dirname, 'src/html/taskAnalytic.html'),
				taskList: resolve(__dirname, 'src/html/taskList.html'),
				information: resolve(__dirname, 'src/html/information.html'),
				chatBot: resolve(__dirname, 'src/html/chatBot.html'),
				targetsDashboard: resolve(__dirname, 'src/html/targetsDashboard.html'),
				structure: resolve(__dirname, 'src/html/structure.html'),
			}
		}
	}
});