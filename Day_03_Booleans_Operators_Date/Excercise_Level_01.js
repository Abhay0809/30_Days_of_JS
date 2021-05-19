// 1.) Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and
// use the typeof operator to check different data types.

let firstName = 'Abhay'
let lastName = 'Anand'
let country = 'India'
let city = 'Munger'
let age = 19
let isMarried = false
let year = 2020

console.log(typeof(firstName))
console.log(typeof(lastName))
console.log(typeof(country))
console.log(typeof(city))
console.log(typeof(age))
console.log(typeof(isMarried))
console.log(typeof(year))

// 2.) Check if type of '10' is equal to 10

console.log('10' == 10)
console.log('10' === 10)

// 3.) Check if parseInt('9.8') is equal to 10

console.log(parseInt('9.8') == 10)

// 4.) Boolean value is either true or false.
//
//     i) Write three JavaScript statement which provide truthy value.
//     ii) Write three JavaScript statement which provide falsy value.

console.log(typeof('Abhay') == typeof('Anand'))
console.log('10' == 10)
console.log(3>2)

console.log(2>3)
console.log('10' === 10)
console.log(typeof(12) == typeof('Abhay'))

// 5.) Figure out the result of the following comparison expression first without using console.log().
// After you decide the result confirm it using console.log()

console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')

// 5.) Find the length of python and jargon and make a falsy comparison statement.

let name1 = 'python'
let name2 = 'jargon'

console.log(name1.length != name2.length)

// 6.) Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

console.log(4 > 3 && 10 < 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))

// 7.) Use the Date object to do the following activities
//
//     What is the year today?
//     What is the month today as a number?
//     What is the date today?
//     What is the day today as a number?
//     What is the hours now?
//     What is the minutes now?
//     Find out the numbers of seconds elapsed from January 1, 1970 to now.

const now = new Date()

console.log(now.getFullYear())
console.log(now.getMonth()+1)
console.log(now.getDate())
console.log(now.getDay()+1)
console.log(now.getHours())
console.log(now.getMinutes())

const today = Date.now()
console.log(today)


