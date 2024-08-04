 class User {
     constructor( email, password) {
         this.email = email
         this.password  = password

     } 
     get email() {
        return this._email.toUpper Case();
        
     }
     set email( value) {
        this._email = value.toUpperCase()
     }
     get password (){
        return  ` ${ this._password}vivi`
     }
  set password (value){
      this._password = value.toUpperCase()
  }

 }
 const vivi = new User ( "sdfff@fds.cpm"," 2342351")
 console.log( vivi.password); 
console.log(vivi.email);
 
