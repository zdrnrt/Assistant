import { Chart } from 'chart.js/auto'

window.scenariosAnalysisOpen = function() {
  fetch('./src/html/scenariosAnalysis.html')
      .then(response => {
          if (!response.ok) {
              throw new Error('Реакция сети' + response.statusText);
          }
          return response.text(); 
      })
      .then(html => {
          document.getElementById('content').innerHTML = html;
          window.scenariosChartDraw();
      })
      .catch(error => {
          console.error('Возникла проблема с операцией выборки:', error);
      });
}

window.scenariosChartDraw = function() {
    // возможно отдельная функция для отрисовки каждого графика
    const dataChart = [1_868_880, 1_500_000, 1_300_000, 900_000, 700_000, 542_000];
    const optionsChart = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
                position: 'bottom',
            },
            title: {
                display: false,
            },
        }
    }
    const labelsChart = ['20.1', '10.2', '21.2', '8.3', '20.3', '4.4'];

    const fastChart = document.getElementById('scenarios-fast-chart');
    const middleChart = document.getElementById('scenarios-middle-chart');
    const normalChart = document.getElementById('scenarios-normal-chart');

    const fast = new Chart(fastChart, {
        type: 'bar',
        data: {
            labels: labelsChart,
            datasets: [{
                label: '',
                data: dataChart
            }],
        },
        options: optionsChart,
    });
    const middle = new Chart(middleChart, {
        type: 'bar',
        data: {
            labels: labelsChart,
            datasets: [{
                label: '',
                data: dataChart
            }],
        },
        options: optionsChart,
    });
    const normal = new Chart(normalChart, {
        type: 'bar',
        data: {
            labels: labelsChart,
            datasets: [{
                label: '',
                data: dataChart
            }],
        },
        options: optionsChart,
    });
}