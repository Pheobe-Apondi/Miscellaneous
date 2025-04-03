


const names = (username) =>{
  let userinput = username.toLowerCase().trim()
   let newInput = userinput.charAt(0).toUpperCase() + userinput.slice(1)
  
 return `Welcome ${newInput}`

}

console.log(names("Alice"))



const type = (yourNames) =>{
    let data = yourNames.toLowerCase().trim()
     let collectedData = data.charAt(0).toUpperCase() + data.slice(1)
     return `Welcome ${collectedData} to the system, enjoy your stay in the Condo. Happy holidays!`

}

console.log(type("  Meron "))

//You’re building a chatbot to support people when they’re feeling down. 
// A user might type something like “HELP”, “can you help me?” or “i need HELP!”.
//  If the message seems like a request for help, the bot should respond with: I’m here for you.
//  Otherwise, it says: How else can I assist you?

const chatBot = (sentence) => {
    sentence.toLowerCase()
   if(sentence.includes("help")){
      return `I'm here for you.`
   } else {
    return `How else can I assist you?`
   }
 
}

console.log(chatBot ("I need help with my studies"))

const chatMe = (chat) =>{
   let chatInput = chat.toLowerCase()
   let answer = chatInput.includes("assistance")? "I am here for you": "How else may I be of assistance to you"
     return answer
}

console.log(chatMe("I need ASSistancE"))

//On your email sign-up page, users enter their email addresses freely. 
// Some entries are correct, like “user@eaxample.com”, but others forget the @ or end with something like .org. 
// If the email includes an @ symbol and ends with .com, show: Thanks for subscribing!. Otherwise, display: Please enter a valid email address.

const subscription = (userSubsribe) => {
      if(  userSubsribe.includes("@") && userSubsribe.endsWith(".com")){
        return "thanks for subscribing"
      }
      else {
        return "Please enter a valid email address"
      }
  
}
console.log(subscription("pheobe@gmail.org"))

const gatePass = (enterPin) => {
    let pin =  enterPin.includes("@") && enterPin.endsWith(".com")? "Welcome Home": "Error,Wrong Pin"
    return pin

}
console.log(gatePass("apondi@gmail.com"))

//A friend is trying to name their new shop. 
// The name should be short and simple - between 5 and 15 characters, with no spaces. 
// When a name is entered, the system should either say: Name accepted. or Please choose a different name.

const nameShop = (inputName)  => {
    let correctInput = 5>inputName<15   && !inputName.includes(" ")? "Name Accepted":"Please Choose a different Name"
   return correctInput
}
console.log(nameShop("Abracadabra"))


//count vowels in a string 

const string20 = (string19) => {
         string19.toLowerCase();
         let vowels = ["a","e","i","o","u"];
         let count = 0
        
         for (i = 0; i < string19.length -1 ; i++){
            if(i in vowels){
                count++
            }
         }

return count

}
console.log(string20("Baddie of course aaa eifosnf"))

//count how many times a letter appears in a sentence
const repeatLetter = (string50) =>{
    string50.toLowerCase()
    let countLetter = 0;
     string50.split("")
    .forEach(char =>{
     if(char === "a"){
        countLetter ++;
     }

    })
   
   return countLetter
}

console.log(repeatLetter("Abracadabra"))


//count how many times a word appears in a sentence
const repeatWords = (sentence34) =>{
  
    let countWord = 0;
    sentence34.toLowerCase().split(" ")
    .forEach(word =>{
        if(word === "saint"){
         countWord ++
        }

    })

  return countWord
}

console.log(repeatWords("saint Ali, went to Saint Paul to tell him about saint Pters"))

//Write a JavaScript for loop that iterates from 0 to 15. For each iteration,
//  it checks if the current number is odd or even, and displays a message on the screen.


 let arr14 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  let arrOdd = []
  let arrEven = []
     for (let int=0; int<arr14.length; int++) {
        if(int%2 === 0){
            arrEven.push(int)
        }else {
            arrOdd.push(int)
        }
     }
   
   console.log(arrOdd)
   console.log(arrEven)

for( let num = 1; num <=15; num++){
    if(num === 0){
        console.log(num + " not applicable")
    } else if (num%2===0){
        console.log(num + " is even")
    } else {
        console.log(num + " is odd")
    }

}

//FizzBuzz
//fizz divisible by 3
// buzz divisible by 5
//fizzbuzz is divisible by both 3 and 5

for (let numeral = 0; numeral <=100; numeral++){
  
  if(numeral%3===0 && numeral%5===0){
    console.log("fizzbuzz")
  }
  
  else if (numeral%3 === 0){
    console.log("fizz")
  } else if(numeral%5 === 0){
    console.log("buzz")
  }else{
    console.log(numeral)
  }




}
