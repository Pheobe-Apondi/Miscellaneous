fun main() {
    println("Hello World!")
//Write a function that counts the number of words in a given sentence
    val sent = "I am learning strings in Kotlin"
    var b = sent.split(" ")
    println(b.size)
     val sentence=  reverseString("I love kotlin")
     println(sentence)

    concat()
    comparison()
    facts()
   println(titles("A thousand splendid suns"))
}
//write a function that reverses a string


fun reverseString(sentence:String) :String{
    var reversedSentence = ""
    for (i in sentence.length-1 downTo (0)){
        reversedSentence += sentence[i]
    }
    return reversedSentence
}


//String Concatenation
fun concat() {
    val word = "I love basketball"
    val word2 = "and hockey"
    val newWord = word + " " + word2
    println(newWord)

    var word3 = "Leo"
    var word4 = "gangster"
    var word5 = "$word3 is a $word4"
    println(word5)
    println(word4[3])
    println(word[5])
    println(word.first())
    println(word.last())

}

//comparing strings
fun comparison() {
    val sentence1 = "Mary is a sound lady"
    val sentence2 = "Mary is a sound lady"
    val sentence3 = "Rose is a type of flower"

    if (sentence1 == sentence2) {
        println(true)
    }
    else{
        println(false)
    }

    if (sentence1 == sentence3){
        println(true)
    }
    else{
        println(false)
    }

    if(sentence1!= sentence2){
        println(true)
    }
    else{
        println(false)
    }
}

//inbuilt functions
fun facts(){
    val playground = "    Galaxy galleria gallery francolin   "
    println(playground.uppercase())
    println(playground.lowercase())
    println(playground.trimStart())
    println(playground.trimEnd())
    println(playground.trim())
   println(playground.startsWith("Galaxy"))
    println(playground.startsWith(" "))
    println(playground.endsWith(" "))
    println(playground.replace("Galaxy","Wonders of her time:"))

    val issues = "greed,money,land,last"
    println(issues)
    println(issues[3])
    val realIssues = issues.split(",")
    println(realIssues)
    println(realIssues[3])
    var weight = 45.76
    println(weight.toString())

}


//capitalizing  first letter of each word in a string
fun titles(bookName:String):String{
       return bookName
       .split(" ").joinToString (" ")
       {string -> string.replaceFirstChar { it.uppercase() }

        }

}

