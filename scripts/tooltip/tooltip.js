

export function toolTip() {
    const MASTER = document.querySelector('#MASTER');
    MASTER.classList.add('MASTER')

    const TOOLTIP = document.createElement('div');
    const ARROW = document.createElement('div');
    ARROW.classList.add('ARROW')
   
  TOOLTIP.classList.add('TOOLTIP')
  
    TOOLTIP.innerHTML = MASTER.dataset.popup;
    MASTER.append(TOOLTIP);
    MASTER.addEventListener('mouseover', () => {
      TOOLTIP.classList.toggle('wolfTestA')
       TOOLTIP.insertAdjacentElement('beforeend', ARROW)
    });
    MASTER.addEventListener('mouseout', () => {
      TOOLTIP.classList.toggle('wolfTestA')
      
    
    });
  }