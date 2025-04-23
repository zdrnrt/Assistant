import Chart from "chart.js/auto";
import {formatNumber, fillDictionary} from '../tools'

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

targetsIndexOpen();

function targetsIndexInit(){
  fillDictionary()
  targetsIndexChartExternalDraw();
  targetsIndexChartInternalDraw();
  document.getElementById('targetsIndexType').addEventListener('change', targetsTargetsChange)
}

function targetsTargetsChange () {
  document.getElementById("targetsExternal").classList.toggle("d-none");
  document.getElementById("targetsInternal").classList.toggle("d-none");
};

const chartConfig = {
    type: "bar",
    // data: {
    //   labels: data.labels,
    //   datasets: data.stock
    // },
    options: {
      plugins: {
        legend: {
          display: false,
          position: "top",
        },
        title: {
          display: false,
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
}

const chartData = {
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
  ],
  norma: {
    data: [
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
        type: "line",
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
        stack: "group",
        order: 0,
      },
  ]},
  offs: {
    data: [
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
      ],
      type: 'line'
    }
    
  ]},
  sells: {
    data: [
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
      ],
      type: 'line'
    },

  ]},
  normaRc: {
    data: [
    {
      label: 'Рег',
      data: [
        2_508_686,
        2_512_248 ,
        2_506_506 ,
        2_544_459 ,
        2_510_838 ,
        2_490_456 ,
        2_479_778 ,
        2_545_123 ,
        2_452_187 ,
        2_533_371 ,
        2_575_870 ,
      ],
      stack: "group",
    },
    {
      label: 'Овер ',
      data: [
        616890,
        607802,
        626627,
        625687,
        607461,
        622614,
        609781,
        615755,
        613047,
        622960,
        623194,
      ],
      stack: "group",
    },
    {
      label: 'Промо',
      data: [
        616890,
        607802,
        626627,
        625687,
        607461,
        622614,
        609781,
        615755,
        613047,
        622960,
        623194,
      ],
      stack: "group",
    },
    {
      label: 'Вывод',
      data: [
        370134,
        324161,
        417751,
        375412,
        323979,
        415076,
        365869,
        328403,
        408698,
        373776,
        332370,
      ],
      stack: "group",
    },
    {
      label: 'Итого, факт',
      data: [
        4112600,
        4052013,
        4177510,
        4171244,
        4049738,
        4150760,
        4065209,
        4105036,
        4086978,
        4153067,
        4154629,
      ],
      stack: "group",
    },
    {
      label: 'Итого, план',
      data: [
        3701340,
        3646812,
        3759759,
        3754120,
        3644764,
        3735684,
        3658688,
        3694533,
        3678280,
        3737761,
        3739166,
      ],
      type: 'line'
    },

  ]},
  normaOosTt: {
    options: {
      scales: {
        x: {
          display: false,
          stacked: false
        }
      }
    },
    data: [
    {
      label: 'Факт, %',
      data: [
        89,
        90,
        91,
        89,
        88,
        91,
        92,
        90,
        89,
        89,
        90,
      ]
    },
    {
      label: 'План, %',
      data: [
        98,
        98,
        98,
        98,
        98,
        98,
        98,
        98,
        98,
        98,
        98,
      ]
    }
  ],
  options: {
    scales: {
      x: {
        display: false,
        stacked: false
      }
    }
  },},
  normaUc: {
    data: [
    {
      label: 'Факт, %',
      data: [
        79,
        88,
        81,
        89,
        88,
        91,
        92,
        90,
        89,
        89,
        90,
      ]
    },
    {
      label: 'План, %',
      data: [
        95,
        95,
        95,
        95,
        95,
        95,
        95,
        95,
        95,
        95,
        95,
      ]
    }
  ],options: {
    scales: {
      x: {
        display: false,
        stacked: false
      }
    }
  },},
  normaUcRcTt: {
    data: [
    {
      label: 'Факт, %',
      data: [
        97,
        98,
        98,
        98,
        96,
        96,
        97,
        98,
        98,
        98,
        98,
      ]
    },
    {
      label: 'План, %',
      data: [
        98,
        98,
        98,
        98,
        98,
        98,
        98,
        98,
        98,
        98,
        98,
      ]
    },

  ],options: {
    scales: {
      x: {
        display: false,
        stacked: false
      }
    }
  },}
}

