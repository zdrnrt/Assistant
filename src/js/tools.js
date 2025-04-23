import { MAINPROCESS, PROCESS, SUBPROCESS, INPUT, KPI, GEO, CATEGORY, INTERNAL, EXTERNAL } from "./config";
import * as XLSX from 'xlsx'

export function formatNumber(number) {
  return Intl.NumberFormat('ru-RU').format(number);
}

export function fillDictionary(filter = false){
  const dictionarys = {
   'mainprocess': MAINPROCESS,
   'process': PROCESS,
    'subprocess': SUBPROCESS,
    'input': INPUT,
    'kpi': KPI,
    'geo': GEO,
    'category': CATEGORY,
    'internal': INTERNAL,
    'external': EXTERNAL
  };
  for (const dictionary of Object.keys(dictionarys)){
    const selectList = document.querySelectorAll(`[data-id="${dictionary}"]`);
    for (const select of selectList){
      // select.insertAdjacentHTML('beforeend', `<option value="">Все</option>`)
      if (select){
        select.insertAdjacentHTML('beforeend', dictionarys[dictionary].map( (el) => `<option value="${el}">${el}</option>`).join(''))
      }
    }
  }
}

export function downloadTable(title, id = 'table') {
  var workbook = XLSX.utils.table_to_book(document.getElementById(id));
  XLSX.writeFile(workbook, `${title}.xlsx`)
}
