window.formParameterValue = function(input) {
  const inputValue = input.closest('.form-group').querySelector(`[name=${input.name}Value]`);
  if (inputValue){
      if (input.value == 'value' || (input.value == 'value' && input.checked)){
          inputValue.disabled = false;
      } else {
          inputValue.disabled = true;
      }
  }
}