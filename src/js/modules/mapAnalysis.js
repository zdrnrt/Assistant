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
          mapAnalysisStats();
      })
      .catch(error => {
          console.error('Возникла проблема с операцией выборки:', error);
      });
}

function mapAnalysisStats() {
    const table = document.getElementById('table');
    const list = Array.from(table.querySelectorAll('[data-type="rate"]'));
    document.getElementById('all').textContent = list.length;
    document.getElementById('under').textContent = list.reduce((result, el) => { console.log(Number(el.textContent) < 2, Number(el.textContent)); return Number(el.textContent) < 2 ? result + 1 : result  }, 0)
    document.getElementById('above').textContent = list.reduce((result, el) => { console.log(Number(el.textContent) > 2, Number(el.textContent)); return Number(el.textContent) > 4 ? result + 1 : result  }, 0)
}