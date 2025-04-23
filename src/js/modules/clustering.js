import { Chart, plugins } from "chart.js/auto";
import {moduleOpen, downloadTable} from '../tools'

window.clusteringOpen = function () {
  moduleOpen('./src/html/clustering.html')
    .then( () => {
      clusteringChartDraw();
      document.getElementById('download').addEventListener('click', () => downloadTable('ассистент_кластеризация'))
    })
};

function clusteringChartDraw () {
  const chart = document.getElementById("clusteringChart");

  // Define the data
  var data = [
    {
      x: 5,
      y: 4,
    },
    {
      x: 2,
      y: 14,
    },
    {
      x: 4,
      y: 12,
    },
    {
      x: 2,
      y: 10,
    },
    {
      x: 3,
      y: 4,
    },
    {
      x: 3,
      y: 5,
    },
    {
      x: 3,
      y: 8,
    },
    {
      x: 6,
      y: 12,
    },
    {
      x: 2,
      y: 10,
    },
    {
      x: 1,
      y: 12,
    },
    {
      x: 5,
      y: 5,
    },
    {
      x: 6,
      y: 6,
    },
    {
      x: 9,
      y: 9,
    },
    {
      x: 2,
      y: 7,
    },
    {
      x: 6,
      y: 7,
    },
    {
      x: 6,
      y: 10,
    },
    {
      x: 2,
      y: 7,
    },
    {
      x: 4,
      y: 7,
    },
    {
      x: 4,
      y: 9,
    },
    {
      x: 8,
      y: 3,
    },
    {
      x: 8,
      y: 13,
    },
    {
      x: 8,
      y: 8,
    },
  ]; // Add data values to array
  // End Defining data
  var options = {
    plugins: {
        legend: {
            display: false
        }
    },
    responsive: true, // Instruct chart js to respond nicely.
    maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height
  };

  // End Defining data
  var myChart = new Chart(chart, {
    type: "scatter",
    data: {
      datasets: [
        {
          label: "Данные", // Name the series
          data: data, // Specify the data values array
          borderColor: "#dc3545", // Add custom color border
          backgroundColor: "#dc3545", // Add custom color background (Points and Fill)
        },
      ],
    },
    options: options,
  });
};
