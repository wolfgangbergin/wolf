import { wolf1 } from './wolf1/wolf1.js';
import { wolf2 } from './wolf2/wolf2.js';
import { wolf3 } from './wolf3/wolf3.js';
import { wolf4 } from './wolf4/wolf4.js';

import { toolTip } from './tooltip/tooltip.js';

let wolf_1 = document.getElementById('wolf_1');
let wolf_2 = document.getElementById('wolf_2');
let wolf_3 = document.getElementById('wolf_3');
let wolf_4 = document.getElementById('wolf_4');

wolf_1.addEventListener('click', () => nav('wolf_1'));
wolf_2.addEventListener('click', () => nav('wolf_2'));
wolf_3.addEventListener('click', () => nav('wolf_3'));
wolf_4.addEventListener('click', () => nav('wolf_4'));


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
    case param1 === 'wolf_4':
      
      wolfgang.replaceChildren(wolf4());
      
      break;
    default:
      log('default');
  }
}

nav('wolf_4');



//_________________________________

const SECTION = document.querySelector('#section');
const UL = document.querySelector('#ul');


const INPUT1 = document.querySelector('#input1');
INPUT1.classList = 'yellowBackground';

const ITEM1 = document.querySelector('#item1');
ITEM1.classList = 'redBackground';

const ITEM2 = document.querySelector('#item2');
ITEM2.classList = 'yellowBackground';
const ITEM3 = document.querySelector('#item3');
ITEM3.classList.add('blueBackground');
const BUTTON = document.querySelector('#button');

//__________________________ don't erase!!!


//---------------------------------------------------------------------------------------


let wolfMan = () => {
 

};

//---------------------------------------------------------------------------------------
BUTTON.addEventListener('click', wolfMan);
//__________________________don't erase!!!

wolfMan();



// let temp1 = UL.querySelectorAll('li')
// log(temp1)
    
// let temp2 = UL.getElementsByTagName('li')
// log(temp2)
// let ITEM4 = ITEM2.cloneNode(false)
// ITEM4.innerText = 'item4'
// ITEM2.classList.add(`blackBackground`)



//  UL.append(ITEM4)