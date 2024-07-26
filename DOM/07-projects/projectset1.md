# project related to DOM
## Project link  
[Click here ] ( htttps:// stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

 # solution code


 ## project 1 
 ``` javascript 
const buttons = document.querySelectorAll('.button') //  this is querySelector where we select all our buttons 
 const body = document.querySelector("body") //  same all body wala part is selected through this outcomes
 buttons.forEach( function(button) {   /// here we use forEach wala part  to considered so that we can took change in buttone wala part    
   console.log(button)
   button.addEventListener('click', function(e) {   // addEventListener  of click and  fucntion to change on it 
      console.log(e.target)
      if(e.target.id== 'yellow' || e.target.id== 'grey'||e.target.id== 'blue' || e.target.id== 'white'){
        body.style.backgroundColor= e.target.id;     
      }
   })
 })  



```