async function targetsIndexChartExternalDraw () {

  const config = chartConfig

  // let data = {
  //   labels: [
  //     "11.01.2025",
  //     "12.01.2025",
  //     "13.01.2025",
  //     "14.01.2025",
  //     "15.01.2025",
  //     "16.01.2025",
  //     "17.01.2025",
  //     "18.01.2025",
  //     "19.01.2025",
  //     "20.01.2025",
  //     "21.01.2025",
  //   ],
  //   title: {
  //     'stock': 'Норма стока и структура стока ТТ, руб',
  //     'offs': 'Списания, %',
  //     'sales': 'Продажи, руб',
  //   },
  //   labels: [
  //     "11.01.2025",
  //     "12.01.2025",
  //     "13.01.2025",
  //     "14.01.2025",
  //     "15.01.2025",
  //     "16.01.2025",
  //     "17.01.2025",
  //     "18.01.2025",
  //     "19.01.2025",
  //     "20.01.2025",
  //     "21.01.2025",
  //     "22.01.2025",
  //     "23.01.2025",
  //     "24.01.2025",
  //     "25.01.2025",
  //     "26.01.2025",
  //     "27.01.2025",
  //   ],
  //   stock: [
  //       {
  //         label: "Рег",
  //         data: [
  //           7_526_057,
  //           7_536_744,
  //           7_519_518,
  //           7_633_377,
  //           7_532_513,
  //           7_471_367,
  //           7_439_333,
  //           7_635_368,
  //           7_356_560,
  //           7_600_113,
  //           7_727_610
  //         ],
  //         stack: "group",
  //         order: 1,
  //       },
  //       {
  //         label: "Овер ",
  //         data: [
  //           1_850_670, 1_823_406,
  //           1_879_880, 1_877_060,
  //           1_822_382, 1_867_842,
  //           1_829_344, 1_847_266,
  //           1_839_140, 1_868_880,
  //           1_869_583 ],
  //         stack: "group",
  //         order: 1,
  //       },
  //       {
  //         label: "Промо",
  //         data: [
  //           1_850_670,
  //           1_823_406,
  //           1_879_880,
  //           1_877_060,
  //           1_822_382,
  //           1_867_842,
  //           1_829_344,
  //           1_847_266,
  //           1_839_140,
  //           1_868_880,
  //           1_869_583
  //         ],
  //         stack: "group",
  //         order: 1,
  //       },
  //       {
  //         label: "Вывод",
  //         data: [
  //           1_110_402,
  //           972_483,
  //           1_253_253,
  //           1_126_236,
  //           971_937,
  //           1_245_228,
  //           1_097_607,
  //           985_209,
  //           1_226_093,
  //           1_121_328,
  //           997_111
  //         ],
  //         stack: "group",
  //         order: 1,
  //       },
  //       {
  //         label: "Итого факт",
  //         data: [
  //           12_337_799,
  //           12_156_039,
  //           12_532_530,
  //           12_513_732,
  //           12_149_214,
  //           12_452_279,
  //           12_195_628,
  //           12_315_109,
  //           12_260_934,
  //           12_459_202,
  //           12_463_887,
  //         ],
  //         stack: "group",
  //         order: 0,
  //       },
  //       {
  //         label: "Итого план",
  //         data: [
  //           11_104_019,
  //           10_940_435,
  //           11_279_277,
  //           11_262_359,
  //           10_934_293,
  //           11_207_051,
  //           10_976_065,
  //           11_083_598,
  //           11_034_841,
  //           11_213_282,
  //           11_217_498,
  //         ],
  //         type: "line",
  //         order: 0,
  //       },

  //   ],
  //   offs: [
  //     {
  //       label: 'Списание, факт',
  //       data: [
  //         2.30,
  //         2.50,
  //         2.50,
  //         2.50,
  //         2.80,
  //         2.90,
  //         2.50,
  //         2.50,
  //         2.50,
  //         2.50,
  //         2.50,
  //       ]
  //     },
  //     {
  //       label: 'Списание, план',
  //       data: [
  //         2,
  //         2,
  //         2,
  //         2,
  //         2,
  //         2,
  //         2,
  //         2,
  //         2,
  //         2,
  //         2,
  //         2,
  //         2,
  //         2,
  //         2,
  //         2,
  //         2,
  //       ],
  //       type: "line",
  //       order: 0,
  //     }
  //   ],
  //   sales: [
  //     {
  //       label: 'Продажа, факт',
  //       data: [
  //         500_002, 
  //         501_265, 
  //         566_576, 
  //         576_169, 
  //         523_441, 
  //         571_799, 
  //         528_823, 
  //         516_849, 
  //         528_735, 
  //         587_715, 
  //         583_842,
  //       ]
  //     },
  //     {
  //       label: 'Продажа, план',
  //       data: [
  //         515_002,
  //         506_278,
  //         538_247,
  //         553_122,
  //         528_675,
  //         577_517,
  //         534_111,
  //         522_017,
  //         534_022,
  //         593_592,
  //         560_488,
  //         531_215,
  //         562_610,
  //         570_523,
  //         572_480,
  //         493_803,
  //         509_844,
  //       ],
  //       type: "line",
  //       order: 0,
  //     }
  //   ],
  // };

  const data = chartData;

  const action = [
    {
      name: "Change data",
      handler( value, chart )
      {
        if (data[value].options) {
          chart.config.options = {...chart.config.options, ...data[value].options}
        } else {
          chart.config.options = config.options
        }
        chart.data.datasets = data[value].data;
        chart.update();
      }
    }
  ]
  const targetsChartSelect = document.getElementById('targetsIndexExternalSelect');
  targetsChartSelect.onchange = targetsChartSelectHandler;

  function targetsChartSelectHandler(event){
    const value = event.target.value;
    action[0].handler(value, targetsChart);
    changeResult(value);
  }

  function changeResult (value) {
    const plan = document.getElementById('planExternal');
    const fact = document.getElementById('factExternal');
    const delta = document.getElementById('deltaExternal');
    delta.classList.remove('danger');
    delta.classList.remove('danger');
    let planValue = 0, factValue = 0, deltaValue = 0;
    let planArr = [], factArr = []; 
    switch (value){
      case 'norma':
        planArr = data.norma.data[5].data;
        factArr = data.norma.data[4].data;
      break;
      case 'offs':
        planArr = data.offs.data[1].data;
        factArr = data.offs.data[0].data;
      break;
      case 'sells':
        planArr = data.sells.data[1].data;
        factArr = data.sells.data[0].data;
      break;
      case 'normaRc':
        planArr = data.normaRc.data[5].data;
        factArr = data.normaRc.data[4].data;
      break;
      case 'normaOosTt':
        planArr = data.normaOosTt.data[1].data;
        factArr = data.normaOosTt.data[0].data;
      break;
      case 'normaUc':
        planArr = data.normaUc.data[1].data;
        factArr = data.normaUc.data[0].data;
      break;
      case 'normaUcRcTt':
        planArr = data.normaUcRcTt.data[1].data;
        factArr = data.normaUcRcTt.data[0].data;
      break;
      default: 
      break;
    }
    planValue = planArr[planArr.length - 1];
    factValue = factArr[factArr.length - 1];
    deltaValue = factValue - planValue;
    plan.textContent = formatNumber(planValue);
    fact.textContent = formatNumber(factValue);
    delta.textContent = formatNumber(deltaValue);
    delta.classList[deltaValue > 0 ? 'remove' : 'add']('danger');
  }

  config.data = {
    labels: chartData.labels,
    datasets: chartData.norma.data
  };

  const targetsChart = new Chart(document.getElementById("targetsChartExternal"), config);
};

