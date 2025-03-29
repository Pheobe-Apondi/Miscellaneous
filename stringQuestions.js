//replace "bad" with "good"
let example = "This is a bad example"
console.log(example.replace("bad","good"))

//split the string into an array
let fruits = "apple,banana,grape"
console.log(fruits.split(","))

//fund the index of "script" in 'javascript'
let word = "Javascript"
console.log(word.indexOf("script"))
//reverse the string developer using javascript
let career = "developer"
let a = career.split("")
let b = a.reverse()
let d = b.join("")
console.log(d)

let f = career.split("").reverse().join("")
console.log(f)

//count the number of times "a" appears in "banana"
let fav = "banana"
let c = fav.replace(/a/g,"")
console.log(c)
console.log(fav.length - c.length)
console.log(fav.match(/a/g))
console.log(fav.match(/a/g)) || fav.length
//remove whitespace from "  Javascript   "

let lang = "   Javascript  "
console.log(lang.replaceAll(" ",""))
//extract the domain name from the email
let email = "user@example.com"
console.log(email.slice(0,4))

//write a function to check if a string is a palindrome
let word1 = "jason"
let word2 = "nosaj"

let word3= word2.split("").reverse().join("")
console.log(word1===word3)
//capitalize the first letter of javascript
let program = "javascript"
console.log(program.charAt(0).toUpperCase() + program.slice(1))