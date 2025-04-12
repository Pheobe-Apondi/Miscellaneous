//find duplicate items in a shopping cart

function sortCart (shopping){
  
let duplicates = shopping.filter((item,index) => shopping.indexOf(item) !== index)
let uniqueDuplicates = [...new Set(duplicates)]
return uniqueDuplicates

}
console.log(sortCart(["bananas","tomatoes","fish","tomatoes","eggs","eggs"]))


