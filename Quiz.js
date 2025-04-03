//Find the first non-repeating character in a string
let letters = "aabbccdef";
// count={};

 //Write a function that replaces all occurrence of Javascript with Js

 let word = "I love Javascript, javascript is a fun language, there is so much to learn in Javascript"
 console.log(word.replaceAll(/Javascript/gi,"JS"))

//reverses a string
let sentence = "Kevine Umotoni"
console.log(sentence.split("").reverse().join("").toString())
//write a function that extracts the first 5 characters of a string
let identity = "Kevine Umotoni is a rwandan"
console.log(identity.slice(0,6))

//write a function that finds the position of the first occurence of "code" in a given string
let txt = " I love code, code is a wonderful thing"
 console.log(txt.indexOf("code"))

 //Write a function that counts how many times letter a appears in a string
 let fruit = "bananas and oranges"
 let fav= fruit.replace(/a/g,"")
 console.log(fruit.length-fav.length)

 const countTimes = (sentence) =>{
    let count = 0;
     sentence.split("").forEach(char =>{
        if (char === "a") count ++;
     });
   return count;
 }
 console.log(countTimes("banana"));
    
    
 const countItems = (words) => {
       let number = 0;
       for(let i=0; i<words.length; i++){
        if (words[i]=== "a") {
            number ++;
        }
       }
       return number
 };

 console.log(countItems("Abracadabra"))
//converting a string to titlecase
 const toTitleCase = (str2) => {
      return str2
    .toLowerCase() .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
 }
 console.log(toTitleCase("Who moved my cheese"))

 //removing duplicates in an array and returning an array with duplicates 


//  const removeDuplicates =(arr) => {
//    let seen = new Set();
//    let duplicates = new Set ();

//   let uniqueNumbers = arr.filter(num => {
//    if(seen.has(num)); {
//        duplicates.add(num);
//       return false;

    
//   }
//      seen.add(num);
//      return true;
//   });

//   return {
//    uniqueNumbers,
//    duplicates: [...duplicates]
//   };
// };
// console.log(removeDuplicates(arr1));

let duplicates = []
let nonDuplicates = []
let count = {}
let arr1 = [23,23,67,89,34,56,34,67,12]

arr1.forEach(j=>{
   if(count[j]){
      count[j]++
      if(count[j]===2){
         duplicates.push(j)
      }
   }else{
      count[j]=1;
      nonDuplicates.push(j)
   }
})
console.log(duplicates)
console.log(nonDuplicates)
 
//Write a program that removes all vowels from a string
let greetings = "A world unmade"
console.log(greetings.replace(/[aeiouAEIOU]/g,""))

// Write a program that capitalizes the first letter of every word in a sentence.

const titlecase = (bookTitle) => {
   let newTitle = bookTitle
    .toLowerCase()
    .split(" ")
    .map (word => word.charAt(0).toUpperCase() + word.slice(1) )
    .join(" ")

   return  newTitle
};
console.log(titlecase("A thousand splendid suns"))

const titleCases = (books) => {
   let newTitleCases = books
   .toLowerCase().split(" ")
   .map(book => book.charAt(0).toUpperCase() + book.slice(1))
   .join(" ")
  return newTitleCases
}
console.log(titleCases("When the sun goes down"))
//Write a program that reverses words in a sentence but not the sentence itself.
//Example: "JavaScript is fun" → "tpircSavaJ si nuf"


const reverseString = (string) =>{
   let newString = string
   .split(" ")
   .map(word => word.split("").reverse().join(""))
   .join(" ")
   return newString
}

console.log(reverseString("I love Javascript"))

const reverseWords = (sentences) => {
   let newSentence = sentences
   .split(" ")
   .map(word=> word.split("").reverse().join(""))
   .join(" ")
   return newSentence
}
console.log(reverseWords("My mum loves pancakes"))
//Write a program that extracts all numbers from a string and adds them together.
//Example: "a1b2c3" → 1 + 2 + 3 = 6
let combination = "a1b2c3d4"
const manipulation = (string3) =>{
  const values = string3.match(/\d+/g);
  if (!values) return 0;
  const total = values.reduce((sum,num) =>
    sum +parseInt(num),0);
  return total;

}

console.log(manipulation("a2b4c6"))

