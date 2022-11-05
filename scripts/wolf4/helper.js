export function helper() {
  let kimBg = (element) => {
    element.classList.add('blackBackground');
  };

  let kimYb = (element) => {
    element.classList.toggle('yellowBorder');
  };
  let kimGb = (element) => {
    element.classList.add('greenBorder');
  };
  let kimPg = (element) => {
    element.classList.add('pinkBackground');
  };
  let redText = (element) => {
    element.classList.add('redText');
  };
  let borderRadius = (element) => {
    element.style.borderRadius = '5rem';
  };

  document
    .querySelector('#wolf4')
    .firstChild.nextSibling.lastChild.setAttribute(
      'FruityPebbles',
      'Attribute kim'
    );

  news1.setAttribute('FruityPebbles', 'Attribute wolMan');

  item2.setAttribute('FruityPebbles', 'Attribute 313');
  let temp2 = document.querySelectorAll(' [FruityPebbles~=Attribute]');

  temp2.forEach((E) => {
    kimBg(E), kimYb(E), redText(E), borderRadius(E);
  });

  h1.style.fontSize = '5rem';

  dir(JSON.parse(wolf4.dataset.kim));

  log(wolf4.Umbrella);
}
