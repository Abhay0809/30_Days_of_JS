const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

// 1.) Iterate 0 to 10 using for loop, do the same using while and do while loop

// for (let i = 0; i <= 10; i++){
//     console.log(i)
// }

// let i = 0
// while (i <= 10){
//     console.log(i)
//     i++
// }

// let i = 0
// do {
//     console.log(i)
//     i++
// } while (i <= 10)

// 2.) Iterate 10 to 0 using for loop, do the same using while and do while loop

// for (let j = 10; j >= 1; j--){
//     console.log(j)
// }

// let j = 10
// while (j >= 1){
//     console.log(j)
//     j--
// }

// let j = 10
// do {
//     console.log(j)
//     j--
// } while (j >= 1)

// 3.) Iterate 0 to n using for loop

// let n = prompt("Enter the value of n: ")
// let n = 5
// for(let k = 0; k <= n; k++){
//     console.log(k)
// }

// 4.) Write a loop that makes the following pattern using console.log():
//
// #
// ##
// ###
// ####
// #####
// ######
// #######

// for (let l = "#"; l.length <= 6; l += "#"){
//     console.log(l)
// }
for(let m = 1; m <= 5; m++){
    console.log("# ".repeat(m))
}

// 5.) Use loop to print the following pattern:
//
//     0 x 0 = 0
//     1 x 1 = 1
//     2 x 2 = 4
//     3 x 3 = 9
//     4 x 4 = 16
//     5 x 5 = 25
//     6 x 6 = 36
//     7 x 7 = 49
//     8 x 8 = 64
//     9 x 9 = 81
//     10 x 10 = 100

// for(let m = 0; m <= 10; m++){
//     console.log(`${m} * ${m} = ${m * m}`)
// }

// 6.) Using loop print the following pattern
//
// i    i^2   i^3
// 0    0     0
// 1    1     1
// 2    4     8
// 3    9     27
// 4    16    64
// 5    25    125
// 6    36    216
// 7    49    343
// 8    64    512
// 9    81    729
// 10   100   1000

// console.log("i  i^2  i^3")
// for(let n = 0; n <= 10; n++){
//     console.log(`${n}   ${n * n}  ${n * n * n}`)
// }

// 7.) Use for loop to iterate from 0 to 100 and print only even numbers
// 8.) Use for loop to iterate from 0 to 100 and print only odd numbers

// for (let o = 0; o <= 100; o++){
//     if (o % 2 == 0){
//         console.log(o)
//     } else {
//         console.log(o)
//     }
// }

// 9.) Use for loop to iterate from 0 to 100 and print only prime numbers

// for (let a = 0; a <= 100; a++){
//     let isPrime = true;
//
//     for (let p = 2; p < a; p++) {
//         if (a % p == 0) {
//             isPrime = false;
//             break;
//         }
//     }
//
//     if (isPrime) {
//         console.log(`${a} is a prime number`);
//     }
// }

// 10.) Use for loop to iterate from 0 to 100 and print the sum of all numbers.
//
//     The sum of all numbers from 0 to 100 is 5050.

// let sum = 0
// for (let b = 0; b <= 100; b++){
//     sum = sum + b
// }
// console.log("The sum of all numbers from 0 to 100 is " + sum)

// 11.) Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
//
//     The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.

// let sumEven = 0
// let sumOdd = 0
//
// for (let c = 0; c <= 100; c++){
//     if (c % 2 == 0){
//         sumEven += c
//     } else {
//         sumOdd += c
//     }
// }
//
// console.log("The sum of all evens from 0 to 100 is " + sumEven + ". And the sum of all odds from 0 to 100 is " + sumOdd + ".")

// 12.) Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
//     Print sum of evens and sum of odds as array
//
//     [2550, 2500]

// let sumEven = 0
// let sumOdd = 0
// const newArr = []
//
// for (let c = 0; c <= 100; c++){
//     if (c % 2 == 0){
//         sumEven += c
//     } else {
//         sumOdd += c
//     }
// }
//
// newArr.push(sumEven, sumOdd)
// console.log(newArr)

// 13.) Develop a small script which generate array of 5 random numbers

// let random = Math.floor(Math.random() * 100) + 1
// let randArr = []
//
// for (let d = 0; d < 5; d++){
//     randArr.push(random)
// }
// console.log(randArr)


// 14.) Develop a small script which generate array of 5 random numbers and the numbers must be unique

// let arrLen = 5
// let randArr = []
//
// for (let d = 0; d < arrLen; d++){
//     randArr.push(Math.floor(Math.random() * 100) + 1)
// }
// console.log(randArr)

// 15.) Develop a small script which generate a six characters random id:
//
//     5j2khz

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

let result = ' '
for (let e = 0; e <= 5; e++){
    result += characters.charAt(Math.floor(Math.random() * characters.length))
}
console.log(result)

