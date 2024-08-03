function Setusername(username){
    //  comples db calls
     this.username = username
}

function createUser (username,email, password) { 
     Setusername.call( this.username)
    
    this.email = email
    this.password = password
}

const byte = new  createUser ( " byte","byte@fb.com"," 5345343")
console.log(byte);
