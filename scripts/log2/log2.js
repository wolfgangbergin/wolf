

export function log2(){
   let log2 = document.createElement('div');
log2.innerHTML = `<p>log2</p>`;
log2.classList.add(`greenBackground`);

let fifty = 50
Change(fifty)
log(`fifty ${fifty}`)
function Change(param1){
  param1 ++
  log(`param1 ${param1}`)
}

return log2
}