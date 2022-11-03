function testWolf(){
    kim.adress = '313'
}

let button1 = document.createElement('button')
button1.id = `button1`
button1.addEventListener('click', testWolf)
button1.innerText = 'testWolf'

let myArry = [`item1`, `item2`, `item3`]
let myCss = [`greenBackground`,`blueBackground`, `greenBackground`]
let UL = document.createElement('ul');
UL.id = `UL`;


for(var i = 0; i < myArry.length; ++i ){

    var li = document.createElement('li');
    li.classList.add(myCss[i])

    li.id = `${myArry[i]}`;
    li.innerText = `${myArry[i]}`;
    UL.append(li);
   
  
}


const h1 = document.createElement('h1');
h1.innerText = `Dive into the DOM!`;
const input1 = document.createElement(`input`);
input1.id = `input1`;
let header = document.createElement('header');
header.id = 'header';
header.append(h1, input1);
let section = document.createElement('section');
section.classList.add(`whiteBorder`);
section.id = 'section';
section.prepend(UL);

let link = document.createElement('p')
link.innerHTML = '<a href="#news1">Jump to New content 1</a>'

let news = document.createElement('p')
news.id = 'news1'
news.innerHTML = '<b>WolfMAnNew content 1...</b>'

export let wolf4 = document.createElement('div');
wolf4.id = `wolf4`;
wolf4.classList.add(`redBorder`);



wolf4.append(link,header, section, button1, news );





