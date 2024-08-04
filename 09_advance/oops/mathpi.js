 const descriptor =  Object.getOwnPropertyDescriptor(Math, "PI")
//   console.log(descriptor); 
  

// console.log( Math.PI);
// Math.PI = 5;
// console.log(Math.PI);
 const  biscuit ={
    name: " Parle G",
    price: " ₹3",
    isAvailable: " True",
    orderbis: function() {
      console.log( " Biscuit nahi milaa !!!  ");
      
    } 
 }

 console.log(Object.getOwnPropertyDescriptor(biscuit,'name'));


 Object.defineProperty( biscuit, 'name',{
   writable: false,
    enumerable: false,
 })

 //  console.log(Object.getOwnPropertyDescriptor(biscuit,'name'));

  for(let [ key , value] of Object.entries(biscuit)) {
          if( typeof  value !== 'function') {

            console.log( `${ key} : ${ value}`); 

     }
}
 