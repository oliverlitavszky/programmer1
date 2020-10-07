const readline = require('readline')

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let number = r1.question("Write a number: ", (answer) => {
    
    console.log(numbers)

    let num1 = numbers[0].split('').reverse()
    let num2 = numbers[1].split('').reverse()
    let numbers = answer.split(' ')

    console.log(num1)

if (!answer){
    console.log("You need to write something u dumbo!")
    return;
}
else if(answer < 1 || answer > 100) {
    console.log("The number must be smaller or equal to 100 and greater or equal to 1")
    return;
}

for (let i = 1; i <= answer; i++) {
    console.log(i + " - That's it!")
    }

//piece of cake
let s = 10
let h = 4
let v = 7

let A = h*v
let B = (s-h) * v
let C = h * (s-v)
let D = (s-h) * (s-v)

let pieces = [A,B,C,D]

pieces.sort()

let largestPiece = pieces[pieces.length -1]
console.log(largestPiece)


})

