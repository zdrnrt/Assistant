import { Modal } from "bootstrap/dist/js/bootstrap.min";

window.dataOpen = function() {
loadingToggle()
  fetch('./src/html/data.html')
      .then(response => {
          if (!response.ok) {
              throw new Error('Реакция сети' + response.statusText);
          }
          return response.text(); 
      })
      .then(html => {
          document.getElementById('content').innerHTML = html;
          loadingToggle();
      })
      .catch(error => {
          console.error('Возникла проблема с операцией выборки:', error);
          loadingToggle();
      });
}

window.dataFilter = function(event){
    event.preventDefault();
    const form = event.target;
    const result = new FormData(form);
    console.log(result);
}