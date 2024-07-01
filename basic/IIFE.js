// Immediately Invoked Function Expressions (IIFE)
//  it is used whenever we use imediate result
//  reason - global scope ke pollution se problem hoti hain  sometimes  toh usse hatane ke liye IIFE KAA USE KARA HIAN..
//  NAME IIFE..
//  TWO IIFE  can be created using ";"  ..
 (function one () {
    console.log( "Db is connected !")
} ) () ; 

//  no name IIFE
( (name) => {
    console.log(`Db is connected twice  ${name} `)
}) ("vivie")

 