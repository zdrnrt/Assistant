import {Modal} from 'bootstrap';
import {moduleOpen} from '../tools'
import { Chart } from 'chart.js';

window.targetsFunctionOpen = function () {
  moduleOpen("./src/html/targetsFunctions.html")
    .then(() => {
      targetsFunctionInit()
    })
};

// targetsFunctionOpen();

function targetsFunctionInit () {
  document.getElementById('targetsFunctionsAdd').addEventListener('click', targetsFunctionAdd)
  document.getElementById('openConfig').addEventListener('click', targetsFunctionConfig)
  document.getElementById('apply').addEventListener('click', targetsFunctionChartsDraw)

  // targetsFunctionChartsDraw();
}

function targetsFunctionConfig(){
  const modal = document.getElementById('modalConfig');
  const type = document.getElementById('targetsFunctionsType').value;
  const schema = {
    'low': {
      title: 'Снижение товарного запаса на X%',
      config: ['decrease', 'limit'],
    },
    'to': {
      title: 'Привести товарный запас к нормам',
      config: [],
    },
    'increase': {
      title: 'Увеличить доступность на X%',
      config: ['increase'],
    },
    'lowLose': {
      title: 'Снизить потери на X%',
      config: ['decrease'],
    },
    'max': {
      title: 'Максимизировать прибыль',
      config: []
    },
  }
  const customs = {
    'increase': modal.querySelector('[name="increase"]'), 
    'decrease': modal.querySelector('[name="decrease"]'), 
    'limit': modal.querySelector('[name="limit"]'), 
  }

  modal.querySelector('#modalConfigLabel').textContent = schema[type].title;

  for (const control in customs){
    customs[control].closest('label').classList.add('d-none')
  }
  for (const config of schema[type].config){
    customs[config].closest('label').classList.remove('d-none');
  }

  Modal.getOrCreateInstance(modal).show();
}

function targetsFunctionAdd(){
  const schema = {
    'low': 'Снижение товарного запаса на X%',
    'to': 'Привести товарный запас к нормам',
    'increase': 'Увеличить доступность на X%',
    'lowLose': 'Снизить потери на X%',
    'max': 'Максимизировать прибыль',
  }

  const schemaStatus = {
    'conflict': 'противоречие с целью ',
    'reachable': 'показатель достижим',
    'reachableTask': 'достижима',
  }
  const schemaRisk = {
    'none': 'нет',
    'stock': 'увеличение запаса',
  }

  const type = document.getElementById('targetsFunctionsType').value;
  const table = document.getElementById('table').querySelector('tbody');
  const index = table.querySelectorAll('tr').length + 1;

  table.insertAdjacentHTML(
    'beforeend',
    `<tr data-index="${index}">
        <td data-id="index">${index}</td>
        <td data-id="type">${schema[type]}</td>
        <td data-id="value"><input type="number" class="form-control p-2 px-3 pe-0 me-2" placeholder="0">%</td>
        <td data-id="status"></td>
        <td data-id="risk"></td>
        <td data-id="allow"></td>
        <td>
          <button data-action="update" class="btn btn-primary p-2 px-3 me-2">Обновить</button>
          <button data-action="submit" class="btn btn-primary p-2 px-3 me-2">Применить</button>
          <button data-action="remove" class="btn btn-primary p-1 px-2"><i class="fa fa-trash"></i></button>
        </td>
      </tr>`
  )

  const actions = {
    'remove': function (event) {
      const table = event.target.closest('tbody')
      event.target.closest('tr').remove();
      table.querySelectorAll('tr').forEach((row, i) => {
        const index = i + 1;
        row.setAttribute('data-index', index);
        row.querySelector('[data-id="index"]').textContent = index;
      });
    },
    'update': function (event) {
      event.target.closest('tr').setAttribute('data-state', 'edit');
    },
    'submit': function (event) {
      const row = event.target.closest('tr');
      const index = Number(row.dataset.index);
      const type = row.querySelector('[data-id="type"]').textContent;
      const value = row.querySelector('[data-id="value"] input').value;
      row.querySelector('[data-id="allow"]').textContent = `${value} %`
      row.querySelector('[data-id="status"]').textContent = schemaStatus['reachable']
      row.querySelector('[data-id="risk"]').textContent = schemaRisk['none']
      row.removeAttribute('data-state');

      if (type == 'Увеличить доступность на X%' && index == 2 && value > 10 ){
        row.classList.add('danger');
        row.querySelector('[data-id="risk"]').textContent = schemaRisk['stock'];
        row.querySelector('[data-id="status"]').textContent = schemaStatus['conflict'] + '1';
        row.querySelector('[data-id="allow"]').textContent = `10 %`
      } else {
        row.classList.remove('danger')
      }

    },
  }

  const controls = table.querySelectorAll('button')
  for (const control of controls){
    control.onclick = actions[control.dataset.action];
  }
/*
  const inputs = table.querySelectorAll('input');
  
  for (const input of inputs){
    const action = control.dataset.action;
    input.removeEventListener('', actions[action]);
    input.addEventListener('', actions[action]);
  }
*/
  //`1	Снижение товарного запаса на X%		15%	показатель достижим 		нет	15%`

}

