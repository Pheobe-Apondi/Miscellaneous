let numbers =[10,23,30,43,50,60]
let b = numbers.forEach(number=> console.log(number*2))   //forEach returns undefined when console.logged alone.Mainly used for side effects like modifying
//elements in place,logging and updating variables

let c = numbers.map(num=>num*5)
console.log(c)

let d = numbers.filter(number=> number%5===0)
console.log(d)



//find duplicates in an array 

const findDuplicates = (values) =>{
       let spotDuplicates = values.filter((item,index) =>values.indexOf(item) !== index)
       let  duplicates = [...new Set(spotDuplicates)]
        return duplicates
}

console.log(findDuplicates([1,2,3,4,4,5,6,7,8,9,8,4,5]))