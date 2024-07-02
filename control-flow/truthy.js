//  const userEmail = " vidiew"
//  if ( userEmail){
//        console.log( " Got  user EmailId ")
//  }
//   else {
//     console.log(" Don't got User email ")

//   }


//   falsy values -- 
 /*
 false , 0 ,-0, Bigint 0n, null, undefined,Nan
 */
//  truthy  values  
//  " 0" , 'false'," ",[], {} ,function (){}, 
// if (userEmail.length == 0) {
//      console.log("Array is empty")
// } 
  
//   Null collascing operator....
let val 
// val = 5 ?? 10 

// val = null ?? 10
// val = undefined ?? 15
val = null ?? 10??15
console.log( val)
  

//  Terniary operator ...
// condition ? true: false
const iceTeaPrice = 100
iceTeaPrice <= 80 ?  console.log( "less than 80 ") : console.log( " more than 80 ") 


