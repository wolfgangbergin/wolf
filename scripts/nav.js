import { wolf1 } from './wolf1/wolf1.js';
import { test1 } from './css1/test1.js';

let cssButton = document.getElementById('cssPositioning');
let content = document.getElementById('content');
let wolfgang = document.getElementById('wolfgang');
let test = document.getElementById('test1');

cssButton.addEventListener('click', () => nav('wolf1'));
test.addEventListener('click', () => nav('test1'));


function nav(param1) {
  switch (true) {
  
    case param1 === 'wolf1':
  
      wolfgang.appendChild(wolf1());
      break;
    case param1 === 'test1':
      wolfgang.innerHTML = null
      wolfgang.appendChild(test1())
      break;
    default:
      log('default');
  }
}
nav('wolf1');


const ALL = document.querySelectorAll("ul p, ul button")

for (let i = 0; i< ALL.length; ++i){
  ALL[i].style.backgroundColor = 'red'
}


