import { Chart } from "chart.js";
import { moduleOpen, fillDictionary } from '../tools'

window.factorSettingOpen = function() {
    moduleOpen('./src/html/factorSetting.html')
        .then(() => {
            factorSettingInit();
        })
}

// window.factorSettingOpen();

function factorSettingInit(){
    fillDictionary();

    const filters = [
		document.querySelector('[data-id="department"]'),
		document.querySelector('[data-id="process"]'),
	];
    for (const filter of filters) {
		filter.addEventListener('change', factorSettingFilter);
	}
    factorSettingTableSchema();
}

function factorSettingTableSchema() {
	const schema = [
        '',
        '',
        '',
		'department',
		'process',
	];
	const trList = document
		.getElementById('table')
		.querySelectorAll('tbody tr');
	for (const tr of trList) {
		tr.querySelectorAll('td').forEach((td, i) => {
			td.setAttribute('data-type', schema[i]);
		});
	}
}

function factorSettingClear(filters) {
	return filters.every((filter) => filter.value === '');
}

function factorSettingFilter() {
	const filters = [
		document.querySelector('[data-id="department"]'),
		document.querySelector('[data-id="process"]'),
	];

	const clearFilters = factorSettingClear(filters);
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