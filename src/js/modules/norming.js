import { Modal } from 'bootstrap'
import * as XLSX from 'xlsx/xlsx.mjs';

window.normingOpen = function() {
  fetch('./src/html/norming.html')
      .then(response => {
          if (!response.ok) {
              throw new Error('Реакция сети' + response.statusText);
          }
          return response.text(); 
      })
      .then(html => {
          document.getElementById('content').innerHTML = html;
          normingInitModal();
      })
      .catch(error => {
          console.error('Возникла проблема с операцией выборки:', error);
      });
}

function normingInitModal(){
    console.log('normingInitModal');
    window.normingModals = {};
    window.normingModals.normaRc = new Modal(document.getElementById('normaRc'));
    window.normingModals.normaTt = new Modal(document.getElementById('normaTt'));
    window.normingModals.normаOosRc = new Modal(document.getElementById('normаOosRc'));
    window.normingModals.normaOosTt = new Modal(document.getElementById('normaOosTt'));
    window.normingModals.normaUs = new Modal(document.getElementById('normaUs'));
    window.normingModals.normaAccuracy = new Modal(document.getElementById('normaAccuracy'));
    window.normingModals.normaUsRcTt = new Modal(document.getElementById('normaUsRcTt'));
}

window.normingModalOpen = function (){
    const modalValue = document.getElementById('normingSelect').value;
    window.normingModals[modalValue].toggle();

}

window.normingUpload = function () {
}

window.normingDownload = function () {
  var workbook = XLSX.utils.table_to_book(document.getElementById('normingTable'));
  XLSX.writeFile(workbook, `ассистент_нормирование.xlsx`)
}
