//Goven an array find the element that appears more than n/2 times using linear time and constant space

const majorityNum = (arr1) =>{
  let candidate = null;
  let count = 0;
  for(let a = 0; a<arr1.length;a++){
     if(count===0){
        candidate=arr1[a];
        count =1;
     }else if(arr1[a]===candidate){
        count++;
     }else{
        count--;
     }

  }
  //all occurences of the function
    count = 0
    for(let a = 0; a<arr1.length;a++ ){
        if(arr1[a] == candidate){
            count ++
        }

    }
    if(count>arr1.length/2){
        return candidate
    }else {
        return "No majority item"
    }

}

console.log(majorityNum([1,2,42,2,2,2,5]))
console.log(majorityNum(["banana","banana","apple"]))


//finding a missing number in an array
function findMissingNumber (nums){
   let  n = nums.length +1 
    let a = n *(n+1)
    let expectedSum = a/2
   let actualsum = 0
   nums.map(num => actualsum +=num)
   let missingNum = expectedSum - actualsum
   return missingNum
}

console.log(findMissingNumber([1,2,4,5]))
console.log(findMissingNumber([10,20,40,50]))
console.log(findMissingNumber([2,4,6,7,8,9,10]))
console.log(findMissingNumber([-10,-20,-40,-50]))

let menu = [
    {"name":"Mercy","price":1200.0,"cuisine":"mexican"},
    {"name":"Mary","price":3000.0,"cuisine":"italian"},
    {"name":"Ann","price":800.0,"cuisine":"italian"},
]

const italianCuisine = () => {

 let filteredMenu =  menu.filter(item => item.cuisine==="italian")
 return filteredMenu
}

console.log(italianCuisine())

const averagePrice  = () => {
    let filteredMenu = menu.map(item => item.price)
    let sum = 0

    filteredMenu.forEach(element => {
        sum += element;
        return sum;
    });
  
    let av = sum / filteredMenu.length    
    return av
}
console.log(averagePrice())