import java.util.*
import kotlin.math.pow

fun main() {
   //creating an array
    //arrays are printed using contentTo String()
    val newArray = arrayOf(12,45,36,57,57,4566,23)
    println(newArray.contentToString())

    //println(newArray[3])
    arrayOperations()


 
   estimate()
    trip()

}

fun arrayOperations(){
    val names = arrayOf("Pheobe", "Apondi", "Okeyo","Atlanta", "Singapore")
    println(names.get(2))        //prints the value at the given index
    names.set(2,"Mauritius")   //sets replaces the current value at the given index with a new value
    println(names.contentToString())
    val newNames = names.plus("Ozone")
    println(newNames.contentToString())
    println(newNames.indexOf("Atlanta"))
    var d = "candy is a brown bread"
    d.replaceFirstChar {it.uppercaseChar()}
    println(d)
}

fun numbers (){
    val marks = arrayOf(10,20,30,60,65,34,23,76,43,12,45)
     println(marks.get(3))
    println(marks[4])
    println(marks.indexOf(76))
    println(marks.size)
    println(marks.maxOrNull())
    println(marks.minOrNull())
    marks.sort()
    println(marks.contentToString())

    val grades = marks.sortedArray()
    println(grades.contentToString())
    marks.sortDescending()
    println(marks.contentToString())
    var x = marks.sortedArrayDescending()
    println(x.contentToString())

    println(marks.sum())
   val values = mutableListOf(5,6,7,43,5762,2,34)
    values.sort()

    println(marks.plus(1000).contentToString())

    var emptyArray = mutableListOf<Int>()
    for(it in marks){
      if (it%2==0)  {
           emptyArray.add(it)

      }
        println(emptyArray)
    }

}

fun trip(){
    var names = arrayOf("Ann","Elsie","Lorenzo","Amour","Alice")
    var team1 = mutableListOf<String>()
    var team2= mutableListOf<String>()
    names.toString().lowercase()
    val vowels = setOf('a','e','i','o','u')

  for (it in names){
      if (it.first().uppercaseChar() in vowels){
          team1.add(it)
      }else {
          team2.add(it)
      }

  }
    if (team1 == team2){
        println("trip can happen")
    }else {
        println("need to reassign people")
    }

}






fun estimate(){
 val pi = 3.14
    val diameterA= 36/100
    val diameterB = 42/100
    val radiusA= diameterA/2
    val radiusB=diameterB/2
    var typeA = 2200
    var typeB = 1800
    var onePiece = 16.75
    val volumeA = 4/3 * pi * radiusA * radiusA * radiusA
    val  volumeB = 4/3 * pi * radiusB * radiusB * radiusB
    val totalVolume = volumeB + volumeA
    val price = totalVolume *  16.75

    println(price)





}
