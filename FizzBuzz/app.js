for (let fizzy = 0; fizzy < 100; fizzy++){
    if(fizzy % 2 == 0){
        console.log(fizzy)
    }
    else if(fizzy % 3 == 0 && fizzy % 5 == 0){
        console.log("FizzBuzz")
    }
    else if(fizzy % 3 == 0){
        console.log("Fizz")
    }
    else if(fizzy % 5 == 0){
        console.log("Buzz")
    }
}
