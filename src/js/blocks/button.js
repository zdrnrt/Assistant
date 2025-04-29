export function buttonToggleLoading(elem) {
  elem.toggleAttribute('disabled');
  setTimeout(() => {
    elem.classList.toggle('btn--loading');
  }, 150);
}

window.buttonToggleLoading = buttonToggleLoading