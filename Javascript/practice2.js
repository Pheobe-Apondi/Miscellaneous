//You’re reviewing the messages your app sends to users after they complete tasks, 
// and while the words are technically correct, many of them appear in lowercase, 
// some are in all caps, and others include strange spacing.
//  How would you go through each message, to make sure they all look clean, 
// consistent, and professional before they’re shown? (6pts)

function cleanOutput (output){
     let newOutput =output.replace(/\s+/g," ").toLowerCase().trim();
     let finalOutput = newOutput.charAt(0).toUpperCase() + newOutput.slice(1);
   return finalOutput
}

console.log(cleanOutput("  Job      well done proceed to the next level.  "))


const sentence = '    My string with a    lot   of Whitespace.  '.replace(/\s+/g, ' ').trim()
console.log(sentence)

const newMessage = (message) =>{
 let m1 = message.replace(/\s+/g," ").trim().toLowerCase()
let finalmessage = m1.charAt(0).toUpperCase() + m1.slice(1)
  return finalmessage
}

console.log(newMessage(" We are pleased to AnnoUNCE      YOUR SUCESS"))


//A friend is reviewing how often they spent money in amounts that were exact multiples of 5,
//  and asks for help identifying those days from their expense list.
//  How would you go about spotting and counting those values? (4pts)

function spendingHabits (expenseList) {
    expenseList = [
     {day:"Monday",spent:4000},
     {day:"Tuesday",spent:204},
     {day:"Wednesday",spent:2000},
     {day:"Thursday",spent:3000},
     {day:"Friday",spent:203}

    ]
     let list = expenseList.filter(b => b.spent%5===0 )
     return list
}
console.log(spendingHabits())

//Your friend is frustrated. Their password isn’t working even though they are sure it’s correct. 
// You watch them type it and notice there might be a space at the end… or maybe the casing is different from what the system expects.
//  Given two versions of a password; the saved one and the one the user typed. Find a way to tell if they match, even when small differences 
// like spacing or casing might be present. (6pts)

const matchPassword = (password) =>{


}
