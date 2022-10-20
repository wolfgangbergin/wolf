import { wolf1 } from './wolf1/wolf1.js';
import { wolf2 } from './wolf2/wolf2.js';
import { wolf3 } from './wolf3/wolf3.js';

import { toolTip } from './tooltip/tooltip.js';

let wolf_1 = document.getElementById('wolf_1');
let wolf_2 = document.getElementById('wolf_2');
let wolf_3 = document.getElementById('wolf_3');

wolf_1.addEventListener('click', () => nav('wolf_1'));
wolf_2.addEventListener('click', () => nav('wolf_2'));
wolf_3.addEventListener('click', () => nav('wolf_3'));

let content = document.getElementById('content');
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
      wolfgang.innerHTML = null;
      wolfgang.insertAdjacentElement('beforeend', wolf3());
      break;
    default:
      log('default');
  }
}

nav('wolf_1');
const border = ` red 3px solid`;


const testDiv1 = document.querySelectorAll('.banana');

for (const El of testDiv1) {
  El.style.border = border;
}
const testDiv2 = document.querySelectorAll('.testDiv');
log(testDiv2);
for (const El of testDiv2) {

  El.style.color = `blue`;
}

const testDiv3 = document.querySelector('.kim').style.background = 'green';
log(testDiv3);


