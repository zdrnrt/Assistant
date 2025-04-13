import { Modal } from "bootstrap";
import { Chart } from "chart.js/auto";
import * as XLSX from 'xlsx/xlsx.mjs';
import ChartDataLabels from 'chartjs-plugin-datalabels';

window.dataInfoOpen = function () {
  loadingToggle();
  fetch("./src/html/dataInfo.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Реакция сети" + response.statusText);
      }
      return response.text();
    })
    .then((html) => {
      document.getElementById("content").innerHTML = html;
      dataInfoChartDraw();
      dataInfoSpeedDraw();
      loadingToggle();
    })
    .catch((error) => {
      console.error("Возникла проблема с операцией выборки:", error);
      loadingToggle();
    });
};

window.dataFilter = function (event) {
  event.preventDefault();
  const form = event.target;
  const result = new FormData(form);
  console.log(result);
  Modal.getInstance(form.closest('.modal')).hide();

};

window.dataInfoDownload = function () {
  var workbook = XLSX.utils.table_to_book(document.getElementById('dataInfoTable'));
  XLSX.writeFile(workbook, `ассистент_данные_полнота_и_актуальность.xlsx`)
}

window.dataInfoChartDraw = function () {
  const chartIn = document.getElementById("dataInfoChartIn");
  const chartOut = document.getElementById("dataInfoChartOut");
  const labels = [
    "1.2",
    "2.2",
    "3.2",
    "4.2",
    "5.2",
    "6.2",
    "7.2",
    "8.2",
    "9.2",
    "10.2",
    "11.2",
    "12.2",
    "13.2",
    "14.2",
    "15.2",
    "16.2",
    "17.2",
    "18.2",
    "19.2",
    "20.2",
    "21.2",
    "22.2",
    "23.2",
  ];
  const datasets = [
    {
      label: "Olap",
      data: [
        96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 40, 96, 96, 96, 96, 96,
      ],
    },
    {
      label: "АЗ",
      data: [
        98, 98, 80, 98, 98, 98, 98, 70, 98, 98, 98, 98, 98, 98, 98, 98, 98, 40, 98, 98, 98, 98, 98,
      ],
    },
    {
      label: "Прогноз",
      data: [
        97, 97, 97, 97, 97, 50, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 40, 97, 97, 97, 97, 97,
      ],
    },
  ];

  window.dataInfoChartIn = new Chart(chartIn, {
    type: "line",
    data: {
      labels: labels,
      datasets: datasets,
    },
  });
  window.dataInfoChartOut = new Chart(chartOut, {
    type: "line",
    data: {
      labels: labels,
      datasets: datasets,
    },
  });
};

window.dataInfoSpeedDraw = function () {
  const chartOlapIn = document.getElementById("dataInfoOlapIn").getContext("2d");
  const chartAutoIn = document.getElementById("dataInfoAutoIn").getContext("2d");
  const chartForecastIn = document.getElementById("dataInfoForecastIn").getContext("2d");

  const chartOlapOut = document.getElementById("dataInfoOlapOut").getContext("2d");
  const chartAutoOut = document.getElementById("dataInfoAutoOut").getContext("2d");
  const chartForecastOut = document.getElementById("dataInfoForecastOut").getContext("2d");

  const configOlapIn = {
      plugins: [ChartDataLabels],
      type: "doughnut",
    data: {
      labels: ["In", "Grey"],
      datasets: [
        {
          data: [85, 15],
          backgroundColor: ["#69c97a", "#cdd5e1"],
          borderColor: ["#69c97a", "#cdd5e1"],
          needleValue: 78,
          meterValue: 1.07,
          borderWidth: 1,
          cutout: "75%",
          circumference: 180,
          rotation: -90,
        },
      ],
    },
    options: {
      plugins: {
        datalabels: {
          display: true,
          align: "center",
          backgroundColor: "#fff",
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
  const configOlapOut = {
    plugins: [ChartDataLabels],
    type: "doughnut",
    data: {
      labels: ["Out", "Grey"],
      datasets: [
        {
          data: [85, 15],
          backgroundColor: ["#555cf5", "#cdd5e1"],
          borderColor: ["#555cf5", "#cdd5e1"],
          needleValue: 78,
          meterValue: 1.07,
          borderWidth: 1,
          cutout: "75%",
          circumference: 180,
          rotation: -90,
        },
      ],
    },
    options: {
      plugins: {datalabels: {
        display: true,
        align: "center",
        backgroundColor: "#fff",
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
    type: "doughnut",
    data: {
      labels: ["In", "Grey"],
      datasets: [
        {
          data: [85, 15],
          backgroundColor: ["#69c97a", "#cdd5e1"],
          borderColor: ["#69c97a", "#cdd5e1"],
          needleValue: 78,
          meterValue: 1.07,
          borderWidth: 1,
          cutout: "75%",
          circumference: 180,
          rotation: -90,
        },
      ],
    },
    options: {
      plugins: {
        datalabels: {
          display: true,
          align: "center",
          backgroundColor: "#fff",
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
      type: "doughnut",
    data: {
      labels: ["Out", "Grey"],
      datasets: [
        {
          data: [85, 15],
          backgroundColor: ["#555cf5", "#cdd5e1"],
          borderColor: ["#555cf5", "#cdd5e1"],
          needleValue: 78,
          meterValue: 1.07,
          borderWidth: 1,
          cutout: "75%",
          circumference: 180,
          rotation: -90,
        },
      ],
    },
    options: {
      plugins: {datalabels: {
        display: true,
        align: "center",
        backgroundColor: "#fff",
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
      type: "doughnut",
    data: {
      labels: ["In", "Grey"],
      datasets: [
        {
          data: [85, 15],
          backgroundColor: ["#69c97a", "#cdd5e1"],
          borderColor: ["#69c97a", "#cdd5e1"],
          needleValue: 78,
          meterValue: 1.07,
          borderWidth: 1,
          cutout: "75%",
          circumference: 180,
          rotation: -90,
        },
      ],
    },
    options: {
      plugins: {datalabels: {
        display: true,
        align: "center",
        backgroundColor: "#fff",
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
    type: "doughnut",
    data: {
      labels: ["Out", "Grey"],
      datasets: [
        {
          data: [85, 15],
          backgroundColor: ["#555cf5", "#cdd5e1"],
          borderColor: ["#555cf5", "#cdd5e1"],
          needleValue: 78,
          meterValue: 1.07,
          borderWidth: 1,
          cutout: "75%",
          circumference: 180,
          rotation: -90,
        },
      ],
    },
    options: {
      plugins: {datalabels: {
        display: true,
        align: "center",
        backgroundColor: "#fff",
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

  const dataInfoOlapIn = new Chart(chartOlapIn, configOlapIn);
  const dataInfoAutoIn = new Chart(chartAutoIn, configAutoIn);
  const dataInfoForecastIn = new Chart(chartForecastIn, configForecastIn);
  const dataInfoOlapOut = new Chart(chartOlapOut, configOlapOut);
  const dataInfoAutoOut = new Chart(chartAutoOut, configAutoOut);
  const dataInfoForecastOut = new Chart(chartForecastOut, configForecastOut);
};
