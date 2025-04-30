import { Modal } from 'bootstrap';
import { Chart } from 'chart.js/auto';
import * as XLSX from 'xlsx/xlsx.mjs';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { moduleOpen, downloadTable } from '../tools';

window.dataInfoOpen = function () {
	moduleOpen('./src/html/dataInfo.html').then(() => {
		dataInfoInit();
	});
};

dataInfoOpen();

function dataInfoInit() {
	const tabs = document.querySelectorAll('.dataInfoTab');
	for (const tab of tabs) {
		tab.addEventListener('click', dataInfoTabOpen);
	}
	dataInfoChartInDraw();
	for (const btn of document.querySelectorAll('.dataInfoTableDownload')) {
		btn.addEventListener('click', dataInfoDownload);
	}
	
	for (const btn of document.querySelectorAll('.btn-update-table')){
		btn.addEventListener('click', dataInfoUpdate);
	}
}

function dataInfoUpdate(event) {
	const target = event.target.dataset.target
	const schema = {
		'dataInfoTableIn': [
			// '<tr><td>Остатки ТТ</td><td>23.02.2025</td><td> 15 000 </td><td> 1 000 </td><td>-93%</td></tr> <tr><td>Остатки РЦ</td><td>23.02.2025</td><td> 9 000 </td><td> 8 990 </td><td>0%</td></tr> <tr><td>Продажи</td><td>23.02.2025</td><td> 18 900 </td><td> 18 900 </td><td>0%</td></tr> <tr><td>Планограмма</td><td>23.02.2025</td><td> 100 000 </td><td> 200 000 </td><td>100%</td></tr>',
			'<tr><td>Остатки ТТ</td><td>24.02.2025</td><td> 13 800 </td><td> 13 800 </td><td>0%</td></tr> <tr><td>Остатки РЦ</td><td>24.02.2025</td><td> 9 000 </td><td> 8 990 </td><td>0%</td></tr> <tr><td>Продажи</td><td>24.02.2025</td><td> 18 900 </td><td> 18 900 </td><td>0%</td></tr> <tr><td>Планограмма</td><td>24.02.2025</td><td> 80 000 </td><td> 80 000 </td><td>0%</td></tr>'
		],
		'dataInfoTableOut': [
			'<tr><td>Заказы РЦ-ТТ</td><td>24.02.2025</td><td> 5 898 </td><td> 5 900 </td><td>0%</td></tr> <tr><td>Заказы Поставщик - ТТ</td><td>24.02.2025</td><td> 3 165 </td><td> 3 456 </td><td>9%</td></tr> <tr><td>Заказы на  РЦ</td><td>24.02.2025</td><td> 4 800 </td><td> 4 905 </td><td>2%</td></tr> <tr><td>Прогноз </td><td>24.02.2025</td><td> 13 000 </td><td> 13 000 </td><td>0%</td></tr>'
		]
	}
	// table.dataset.v = Number(table.dataset.v) === 0 ? 1 : 0 
	const table = document.querySelector(`#${target} tbody`);
	table.innerHTML = schema[target][0]
	event.target.disabled = true; 


	const chartOlapIn = document
		.getElementById('dataInfoOlapIn')
		.getContext('2d');
	const chartAutoIn = document
		.getElementById('dataInfoAutoIn')
		.getContext('2d');
	const chartForecastIn = document
		.getElementById('dataInfoForecastIn')
		.getContext('2d');
	const colors = ['#FD6935', '#cdd5e1'];
	const configOlapIn = {
		plugins: [ChartDataLabels],
		type: 'doughnut',
		data: {
			labels: ['In', 'Grey'],
			datasets: [
				{
					data: [100],
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
					data: [100],
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
					data: [100],
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

	if (Chart.getChart('dataInfoOlapIn')) {
		window.dataInfoOlapIn.destroy();
	}
	if (Chart.getChart('dataInfoAutoIn')) {
		window.dataInfoAutoIn.destroy();
	}
	if (Chart.getChart('dataInfoForecastIn')) {
		window.dataInfoForecastIn.destroy();
	}
	setTimeout(() => {
		window.dataInfoOlapIn = new Chart(chartOlapIn, configOlapIn);
		window.dataInfoAutoIn = new Chart(chartAutoIn, configAutoIn);
		window.dataInfoForecastIn = new Chart(chartForecastIn, configForecastIn);
	}, 0);

	const chartOlapOut = document
		.getElementById('dataInfoOlapOut')
		.getContext('2d');
	const chartAutoOut = document
		.getElementById('dataInfoAutoOut')
		.getContext('2d');
	const chartForecastOut = document
		.getElementById('dataInfoForecastOut')
		.getContext('2d');
	const colorsOut = ['#3337A2', '#cdd5e1'];
	const configOlapOut = {
		plugins: [ChartDataLabels],
		type: 'doughnut',
		data: {
			labels: ['Out', 'Grey'],
			datasets: [
				{
					data: [100],
					backgroundColor: colorsOut,
					borderColor: colorsOut,
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
					data: [100],
					backgroundColor: colorsOut,
					borderColor: colorsOut,
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
					data: [100],
					backgroundColor: colorsOut,
					borderColor: colorsOut,
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
	if (Chart.getChart('dataInfoOlapOut')) {
		window.dataInfoOlapOut.destroy();
	}
		window.dataInfoOlapOut = new Chart(chartOlapOut, configOlapOut);
	if (Chart.getChart('dataInfoAutoOut')) {
		window.dataInfoAutoOut.destroy();
	}
		window.dataInfoAutoOut = new Chart(chartAutoOut, configAutoOut);
	if (Chart.getChart('dataInfoForecastOut')) {
		window.dataInfoForecastOut.destroy();
	}
		window.dataInfoForecastOut = new Chart(
			chartForecastOut,
			configForecastOut
		);
}

function dataInfoTabOpen(event) {
	const elem = event.target;
	for (const link of document.querySelectorAll('.dataInfoTab')) {
		link.classList.remove('active');
	}
	elem.classList.add('active');

	for (const tab of document.querySelectorAll('.tab-content')) {
		tab.classList.add('d-none');
	}

	document.getElementById(elem.dataset.tab).classList.remove('d-none');

	if (elem.dataset.tab === 'dataInfoOut') {
		dataInfoChartOutDraw();
	} else {
		dataInfoChartInDraw();
	}
}

window.dataFilter = function (event) {
	event.preventDefault();
	const form = event.target;
	const result = new FormData(form);
	console.log(result);
	Modal.getInstance(form.closest('.modal')).hide();
};

function dataInfoDownload(event) {
	const elem = event.target.closest('button');
	const names = {
		dataInfoTableIn: 'ассистент_данные_вход',
		dataInfoTableOut: 'ассистент_данные_выход',
	};
	downloadTable(`${names[elem.dataset.target]}`, elem.dataset.target);
}

function dataInfoChartInDraw() {
	const chartIn = document.getElementById('dataInfoChartIn');
	const labels = [
		'01.02',
		'02.02',
		'03.02',
		'04.02',
		'05.02',
		'06.02',
		'07.02',
		'08.02',
		'09.02',
		'10.02',
		'11.02',
		'12.02',
		'13.02',
		'14.02',
		'15.02',
		'16.02',
		'17.02',
		'18.02',
		'19.02',
		'20.02',
		'21.02',
		'22.02',
		'23.02',
		'24.02',
	];
	const datasets = [
		{
			label: 'Olap',
			data: [
				96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96,
				96, 40, 96, 96, 96, 96, 67, 96,
			],
		},
		{
			label: 'АЗ',
			data: [
				98, 98, 80, 98, 98, 98, 98, 70, 98, 98, 98, 98, 98, 98, 98, 98,
				98, 40, 98, 98, 98, 98, 67, 98,
			],
		},
		{
			label: 'Прогноз',
			data: [
				97, 97, 97, 97, 97, 50, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97,
				97, 40, 97, 97, 97, 97, 97, 97,
			],
		},
	];
	if (Chart.getChart('dataInfoChartIn')) {
		window.dataInfoChartIn.destroy();
	}
	// setTimeout(() => {
		window.dataInfoChartIn = new Chart(chartIn, {
			type: 'bar',
			data: {
				labels: labels,
				datasets: datasets,
			},
			options: {
				indexAxis: 'y',
				x: {
					// beginAtZero: false,
					min: 30,
					ticks: {
						// forces step size to be 50 units
						stepSize: 100
					}
				}
			}
		});
	// }, 0);

	const chartOlapIn = document
		.getElementById('dataInfoOlapIn')
		.getContext('2d');
	const chartAutoIn = document
		.getElementById('dataInfoAutoIn')
		.getContext('2d');
	const chartForecastIn = document
		.getElementById('dataInfoForecastIn')
		.getContext('2d');
	const colors = ['#FD6935', '#cdd5e1'];
	const configOlapIn = {
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
	const configAutoIn = {
		plugins: [ChartDataLabels],
		type: 'doughnut',
		data: {
			labels: ['In', 'Grey'],
			datasets: [
				{
					data: [70, 30],
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

	if (Chart.getChart('dataInfoOlapIn')) {
		window.dataInfoOlapIn.destroy();
	}
	if (Chart.getChart('dataInfoAutoIn')) {
		window.dataInfoAutoIn.destroy();
	}
	if (Chart.getChart('dataInfoForecastIn')) {
		window.dataInfoForecastIn.destroy();
	}
	setTimeout(() => {
		window.dataInfoOlapIn = new Chart(chartOlapIn, configOlapIn);
		window.dataInfoAutoIn = new Chart(chartAutoIn, configAutoIn);
		window.dataInfoForecastIn = new Chart(chartForecastIn, configForecastIn);
	}, 0);
}

function dataInfoChartOutDraw() {
	const chartOut = document.getElementById('dataInfoChartOut');
	const labels = [
		'01.02',
		'02.02',
		'03.02',
		'04.02',
		'05.02',
		'06.02',
		'07.02',
		'08.02',
		'09.02',
		'10.02',
		'11.02',
		'12.02',
		'13.02',
		'14.02',
		'15.02',
		'16.02',
		'17.02',
		'18.02',
		'19.02',
		'20.02',
		'21.02',
		'22.02',
		'23.02',
		'24.02',
	];
	const datasets = [
		{
			label: 'Olap',
			data: [
				96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96,
				96, 40, 96, 96, 96, 96, 96, 96,
			],
		},
		{
			label: 'АЗ',
			data: [
				98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98,
				98, 98, 98, 98, 98, 98, 98, 98,
			],
		},
		{
			label: 'Прогноз',
			data: [
				97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97,
				97, 97, 97, 97, 97, 97, 97, 97,
			],
		},
	];
	if (Chart.getChart('dataInfoChartOut')) {
		window.dataInfoChartOut.destroy();
	}
	setTimeout(() => {
		window.dataInfoChartOut = new Chart(chartOut, {
			type: 'bar',
			data: {
				labels: labels,
				datasets: datasets,
			},
			options: {
				indexAxis: 'y',
				x: {
					// beginAtZero: false,
					min: 30,
					ticks: {
						// forces step size to be 50 units
						stepSize: 100
					}
				}
			}
		});
	}, 0);

	const chartOlapOut = document
		.getElementById('dataInfoOlapOut')
		.getContext('2d');
	const chartAutoOut = document
		.getElementById('dataInfoAutoOut')
		.getContext('2d');
	const chartForecastOut = document
		.getElementById('dataInfoForecastOut')
		.getContext('2d');
	const colors = ['#3337A2', '#cdd5e1'];
	const configOlapOut = {
		plugins: [ChartDataLabels],
		type: 'doughnut',
		data: {
			labels: ['Out', 'Grey'],
			datasets: [
				{
					data: [100],
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
					data: [98, 2],
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
					data: [100],
					backgroundColor: colors,
					borderColor: colors,
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
	if (Chart.getChart('dataInfoOlapOut')) {
		window.dataInfoOlapOut.destroy();
	}
		window.dataInfoOlapOut = new Chart(chartOlapOut, configOlapOut);
	if (Chart.getChart('dataInfoAutoOut')) {
		window.dataInfoAutoOut.destroy();
	}
		window.dataInfoAutoOut = new Chart(chartAutoOut, configAutoOut);
	if (Chart.getChart('dataInfoForecastOut')) {
		window.dataInfoForecastOut.destroy();
	}
		window.dataInfoForecastOut = new Chart(
			chartForecastOut,
			configForecastOut
		);
}
