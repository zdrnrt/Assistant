import {fillDictionary} from '../tools';
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
}

function mapSettingTableSchema(){
    const schema = [ 'mainprocess'];
    const tdList = document.getElementById('mapSettingTable').querySelectorAll('tbody tr td:first-child');
    for (const td of tdList){
        // tr.querySelectorAll('td').forEach((td, i) => {
            td.setAttribute('data-type', schema[0]);
        // })
    }
}

// TODO перенести в функцию
window.mapSettingDownload = function () {
  var workbook = XLSX.utils.table_to_book(document.getElementById('mapSettingTable'));
  XLSX.writeFile(workbook, `ассистент_карта_процессов.xlsx`)
}

window.mapSettingFilter = (elem) => {
    const table = document.querySelectorAll('#mapSettingTable tbody td:first-child');
    for (const td of table){
        if (td.textContent !== elem.value && elem.value != ''){
            td.closest('tr').classList.add('d-none');
        } else {
            td.closest('tr').classList.remove('d-none');
        }
    }
}