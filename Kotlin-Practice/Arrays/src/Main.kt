fun main() {
   //creating an array
    //arrays are printed using contentTo String()
    val newArray = arrayOf(12,45,36,57,57,4566,23)
    println(newArray.contentToString())

    println(newArray[3])

    arrayOperations()
}

fun arrayOperations(){
    var names = arrayOf("Pheobe", "Apondi", "Okeyo","Atlanta", "Singapore")
    println(names.get(2))        //prints the value at the given index
    names.set(2,"Mauritius")   //sets replaces the current value at the given index with a new value
    println(names.contentToString())
    var newNames = names.plus("Ozone")
    println(newNames.contentToString())
    println(newNames.indexOf("Atlanta"))
}