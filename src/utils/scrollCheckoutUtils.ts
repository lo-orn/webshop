

/**
 * 
 * Makes the right sidebar sticky on desktop while scrolling
 * @description 
 * Disabled on mobile (screens 768px and below).
 * Works around SCSS conflict with animation (transform)/ and sticky. 
 * Attaches scroll and resize event listeners to maintain sticky behavoiur .
 * 
 */
export const makeRightSideSticky = () => {
    const rightSide = document.querySelector('.right') as HTMLElement;
    const main = document.querySelector('main') as HTMLElement;
    
    if (!rightSide || !main) return;
    
    let isStuck = false;
    let savedWidth = 0;
    let savedLeft = 0;
    
    
    window.addEventListener('scroll', () => {
        if(window.innerWidth <= 768) {
            if(isStuck) {
                rightSide.style.position ="";
                rightSide.style.top = "";
                rightSide.style.left ="";
                rightSide.style.width ="";
                isStuck = false
                
            }
            return
        }
      const mainTop = main.getBoundingClientRect().top;

      const mainBottom =main.getBoundingClientRect().bottom
      const rightHeight = rightSide.offsetHeight;


      if (mainBottom <= rightHeight + 20) {
        if (isStuck) {
          isStuck = false;
          rightSide.style.position = '';
          rightSide.style.top = '';
          rightSide.style.left = '';
          rightSide.style.width = '';
        }
        return;
      }
      
      // If we scrolled past the top
      if (mainTop <= 20 && mainBottom >rightHeight + 20 && !isStuck) {
       const rect = rightSide.getBoundingClientRect();
       savedWidth = rect.width;
       savedLeft = rect.left;

       isStuck = true;
       rightSide.style.position = 'fixed';
       rightSide.style.top = '20px';
       rightSide.style.left = savedLeft + 'px';
       rightSide.style.width = savedWidth + 'px';
      }
      

    
      // If we scrolled back up
      if (mainTop > 20 && isStuck) {
        isStuck = false;
        rightSide.style.position = '';
        rightSide.style.top = '';
        rightSide.style.left = '';
        rightSide.style.width = '';
      }
    });
    
    // Update position on window resize
    window.addEventListener('resize', () => {

      if(window.innerWidth <= 768) {
          if(isStuck) {
              rightSide.style.position = "";
              rightSide.style.top = "";
              rightSide.style.left = "";
              rightSide.style.width = "";
              isStuck = false;
          }
          return;
      }
     
      if (isStuck) {
         
          rightSide.style.position = '';
          rightSide.style.left = '';
          rightSide.style.width = '';
          
         
          const rect = rightSide.getBoundingClientRect();
          savedWidth = rect.width;
          savedLeft = rect.left;
          
         
          rightSide.style.position = 'fixed';
          rightSide.style.left = savedLeft + 'px';
          rightSide.style.width = savedWidth + 'px';
      }
  });
}


   
