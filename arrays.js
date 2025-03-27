//Creating arrays
let names = ["Pheobe", "Apondi", "Gloria"];
let dates = Array (14,45,67,35,36)
console.log(typeof dates)
console.log(typeof names)

//Indexing
console.log(names[0])
console.log(dates[3])
console.log(names[3])

//javascript arrays are not fixed in size they can grow and shrink
//adding an item to an array
names[3] = "Aroyo"
console.log(names)

//checking for length. length= index+1
console.log(names.length)

//sparse arrays
//are arrays having empty slots

let emptySlot = [12,34,56,,,45,78,89]
console.log(emptySlot)
//sparse arrays can be created by assigning an element to an index greater than the length

emptySlot[12] = 24
console.log(emptySlot)

//comparing elements in an array
 
let marks = [10,20,30,40,50];
let grades =[10,20,30,40,50];

let compareArray = (marks,grades) => {
    if (marks.length !== grades.length) {     // this is comparing the length of the arrays if they are unequal then our arrays can't be equal therefore returns false
        return false      
    }
    for (let i=0;i < marks.length; i++){          //i is index, initail value is 0, i is less than the length of our array, i increases by one index 
        if(marks[i] !== grades[i]){          //  if the values of the i index in marks  is not  equal to the value of the x index of grades
            return false            // then return false whereby arrays are not equal
        }
    }
    return true                          // otherwise the arrays are equal
};

    console.log(compareArray(marks,grades))

let rooms = [23,56,45,67,85];
let offices = [34,12,3,5,6,7]

const compareNumbers = (rooms,offices) => {
    if(rooms.length !== offices.length) {
        return false
    }
        for(let a=0; a<rooms.length; i++){
            if(rooms[a] !== grades[a])
                  return false
        }

        return true
}

//console.log(compareNumbers(rooms,offices))

//spread operator
//used to merge arrays
let oddNumbers = [3,5,7,9]
let evenNumbers=[2,4,6,8]
let numbers = [...oddNumbers,...evenNumbers]
//console.log(numbers)

//to copy an array
let copyOfevenNumbers = [...evenNumbers]
//console.log(copyOfevenNumbers)

//push-add an element at the end of an array
oddNumbers.push(43,37,45)
//console.log(oddNumbers)

//unshift add elements to the beginning of an array
//oddNumbers.unshift(12)

//pop removes only the last element in an array and returns it
oddNumbers.pop()
console.log(oddNumbers)
//shift removes the first element of an array and returns it
//console.log(oddNumbers.shift())

//removing elements from an array
console.log(oddNumbers)
oddNumbers.splice(3,2)   //start at index 3 and remove three elements, if second argument is not applied elements are removed till the end
console.log(oddNumbers)

//you can also add elements using splice
oddNumbers.splice(2,1,45,67,87)
console.log(oddNumbers)

//combining arrays
let newArray= oddNumbers.concat(evenNumbers)
console.log(newArray)