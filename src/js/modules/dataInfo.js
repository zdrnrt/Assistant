import { Modal } from 'bootstrap';
import { Chart } from 'chart.js/auto';
import * as XLSX from 'xlsx/xlsx.mjs';
import ChartDataLabels from 'chartjs-plugin-datalabels';

window.dataInfoOpen = function () {
	fetch('./src/html/dataInfo.html')
		.then((response) => {
			if (!response.ok) {
				throw new Error('Реакция сети' + response.statusText);
			}
			return response.text();
		})
		.then((html) => {
			document.getElementById('content').innerHTML = html;
			dataInfoInit();
		})
		.catch((error) => {
			console.error('Возникла проблема с операцией выборки:', error);
		});
};

function dataInfoInit() {
	const tabs = document.querySelectorAll('.dataInfoTab');
	for (const tab of tabs) {
		tab.addEventListener('click', dataInfoTabOpen);
	}
	dataInfoChartInDraw()
	for (const btn of document.querySelectorAll('.dataInfoTableDownload')){
		btn.addEventListener('click', dataInfoDownload)
	}
}


function dataInfoTabOpen(event) {

	const elem = event.target;
	for (const link of document.querySelectorAll('.dataInfoTab')){
    link.classList.remove('active');
  }
  elem.classList.add('active')

	for (const tab of document.querySelectorAll('.tab-content')) {
		tab.classList.add('d-none');
	}
	if (elem.dataset.tab === 'dataInfoOut'){
		dataInfoChartOutDraw();
	}
	if (elem.dataset.tab === 'dataInfoIn'){
		dataInfoChartInDraw();
	}

	document.getElementById(elem.dataset.tab).classList.remove('d-none');
}

window.dataFilter = function (event) {
	event.preventDefault();
	const form = event.target;
	const result = new FormData(form);
	console.log(result);
	Modal.getInstance(form.closest('.modal')).hide();
};

function dataInfoDownload (event) {
	const elem = event.target.closest('button');
	var workbook = XLSX.utils.table_to_book(
		document.getElementById(elem.dataset.target)
	);
	const names = {
		'dataInfoTableIn': 'ассистент_данные_вход',
		'dataInfoTableOut': 'ассистент_данные_выход'
	}
	XLSX.writeFile(workbook, `${names[elem.dataset.target]}.xlsx`);
};


function dataInfoChartInDraw() {
	const chartIn = document.getElementById('dataInfoChartIn');
	const labels = [ '1.2', '2.2', '3.2', '4.2', '5.2', '6.2', '7.2', '8.2', '9.2', '10.2', '11.2', '12.2', '13.2', '14.2', '15.2', '16.2', '17.2', '18.2', '19.2', '20.2', '21.2', '22.2', '23.2', '24.2'];
	const datasets = [
		{
			label: 'Olap',
			data: [ 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 40, 96, 96, 96, 96, 67, 96, ],
		},
		{
			label: 'АЗ',
			data: [ 98, 98, 80, 98, 98, 98, 98, 70, 98, 98, 98, 98, 98, 98, 98, 98, 98, 40, 98, 98, 98, 98, 67, 98, ],
		},
		{
			label: 'Прогноз',
			data: [ 97, 97, 97, 97, 97, 50, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 40, 97, 97, 97, 97, 97, 97, ],
		},
	];
	if (Chart.getChart("dataInfoChartIn")){
		window.dataInfoChartIn.destroy();
	}
	setTimeout(() => {
		window.dataInfoChartIn = new Chart(chartIn, {
			type: 'line',
			data: {
				labels: labels,
				datasets: datasets,
			},
		});
	}, 0)

	const chartOlapIn = document.getElementById('dataInfoOlapIn').getContext('2d');
	const chartAutoIn = document.getElementById('dataInfoAutoIn').getContext('2d');
	const chartForecastIn = document.getElementById('dataInfoForecastIn').getContext('2d');
  const colors = ['#FD6935', '#cdd5e1'];
	const configOlapIn = {
		plugins: [ChartDataLabels],
		type: 'doughnut',
		data: {
			labels: ['In', 'Grey'],
			datasets: [
				{
					data: [60, 40],
					backgroundColor: colors,
					borderColor: colors,
					needleValue: 78,
					meterValue: 1.07,
					borderWidth: 1,
					cutout: '75%',
					circumference: 180,
					rotation: -90,
				},
			],
		},
		options: {
			plugins: {
				datalabels: {
					display: true,
					align: 'center',
					backgroundColor: '#fff',
					borderRadius: 3,
					font: {
						size: 14,
					},
				},
				legend: {
					display: false,
				},
			},
		},
	};
	const configAutoIn = {
		plugins: [ChartDataLabels],
		type: 'doughnut',
		data: {
			labels: ['In', 'Grey'],
			datasets: [
				{
					data: [90, 10],
					backgroundColor: colors,
					borderColor: colors,
					needleValue: 78,
					meterValue: 1.07,
					borderWidth: 1,
					cutout: '75%',
					circumference: 180,
					rotation: -90,
				},
			],
		},
		options: {
			plugins: {
				datalabels: {
					display: true,
					align: 'center',
					backgroundColor: '#fff',
					borderRadius: 3,
					font: {
						size: 14,
					},
				},
				legend: {
					display: false,
				},
			},
		},
	};
	const configForecastIn = {
		plugins: [ChartDataLabels],
		type: 'doughnut',
		data: {
			labels: ['In', 'Grey'],
			datasets: [
				{
					data: [65, 15],
					backgroundColor: colors,
					borderColor: colors,
					needleValue: 78,
					meterValue: 1.07,
					borderWidth: 1,
					cutout: '75%',
					circumference: 180,
					rotation: -90,
				},
			],
		},
		options: {
			plugins: {
				datalabels: {
					display: true,
					align: 'center',
					backgroundColor: '#fff',
					borderRadius: 3,
					font: {
						size: 14,
					},
				},
				legend: {
					display: false,
				},
			},
		},
	};
	
	if (Chart.getChart("dataInfoOlapIn")){
		window.dataInfoOlapIn.destroy();
	}
	if (Chart.getChart("dataInfoAutoIn")){
		window.dataInfoAutoIn.destroy();
	}
	if (Chart.getChart("dataInfoForecastIn")){
		window.dataInfoForecastIn.destroy();
	}
	setTimeout(() => {
		window.dataInfoOlapIn = new Chart(chartOlapIn, configOlapIn);
		window.dataInfoAutoIn = new Chart(chartAutoIn, configAutoIn);
		window.dataInfoForecastIn = new Chart(chartForecastIn, configForecastIn);
	}, 0)
}