async function targetsIndexChartInternalDraw () {

  const config = chartConfig;

  const data = chartData;

  const action = [
    {
      name: "Change data",
      handler( value, chart )
      {
        if (data[value].options) {
          chart.config.options = {...chart.config.options, ...data[value].options}
        } else {
          chart.config.options = config.options
        }
        chart.data.datasets = data[value].data;
        chart.update();
      }
    }
  ]

  const targetsChartSelect = document.getElementById('targetsIndexInternalSelect');
  targetsChartSelect.onchange = targetsChartSelectHandler;
  function targetsChartSelectHandler(event){
    const value = event.target.value;
    action[0].handler(value, targetsChart);
    changeResult(value);
  }

  function changeResult (value) {
    const plan = document.getElementById('planInternal');
    const fact = document.getElementById('factInternal');
    const delta = document.getElementById('deltaInternal');
    delta.classList.remove('danger');
    delta.classList.remove('danger');
    let planValue = 0, factValue = 0, deltaValue = 0;
    let planArr = [], factArr = []; 
    switch (value){
      case 'norma':
        planArr = data.norma.data[5].data;
        factArr = data.norma.data[4].data;
      break;
      case 'offs':
        planArr = data.offs.data[1].data;
        factArr = data.offs.data[0].data;
      break;
      case 'sells':
        planArr = data.sells.data[1].data;
        factArr = data.sells.data[0].data;
      break;
      case 'normaRc':
        planArr = data.normaRc.data[5].data;
        factArr = data.normaRc.data[4].data;
      break;
      case 'normaOosTt':
        planArr = data.normaOosTt.data[1].data;
        factArr = data.normaOosTt.data[0].data;
      break;
      case 'normaUc':
        planArr = data.normaUc.data[1].data;
        factArr = data.normaUc.data[0].data;
      break;
      case 'normaUcRcTt':
        planArr = data.normaUcRcTt.data[1].data;
        factArr = data.normaUcRcTt.data[0].data;
      break;
      default: 
      break;
    }
    planValue = planArr[planArr.length - 1];
    factValue = factArr[factArr.length - 1];
    deltaValue = factValue - planValue;
    plan.textContent = formatNumber(planValue);
    fact.textContent = formatNumber(factValue);
    delta.textContent = formatNumber(deltaValue);
    delta.classList[deltaValue > 0 ? 'remove' : 'add']('danger');
  }


  const targetsChart = new Chart(document.getElementById("targetsChartInternal"), config);
};
