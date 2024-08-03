// // 
// let myName = "vivi"
// console.log( myName.truelength);


// let myHero  =["heMan","Shaktiman"]

// let heroPower = {
//    heMan: "nothign",
//    shaktiman: "flying",
//   getHeManPower:  function(){
//     console.log( `HeMan power is ${this.heMan}`);
    
//   }
// }

// Object.prototype.vivi  =  function(){
//     console.log( " vivi is present in all objects: ");
    
// }
//  Array.prototype.heyVivi = function(){
//   console.log( `hey vivi how's lyf going !!`);
  
//  }
//  heroPower.vivi()
// myHero.vivi()
// myHero.heyVivi()
  //  inheritance   of the class 
 const user = {
   name: "vivek",
   email: "vivekpurbey586@google.com"
 }
const teacher  ={
    makevideos:true
}

const teachingSupport = {
   isAvailable: true
}

const  TASupport = {
  isFullTime: true,
  Assignment: " you have",
__proto__:teachingSupport

}
 teacher: __proto__ = user

//   modern syntax
Object.setPrototypeOf(teacher , teachingSupport)


let anotherUsername = " its common bruh everyone suffers :"

String.prototype.trueLength = function() {
  console.log(`${this}`);
  console.log(`True length  is: ${this.trim().length}`);

  anotherUsername.trueLength()
  "GTERG".trueLength()
  "heytew".trueLength()
  
  
}