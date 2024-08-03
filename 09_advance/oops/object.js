function multiplBy5(num){
     return num*5;
    
}
multiplBy5.power = 2

console.log(multiplBy5(5));
console.log(multiplBy5.power)
console.log(multiplBy5.prototype);

  function createUser( username,score){
    this.username = username;
    this.score= score;
  }

  createUser.prototype.increment = function() {
      this.score++
  }
  createUser.prototype.printMe = function(){
      console.log(`score is ${this.score}`);
      
  }
  const chai = new createUser("chia", 33)
 chai.printMe()
  
   