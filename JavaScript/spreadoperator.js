let elect_products=["mobile","tv","laptop","pendrive"]
const edible_products=["tea","coffee","choclates"]

console.log(...elect_products)
console.log(elect_products)

const all_products=[...elect_products,...edible_products]
console.log(all_products)
elect_products=[...elect_products,"monitor"]
console.log(elect_products)