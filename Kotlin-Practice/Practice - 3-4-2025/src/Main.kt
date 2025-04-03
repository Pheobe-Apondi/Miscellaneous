fun main() {
    println(reverseString("Candle in the dark"))
    println(countVowels("I love playing soccer"))

    var strings = "My buddy is awesome"
    var vowelCount = countVowels(strings)
    println("The number of vowels in $strings is $vowelCount")

    println(countCharacters("It was a long time to come before we realised the stage had already been set for us to rise"))
   countItems("Once in 1998 there was a fire incident that led to the relocation of 345,678 people.")


    if(palindrome("rotor")){
        println("is Palindrome")
    } else{
        println("is not Palindrome")
    }
    println(removeWhitespace("Alice in boder land"))

    val main = "Chicago"
    println(main.substring(2,4))
    println(longestWords("uri is an obnoxious dog"))


}








fun reverseString (string: String):String{
    return string.reversed()
}
//count number of vowels and consonants in a string
fun countVowels(inputs: String) :Int{

   val vowels = listOf('a','e','i','o','u')
   var count = 0

    for(char in inputs.lowercase()){
        if (char in vowels) {
            count++
        }
    }
    return count
}

fun countCharacters( sentence:String):Pair<Int, Int>{
    val vowels = listOf('a','e','i','o','u')
    var countVowel = 0
    var countConsonant = 0
    for ( char in sentence.lowercase()) {
        if (char.isLetter()) {
            if (char in vowels) {
                countVowel++
            } else {
                countConsonant++
            }

        }
    }
  return countVowel to countConsonant
}

fun countItems(given:String) {
      val vowels = listOf('a','e','o','u')
    val numbers = listOf('1','2','3', '4','5','6','7','8','9')
      var countOfVowels = 0
    var countOfSpaces = 0
    var countOfConsonants = 0
    var countDigits = 0
    given.lowercase()
    var indices = given.length -1
    for ( i in 0 ..indices){
      val  ch = given[i]
      if(ch in vowels){
          countOfVowels++
      }
        if (ch.isLetter()){
    countOfConsonants++
      }
       if (ch in numbers){
           countDigits ++
       }
      if (ch == ' '){
          countOfSpaces++
      }
    }

  println("count of vowels is $countOfVowels")
    println("count of spaces is $countOfSpaces")
    println("count of consonants is $countOfConsonants")
    println("count of digits is $countDigits")

}

fun palindrome(pali:String):Boolean{
    val pali2 =  pali.lowercase().reversed()
return  pali == pali2

}

fun removeWhitespace(userInput:String):String {
    var newInput = userInput.replace("\\s+".toRegex(), "")

    return newInput
}

fun longestWords (givenInput:String) :Any{
   var words = givenInput.split(" ")
   var longestWord = 0
    for (word in words){
        when {
            word.length > longestWord -> longestWord = word.length
        }

    }
   return longestWord
}