
export function test1(){
  let myArray = ['apple', 'banana', 'strawberry']
  let list = document.createElement('ul')
  for (let value of myArray){
    let Element = document.createElement('li')
    Element.innerHTML = value
     list.appendChild(Element)
  }
    let wolf = `
 
 
 
    
    <div class="test1">

    <p class="test1">test1<p>
    
     </div>
    `
     return list
     
 
 }