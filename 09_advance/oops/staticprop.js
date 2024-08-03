class User {
    constructor(username) {
        this.username = username

    }
      logMe(){
        console.log(`Username: ${ this.username}`);
        
      }
    static   createId() {
         return `123`
      }
}

const viv = new  User(" viviesh")
 console.log(viv.createId());

 class Teacher extends User {
     constructor(username,email) {
        super ( username) 
        this.email = email

     }
 }
 
  const mobile =  new  Teacher ( " xiaomi", " sdfgng@fb.com")
  console.log(mobile.logMe());
  