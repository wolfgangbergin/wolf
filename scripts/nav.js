import { cssPositioning } from './Positioning.js';
import { test1 } from './test1.js';

let cssButton = document.getElementById('cssPositioning');
let content = document.getElementById('content');
let test = document.getElementById('test1');
cssButton.addEventListener('click', () => nav('css positioning'));
test.addEventListener('click', () => nav('test1'));

function nav(param1) {
  switch (true) {
    case param1 === 'css positioning':
      content.innerHTML = cssPositioning();
      break;
    case param1 === 'test1':
      content.innerHTML = test1();
      break;
    default:
      log('default');
  }
}
nav('css positioning');
