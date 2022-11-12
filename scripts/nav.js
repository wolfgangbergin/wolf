import { wolf1 } from './wolf1/wolf1.js';
import { wolf2 } from './wolf2/wolf2.js';
import { wolf3 } from './wolf3/wolf3.js';
import { wolf4 } from './wolf4/wolf4.js';
import { helper } from './wolf4/helper.js';

import { log1 } from './log1/log1.js';
import { log2 } from './log2/log2.js';
import { toolTip } from './tooltip/tooltip.js';
import { movies1 } from './movies1/movies1.js'

let wolf_1 = document.getElementById('wolf_1');
let wolf_2 = document.getElementById('wolf_2');
let wolf_3 = document.getElementById('wolf_3');
let wolf_4 = document.getElementById('wolf_4');
let log_1 = document.getElementById('log_1');
let log_2 = document.getElementById('log_2');
let movies_1 = document.getElementById('movies_1');

wolf_1.addEventListener('click', () => nav('wolf_1'));
wolf_2.addEventListener('click', () => nav('wolf_2'));
wolf_3.addEventListener('click', () => nav('wolf_3'));
wolf_4.addEventListener('click', () => nav('wolf_4'));
log_1.addEventListener('click', () => nav('log_1'));
log_2.addEventListener('click', () => nav('log_2'));
// movies_1.addEventListener('click', () => nav('movies_1'));

let wolfgang = document.getElementById('wolfgang');

function nav(param1) {
  switch (true) {
    case param1 === 'wolf_1':
      
      wolfgang.replaceChildren(wolf1());
      toolTip();

      break;
    case param1 === 'wolf_2':
     
      wolfgang.replaceChildren(wolf2());
      
      break;
    case param1 === 'wolf_3':
      wolfgang.replaceChildren(wolf3());

      break;
    case param1 === 'wolf_4':
      wolfgang.replaceChildren(wolf4);
      helper();
     

      break;
    case param1 === 'log_1':
      wolfgang.replaceChildren(log1());

      break;
    case param1 === 'log_2':
      wolfgang.replaceChildren(log2());

      break;
    case param1 === 'movies_1':
      wolfgang.replaceChildren(movies1());

      break;
    default:
      log('default');
  }
}

nav('wolf_1');

