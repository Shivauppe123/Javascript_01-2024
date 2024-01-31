let nums=[2,3,4,5,10,true,undefined,null,"asdf"]
const names=["jhon","jim","paul","adam"]

names.push("peter")//will append the given item
console.log(names)

//names=["a","b","c"]//error
names.pop()// will remove the last item
console.log(names)
console.log(names.length)

names.unshift("william")//will add item to the first pos
console.log(names)
names.shift()//will remove first item
console.log(names)

names.splice(1,2)//will remove items from given pos=>splice(pos,deletecount)
console.log(names)

names.splice(1,0,"ethan")// will add item to a given pos=>splice(pos,0,item)
console.log(names)

for(let n of names)
{
    console.log(n)
}

console.log(names.includes("Jhon".toLocaleLowerCase()))//it will return true if given item is available else return false
console.log(names.indexOf("Adam"))//it will return pos of given item

console.log("String array patterns")
console.log(names.join("-"))


let str = 'Javascript is a dynamically typed language'
let temparray = str.split("a")
console.log(temparray)
console.log(temparray.join("@"))
