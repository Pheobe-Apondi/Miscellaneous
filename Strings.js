//Write a program that removes all voweles from a string
let words = "Get to know me.";
  words = words.replace(/[aeiouAEIOU]/g,"");
  //console.log(words)

let favourite = "My favourite character pinochio "
   favourite =favourite.replace (/[aeiouAEIOU]/g,"");
//console.log(favourite)

//Write a program that counts how many times a number appears in a string 
//banana a
let s = "Banana"

//strings is a data type containing a sequence of characters
let sentence ="I am learning javascript"
let news = 'I am going to learn fuctions in javascript'
//console.log(typeof news)
let names = `Ann Kendi`   //strings created using template literals
let oldNews= String(news)
//console.log(typeof oldNews)

//accessing caracerts in a string
console.log(sentence[3])
console.log(names[2])
console.log(news.charAt(3))
//length property
console.log(sentence.length)
//joining strings using concatenation
let hobbies = "I like playing"
let games = "basketball on weekends"
let a = hobbies + " " + games
console.log(a)
let c = hobbies.concat(" ",games)
console.log({c})
//comparing lengths of two strings
//console.log(hobbies.length<games.length)
//template literals allow us to display text on multiple lines
let song = `The ghost of
Alion came back
Piece by piece
to haunt Alegion`
//console.log(song)
//including variables in string
let Name = "Pheobe  Apondi"
let Age = "21 year old"
console.log(`My name is ${Name} and I am ${Age}`) //interpolation
console.log(Name.toLowerCase())
console.log(Name.toUpperCase())

//how to look if a specified argument is present in a string....it returns a boolean
console.log(Name.includes("Pheobe"))
console.log(Name.includes("a",4))
console.log(Name.includes("Aroyo"))
console.log(Name.indexOf("p"))
console.log(Name.lastIndexOf("e"))

let classes = "Lovelace, Anita B and Ada Lab"
console.log(classes.slice(3,6))
console.log(classes.slice(4))
console.log(classes.substring(0,5))
console.log(classes.substring(4))

//split method returns an array of strings
let dreams = "I want to visit Kyoto Japan"
console.log(dreams.split(" "))
console.log(dreams.split('',7))
