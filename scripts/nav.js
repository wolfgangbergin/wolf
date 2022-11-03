import { wolf1 } from './wolf1/wolf1.js';
import { wolf2 } from './wolf2/wolf2.js';
import { wolf3} from './wolf3/wolf3.js';
import { wolf4} from './wolf4/wolf4.js';
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
      wolfgang.replaceChildren(wolf3())
      
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

let kimBg = element => {
  element.classList.add('blackBackground')
}

let kimYb = element => {
  element.classList.toggle('yellowBorder')
}
let kimGb = element => {
  element.classList.add('greenBorder')
}
let kimPg = element => {
  element.classList.add('pinkBackground')
}

// let temp1 = document.querySelectorAll('li:last-of-type')
// temp1.forEach(kimBg);

// let temp2 = document.querySelector('.nav-list ').lastElementChild


// kimYb(temp2)



// let temp3 = document.querySelectorAll('.nav-list li:first-of-type')
// temp3.forEach(kimYb)


// let temp4 = document.getElementsByClassName('nav-list')[0].querySelectorAll('span')

// temp4.forEach(kimPg)

// let temp5 = document.getElementsByName('banana')

// temp5.forEach(kimGb)

// let temp6 =  document.getElementsByTagName('input')[1]
// temp6.setAttribute('value', 'kimtest')
// temp6.setAttribute('class', 'kimtest')
// log(temp6.value)


let temp7 = document.querySelector('a[href="#news1"]')
temp7.addEventListener('click', (event)=>{kimYb(item2)}) 





kimYb(banana)