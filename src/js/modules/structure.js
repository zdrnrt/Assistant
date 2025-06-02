import { moduleOpen } from '../tools';
import { Modal } from 'bootstrap';

window.structureOpen = function () {
  moduleOpen('./src/html/structure.html').then(() => {
    structureInit();
  });
};

structureOpen();

function structureInit(){
  document.getElementById('formUpload').addEventListener('submit', structureUpdate)
}

function structureUpdate(e){
  e.preventDefault();
  const modal = document.getElementById('formUpload');
  Modal.getOrCreateInstance(modal).hide();
}