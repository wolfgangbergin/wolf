

export function log1(){
    console.clear()
   
    let log1 = document.createElement('div')
    log1.innerHTML = `<p>log1</p>`
    log1.classList.add(`greenBackground`)

    let fifty = [50]
Change(fifty)
log(`fifty ${fifty}`)
function Change(param1){
   
    param1[0] ++
  log(`param1 ${param1}`)
}
    return log1
}
