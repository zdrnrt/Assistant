import { MAINPROCESS, PROCESS, SUBPROCESS } from "./config";

export function formatNumber(number) {
  return Intl.NumberFormat('ru-RU').format(number);
}

export function fillDictionary(){
  const dictionarys = {
   'mainprocess': MAINPROCESS,
   'process': PROCESS,
    'subprocess': SUBPROCESS
  };
  for (const control of Object.keys(dictionarys)){
    const select = document.getElementById(control)
    select.insertAdjacentHTML('beforeend', `<option value="">Все</option>`)
    if (select){
      select.insertAdjacentHTML('beforeend', dictionarys[control].map( (el) => `<option value="${el}">${el}</option>`).join(''))
    }
  }
}