// 1.) Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive'
// but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
//
// Enter your age: 30
// You are old enough to drive.
//
//     Enter your age:15
// You are left with 3 years to drive.

let age = prompt("Enter your age: ")

if(age > 18) {
    alert("You are " + age + " . " + " You are old enough to drive")
} else {
    alert("You are " + age + " . " + " You will be allowed to drive after " + (18 - age) + " years.")
}

// 2.) Compare the values of myAge and yourAge using if … else.
// Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
//
//     Enter your age: 30
//     You are 5 years older than me.

let yourAge = prompt("Enter your age: ")
let myAge = prompt("Enter my age: ")

if (yourAge > myAge) {
    alert("You are " + (yourAge - myAge) + " years older than me")
} else {
    alert("You are " + (myAge - yourAge) + " years younger than me")
}

// 3.) If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
//
// using if else
// ternary operator.
//     let a = 4
//     let b = 3

let a = 4
let b = 5

if (a > b) {
    console.log(`a is greater than b`)
} else {
    console.log(`b is greater than a`)
}

let isGreater = (a > b) ? "a is greater than b" : "b is greater than a"
console.log(isGreater)

// 4.) Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
//
//     Enter a number: 2
//     2 is an even number
//
//     Enter a number: 9
//     9 is is an odd number.

let num = prompt("Enter a number: ")

if (num % 2 == 0) {
    alert(num + "is an even number.")
} else {
    alert(num + "is an odd number.")
}


