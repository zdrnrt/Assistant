import Chart from "chart.js/auto";
import { type } from "jquery";

window.targetsOpen = function () {
  loadingToggle();
  fetch("./src/html/targets.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Реакция сети" + response.statusText);
      }
      return response.text();
    })
    .then((html) => {
      document.getElementById("content").innerHTML = html;
      targetsChartDraw();
      loadingToggle();
    })
    .catch((error) => {
      console.error("Возникла проблема с операцией выборки:", error);
    });
};

window.targetsTargetsChange = function (elem) {
  document.getElementById("targetsExternal").classList.toggle("d-none");
  document.getElementById("targetsInternal").classList.toggle("d-none");
};

window.targetsChartDraw = async function () {
  const data = [
    {
      label: "Рег",
      data: [
        7_748_609, 7_430_612, 7_526_057, 7_536_744, 7_519_518, 7_633_377, 7_532_513, 7_471_367, 7_439_333, 7_635_368, 7_356_560, 7_600_113, 7_727_610,
      ],
      stack: "S0",
    },
    {
      label: "Овер ",
      data: [
        1_874_664, 1_857_653, 1_850_670, 1_823_406, 1_879_880, 1_877_060, 1_822_382, 1_867_842, 1_829_344, 1_847_266, 1_839_140, 1_868_880, 1_869_583,
      ],
      stack: "S0",
    },
    {
      label: "Промо",
      count: 1_874_664,
      stack: "S0",
    },
    {
        label: "Промо",
        count: 1_857_653,
        stack: "S0",
    },
    {
        label: "Промо",
        count: 1_850_670,
        stack: "S0",
    },
    {
        label: "Промо",
        count: 1_823_406,
        stack: "S0",
    },
    {
        label: "Промо",
        count: 1_879_880,
        stack: "S0",
    },
    {
        label: "Промо",
        count: 1_877_060,
        stack: "S0",
    },
    {
        label: "Промо",
        count: 1_822_382,
        stack: "S0",
    },
    {
        label: "Промо",
        count: 1_867_842,
        stack: "S0",
    },
    {
        label: "Промо",
        count: 1_829_344,
        stack: "S0",
    },
    {
        label: "Промо",
        count: 1_847_266,
        stack: "S0",
    },
    {
        label: "Промо",
        count: 1_839_140,
        stack: "S0",
    },
    {
        label: "Промо",
        count: 1_868_880,
        stack: "S0",
    },
    {
        label: "Промо",
        count: 1_869_583,
        stack: "S0",
    },
    {
      label: "Вывод",
      count: 999_821,
      stack: "S0",
    },
    {
      label: "Вывод",
      count: 1_238_435,
      stack: "S0",
    },
    {
      label: "Вывод",
      count: 1_110_402,
      stack: "S0",
    },
    {
      label: "Вывод",
      count: 972_483,
      stack: "S0",
    },
    {
      label: "Вывод",
      count: 1_253_253,
      stack: "S0",
    },
    {
      label: "Вывод",
      count: 999_821,
      stack: "S0",
    },
    {
      label: "Вывод",
      count: 1_126_236,
      stack: "S0",
    },
    {
      label: "Вывод",
      count: 971_937,
      stack: "S0",
    },
    {
      label: "Вывод",
      count: 1_245_228,
      stack: "S0",
    },
    {
      label: "Вывод",
      count: 1_097_607,
      stack: "S0",
    },
    {
      label: "Вывод",
      count: 985_209,
      stack: "S0",
    },
    {
      label: "Вывод",
      count: 1_226_093,
      stack: "S0",
    },
    {
      label: "Вывод",
      count: 1_121_328,
      stack: "S0",
    },
    {
      label: "Вывод",
      count: 997_111,
      stack: "S0",
    },
    
    {
      label: "Итого, факт",
      count: [
        12_214_609, 11_970_317, 11_730_911, 11_496_293, 11_266_367, 11_041_039,
      ],
      stack: "S0",
    }
  ];

  const line = {
    label: "Итого план",
    data: [
      11_247_981, 11_145_919, 11_104_019, 10_940_435, 11_279_277, 11_262_359,
      10_934_293, 11_207_051, 10_976_065, 11_083_598, 11_034_841, 11_213_282,
      11_217_498, 11_192_498, 11_167_498, 11_142_498, 11_117_498, 11_092_498,
      11_067_498,
    ],
    type: 'line',
    order: 0
  };
  
  new Chart(document.getElementById("tasks-chart"), {
    type: "bar",
    data: {
      labels: data.map((row) => row.label),
      datasets: [
        {
          label: "",
          data: data.map((row) => row.count),
        },
      ],
    },
    options: {
        plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Сток, руб'
            }
          },
      
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true,
        },
      },
    },
  });
};
