import {Modal} from 'bootstrap';

window.targetsFunctionOpen = function () {
  fetch("./src/html/targetsFunctions.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Реакция сети" + response.statusText);
      }
      return response.text();
    })
    .then((html) => {
      document.getElementById("content").innerHTML = html;
      targetsFunctionInit()
    })
    .catch((error) => {
      console.error("Возникла проблема с операцией выборки:", error);
    });
};

function targetsFunctionInit () {
  document.getElementById('targetsFunctionsAdd').addEventListener('click', targetsFunctionAdd)
  document.getElementById('openConfig').addEventListener('click', targetsFunctionConfig)
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
