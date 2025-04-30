import {moduleOpen} from '../tools'
import { Chart, scales } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

window.targetsDashboardOpen = function () {
  moduleOpen("./src/html/targetsDashboard.html")
    .then(() => {
      targetsDashboardInit()
    })
};

// targetsDashboardOpen();

function targetsDashboardInit () {
  targetsDashboardChartsDraw();
}


function targetsDashboardChartsDraw(){

  const chartsData = {
    'profit': [
      {
        labels: 'План',
        data: [1_000_000_000]
      },
      {
        labels: 'Факт',
        data: [800_000_000]
      }
    ],
    'sales': [
      {
        labels: '',
        data: []
      },
      {
        labels: '',
        data: []
      }
    ],
    'offs': [
      {
        labels: '',
        data: []
      },
      {
        labels: '',
        data: []
      }
    ],
    'inventory': [
      {
        labels: '',
        data: []
      },
      {
        labels: '',
        data: []
      }
    ],
    'representation': [
      {
        labels: '',
        data: []
      },
      {
        labels: '',
        data: []
      }
    ],
    'level': [
      {
        labels: '',
        data: []
      },
      {
        labels: '',
        data: []
      }
    ],
  }

  const chartData = {
		normaTt: [
			{
				label: 'Рег',
				data: [
					7_526_057, 7_536_744, 7_519_518, 7_633_377, 7_532_513,
					7_471_367, 7_439_333, 7_635_368, 7_356_560, 7_600_113,
					7_727_610,
				],
				stack: 'group',
				order: 1,
			},
			{
				label: 'Овер ',
				data: [
					1_850_670, 1_823_406, 1_879_880, 1_877_060, 1_822_382,
					1_867_842, 1_829_344, 1_847_266, 1_839_140, 1_868_880,
					1_869_583,
				],
				stack: 'group',
				order: 1,
			},
			{
				label: 'Промо',
				data: [
					1_850_670, 1_823_406, 1_879_880, 1_877_060, 1_822_382,
					1_867_842, 1_829_344, 1_847_266, 1_839_140, 1_868_880,
					1_869_583,
				],
				stack: 'group',
				order: 1,
			},
			{
				label: 'Вывод',
				data: [
					1_110_402, 972_483, 1_253_253, 1_126_236, 971_937,
					1_245_228, 1_097_607, 985_209, 1_226_093, 1_121_328,
					997_111,
				],
				stack: 'group',
				order: 1,
			},
			{
				label: 'Итого план',
				data: [
					11_104_019, 10_940_435, 11_279_277, 11_262_359, 10_934_293,
					11_207_051, 10_976_065, 11_083_598, 11_034_841, 11_213_282,
					11_217_498,
				],
				type: 'line',
				order: 0,
			},
			{
				label: 'Итого, факт',
				data: [
					12_337_799, 12_156_039, 12_532_530, 12_513_732, 12_149_214,
					12_452_279, 12_195_628, 12_315_109, 12_260_934, 12_459_202,
					12_463_887,
				],
				stack: 'group',
				order: 0,
			},
		],
		normaOosTt: [
			{
				label: 'Факт, %',
				data: [89, 90, 91, 89, 88, 91, 92, 90, 89, 89, 90],
			},
			{
				label: 'План, %',
				data: [98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98],
			},
		],
    offs: [
      {
        label: 'Списание, факт',
        data: [ 2.30, 2.50, 2.50, 2.50, 2.80, 2.90, 2.50, 2.50, 2.50, 2.50, 2.50, ]
      },
      {
        label: 'Списание, план',
        data: [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, ],
        type: 'line'
      },
    ]
	};

  const chartLabels = [
    '11.01',
    '12.01',
    '13.01',
    '14.01',
    '15.01',
    '16.01',
    '17.01',
    '18.01',
    '19.01',
    '20.01',
    '21.01',
  ]

  const charts = {
    'profit': {
      title: 'Прибыль',
      labels: '',
      config: {
        type: 'bar',
        colors: ['#FD6935', '#3337A2'],
        data: {
          labels: chartLabels,
          datasets: chartData['profit']
        }
      }

    },
    // 'sales': {
    //   title: 'Продажи',
    //   labels: '',
    //   config: {}

    // },
    // 'offs': {
    //   title: 'Списания',
    //   labels: '',
    //   config: {}

    // },
    // 'inventory': {
    //   title: 'Товарный запас',
    //   labels: '',
    //   config: {}

    // },
    // 'representation': {
    //   title: 'Представленность',
    //   labels: '',
    //   config: {}

    // },
    // 'level': {
    //   title: 'Уровень сервиса',
    //   labels: '',
    //   config: {}
    // }
  };

  for (const chart in charts){
    if (Chart.getChart(chart)){
      Chart.getChart(chart).destroy();
    }
    // new Chart(document.getElementById(chart), charts[chart].config)
  }

  const chartDoughnutOptions = {
      plugins: {
        legend: {
          position: 'bottom'
        },
          datalabels: {
            display: true,
            align: 'center',
            backgroundColor: '#fff',
            borderRadius: 3,
            font: {
              size: 14,
            },
          },
      }
  }

  const chartBarOptions = {
    aspectRatio: 1,
    plugins: {
      legend: {
        display: false,
        position: 'bottom'
      },
        legend: {
          display: false,
        },
        scales: {
          x: {
            display: false
          },
          y: {
            display: false
          },
        }
    }
}

  const chartColors = [ '#FD6935', '#3337A2', ]

  new Chart(document.getElementById('profit'), {
    type: 'bar',
    data: {
      labels: [
        'План',
        'Факт',
      ],
      datasets: [{
        data: [ 1_000_000_000, 800_000_000],
        backgroundColor: chartColors,
        hoverOffset: 4
      }]
    },
    options: chartBarOptions
})
  new Chart(document.getElementById('sales'), {
    type: 'bar',
    data: {
      labels: [
        'План',
        'Факт',
      ],
      datasets: [{
        data: [ 15_000_000, 13_500_000],
        backgroundColor: chartColors,
        hoverOffset: 4
      }]
    },
    options: chartBarOptions
})
  new Chart(document.getElementById('inventory'), {
    type: 'bar',
    data: {
      labels: [
        'План',
        'Факт',
      ],
      datasets: [{
        data: [10_000_000_000, 14_000_000_000],
        backgroundColor: chartColors,
        hoverOffset: 4
      }]
    },
    options: chartBarOptions
})
  
  new Chart(document.getElementById('offs'), {
      type: 'doughnut',
		  plugins: [ChartDataLabels],
      data: {
        labels: [
          'План',
          'Факт',
        ],
        datasets: [{
          data: [2, 3.5],
          backgroundColor: chartColors,
          hoverOffset: 4
        }]
      },
      options: chartDoughnutOptions
  })

  new Chart(document.getElementById('representation'), {
      type: 'doughnut',
		  plugins: [ChartDataLabels],
      data: {
        labels: [
          'План',
          'Факт',
        ],
        datasets: [{
          data: [98, 88],
          backgroundColor: chartColors,
          hoverOffset: 4
        }]
      },
      options: chartDoughnutOptions
  })

  new Chart(document.getElementById('level'), {
      type: 'doughnut',
		  plugins: [ChartDataLabels],
      data: {
        labels: [
          'План',
          'Факт',
        ],
        datasets: [{
          data: [98, 90],
          backgroundColor: chartColors,
        }]
      },
      options: chartDoughnutOptions
  })


  // const chart1 = document.getElementById('chart1');
  // const chart2 = document.getElementById('chart2');
  // const chart3 = document.getElementById('chart3');

  // if (Chart.getChart('chart1')) {
  //     Chart.getChart('chart').destroy();
  //   } else {
  //     new Chart(chart1, {
  //       type: 'bar',
  //       data: {
  //         labels: chartLabels,
  //         datasets: chartData.normaTt,
  //       },
  //       options: {
  //         plugins: {
  //           legend: {
  //             display: true,
  //             position: 'top',
  //           },
  //           title: {
  //             display: false,
  //           },
  //           decimation: {
  //             enabled: false,
  //           },
  //         },
  //         scales: {
  //           x: {
  //             display: true,
  //           },
  //         },
  //       },
  //     });
  //   }
  // if (Chart.getChart('chart2')) {
  //     Chart.getChart('chart2').destroy();
  //   } else {
  //     new Chart(chart2, {
  //       type: 'bar',
  //       data: {
  //         labels: chartLabels,
  //         datasets: chartData.normaOosTt,
  //       },
  //       options: {
  //         plugins: {
  //           legend: {
  //             display: true,
  //             position: 'top',
  //           },
  //           title: {
  //             display: false,
  //           },
  //           decimation: {
  //             enabled: false,
  //           },
  //         },
  //         scales: {
  //           x: {
  //             display: true,
  //           },
  //         },
  //       },
  //     });
  //   }
  // if (Chart.getChart('chart3')) {
  //     Chart.getChart('chart3').destroy();
  //   } else {
  //     new Chart(chart3, {
  //       type: 'bar',
  //       data: {
  //         labels: chartLabels,
  //         datasets: chartData.offs,
  //       },
  //       options: {
  //         plugins: {
  //           legend: {
  //             display: true,
  //             position: 'top',
  //           },
  //           title: {
  //             display: false,
  //           },
  //           decimation: {
  //             enabled: false,
  //           },
  //         },
  //         scales: {
  //           x: {
  //             display: true,
  //           },
  //         },
  //       },
  //     });
  //   }
}