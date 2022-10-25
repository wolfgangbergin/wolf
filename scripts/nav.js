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

nav('wolf_3');
//_________________________________
let kim1 = ' kim1'
const SECTION = document.querySelector('#section');
SECTION.classList = 'burlywood';
const UL = SECTION.children[0];
UL.classList = 'greenBorder';
const LI1 = UL.children[0];
LI1.classList = 'blueBorder';
const LI2 = LI1.nextElementSibling;
LI2.classList = 'redBackground';

const LI3 = LI2.nextElementSibling;
LI3.classList = 'yellowBorder';

//__________________________ don't erase!!!
const BUTTON = document.querySelector('#button');
let wrong = document.createElement('p')
wrong.innerText = `somthing went wrong`
let wolfMan = () => {


 SECTION.insertAdjacentElement('beforeend', wrong)
 
};

BUTTON.addEventListener('click', wolfMan);
//__________________________don't erase!!!

wolfMan()