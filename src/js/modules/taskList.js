import { moduleOpen, fillDictionary } from '../tools';

window.taskListOpen = function () {
	moduleOpen('./src/html/taskList.html').then(() => {
		taskListInit();
	});
};

// taskListOpen();

function taskListInit() {
    fillDictionary();

    const filters = [
        document.querySelector('[data-id="department"]'),
        document.querySelector('[data-id="factorprocess"]'),
        document.querySelector('[data-id="urgency"]'),
    ];
    taskListTableSchema();
    for (const filter of filters) {
        filter.addEventListener('change', taskListFilter);
    }

}

function taskListTableSchema(){
    const schema = [
        'factor',
        '',
        '',
		'department',
		'factorprocess',
        '',
        '',
        'urgency',
        ''
	];
	const trList = document
		.getElementById('table')
		.querySelectorAll('tbody tr');
	for (const tr of trList) {
		tr.querySelectorAll('td').forEach((td, i) => {
            if (schema[i]){
                td.setAttribute('data-type', schema[i]);
            }
		});
	}
}


function taskListClear(filters) {
	return filters.every((filter) => filter.value === '');
}

function taskListFilter() {
	const filters = [
        document.querySelector('[data-id="department"]'),
        document.querySelector('[data-id="factorprocess"]'),
        document.querySelector('[data-id="urgency"]'),
    ];
	const clearFilters = taskListClear(filters);
	const table = document.getElementById('table');
	for (const tr of table.querySelectorAll('tr')) {
		tr.classList.remove('d-none');
	}
	if (clearFilters) {
		return;
	}

	for (const filter of filters) {
		const value = filter.value;
		if (value === '') {
			continue;
		}

		const type = filter.dataset.id;
		const tdList = table.querySelectorAll(
			`${
				clearFilters ? 'tr td' : 'tr:not(.d-none) td'
			}[data-type="${type}"]`
		);
		for (const td of tdList) {
			if (td.textContent !== value) {
				td.closest('tr').classList.add('d-none');
			}
		}
	}
}