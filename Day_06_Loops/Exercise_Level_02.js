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

// 1.) Develop a small script which generate any number of characters random id:
//
//     fe3jo1gl124g
//     xkqci4utda1lmbelpkm03rba

// let n = prompt("Enter the length of Character ID: ")
// let n = 10
// const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
//
// let result = ' '
// for (let e = 0; e <= n; e++){
//     result += characters.charAt(Math.floor(Math.random() * characters.length))
// }
// console.log(result)

// 2.) Write a script which generates a random hexadecimal number.
//
// '#ee33df'

// const characters ='ABCDEF0123456789'
//
// let color = ' '
// for (let e = 0; e <= 5; e++){
//     color += characters.charAt(Math.floor(Math.random() * characters.length))
// }
//
// console.log(`#${color}`)

// 3.) Write a script which generates a random rgb color number.
//
// rgb(240,180,80)

// let red = Math.floor(Math.random() * 250) + 5
// let green = Math.floor(Math.random() * 250) + 5
// let blue = Math.floor(Math.random() * 250) + 5
//
// console.log(`rgb(${red},${green},${blue})`)

// 4.) Using the above countries array, create the following new array.
//
//     ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

// const countryArr = []
// const addArr = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
//
// countryArr.push(addArr)
// console.log(countryArr)

// 5.) Using the above countries array, create an array for countries length'.
//
//     [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]

// const countryArr = []
// const addArr = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
//
// // countryArr.push(addArr)
// for (let f = 0; f <= addArr.length - 1; f++){
//     countryArr.push(addArr[f].length)
// }
// console.log(countryArr)

// 6.) Use the countries array to create the following array of arrays:
//
//     [
//         ['Albania', 'ALB', 7],
//         ['Bolivia', 'BOL', 7],
//         ['Canada', 'CAN', 6],
//         ['Denmark', 'DEN', 7],
//         ['Ethiopia', 'ETH', 8],
//         ['Finland', 'FIN', 7],
//         ['Germany', 'GER', 7],
//         ['Hungary', 'HUN', 7],
//         ['Ireland', 'IRE', 7],
//         ['Japan', 'JAP', 5],
//         ['Kenya', 'KEN', 5]
//     ]

// const countryArr = []
// const addArr = ["Albania", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya"]
//
//
// for (const country of addArr){
//     let arr = []
//         arr.push(country),
//         arr.push(country.slice(0,3).toUpperCase()),
//         arr.push(country.length)
//     countryArr.push(arr)
// }
//
// console.log(countryArr)


// 7.) In above countries array, check if there is a country or countries containing the word 'land'.
// If there are countries containing 'land', print it as array. If there is no country containing the word 'land',
// print 'All these countries are without land'.
//
//     ['Finland', 'Iceland']

// const countryArr = []
// const addArr = ["Albania", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya"]
//
// for (const country of addArr){
//         countryArr.push(country)
// }
//
// // console.log(countryArr)
//
// let check1 = countryArr.filter(e => e.toString().endsWith('land'));
// console.log(check1)

// 8.) In above countries array, check if there is a country or countries end with a substring 'ia'.
//     If there are countries end with, print it as array.
//     If there is no country containing the word 'ai', print 'These are countries ends without ia'.

// let check = countryArr.filter(e =>  e.toString().endsWith('ia'))
//
// if (check) {
//     console.log(check)
// } else {
//     console.log("These are countries ends without ia")
// }

// 9.) Using the above countries array, find the country containing the biggest number of characters.
//
//     Ethiopia

// const countryArr = []
// const addArr = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

// countryArr.push(addArr)
// for (let f = 0; f <= addArr.length - 1; f++){
//     countryArr.push(addArr[f].length)
// }
// for (const country of addArr){
//         countryArr.push(country),
//         countryArr.push(country.length)
// }

// console.log(countryArr.sort())
// console.log(countryArr[countryArr.length - 1])

// TODO

// 10.) Using the above countries array, find the country containing only 5 characters.
//
//     ['Japan', 'Kenya']

// const countryArr = []
// const addArr = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
//
// // countryArr.push(addArr)
// for (let f = 0; f <= addArr.length - 1; f++){
//     if (addArr.length == 5){
//         countryArr.push(addArr[f])
//     }
// }
//
// console.log(countryArr)

// 11.) Find the longest word in the webTechs array

// let longestWord = ""
// for(let i = 0; i < webTechs.length; i++){
//     if(webTechs[i].length > longestWord.length){
//         longestWord = webTechs[i];
//     }
// }
//
// console.log(longestWord)

// 12.) Use the webTechs array to create the following array of arrays:

    // [
    //     ["HTML", 4],
    //     ["CSS", 3],
    //     ["JavaScript", 10],
    //     ["React", 5],
    //     ["Redux", 5],
    //     ["Node", 4],
    //     ["MongoDB", 7]
    // ]

// const Tech = []
//
// for (const country of webTechs){
//     let arr = []
//         arr.push(country),
//         arr.push(country.length)
//     Tech.push(arr)
// }
//
// console.log(Tech)

// 13.) An application created using MongoDB, Express, React and Node is called a MERN stack app.
//     Create the acronym MERN by using the array mernStack

for (const lang of mernStack){
    console.log(lang[0])
}




























