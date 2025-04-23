import {moduleOpen, downloadTable} from '../tools'


window.dataOptimisationOpen = function() {
    moduleOpen('./src/html/dataOptimisation.html')
    .then( () => {
        dataOptimisationInit()
    })
}

function dataOptimisationInit(){
    document.getElementById('filter').addEventListener('change', dataOptimisationFilter)
    // document.getElementById('download').addEventListener('change', () => console.log('ассистент_данные_оптимизация'))
    document.getElementById('download').addEventListener('click', () => downloadTable('ассистент_данные_оптимизация'))
}

function dataOptimisationFilter(event){
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