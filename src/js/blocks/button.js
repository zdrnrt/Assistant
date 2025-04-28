export function buttonToggleLoading(elem) {
  elem.toggleAttribute('disabled')
  elem.classList.toggle('btn--loading');
}

window.buttonToggleLoading = buttonToggleLoading