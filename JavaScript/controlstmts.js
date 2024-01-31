let height=parseInt(prompt("Enter height"))
let weight=parseInt(prompt("Enter weight"))
let bmi=weight/(height*height)
let country=prompt("Enter country")

/*if(bmi>25)
{
    alert("bmi:"+bmi+" Over weight")
}
else
{
    alert("bmi:"+bmi+" Normal or underweight")
}*/

//cond?what if cond is true:what if cond is false
//bmi>25?alert("bmi:"+bmi+" Over weight"):alert("bmi:"+bmi+" Normal or underweight")

if (bmi<18) {
    alert("Under weight")
    
}
else if(bmi>=18 && bmi<=22)
{
    alert("Normal weight")
}
else{
    alert("over weight")
}

switch(country)
{
    case "India":
        console.log("Welcome indian")
        break
    case "america":
    case "usa":
        console.log("WElcome american")
        break
    case "russia":
        console.log("Welcome russian")
        break
    default:
        console.log("Welcome human")

}