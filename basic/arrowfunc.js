//  arrowFunction.....

const user = {
    username :" viiv",
    price: 899,
    welcomeMessage : function(){
        console.log(` ${ this.username}, Welcome to the  website.. `)
    }

}

// user.welcomeMessage
// user.welcomeMessage()
// user.username = " viviek"
// user.welcomeMessage()
// console.log(this)

// function one (){
//     // let username = "vivek"
//     console.log(this)
// }
// one()

const chai = () =>{
      let username = " vivi"
      console.log(this)
}


// chai() 


// const addTwo = (num1,num2)=>{
//     return num1+num2 ;
// }

// console.log( addTwo(2,3))

 const addTwo = (num1,num2)=>  ( num1+num2 )
const addTwo1 = (num1,num2)=>  ( {username:"viviek"} ) // remember like that   return remove  barces coming in it ....
  console.log( addTwo(2,3))
  console.log(addTwo1(4,7))


