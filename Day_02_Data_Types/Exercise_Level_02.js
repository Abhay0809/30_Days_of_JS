// 1.) Using console.log() print out the following statement:
//
//     The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
//     "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."

console.log("\'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.")
console.log(`
    "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
`)

// 3.) Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log(typeof('10') == typeof(10))

// 4.) Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

let num = '9.8'
console.log(parseFloat(num))
let numRound = Number(10)
console.log(numRound)

// 5.) Check if 'on' is found in both python and jargon

let lang1 = 'python'
let lang2 =  'jargon'
console.log(lang1.includes('on'))
console.log(lang2.includes('on'))

// 6.) I hope this course is not full of jargon. Check if jargon is in the sentence.

let sentence = 'I hope this course is not full of jargon.'
console.log(sentence.includes('jargon'))

// 7.) Generate a random number between 0 and 100 inclusively.
// 8.) Generate a random number between 50 and 100 inclusively.
// 9.) Generate a random number between 0 and 255 inclusively.

console.log(Math.floor((Math.random() * 100) + 1))
console.log(Math.floor((Math.random() * 50) + 50))
console.log(Math.floor((Math.random() * 250) + 5))

// 10.) Access the 'JavaScript' string characters using a random number.

// TODO: DOUGHT

// 11.) Use console.log() and escape characters to print the following pattern.
//
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125

// console.log(`
//     1 1 1 1 1
//     2 1 2 4 8
//     3 1 3 9 27
//     4 1 4 16 64
//     5 1 5 25 125
// `)

console.log("1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125")

// 12.) Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'

let sentence2 = 'You cannot end a sentence with because because because is a conjunction'

console.log(sentence2.indexOf('because'))
console.log(sentence2.substr(31, 23))
