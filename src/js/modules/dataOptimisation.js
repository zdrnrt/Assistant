window.dataOptimisationOpen = function() {
loadingToggle()
  fetch('./src/html/dataOptimisation.html')
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
