

import { wolf1 } from './wolf1/wolf1.js';
import { wolf2 } from './wolf2/wolf2.js';

let wolf_1 = document.getElementById('wolf_1');
let content = document.getElementById('content');
let wolfgang = document.getElementById('wolfgang');
let wolf_2 = document.getElementById('wolf_2');

wolf_1.addEventListener('click', () => nav('wolf_1'));
wolf_2.addEventListener('click', () => nav('wolf_2'));

function nav(param1) {
  switch (true) {
    case param1 === 'wolf_1':
     
      wolfgang.innerHTML = null;
      wolfgang.innerHTML = wolf1();
      break;
    case param1 === 'wolf_2':
  
      wolfgang.innerHTML = null;
      wolfgang.innerHTML = wolf2();
      break;
    default:
      log('default');
  }
}
nav('wolf_1');


