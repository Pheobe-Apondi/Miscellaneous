
//conditionals
//the else statement


if (25<10){

    greetings = "Have a good day"
}

else{

    greetings= "Have a bad day"
}

console.log(greetings)

//the else if statement
//specifies a new condition if the condition is false

if (25>45){

    greetings = "goodmorning"
}

else if(25>25){
    greetings="good afternoon"
}

else{
    greetings = "goodnight"
}
console.log(greetings)

//LOGICAL OPERATORS
// ||(OR),   && (AND), !(NOT), ??(NULLISH COALESCING)

// || (OR)
if (25>12 || 10>8){
    greet = "Hey Ann"
}
console.log(greet)

// && (AND)
 if (25>12 && 30>235){
   mayday= "Have a lovely day"

 }

 else{
    mayday = "Have the day you deserve"
 }

 console.log(mayday)

 // !(NOT)


 //If  I exercise everyday I will have visible abs otherwise I will have a belly.

 let exercise = true;
 let abs;

 if (exercise ===true){
    abs = "belly"
 }
 else{
   abs=  "six packs"
 }
 console.log(abs)

 // You have four days to finish an activity

 const days = "Monday " || "Tuesday" || "Wednesday" || "Thursday"
 let activity;
 if (days === "Monday"){
    activity = "cycling"

 }

 else if(days === "Tuesday"){
    activity= "jogging"
 }

 else if(days==="Wednesday") {
    activity = "racing"
 }

 else {
    activity="sleeping"
 }

 // console.log(activity)    revisit this section to better grasp the concept

 //write a program to output the first 100 fizzbuzz
 // fizz is a number divisible by 3
 //buzz is a number divisible by 5
 //fizzbuzz is a number divisible by both 3 and 5


 //to find the nth to last character of a string
let school= "Lovelace"
 let schoolName= school[school.length-4]
console.log(schoolName)

