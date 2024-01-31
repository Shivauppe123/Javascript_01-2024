let firstname
let lastname

let user=firstname || lastname || "Guest"
//it will check for first true value and it will return
//0,false,"",undefined,null=>false
console.log("Welcome "+user)

let fullname= firstname && lastname && firstname+" "+lastname
//it will check for first false value and it will return
console.log("fullname:"+(fullname??"Anonymous"))
//exp1??exp2=>if exp1 is defined then exp1 will be returned else exp2 will be returned
//undefined,null=>false
let num1=10
let num2="10"

console.log(num1==num2)//it will check for the value
console.log(num1===num2)//it will check value and datatype

let length
let width=10

let area=length??0.5 * width??1

console.log(area)