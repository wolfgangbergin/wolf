

export function toolTip() {
    let master = document.querySelector('#master');
    master.classList.add('master')

    const TOOLTIP = document.createElement('div');
    let arrow = document.createElement('div');
    arrow.classList.add('arrow')
   
  TOOLTIP.classList.add('TOOLTIP')
  
    TOOLTIP.innerHTML = master.dataset.popup;
    master.append(TOOLTIP);
    master.addEventListener('mouseover', () => {
      TOOLTIP.classList.toggle('wolfTestA')
       TOOLTIP.insertAdjacentElement('beforeend', arrow)
    });
    master.addEventListener('mouseout', () => {
      TOOLTIP.classList.toggle('wolfTestA')
      
    
    });
  }