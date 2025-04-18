import { Chart, plugins, scales } from "chart.js/auto";
import ChartDataLabels from 'chartjs-plugin-datalabels';

window.factorAnalysisOpen = function() {
  fetch('./src/html/factorAnalysis.html')
      .then(response => {
          if (!response.ok) {
              throw new Error('Реакция сети' + response.statusText);
          }
          return response.text(); 
      })
      .then(html => {
          document.getElementById('content').innerHTML = html;
          factorOsDoughnutChartDraw();
          factorOosDoughnutChartDraw();
          factorAnalysisOosBarChartDraw();
          factorAnalysisOsBarChartDraw();
      })
      .catch(error => {
          console.error('Возникла проблема с операцией выборки:', error);
      });
}

const configDoughnut = {
  plugins: [ChartDataLabels],
  type: "doughnut",
  options: {
    plugins: {
      datalabels: {
        display: true,
        align: "bottom",
        backgroundColor: "#fff",
        borderRadius: 3,
        font: {
          size: 14,
        },
      },
    },
  },
};

window.factorOsDoughnutChartDraw = function() {
    const data = {
        labels: ['Коммерция', 'Логистика', 'Маркетинг', 'Операция', 'ОТД', 'Прогнозирование/Планирование'],
        datasets: [
          {
            label: 'Значение ',
            data: [
                5, 6, 25, 10, 29, 25
            ],
          }
        ]
      };
    window.osChart = new Chart(document.getElementById("osDoughnutChart"), {...configDoughnut, data});
}

window.factorOosDoughnutChartDraw = function() {
    const data = {
        labels: ['Коммерция', 'Логистика', 'Маркетинг', 'Операция', 'ОТД', 'Прогнозирование/Планирование'],
        datasets: [
          {
            label: 'Значение ',
            data: [
                13, 6, 8, 17, 31, 25
            ],
          }
        ]
      };
    window.oosChart = new Chart(document.getElementById('oosDoughnutChart'), {...configDoughnut, data})
}
const configBar = {
  type: "bar",
    options: {
      indexAxis: 'y',
      aspectRatio: 0.7,
      interaction: {
				mode: 'index',
				axis: 'x',
				intersect: false,
			},
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          intersect: 'closest'
        }
      },
      scales: {
        y: {
          ticks: {
            stepSize: 200
          }
        }
      }
    },
};
function factorAnalysisOosBarChartDraw() {
  const data = {
    labels: [
      'Заказ товара на ТТ',
      'Приемка товара на ТТ',
      'Процесс отгрузки на РЦ',
      'Процесс промо заказа на ТТ',
      'Процесс промо заказа РЦ',
      'Процесс регулярного заказа на ТТ',
      'Процесс регулярного заказа РЦ',
      'Процесс управления промо ценой',
      'Процесс управления регулярной ценой',
      'Процесс управления уценкой',
      'Процесс учета остатков на РЦ',
      'Работа с недопоставкой поставщика',
      'Работа с опозданиями поставщика',
      'Расчет прогноза продаж промо',
      'Расчет прогноза продаж регулярный',
      'Расчет прогнозов новых магазинов промо',
      'Расчет прогнозов новых магазинов регулярный',
      'Расчет прогнозов новых товаров промо',
      'Расчет прогнозов новых товаров регулярный',
      'Учет товара на ТТ  ',
    ],
    datasets: [
      {
        label: "OOS - Сумма по полю Нед1",
        data: [
          432,
          67,
          123,
          654,
          123,
          345,
          1333,
          125,
          100,
          408,
          65,
          1456,
          543,
          1234,
          1342,
          35,
          123,
          2345,
          543,
          1098,
        ],
      },
      {
        label: "OOS - Сумма по полю Нед2",
        data: [
          588,
          223,
          279,
          810,
          279,
          501,
          1489,
          156,
          500,
          320,
          221,
          1612,
          699,
          1390,
          1498,
          191,
          279,
          2501,
          699,
          1254,
        ],
      },
      {
        label: "OOS - Сумма по полю Нед3",
        data: [
          563,
          198,
          254,
          785,
          254,
          476,
          1464,
          215,
          65,
          126,
          196,
          1587,
          674,
          1365,
          1473,
          166,
          254,
          2476,
          674,
          1229,
        ],
      },
      {
        label: "OS - Сумма по полю Нед1",
        data: [
          235,
          0,
          0,
          167,
          987,
          219,
          321,
          150,
          289,
          0,
          0,
          0,
          0,
          3245,
          345,
          1287,
          1234,
          232,
          1278,
          0
        ],
      },
      {
        label: "OS - Сумма по полю Нед2",
        data: [
          391,
          0,
          0,
          323,
          1143,
          375,
          477,
          100,
          87,
          0,
          0,
          0,
          0,
          3401,
          501,
          1443,
          1390,
          388,
          1434,
          0
        ],
      },
      {
        label: "OS - Сумма по полю Нед3",
        data: [
          366,
          0,
          0,
          298,
          1118,
          350,
          452,
          90,
          120,
          0,
          0,
          0,
          0,
          3376,
          476,
          1418,
          1365,
          363,
          1409,
          0
        ],
      },
    ]
  };
window.oosBarChart = new Chart(document.getElementById('oosBarChart'), {...configBar, data})
}

function factorAnalysisOsBarChartDraw() {
  const data = {
    labels: [
      'Заказ товара на ТТ',
      'Процесс промо заказа на ТТ',
      'Процесс промо заказа РЦ',
      'Процесс регулярного заказа на ТТ',
      'Процесс регулярного заказа РЦ',
      'Процесс управления промо ценой',
      'Процесс управления регулярной ценой',
      'Расчет прогноза продаж промо',
      'Расчет прогноза продаж регулярный',
      'Расчет прогнозов новых магазинов промо',
      'Расчет прогнозов новых магазинов регулярный',
      'Расчет прогнозов новых товаров промо',
      'Расчет прогнозов новых товаров регулярный',
    ],
    datasets: [
      {
        label: "OS - Сумма по полю Нед1",
        data: [
          235,
          167,
          987,
          219,
          321,
          150,
          289,
          3245,
          345,
          1287,
          1234,
          232,
          1278,
        ],
      },
      {
        label: "OOS - Сумма по полю Нед2",
        data: [
          588,
          223,
          279,
          810,
          279,
          501,
          1489,
          156,
          500,
          320,
          221,
          1612,
          699,
          1390,
          1498,
          191,
          279,
          2501,
          699,
          1254,
        ],
      },
      {
        label: "OS - Сумма по полю Нед2",
        data: [
          391,
          323,
          1143,
          375,
          477,
          100,
          87,
          3401,
          501,
          1443,
          1390,
          388,
          1434,
        ],
      },
      {
        label: "OS - Сумма по полю Нед3",
        data: [
          366,
          298,
          1118,
          350,
          452,
          90,
          120,
          3376,
          476,
          1418,
          1365,
          363,
          1409,
        ],
      }
    ]
  };

window.osBarChart = new Chart(document.getElementById('osBarChart'), {...configBar, data})
}