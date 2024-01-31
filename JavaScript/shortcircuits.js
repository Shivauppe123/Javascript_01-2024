let firstname="Sachin"
let lastname="Tendulkar"

let user=firstname || lastname || "Guest"
//it will check for first true value and it will return
console.log("Welcome "+user)

let fullname= firstname && lastname && firstname+" "+lastname
//it will check for first false value and it will return
console.log("fullname:"+fullname)

let num1=10
let num2="10"

console.log(num1==num2)//it will check for the value
console.log(num1===num2)//it will check value and datatype

/*
// Ref: greek

function gfg() {
	// AND short circuit
	console.log(false && true)
	console.log(true && true)
	// OR short circuit
	console.log(true || false)
	console.log(false || true)
}
gfg();

//2.

// Since first operand is false and operator
// is AND, Evaluation stops and false is
// returned.
console.log(false && true && true && false)

// Whole expression will be evaluated.
console.log(true && true && true)

//3.
// First operand is true and operator is ||,
// evaluation stops and true is returned.
console.log(true || false || false)

// Evaluation stops at the second operand(true).
console.log(false || true || true || false)

*/
