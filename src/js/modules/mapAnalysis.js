import { fillDictionary, downloadTable } from '../tools';
import { moduleOpen } from '../tools';

window.mapAnalysisOpen = function () {
	moduleOpen('./src/html/mapAnalysis.html').then(() => {
		mapAnalysisInit();
	});
};

// mapAnalysisOpen()

function mapAnalysisInit() {
	const filters = [
		document.querySelector('[data-id="mainprocess"]'),
		document.querySelector('[data-id="process"]'),
		document.querySelector('[data-id="subprocess"]'),
	];

	mapAnalysisTableSchema();
	mapAnalysisStats();
	fillDictionary();
	for (const filter of filters) {
		filter.addEventListener('change', mapAnalysisFilter);
	}

	document
		.getElementById('download')
		.addEventListener('click', () =>
			downloadTable('ассистент_карта_процессов_анализ')
		);
}

function mapAnalysisTableSchema() {
	const schema = [
		'mainprocess',
		'process',
		'subprocess',
		'input',
		'executor',
		'tool',
		'rate',
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

function mapAnalysisClear(filters) {
	return filters.every((filter) => filter.value === '');
}

function mapAnalysisFilter() {
	const filters = [
		document.querySelector('[data-id="mainprocess"]'),
		document.querySelector('[data-id="process"]'),
		document.querySelector('[data-id="subprocess"]'),
	];

	const clearFilters = mapAnalysisClear(filters);
	const table = document.getElementById('table');
	for (const tr of table.querySelectorAll('tr')) {
		tr.classList.remove('d-none');
	}
	if (clearFilters) {
		mapAnalysisStats();
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

	mapAnalysisStats();
}

function mapAnalysisStats() {
	const table = document.getElementById('table');
	const list = Array.from(
		table.querySelectorAll('tr:not(.d-none) [data-type="rate"]')
	);
	document.getElementById('all').textContent = list.reduce(
		(result, el) => (Number(el.textContent) == 5 ? result + 1 : result),
		0
	);
	document.getElementById('under').textContent = list.reduce(
		(result, el) => (Number(el.textContent) <= 2 ? result + 1 : result),
		0
	);
	document.getElementById('above').textContent = list.reduce(
		(result, el) =>
			Number(el.textContent) == 3 || Number(el.textContent) == 4
				? result + 1
				: result,
		0
	);
}
