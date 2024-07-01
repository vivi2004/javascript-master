 let a = 40
  if ( true){
     let a = 20
     let b = 30
    //  console.log("Inner of ",a)
  }  
//    the {}  upper wala part is scopes you can define in it and call within the bracket..
//   console.log(a)

  function one () {
     const username = "vivi"
       function two (){
        const website = " youtubr"
        console.log(username)

       }
    //    console.log( website)
    two() 
  }
//   one()
   if ( true){
     const username = "vivi"
     if (username === "vivi") {
        const website = " youtbe"
        // console.log( username+website)
     }
    //  console.log(website)

   }
// console.log( username)



//  ................. Interesting............./////
 function addone (num){
  return num+1
 }
 console.log( addone(5) )



 const addTwo = function(num){
   return  num +2
 }

 console.log( addTwo(50) )

 