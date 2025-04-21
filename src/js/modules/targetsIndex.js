import Chart from "chart.js/auto";
import {formatNumber} from '../tools'

window.targetsIndexOpen = function () {
  fetch("./src/html/targetsIndex.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Реакция сети" + response.statusText);
      }
      return response.text();
    })
    .then((html) => {
      document.getElementById("content").innerHTML = html;
      targetsIndexInit();
    })
    .catch((error) => {
      console.error("Возникла проблема с операцией выборки:", error);
    });
};

function targetsIndexInit(){
  targetsChartDraw()
}

window.targetsTargetsChange = function (elem) {
  document.getElementById("targetsExternal").classList.toggle("d-none");
  document.getElementById("targetsInternal").classList.toggle("d-none");
};

async function targetsChartDraw () {

  const data = {
    title: {
      'stock': 'Норма стока и структура стока ТТ, руб',
      'offs': 'Списания, %',
      'sales': 'Продажи, руб',
    },
    labels: [
      "11.01.2025",
      "12.01.2025",
      "13.01.2025",
      "14.01.2025",
      "15.01.2025",
      "16.01.2025",
      "17.01.2025",
      "18.01.2025",
      "19.01.2025",
      "20.01.2025",
      "21.01.2025",
      "22.01.2025",
      "23.01.2025",
      "24.01.2025",
      "25.01.2025",
      "26.01.2025",
      "27.01.2025",
    ],
    stock: [
        {
          label: "Рег",
          data: [
            7_526_057,
            7_536_744,
            7_519_518,
            7_633_377,
            7_532_513,
            7_471_367,
            7_439_333,
            7_635_368,
            7_356_560,
            7_600_113,
            7_727_610
          ],
          stack: "group",
          order: 1,
        },
        {
          label: "Овер ",
          data: [
            1_850_670, 1_823_406,
            1_879_880, 1_877_060,
            1_822_382, 1_867_842,
            1_829_344, 1_847_266,
            1_839_140, 1_868_880,
            1_869_583 ],
          stack: "group",
          order: 1,
        },
        {
          label: "Промо",
          data: [
            1_850_670,
            1_823_406,
            1_879_880,
            1_877_060,
            1_822_382,
            1_867_842,
            1_829_344,
            1_847_266,
            1_839_140,
            1_868_880,
            1_869_583
          ],
          stack: "group",
          order: 1,
        },
        {
          label: "Вывод",
          data: [
            1_110_402,
            972_483,
            1_253_253,
            1_126_236,
            971_937,
            1_245_228,
            1_097_607,
            985_209,
            1_226_093,
            1_121_328,
            997_111
          ],
          stack: "group",
          order: 1,
        },
        {
          label: "Итого факт",
          data: [
            12_337_799,
            12_156_039,
            12_532_530,
            12_513_732,
            12_149_214,
            12_452_279,
            12_195_628,
            12_315_109,
            12_260_934,
            12_459_202,
            12_463_887,
          ],
          stack: "group",
          order: 0,
        },
        {
          label: "Итого план",
          data: [
            11_104_019,
            10_940_435,
            11_279_277,
            11_262_359,
            10_934_293,
            11_207_051,
            10_976_065,
            11_083_598,
            11_034_841,
            11_213_282,
            11_217_498,
            11_192_498,
            11_167_498,
            11_142_498,
            11_117_498,
            11_092_498,
            11_067_498,
          ],
          type: "line",
          order: 0,
        },

    ],
    offs: [
      {
        label: 'Списание, факт',
        data: [
          2.30,
          2.50,
          2.50,
          2.50,
          2.80,
          2.90,
          2.50,
          2.50,
          2.50,
          2.50,
          2.50,
        ]
      },
      {
        label: 'Списание, план',
        data: [
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
        ],
        type: "line",
        order: 0,
      }
    ],
    sales: [
      {
        label: 'Продажа, факт',
        data: [
          500_002, 
          501_265, 
          566_576, 
          576_169, 
          523_441, 
          571_799, 
          528_823, 
          516_849, 
          528_735, 
          587_715, 
          583_842,
        ]
      },
      {
        label: 'Продажа, план',
        data: [
          515_002,
          506_278,
          538_247,
          553_122,
          528_675,
          577_517,
          534_111,
          522_017,
          534_022,
          593_592,
          560_488,
          531_215,
          562_610,
          570_523,
          572_480,
          493_803,
          509_844,
        ],
        type: "line",
        order: 0,
      }
    ],
  };

  const action = [
    {
      name: "Change data",
      handler( value, chart )
      {
        chart.data.datasets = data[value];
        chart.options.plugins.title.text = data.title[value]
        chart.update();
      }
    }
  ]
  const targetsChartSelect = document.getElementById('targetsChartSelect');
  targetsChartSelect.onchange = targetsChartSelectHandler;
  function targetsChartSelectHandler(event){
    console.log(event.target)
    const value = event.target.value;
    action[0].handler(value, targetsChart);
    changeResult(value);
  }

  window.changeResult = (value) => {
    const plan = document.getElementById('plan');
    const fact = document.getElementById('fact');
    const delta = document.getElementById('delta');
    // delta.classList.remove('danger');
    let planValue = 0, factValue = 0, deltaValue = 0;
    switch (value){
      case 'stock' : 
        planValue = data.stock[5].data[data.stock[4].data.length - 1];
        factValue = data.stock[4].data[data.stock[4].data.length - 1];
        deltaValue = data.stock[5].data[data.stock[4].data.length - 1] - data.stock[4].data[data.stock[4].data.length - 1];
      break;
      case 'offs' : 
        planValue = data.offs[1].data[data.offs[0].data.length - 1];
        factValue = data.offs[0].data[data.offs[0].data.length - 1];
        deltaValue = data.offs[1].data[data.offs[0].data.length - 1] - data.offs[0].data[data.offs[0].data.length - 1];
      break;
      case 'sales' : 
        planValue = data.sales[1].data[data.sales[0].data.length - 1];
        factValue = data.sales[0].data[data.sales[0].data.length - 1];
        deltaValue = data.sales[1].data[data.sales[0].data.length - 1] - data.sales[0].data[data.sales[0].data.length - 1];
      break;
      default: 
      break;
    }
    plan.textContent = formatNumber(planValue);
    fact.textContent = formatNumber(factValue);
    delta.textContent = formatNumber(deltaValue);
    delta.classList[deltaValue > 0 ? 'remove' : 'add']('danger');
  }


  const targetsChart = new Chart(document.getElementById("targetsChart"), {
    type: "bar",
    data: {
      labels: data.labels,
      datasets: data.stock
    },
    options: {
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Норма стока и структура стока ТТ, руб",
        },
        decimation: {
          enabled: false,
        }
      },
      scales: {
        x: {
          display: false,
          stacked: true,
        },
        y: {
          stacked: true,
        },
      },
    },
  });
};
