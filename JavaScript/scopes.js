/*
var-function scope- redeclared- re-assigned
let- Block scope- no redeclare- reassigned
const-Block scope- no redeclare- no reassign
*/

let a=10//it can exist to entire program

function display()
{
 var msg="Hello"
 let letmsg="Hello"
 const org="Accenture"
 global_msg="Don't use varriable without scope"
 {
    var msg="Good morning"
    var msg="Good Evening"//redeclare
    msg="GOOD EVENING"//reassign

    let letmsg="Good morning"
    //let letmsg="Good Evening"//redeclare not possible
    letmsg="GOOD MORNING"

    const org="Accenture pvt ltd."
    //const org="xyz pvt ltd"//error-no redeclare
    //org="xyz pvt ltd"//error-no reassign
    global_msg="don't use"
    console.log("msg:"+msg)
    console.log("letmsg:"+letmsg)
    console.log(a)
    console.log("const_org:"+org)
    console.log("globalmsg:"+global_msg)
 }
console.log("------- outside block---------")
console.log("msg:"+msg)
console.log("letmsg:"+letmsg)
console.log("const_org:"+org)
console.log("globalmsg:"+global_msg)
}

display()
console.log("------- outside function---------")
console.log("globalmsg:"+global_msg)
console.log(a)
//console.log("msg:"+msg)