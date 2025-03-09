import { Chart } from "chart.js";

window.factorOpen = function() {
  fetch('./src/html/factor.html')
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
    const config = {
        type: "doughnut",
        data: data,
        // options: {
            // responsive: true,
        // },
    };
    window.osChart = new Chart(document.getElementById('osChart'), config)
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
        // options: {
            // responsive: true,
        // },
    };
    window.osChart = new Chart(document.getElementById('oosChart'), config)
}