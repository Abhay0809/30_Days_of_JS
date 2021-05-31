// 1.) Create a separate countries.js file and store the countries array in to this file,
//     create a separate file web_techs.js and store the webTechs array in to this file.
//     Access both file in main.js file

// import { webTechs } from "./web_techs";
// import { countries } from "./countries";
//
// console.log(webTechs)
// console.log(countries)

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

// 2.) First remove all the punctuations and change the string to array and count the number of words in the array
//
//     let text =
//         'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
//         console.log(words)
//         console.log(words.length)
//         ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
//
//         13

let text =
    'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

const words = text.split((" "))
console.log(words)
console.log(words.length)

// 3.) In the following shopping cart add, remove, edit items
//
//     const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//
//     add 'Meat' in the beginning of your shopping cart if it has not been already added
//     add Sugar at the end of you shopping cart if it has not been already added
//     remove 'Honey' if you are allergic to honey
//     modify Tea to 'Green Tea'

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

console.log(shoppingCart.unshift("Meat"))
console.log(shoppingCart)

let index = shoppingCart.indexOf('Sugar')

if(index != -1){
    console.log("Sugar is already present at index position" + index)
} else {
    console.log(shoppingCart.push('Sugar'))
    console.log(shoppingCart)
}

let index1 = shoppingCart.indexOf('Honey')
console.log(shoppingCart.splice(index1, 1))
console.log(shoppingCart)

// 4.) In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'.
//     If it does not exist add to the countries list.

let index2 = countries.indexOf('Ethiopia')

if( index2 != -1 ) {
    console.log('ETHIOPIA')
} else {
    console.log(countries.push("Ethiopia"))
}

// 5.) In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'.
//     If it does not exist add Sass to the array and print the array.

let index3 = countries.indexOf('Sass')

if( index3 != -1 ) {
    console.log('Sass is a CSS preprocess')
} else {
    console.log(countries.push("Sass"))
}

// 6.) Concatenate the following two variables and store it in a fullStack variable.
//
//     const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
//     const backEnd = ['Node','Express', 'MongoDB']
//
//     console.log(fullStack)
//     ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

