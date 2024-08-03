class  User {
   constructor(username) {
this.username = username
   }
   isLogMe() {
    console.log( `Username  is ${ this.username}`);
   
   }

}
class Teacher  extends  User {
    constructor ( username,email,password){
        super(username)
        this.email = email
        this.password = password
    } 

  addCourse (){
    console.log(`A new course was added by ${this.username}`);
    
  }

}

const chia =  new Teacher( "chai", " sdffewv@gmail.com", "12345") 
 chia.addCourse() 
 const masala = new Teacher(" masalChai")
 masala.isLogMe()
 console.log(chia == masala);
 console.log( chia instanceof Teacher);
 console.log(chia instanceof User);

  
 
 