import { wolf1 } from './wolf1/wolf1.js';
import { test1 } from './css1/test1.js';

let cssButton = document.getElementById('cssPositioning');
let content = document.getElementById('content');
let wolfgang = document.getElementById('wolfgang');
let test = document.getElementById('test1');

cssButton.addEventListener('click', () => nav('wolf3'));
test.addEventListener('click', () => nav('test1'));


function nav(param1) {
  switch (true) {
  
    case param1 === 'wolf1':
   
      wolfgang.innerHTML = wolf1();
      break;
    case param1 === 'test1':
      
      wolfgang.innerHTML = test1();
      break;
    default:
      log('default');
  }
}
nav('wolf1');
// let wolf4 = document.getElementsByTagName('li')
// log(wolf4)
// for (let element of wolf4){
//   element.style.backgroundColor = 'hotpink'
// } 

// let wolf5 = document.querySelectorAll('#kim2')
// log(wolf5)
// for (let element of wolf5){
//   element.style.backgroundColor = 'hotpink'
// } 
// let wolf6 = document.querySelectorAll('ul')
// let fla = wolf6[1]

// let bobo =  fla.querySelectorAll('#kim2')
// log(bobo)
// bobo[0].style.backgroundColor = 'hotpink'
// let jobob =  fla.querySelector('#kim1')
// log(jobob)
// jobob.style.backgroundColor = 'green'

// let mich = document.querySelector('ul#mich li:nth-of-type(4)')
// mich.style.backgroundColor = 'hotpink'
function wolfTest(){
  log('wolfTest')
}
let fla = document.querySelector('#mich')
fla.className = 'kim313'


let kim = document.querySelector('.kim313')

kim.style.backgroundColor = 'yellow'

let odd = fla.querySelector(':nth-of-type(4)')

 odd.style.backgroundColor = 'blue'
fla.style.backgroundColor = 'green'
let wolf = fla.querySelectorAll('.wolf')


for (let element of wolf){
  element.style.backgroundColor = 'hotpink'
} 

let mich = kim.querySelector(':nth-of-type(1)')
let kim3 = kim.querySelector(':nth-of-type(3)')
mich.style.color = 'red'
mich.style.backgroundColor = 'yellow'
mich.textContent = 'kim313'
mich.style.border = " red 3px dotted"
mich.lang = 'wolf'

kim3.type = 'square'
kim3.accesskey = 'k'



let stress = document.querySelector('#stress')
// dir(stress.hidden = true)

stress.style.backgroundColor = 'red'
stress.addEventListener('click', wolfTest)

// dir(stress.style.display = 'none')
stress.style.position = 'absolute'
 kim3.style.backgroundColor = 'burlywood'
kim3.style.position = 'relative'
kim3.style.top = '50px'
kim3.className = 'apple'

let p = document.querySelector(".para1")
p.style.backgroundColor = 'blue'
p.style.backgroundColor = 'blue'
p.style.position = 'relative'
p.style.top = '100px'

let p_prime = p.cloneNode(true)

 log(p_prime)
 let jobob = document.querySelector(".jobob")
 jobob.appendChild(p_prime)
// for (let element of wolf5){
//   element.style.backgroundColor = 'hotpink'
// } 


