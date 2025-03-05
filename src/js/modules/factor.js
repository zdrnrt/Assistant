window.factorOpen = function() {
  fetch('./src/html/factor.html')
      .then(response => {
          if (!response.ok) {
              throw new Error('Реакция сети' + response.statusText);
          }
          return response.text(); 
      })
      .then(html => {
          document.getElementById('content').innerHTML = html;
      })
      .catch(error => {
          console.error('Возникла проблема с операцией выборки:', error);
      });
}