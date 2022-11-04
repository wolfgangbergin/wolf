function testWolf(){
    kim.adress = '313'
}

let button1 = document.createElement('button')
button1.id = `button1`
button1.addEventListener('click', testWolf)
button1.innerText = 'testWolf'

let myArry = [`item1`, `item2`, `item3`]
let myCss = [`greenBackground`,`blueBackground`, `pinkBackground`]
let ul = document.createElement('ul');
ul.id = `ul`;


for(var i = 0; i < myArry.length; ++i ){

    var li = document.createElement('li');
    li.classList.add(myCss[i])

    li.id = `${myArry[i]}`;
    li.innerText = `${myArry[i]}`;
    ul.append(li);
   
  
}


const h1 = document.createElement('h1');
h1.id = 'attribute919'
h1.innerText = `Dive into the DOM!`;
const input1 = document.createElement(`input`);

input1.id = `input1`;
let header = document.createElement('header');
header.id = 'header';
header.append(h1, input1);
let section = document.createElement('section');
section.classList.add(`whiteBorder`);
section.id = 'section';
section.prepend(ul);

let link = document.createElement('p')
link.innerHTML = '<a id="kimbo212" >Jump to New content 1</a>'

let news1 = document.createElement('p')
news1.id = 'news1'

news1.innerHTML = '<b target="_blank"   href="#news1">News1</b>'

let joBob = document.createElement('div')
joBob.id = 'joBob'
joBob.innerText = 'joBob'

export let wolf4 = document.createElement('div');
wolf4.id = `wolf4`;
wolf4.classList.add(`redBorder`);



wolf4.append(link,header, section, button1, news1, joBob );





