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

const WOLFMAN1 = document.querySelector('#kim313');
WOLFMAN1.style.backgroundColor = 'red';
const WOLFMAN2 = document.querySelectorAll('.wolfMan');

for (const El of WOLFMAN2) {
  El.style.color = 'white';
}

const WOLFMAN3 = document.querySelector('#wolfgang p:first-of-type ');

WOLFMAN3.style.margin = ' auto  ';
const WOLFMAN4 = document.querySelector('hr.wolfMan ~ p');
WOLFMAN4.style.maxWidth = '300px';
const WOLFMAN5 = document.querySelectorAll('hr.wolfMan + p');
for (const El of WOLFMAN5) {
  El.innerHTML = 'jobob';
}
const WOLFMAN6 = document.querySelector('.wolfMan:nth-child(3)');

WOLFMAN6.style.fontSize = '4rem';


let hover = document.querySelectorAll('#kim313');

for (let elem of hover) {
  elem.addEventListener('mouseenter', () => {
    elem.style.backgroundColor = 'green'
  })
  elem.addEventListener('mouseleave', () => {
    elem.style.backgroundColor = 'blue'
  })
};



