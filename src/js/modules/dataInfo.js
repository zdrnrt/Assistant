import { Modal } from "bootstrap";
import { Chart } from "chart.js/auto";
import * as XLSX from 'xlsx/xlsx.mjs';

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
};

window.dataInfoDownload = function () {
  var workbook = XLSX.utils.table_to_book(document.getElementById('dataInfoTable'));
  XLSX.writeFile(workbook, `ассистент_данные_полнота_и_актуальность.xlsx`)
}

window.dataInfoChartDraw = function () {
  const chart = document.getElementById("dataInfoChart");
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
        96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 40,
        96, 96, 96, 96, 96,
      ],
    },
    {
      label: "АЗ",
      data: [
        98, 98, 80, 98, 98, 98, 98, 70, 98, 98, 98, 98, 98, 98, 98, 98, 98, 40,
        98, 98, 98, 98, 98,
      ],
    },
    {
      label: "Прогноз",
      data: [
        97, 97, 97, 97, 97, 50, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 40,
        97, 97, 97, 97, 97,
      ],
    },
  ];

  window.dataInfoChart = new Chart(chart, {
    type: "line",
    data: {
      labels: labels,
      datasets: datasets,
    },
  });
};

window.dataInfoSpeedDraw = function () {
  const chartOlap = document.getElementById("dataInfoOlap").getContext("2d");
  const chartAuto = document.getElementById("dataInfoAuto").getContext("2d");
  const chartForecast = document.getElementById("dataInfoForecast").getContext("2d");

  const config = {
    type: "doughnut",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
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
        legend: {
          display: false,
        },
      },
    },
  };

  const dataInfoOlap = new Chart(chartOlap, config);
  const dataInfoAuto = new Chart(chartAuto, config);
  const dataInfoForecast = new Chart(chartForecast, config);
};
