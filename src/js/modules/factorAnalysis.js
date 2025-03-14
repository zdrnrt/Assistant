import { Chart, plugins } from "chart.js/auto";
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
          factorOosChartDraw();
          factorOsChartDraw();
      })
      .catch(error => {
          console.error('Возникла проблема с операцией выборки:', error);
      });
}


window.factorOsChartDraw = function() {
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
    window.osChart = new Chart(document.getElementById("osChart"), {
      plugins: [ChartDataLabels],
      type: "doughnut",
      data: data,
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
    });
}

window.factorOosChartDraw = function() {
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
    const config = {
        type: "doughnut",
        data: data,
        plugins: [ChartDataLabels],
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
        // options: {
            // responsive: true,
        // },
    };
    window.oosChart = new Chart(document.getElementById('oosChart'), config)
}
