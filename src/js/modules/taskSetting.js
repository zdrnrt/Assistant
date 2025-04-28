import { moduleOpen, fillDictionary } from "../tools";

window.taskSettingOpen = function() {
    moduleOpen('./src/html/taskSetting.html')
        .then(() => {
            fillDictionary();
            taskSettingTableSchema();
            const filters = [
                document.querySelector('[data-id="target"]'),
                document.querySelector('[data-id="factoranalysis"]'),
                document.querySelector('[data-id="department"]'),
                document.querySelector('[data-id="factorprocess"]'),
            ];
            for (const filter of filters) {
                filter.addEventListener('change', taskSettingFilter);
            }
        })
}

// taskSettingOpen();

function taskSettingTableSchema() {
	const schema = [
        'factor',
        '',
        'target',
		'department',
		'process',
        '',
        '',
        '',
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

function taskSettingClear(filters) {
	return filters.every((filter) => filter.value === '');
}

function taskSettingFilter() {
	const filters = [
        document.querySelector('[data-id="target"]'),
        document.querySelector('[data-id="factoranalysis"]'),
        document.querySelector('[data-id="department"]'),
        document.querySelector('[data-id="factorprocess"]'),
    ];
	const clearFilters = taskSettingClear(filters);
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