import { wolf1 } from './wolf1/wolf1.js';
import { wolf2 } from './wolf2/wolf2.js';

let wolf_1 = document.getElementById('wolf_1');
let content = document.getElementById('content');
let wolfgang = document.getElementById('wolfgang');
let wolf_2 = document.getElementById('wolf_2');

wolf_1.addEventListener('click', () => nav('wolf_1'));
wolf_2.addEventListener('click', () => nav('wolf_2'));

function toolTip() {
  let master = document.querySelector('#master');

  master.style.width = '300px';
  master.style.height = '400px';
  master.style.backgroundImage = 'url("master.jpg")';
  master.style.backgroundSize = 'cover';
  master.style.backgroundPosition = 'center';
  master.style.position = 'relative';

  
const TOOLTIPCOLOR = '#333'

  const TOOLTIP = document.createElement('div');
  let arrow = document.createElement('div');
  
 
  arrow.style.border = '30px solid transparent'
  arrow.style.borderTopColor = TOOLTIPCOLOR
  arrow.style.width = '30px'
  arrow.style.position = 'absolute'
  arrow.style.top = '100%'
  arrow.style.left = '35%'

 

  TOOLTIP.innerHTML = master.dataset.popup;
  TOOLTIP.style.background = TOOLTIPCOLOR;
  TOOLTIP.style.position = 'absolute';
  TOOLTIP.style.top = '-10%';
  TOOLTIP.style.left = '50%';
  TOOLTIP.style.padding = '.5rem';
  TOOLTIP.style.color = 'red';
  TOOLTIP.style.width = 'max-content';
  TOOLTIP.style.maxWidth = '100%';
  TOOLTIP.style.borderRadius = '.3rem';
  TOOLTIP.style.textAlign = 'center';
  master.append(TOOLTIP);
  TOOLTIP.style.transform = 'translateX(-50%) translateY(0) scale(0)';
  TOOLTIP.style.transformOrigin = 'bottom center';
  TOOLTIP.style.transition = '1000ms transform';

  master.addEventListener('mouseover', () => {
    TOOLTIP.style.transform = 'translateX(-50%) translateY(-70%) scale(1)';
    TOOLTIP.style.transition = '1000ms transform';
     TOOLTIP.insertAdjacentElement('beforeend', arrow)
  });
  master.addEventListener('mouseout', () => {
    TOOLTIP.style.transform = 'translateX(-50%) translateY(0) scale(0)';
    TOOLTIP.style.transition = '1000ms transform';
  });
}

function nav(param1) {
  switch (true) {
    case param1 === 'wolf_1':
      wolfgang.innerHTML = null;
      wolfgang.insertAdjacentElement('beforeend', wolf1()) 
      toolTip();

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