function dataInfoChartOutDraw() {
  const chartOut = document.getElementById('dataInfoChartOut');
	const labels = [ '1.2', '2.2', '3.2', '4.2', '5.2', '6.2', '7.2', '8.2', '9.2', '10.2', '11.2', '12.2', '13.2', '14.2', '15.2', '16.2', '17.2', '18.2', '19.2', '20.2', '21.2', '22.2', '23.2', '24.2' ];
	const datasets = [
		{
			label: 'Olap',
			data: [ 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 40, 96, 96, 96, 96, 96, 96, ],
		},
		{
			label: 'АЗ',
			data: [ 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, ],
		},
		{
			label: 'Прогноз',
			data: [ 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, ],
		},
	];
	if (Chart.getChart("dataInfoChartOut")){
		window.dataInfoChartOut.destroy();
	}
	setTimeout(() => {
		window.dataInfoChartOut = new Chart(chartOut, {
			type: 'line',
			data: {
				labels: labels,
				datasets: datasets,
			},
		});
	}, 0)

  const chartOlapOut = document
		.getElementById('dataInfoOlapOut')
		.getContext('2d');
	const chartAutoOut = document
		.getElementById('dataInfoAutoOut')
		.getContext('2d');
	const chartForecastOut = document
		.getElementById('dataInfoForecastOut')
		.getContext('2d');
  const colors = ['#3337A2', '#cdd5e1']
	const configOlapOut = {
		plugins: [ChartDataLabels],
		type: 'doughnut',
		data: {
			labels: ['Out', 'Grey'],
			datasets: [
				{
					data: [65, 35],
					backgroundColor: colors,
					borderColor: colors,
					needleValue: 78,
					meterValue: 1.07,
					borderWidth: 1,
					cutout: '75%',
					circumference: 180,
					rotation: -90,
				},
			],
		},
		options: {
			plugins: {
				datalabels: {
					display: true,
					align: 'center',
					backgroundColor: '#fff',
					borderRadius: 3,
					font: {
						size: 14,
					},
				},
				legend: {
					display: false,
				},
			},
		},
	};
	const configAutoOut = {
		plugins: [ChartDataLabels],
		type: 'doughnut',
		data: {
			labels: ['Out', 'Grey'],
			datasets: [
				{
					data: [80, 20],
					backgroundColor: colors,
					borderColor: colors,
					needleValue: 78,
					meterValue: 1.07,
					borderWidth: 1,
					cutout: '75%',
					circumference: 180,
					rotation: -90,
				},
			],
		},
		options: {
			plugins: {
				datalabels: {
					display: true,
					align: 'center',
					backgroundColor: '#fff',
					borderRadius: 3,
					font: {
						size: 14,
					},
				},
				legend: {
					display: false,
				},
			},
		},
	};
	const configForecastOut = {
		plugins: [ChartDataLabels],
		type: 'doughnut',
		data: {
			labels: ['Out', 'Grey'],
			datasets: [
				{
					data: [55, 45],
					backgroundColor: colors,
					borderColor: colors,
					needleValue: 78,
					meterValue: 1.07,
					borderWidth: 1,
					cutout: '75%',
					circumference: 180,
					rotation: -90,
				},
			],
		},
		options: {
			plugins: {
				datalabels: {
					display: true,
					align: 'center',
					backgroundColor: '#fff',
					borderRadius: 3,
					font: {
						size: 14,
					},
				},
				legend: {
					display: false,
				},
			},
		},
	};
	if (Chart.getChart("dataInfoOlapOut")){
		window.dataInfoOlapOut.destroy();
	}
	setTimeout(() => {
		window.dataInfoOlapOut = new Chart(chartOlapOut, configOlapOut);
	}, 0)
	if (Chart.getChart("dataInfoAutoOut")){
		window.dataInfoAutoOut.destroy();
	}
	setTimeout(() => {
		window.dataInfoAutoOut = new Chart(chartAutoOut, configAutoOut);
	}, 0)
	if (Chart.getChart("dataInfoForecastOut")){
		window.dataInfoForecastOut.destroy();
	}
	setTimeout(() => {
		window.dataInfoForecastOut = new Chart(chartForecastOut, configForecastOut);
	}, 0)
}
