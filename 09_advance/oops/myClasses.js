// ES6

class User {
    constructor (username, email, password){
        this.username =username
        this.email= email
        this.password= password
    }
      encryptPassword() {
        return ` ${ this.password}abc `
      }
      changeUsername () {
        return `${ this.username.toUpperCase()}`
      }
}

const  man = new User ( "vivi", "viviepureb@fb.com", "123")

console.log( man.encryptPassword());
console.log( man.changeUsername());
