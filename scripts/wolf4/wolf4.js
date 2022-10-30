export function wolf4() {
  let wolf = document.createElement('div');

  wolf.innerHTML = `
        <header id='header'>
        <h1 id="h1">Dive into the DOM!</h1>
        <input  id='input1' type="text" value="input1" />
        </header>
        <section id='section'>
          <ul id='ul' >
            <li id='item1'class="list-item">Item 1</li>
            <li id='item2' class="list-item">Item 2</li>
            <li  id='item3' class="list-item">Item 3</li>
          </ul>
        </section>
 <button id='button'>test</button>
    <div id='div'>
   </div>
    `;
    
    wolfgang.classList.add(`redBorder`);

  return wolf;
}
