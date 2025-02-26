window.asideToogle = function(){
  const aside = document.getElementById('aside');
  const main = document.getElementById('main');
  aside.classList.toggle('aside--hidden');
  aside.classList.toggle('col-3');
  main.classList.toggle('col-9');
  main.classList.toggle('flex-grow-1');
}