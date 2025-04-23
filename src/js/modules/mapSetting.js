import {downloadTable, fillDictionary} from '../tools';
import * as XLSX from 'xlsx/xlsx.mjs';

window.mapSettingOpen = function() {
  fetch('./src/html/mapSetting.html')
      .then(response => {
          if (!response.ok) {
              throw new Error('Реакция сети' + response.statusText);
          }
          return response.text(); 
      })
      .then(html => {
          document.getElementById('content').innerHTML = html;
          mapSettingInit()
        })
        .catch(error => {
            console.error('Возникла проблема с операцией выборки:', error);
        });
    }
    
function mapSettingInit(){
    mapSettingTableSchema();
    fillDictionary();
    document.getElementById('download').addEventListener('click', () => downloadTable('ассистент_карта_процессов_настройка'))
    document.getElementById('filter').addEventListener('change', mapSettingFilter)
}

function mapSettingTableSchema(){
    const schema = [ 'mainprocess'];
    const tdList = document.getElementById('table').querySelectorAll('tbody tr td:first-child');
    for (const td of tdList){
        // tr.querySelectorAll('td').forEach((td, i) => {
            td.setAttribute('data-type', schema[0]);
        // })
    }
}

function mapSettingFilter(event) {
    const value = event.target.value;
    const tdList = document.querySelectorAll('#table tbody td:first-child');
    for (const td of tdList){
        if (td.textContent !== value && value != ''){
            td.closest('tr').classList.add('d-none');
        } else {
            td.closest('tr').classList.remove('d-none');
        }
    }
}