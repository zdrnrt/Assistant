import { MAINPROCESS, PROCESS, SUBPROCESS } from "../config";
import {fillDictionary} from '../tools';

window.mapAnalysisOpen = function() {
  fetch('./src/html/mapАnalysis.html')
      .then(response => {
          if (!response.ok) {
              throw new Error('Реакция сети' + response.statusText);
          }
          return response.text(); 
      })
      .then(html => {
          document.getElementById('content').innerHTML = html;
          mapAnalysisInit()
      })
      .catch(error => {
          console.error('Возникла проблема с операцией выборки:', error);
      });
}

function mapAnalysisInit() {
    mapAnalysisStats();
    fillDictionary();
    document.getElementById('mainprocess').addEventListener('change', mapAnalysisFilter)
    document.getElementById('process').addEventListener('change', mapAnalysisFilter)
    document.getElementById('subprocess').addEventListener('change', mapAnalysisFilter)
    document.getElementById('input').addEventListener('change', mapAnalysisFilter)
}

function mapAnalysisCheck(active) {
    const filters = [
        document.getElementById('mainprocess'),
        document.getElementById('process'),
        document.getElementById('subprocess'),
        document.getElementById('input'),
    ]
    return filters.reduce((result, filter) => {
        console.log(filter.value !== '')
        console.log(active, filter !== active)
        if (filter.value !== '' && filter !== active){
            return false
        }
    }, true)
}
function mapAnalysisFilter(event) {
    console.log('mapAnalysisCheck', mapAnalysisCheck(event.target))
    const value = event.target.value;
    const table = document.getElementById('table');
    // const trList = table.querySelectorAll('tr');
    const type = event.target.id;
    const tdList = table.querySelectorAll(`[data-type="${type}"]`)
    for (const td of tdList){
        if (td.textContent ===  value || value === ''){
            td.closest('tr').classList.remove('d-none')
        } else {
            td.closest('tr').classList.add('d-none')
        }
    }
    mapAnalysisStats();


}

function mapAnalysisStats() {
    const table = document.getElementById('table');
    const list = Array.from(table.querySelectorAll('tr:not(.d-none) [data-type="rate"]'));
    document.getElementById('all').textContent = list.length;
    document.getElementById('under').textContent = list.reduce((result, el) => Number(el.textContent) <= 2 ? result + 1 : result, 0)
    document.getElementById('above').textContent = list.reduce((result, el) => Number(el.textContent) > 4 ? result + 1 : result, 0)
}