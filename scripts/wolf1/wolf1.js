export function wolf1(){
   const TITLE1 = document.createElement('h2')
   TITLE1.id = 'TITLE1'
   TITLE1.classList.add('TITLE1')
   TITLE1.innerText = `Wolves as pets and working animals`
   
   const PARAGRAPH1 = document.createElement('p')
   PARAGRAPH1.id = `PARAGRAPH_1`
   PARAGRAPH1.classList.add('PARAGRAPH_1')

   PARAGRAPH1.append(`   
   Wolves are sometimes kept as exotic pets,
   and in some rarer occasions, as working animals. 
   Although closely related to domesticated dogs, wolves
   do not show the same tractability as dogs in living alongside 
   humans, and generally, a greater amount of effort is required in order 
   to obtain the same amount of reliability. Wolves also need much more space than dogs,
   about 25 to 40 square kilometres (10 to 15 sq mi) so they can exercise.`)
   const MASTER = document.createElement(`div`)
   MASTER.id = `MASTER`
   MASTER.dataset.popup = `The wolf and his master.`

   const TITLE2 = document.createElement('h2')
   TITLE2.id = 'TITLE2'
   TITLE2.innerText = `Rearing`
    const HR = document.createElement('hr')

    const PARAGRAPH2 = document.createElement('p')
    PARAGRAPH2.id = `PARAGRAPH2`
   
 
    PARAGRAPH2.append(`   
    Captive wolf puppies are usually taken from their mother at the age of 
    14 days, preferably no later than 21 days. Wolf pups require more socialisation than dog pups, 
    and will typically stop responding to socialisation at the age of 19 days, as opposed to dogs which can
     still be socialised at the age of 16 weeks. For the first four months of their lives, wolf pups need to 
     be kept isolated from adult canines, except for a few brief visits per week, in order for them to properly 
     imprint on humans. Pups will typically develop behavioural abnormalities if raised without another
      member of their own kind. Because wolf milk contains more arginine than can be found in puppy
       milk substitutes, an arginine supplement is needed when 
    feeding pups below the weaning age. Failure to do so can result in the pups developing cataracts. 
`)

   let wolf1 = document.createElement('div')
      wolf1.id = 'wolf1'
      wolf1.append(TITLE1, PARAGRAPH1, MASTER, TITLE2, HR, PARAGRAPH2)
     
    
    
   
    
   
   
       
   
        return wolf1
   
       
       
   
   }
   

  