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


 ## project 2
```
 const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});



 ```