let msg="Hello everyone!"
let info='Good evening'
console.log(typeof msg)
console.log(typeof info)
let uname="jhon"
let location="mumbai"
let ordermsg=`hello ${uname} your order will be delivered to location ${location} ${2+2}` 
// -- backtick ``
console.log(ordermsg)

let fname="sachin"
let lname="tendulkar"
let fullname=`${fname} ${lname}`
console.log(fullname)
let email="sachin@gmail.com"
console.log(location.length)//no of chars
console.log(fname.toUpperCase())
console.log(fname.toLocaleUpperCase())
console.log(msg.charAt(1))
console.log(msg.charCodeAt(1))
console.log(email.indexOf("a"))//return first occurence of given string
console.log(email.lastIndexOf("a"))////return last occurence of given string
console.log(ordermsg.split(" ").length)//spilt the string based on given char
console.log(fname.substring(1,5))// it will return sub string based on given pos=>substring(startpos,endpos)
console.log(fname.slice(-3,-1))// it will return sub string based on given pos=>substring(startpos,endpos)
