// 1.) Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
//
// Enter base: 20
// Enter height: 10
// The area of the triangle is 50

let base = prompt("Enter the value of Base: ")
let height = prompt("Enter the value of Height: ")

let area = (1/2 * base * height)

alert("The area of the triangle is " + area)

// 2.) Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
//
// Enter side a: 5
// Enter side b: 4
// Enter side c: 3
// The perimeter of the triangle is 12

let a = prompt("Enter the value of a: ")
let b = prompt("Enter the value of b: ")
let c = prompt("Enter the value of c: ")

let p = a + b + c

alert("The perimeter of the triangle is " + p)

// 3.) Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

let l = prompt("Enter the value of Length: ")
let w = prompt("Enter the value of Width: ")

let aR = l * w
let pR = (2 * (l + w))

alert("The area of the rectangle is " + aR)
alert("The perimeter of the rectangle is " + pR)

// 4.) Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

let r = prompt("Enter the value of Radius: ")
let pi = 3.14

let aC = (pi * r * r)
let pC = (2 * pi * r)

alert("The area of the circle is " + aC)
alert("The perimeter of the circle is " + pC)

// 5.) Calculate the slope, x-intercept and y-intercept of y = 2x -2

// TODO
console.log("X-Intercept is " + 2/2)
console.log("Y-Intercept is " + ((2 * 0) - 2))
// console.log("Slope is " + )

// 6.) Slope is (m = y2-y1/x2-x1). Find the slope between point (2, 2) and point(6,10)

let x1 = 2
let x2 = 6
let y1 = 2
let y2 = 10

console.log("Slope is " + ((y2-y1)/(x2-x1)))

// 7.) Compare the slope of above two questions.

// TODO

// 8.) Calculate the value of y (y = x^2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

let x = 1
let y = (x^2 + 6 * x + 9)

console.log(y)

// 9.) Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
//
//     Enter hours: 40
//     Enter rate per hour: 28
//     Your weekly earning is 1120

let h = prompt("Enter hours: ")
let rH = prompt("Enter rate per hour: ")

alert("Your weekly earning is " + (h * rH))

// 10.) If the length of your name is greater than 7 say, your name is long else say your name is short.

let name = "Abhay"
if (name.length > 7){
    console.log("long")
} else {
    console.log("short")
}

// 11.) Compare your first name length and your last name length and you should get this output.
//
//     let firstName = 'Asabeneh'
//     let lastName = 'Yetayeh'
//     Your first name, Asabeneh is longer than your family name, Yetayeh

let firstName = 'Abhay'
let lastName = 'Anand'

console.log(firstName.length == lastName.length)
console.log("Your first name, " + firstName + " is equal to your last name, " + lastName)

// 12.) Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
//
//     let myAge = 250
//     let yourAge = 25
//     I am 225 years older than you.

let myAge = 25
let yourAge = 20

console.log("I am " + (myAge-yourAge) + " years older than you.")

// 13.) Using prompt get the year the user was born and if the user is 18 or above allow the user to drive
// if not tell the user to wait a certain amount of years.
//
//     Enter birth year: 1995
//     You are 25. You are old enough to drive
//
//     Enter birth year: 2005
//     You are 15. You will be allowed to drive after 3 years.

let year1 = prompt("Enter birth year: ")
let now1 = new Date()
let age = now1.getFullYear() - year1

if(age > 18) {
    alert("You are " + age + " . " + " You are old enough to drive")
} else {
    alert("You are " + age + " . " + " You will be allowed to drive after " + (18 - age) + " years.")
}

// 14.) Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
//
// Enter number of years you live: 100
// You lived 3153600000 seconds.

let year2 = prompt("Enter birth year: ")
const allSeconds = Date.now()
// TODO

// 15.) Create a human readable time format using the Date time object
//
// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm

const now = new Date()
const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)

console.log(`${year}-${month}-${date} ${hours}:${minutes}`)
console.log(`${date}-${month}-${year} ${hours}:${minutes}`)
console.log(`${date}/${month}/${year} ${hours}:${minutes}`)
