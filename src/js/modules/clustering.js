import { Chart, plugins } from "chart.js/auto";

window.clusteringOpen = function () {
  fetch("./src/html/clustering.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Реакция сети" + response.statusText);
      }
      return response.text();
    })
    .then((html) => {
      document.getElementById("content").innerHTML = html;
      clusteringChartDraw();
    })
    .catch((error) => {
      console.error("Возникла проблема с операцией выборки:", error);
    });
};

// clusteringOpen();

window.clusteringChartDraw = function () {
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
          label: "Population", // Name the series
          data: data, // Specify the data values array
          borderColor: "#2196f3", // Add custom color border
          backgroundColor: "#2196f3", // Add custom color background (Points and Fill)
        },
      ],
    },
    options: options,
  });
};
