fun main() {
    println("Hello World!")


    var a = "Kapushka"
    println(a.count())

    var b = "Roses are red violets are blue"
    val c = setOf('a','e','i','o','u')
    var count = 0
    for (it in b){
        if(it in c){
            count ++
        }
    }

    println(count)
    println( b.startsWith("Roses"))
   println( b.endsWith("blue"))
    var car = "    op    "
    println(car.trimEnd())
    println(car.trim())
    println(car.trimStart())
   var w = "Alice in boderland"
    println(w.slice(3..7))
    var x = arrayOf(10,23,45,67,8,9,45,24,24)
    println(x.slice(4..6))
}
