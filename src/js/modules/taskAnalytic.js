import { Chart } from "chart.js/auto";
import { moduleOpen } from "../tools";

window.taskAnalyticOpen = function() {
    moduleOpen('./src/html/taskAnalytic.html')
      .then(() => {
        taskAnalyticInit();
      })
}

// taskAnalyticOpen();

function taskAnalyticInit(){
    taskAnalyticChartDraw()
}

function taskAnalyticChartDraw(){

    const dataChart = {
        taskСommerceChart: [
            {
                label: '',
                data: [10, 15, 14, 13, 18, 20]
            }
        ],
        taskOperationChart: [
            {
                label: '',
                data: [ 11, 3, 10, 8, 18, 22, ]
            }
        ],
        taskItemChart: [
            {
                label: '',
                data: [
                    20,
                    11,
                    14,
                    16,
                    15,
                    10,
                ]
            }
        ],
        taskMarketingChart: [
            {
                label: '',
                data: [
                    11,
                    8,
                    7,
                    5,
                    7,
                    9,
                ]
            }
        ],
        taskForecastChart: [
            {
                label: '',
                data: [
                    10,
                    11,
                    14,
                    16,
                    17,
                    18,
                ]
            }
        ],
        taskLogisticChart: [
            {
                label: '',
                data: [
                    6,
                    9,
                    11,
                    14,
                    18,
                    10,
                ]
            }
        ],
    };
    const labelsChart = ['1', '2', '3', '4', '5', '6']
    const optionsChart = {
        responsive: true,
        aspectRatio: 1,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
        },
        scales: {
            yAxes: [{
              // Hide y-axis here
                display: false,
                ticks: {
                    beginAtZero: true
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Amount',
                    fontSize: 20
                }
            }],
          xAxes: [{
              display: false
            }
          ]
        }
    }
    const chartParmas = (id) => ({
        type: 'bar',
        data: {
            labels: labelsChart,
            datasets: dataChart[id],
        },
        options: optionsChart,
    });

    new Chart(document.getElementById('taskСommerceChart'), chartParmas('taskСommerceChart'));
    new Chart(document.getElementById('taskOperationChart'), chartParmas('taskOperationChart'));
    new Chart(document.getElementById('taskItemChart'), chartParmas('taskItemChart'));
    new Chart(document.getElementById('taskMarketingChart'), chartParmas('taskMarketingChart'));
    new Chart(document.getElementById('taskForecastChart'), chartParmas('taskForecastChart'));
    new Chart(document.getElementById('taskLogisticChart'), chartParmas('taskLogisticChart'));
}