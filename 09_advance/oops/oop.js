// const user= {
//     username: "vivi",
//     loginCount: 8,
//     signedIn : true,

//     getUserDetails: function(){
//         console.log(" Got user details from database");
//     }
// }
//  console.log( user.username);
//  console.log( user.getUserDetails);

 function User( username, loginCount, isLoggedIn){
     this.username = username
     this.loginCount= loginCount
     this.isLoggedIn= isLoggedIn
     
     return this 
 }

 const userOne = User("vivi", 12, true)
  const userTwo =  new User( " fesgfhgv" , 11,false)
  console.log(userOne.constructor);
//   console.log( userTwo);
  
 