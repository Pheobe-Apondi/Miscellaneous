fun main() {
    println("Hello World!")

   val identity1 = Identity ("Alice",21,"128","Female", "Black")
    println(identity1.name)
    println(identity1.sex)

}


class Identity (var name:String,var age:Int, var height:String,var  sex: String,var  race:String ){

}
class Person ()