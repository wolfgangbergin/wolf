

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
      TOOLTIP.style.transform = 'translateX(-50%) translateY(-70%) scale(1)';
      TOOLTIP.style.transition = '1000ms transform';
       TOOLTIP.insertAdjacentElement('beforeend', arrow)
    });
    master.addEventListener('mouseout', () => {
      TOOLTIP.style.transform = 'translateX(-50%) translateY(0) scale(0)';
      TOOLTIP.style.transition = '1000ms transform';
    });
  }