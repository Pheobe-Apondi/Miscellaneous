//How to reverse a string 

//Method1

let string = " I love javascript."
console.log(string)
let stringArray= string.split("")    //split method splits a string into an array of substrings
console.log(stringArray)
let reverseStringArray = stringArray.reverse()
console.log(reverseStringArray)
let joinArray = reverseStringArray.join("")
//console.log(joinArray)

//method2

 //function reverseString (string){
   // reverseString("Love Island")

  //  return string.split ("") .reverse(). join("");
//}   revisit


//remove all spaces in a string 

newString = string.replaceAll(" ","")
console.log(newString)

//capitalizing the first letter of each word in a string
//method1

let story = "there once was an old man with a wrinkling face who loved peppers."
let betterStory = story.split("")
console.log(betterStory)

//method 2

