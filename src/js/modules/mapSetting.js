import { downloadTable, fillDictionary } from '../tools';
import * as XLSX from 'xlsx/xlsx.mjs';
import { moduleOpen } from '../tools';

window.mapSettingOpen = function () {
	moduleOpen('./src/html/mapSetting.html').then(() => {
		mapSettingInit();
	});
};

mapSettingOpen();

function mapSettingInit() {
	mapSettingTableSchema();
	fillDictionary();
	document
		.getElementById('download')
		.addEventListener('click', () =>
			downloadTable('ассистент_карта_процессов_настройка')
		);
	document
		.getElementById('filter')
		.addEventListener('change', mapSettingFilter);
}

function mapSettingTableSchema() {
	const schema = ['mainprocess'];
	const tdList = document
		.getElementById('table')
		.querySelectorAll('tbody tr td:first-child');
	for (const td of tdList) {
		// tr.querySelectorAll('td').forEach((td, i) => {
		td.setAttribute('data-type', schema[0]);
		// })
	}
}

function mapSettingFilter(event) {
	const value = event.target.value;
	const tdList = document.querySelectorAll('#table tbody td:first-child');
	for (const td of tdList) {
		if (td.textContent !== value && value != '') {
			td.closest('tr').classList.add('d-none');
		} else {
			td.closest('tr').classList.remove('d-none');
		}
	}
}
