const master = "master.jpg"
const testStyle =   ` width :300px;
height :400px;
background-color: pink;
background-image :url(${master});
background-size :cover;
background-position :center;
position :relative;`

export function toolTip() {
    let master = document.querySelector('#master');
  
    master.style = testStyle
  
    
  const TOOLTIPCOLOR = '#333'
  
    const TOOLTIP = document.createElement('div');
    let arrow = document.createElement('div');
    
   
    arrow.style.border = '30px solid transparent'
    arrow.style.borderTopColor = TOOLTIPCOLOR
    arrow.style.width = '30px'
    arrow.style.position = 'absolute'
    arrow.style.top = '100%'
    arrow.style.left = '35%'
  
   
  
    TOOLTIP.innerHTML = master.dataset.popup;
    TOOLTIP.style.background = TOOLTIPCOLOR;
    TOOLTIP.style.position = 'absolute';
    TOOLTIP.style.top = '-10%';
    TOOLTIP.style.left = '50%';
    TOOLTIP.style.padding = '.5rem';
    TOOLTIP.style.color = 'red';
    TOOLTIP.style.width = 'max-content';
    TOOLTIP.style.maxWidth = '100%';
    TOOLTIP.style.borderRadius = '.3rem';
    TOOLTIP.style.textAlign = 'center';
    master.append(TOOLTIP);
    TOOLTIP.style.transform = 'translateX(-50%) translateY(0) scale(0)';
    TOOLTIP.style.transformOrigin = 'bottom center';
    TOOLTIP.style.transition = '1000ms transform';
  
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