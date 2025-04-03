fun main() {

   println(capitalize("When the sun goes down"))
   //println(isPalindrome("rotor"))
    //println(isPalindrome("nurses"))
   // println(isSimilar("peep"))
  //  println(isSimilar("kayak"))
   if(isPalindrome("rotor")){
       println("word is a palindrome")
   } else{
       println("word is not a palindrome")
   }


    if(areAnagram("listen","silent")){
        println("word1 and word2 are anagrams")

    } else{
        println("word1 and word2 are not anagrams")
    }

    if(isAnagram("silent","lonely")){
        println("str4 and str5 are anagrams")
    } else{
        println("str4 and str5 are not anagrams")
    }



}

//capitalize the first letter in each word
fun  capitalize(bookTitle:String) :String {
      return bookTitle
          .split(" ")
          .joinToString(" ") { string ->
              string.replaceFirstChar { it.uppercase() }
          }
       }

fun isPalindrome(str1:String) :Boolean {
         val y =  str1.reversed()
        return y == str1

}

fun isSimilar (str2:String) :Boolean {
      val newString = str2.reversed()
    return newString== str2

}

fun isAnagram (str4:String, str5:String) :Boolean {

    if (str4 != str5) {
        return false
    }
    val counts = IntArray(30)
    for (i in str4.indices) {
        counts[str4[i] - 'a']++
        counts[str5[i] - 'a']--

    }
    for (count in counts) {
        if (count != 0) {
            return false

        }

    }
    return true
}

fun areAnagram (word1:String, word2:String) :Boolean{

    return word1.toCharArray().sorted() == word2.toCharArray().sorted()


}
