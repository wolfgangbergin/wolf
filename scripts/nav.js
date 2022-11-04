import { wolf1 } from './wolf1/wolf1.js';
import { wolf2 } from './wolf2/wolf2.js';
import { wolf3 } from './wolf3/wolf3.js';
import { wolf4 } from './wolf4/wolf4.js';
import { log1 } from './log1/log1.js';
import { log2 } from './log2/log2.js';

import { toolTip } from './tooltip/tooltip.js';

let wolf_1 = document.getElementById('wolf_1');
let wolf_2 = document.getElementById('wolf_2');
let wolf_3 = document.getElementById('wolf_3');
let wolf_4 = document.getElementById('wolf_4');
let log_1 = document.getElementById('log_1');
let log_2 = document.getElementById('log_2');

wolf_1.addEventListener('click', () => nav('wolf_1'));
wolf_2.addEventListener('click', () => nav('wolf_2'));
wolf_3.addEventListener('click', () => nav('wolf_3'));
wolf_4.addEventListener('click', () => nav('wolf_4'));
log_1.addEventListener('click', () => nav('log_1'));
log_2.addEventListener('click', () => nav('log_2'));

let wolfgang = document.getElementById('wolfgang');

function nav(param1) {
  switch (true) {
    case param1 === 'wolf_1':
      wolfgang.innerHTML = null;
      wolfgang.insertAdjacentElement('beforeend', wolf1());
      toolTip();

      break;
    case param1 === 'wolf_2':
      wolfgang.innerHTML = null;
      wolfgang.innerHTML = wolf2();
      break;
    case param1 === 'wolf_3':
      wolfgang.replaceChildren(wolf3());

      break;
    case param1 === 'wolf_4':
      wolfgang.replaceChildren(wolf4);

      break;
    case param1 === 'log_1':
      wolfgang.replaceChildren(log1());

      break;
    case param1 === 'log_2':
      wolfgang.replaceChildren(log2());

      break;
    default:
      log('default');
  }
}

nav('wolf_4');

let kimBg = (element) => {
  element.classList.add('blackBackground');
};

let kimYb = (element) => {
  element.classList.toggle('yellowBorder');
};
let kimGb = (element) => {
  element.classList.add('greenBorder');
};
let kimPg = (element) => {
  element.classList.add('pinkBackground');
};
let redText = (element) => {
  element.classList.add('redText');
};
let borderRadius = (element) => {
  element.style.borderRadius = '5rem'
};

document
  .querySelector('#wolf4')
  .firstChild.nextSibling.lastChild.setAttribute(
    'FruityPebbles',
    'Attribute kim'
  );


news1.setAttribute('FruityPebbles', 'Attribute wolMan');

item2.setAttribute('FruityPebbles', 'Attribute 313');
let temp2 = document.querySelectorAll(' [FruityPebbles~=Attribute]');

temp2.forEach((E) => {
  kimBg(E), kimYb(E), redText(E), borderRadius(E);
});

log(attribute919)