const promiseOne =  new  Promise( function( resolve, reject){
    // Do and async call, cryptography , network 
   setTimeout( function() {
     console.log( ' Assync task is complete ');
      resolve()
         },1000)

})
promiseOne.then( function() {
    console.log(" Promise consumed!! ");
    
})



//   another method ..
new Promise(function(resolve,reject) {
  setTimeout( function() {
     console.log(" Assync task 2");
     resolve();
  },1000)
}).then(function() {
  console.log( "Assync 2  resolved ");
})
 
const promiseThree= new Promise( function(resolve,reject) {
   setTimeout( function() {
    resolve({username: "vivi", email:" vivi231@gmail.com"})
      
   },1000)
})
promiseThree.then(function(user ){
   console.log(user);
})

//  fourth prome
const promiseFour = new Promise( function(resolve,reject) {
  setTimeout( function () {
     let error = true
     if(!error){
      resolve({username:"vivi" ,password: "123"})
   } else {
       reject('ERROR: SOMething went wrong ')
   }

  }, 1000);
}) 
promiseFour.then((user)=>{
 return user.username
}).then((username) =>{
   console.log(username)
}).catch(function(error) {
    console.log(error);
})