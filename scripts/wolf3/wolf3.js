



export function wolf3(){
  console.clear()
   let wolf3 = document.createElement('div')
wolf3.innerHTML = `<p>wolf3</p>`
wolf3.classList.add(`greenBackground`)




let wolfMan = ()=>{
  let temp1 = '99.313'
 
  let temp2 = parseFloat(temp1)
  let temp3 = temp2.toString()
  log(temp3 )
  let temp4 = {name: 'kim', age: '19'}
  let temp5 = JSON.stringify(temp4)
  let temp6 = JSON.parse(temp5)
  
  log(temp6 )
}
 wolfMan()



return wolf3

}