window.targetsTargetsChange = function (elem) {
  document.getElementById("targetsExternal").classList.toggle("d-none");
  document.getElementById("targetsInternal").classList.toggle("d-none");
};

function targetsFunctionChartsDraw(){
  document.getElementById('charts').classList.remove('d-none');

  const chartLabels = [
    '11.01',
    '12.01',
    '13.01',
    '14.01',
    '15.01',
    '16.01',
    '17.01',
    '18.01',
    '19.01',
    '20.01',
    '21.01',
  ]

  const chartData = {
		normaTt: [
			{
				label: 'Рег',
				data: [
					7_526_057, 7_536_744, 7_519_518, 7_633_377, 7_532_513,
					7_471_367, 7_439_333, 7_635_368, 7_356_560, 7_600_113,
					7_727_610,
				],
				stack: 'group',
				order: 1,
			},
			{
				label: 'Овер ',
				data: [
					1_850_670, 1_823_406, 1_879_880, 1_877_060, 1_822_382,
					1_867_842, 1_829_344, 1_847_266, 1_839_140, 1_868_880,
					1_869_583,
				],
				stack: 'group',
				order: 1,
			},
			{
				label: 'Промо',
				data: [
					1_850_670, 1_823_406, 1_879_880, 1_877_060, 1_822_382,
					1_867_842, 1_829_344, 1_847_266, 1_839_140, 1_868_880,
					1_869_583,
				],
				stack: 'group',
				order: 1,
			},
			{
				label: 'Вывод',
				data: [
					1_110_402, 972_483, 1_253_253, 1_126_236, 971_937,
					1_245_228, 1_097_607, 985_209, 1_226_093, 1_121_328,
					997_111,
				],
				stack: 'group',
				order: 1,
			},
			{
				label: 'Итого план',
				data: [
					11_104_019, 10_940_435, 11_279_277, 11_262_359, 10_934_293,
					11_207_051, 10_976_065, 11_083_598, 11_034_841, 11_213_282,
					11_217_498,
				],
				type: 'line',
				order: 0,
			},
			{
				label: 'Итого, факт',
				data: [
					12_337_799, 12_156_039, 12_532_530, 12_513_732, 12_149_214,
					12_452_279, 12_195_628, 12_315_109, 12_260_934, 12_459_202,
					12_463_887,
				],
				stack: 'group',
				order: 0,
			},
		],
		normaOosTt: [
			{
				label: 'Факт, %',
				data: [89, 90, 91, 89, 88, 91, 92, 90, 89, 89, 90],
			},
			{
				label: 'План, %',
				data: [98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98],
			},
		],
    offs: [
      {
        label: 'Списание, факт',
        data: [ 2.30, 2.50, 2.50, 2.50, 2.80, 2.90, 2.50, 2.50, 2.50, 2.50, 2.50, ]
      },
      {
        label: 'Списание, план',
        data: [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, ],
        type: 'line'
      },
    ]
	};

  const chart1 = document.getElementById('chart1');
  const chart2 = document.getElementById('chart2');
  const chart3 = document.getElementById('chart3');

  if (Chart.getChart('chart1')) {
      Chart.getChart('chart').destroy();
    } else {
      new Chart(chart1, {
        type: 'bar',
        data: {
          labels: chartLabels,
          datasets: chartData.normaTt,
        },
        options: {
          plugins: {
            legend: {
              display: true,
              position: 'top',
            },
            title: {
              display: false,
            },
            decimation: {
              enabled: false,
            },
          },
          scales: {
            x: {
              display: true,
            },
          },
        },
      });
    }
  if (Chart.getChart('chart2')) {
      Chart.getChart('chart2').destroy();
    } else {
      new Chart(chart2, {
        type: 'bar',
        data: {
          labels: chartLabels,
          datasets: chartData.normaOosTt,
        },
        options: {
          plugins: {
            legend: {
              display: true,
              position: 'top',
            },
            title: {
              display: false,
            },
            decimation: {
              enabled: false,
            },
          },
          scales: {
            x: {
              display: true,
            },
          },
        },
      });
    }
  if (Chart.getChart('chart3')) {
      Chart.getChart('chart3').destroy();
    } else {
      new Chart(chart3, {
        type: 'bar',
        data: {
          labels: chartLabels,
          datasets: chartData.offs,
        },
        options: {
          plugins: {
            legend: {
              display: true,
              position: 'top',
            },
            title: {
              display: false,
            },
            decimation: {
              enabled: false,
            },
          },
          scales: {
            x: {
              display: true,
            },
          },
        },
      });
    }
}