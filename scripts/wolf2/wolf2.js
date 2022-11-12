
export function wolf2(){
    const TITLE_3 = document.createElement('h2')
    TITLE_3.id = `TITLE_3`
    TITLE_3.innerText = `Temperament`
    

    const PARAGRAPH_3 = document.createElement('p')
    PARAGRAPH_3.id = `PARAGRAPH_3`
    PARAGRAPH_3.classList.add('PARAGRAPH_3')
 
    PARAGRAPH_3.append(`   
    Captive wolves are generally shy and avoid eye contact with humans other than their owner,
    as well as not listening to any commands made by any other humans. They usually vacate rooms or 
    hide when a new person enters the establishment. Even seemingly friendly wolves need to be treated
    with caution, as captive wolves tend to view and treat people as other wolves, and will thus bite or 
    dominate people in the same situation
    in which they would other wolves.`)

    const PARAGRAPH_4 = document.createElement('p')
    PARAGRAPH_4.id = `PARAGRAPH_4`
    PARAGRAPH_4.classList.add('PARAGRAPH_4')
 
    PARAGRAPH_4.append(`   
    Though wolves are trainable, they lack the same degree of tractability seen in dogs. They are generally 
    not as responsive as dogs to coercive techniques involving fear, aversion to stimuli, and force. Generally,
     far more work is required to obtain the same degree of reliability seen in most dogs. Even then, once a 
     certain behavior has been repeated several times, wolves may get bored and ignore subsequent commands. 
     Wolves are most responsive toward positive conditioning and rewards, though simple praise is not sufficient 
     as in most dogs.  Unlike dogs, wolves tend to respond more to hand signals than voice. Although they are
      more difficult to control than dogs, they can be easier to teach if the 
      motivation exists.
      
    Timber wolves and coyotes used as draught animals in northern Ontario, 1923.`)

    const TITLE_4 = document.createElement('h2')
    TITLE_4.id = `TITLE_4`
    TITLE_4.innerText = `Trainabilit`

    const WOLF_2 = document.createElement('div')
    WOLF_2.append(TITLE_3, PARAGRAPH_3, TITLE_4,   PARAGRAPH_4)
    
  
     return WOLF_2
     
 
 }

