// 1.) Declare an empty array;
// 2.) Declare an array with more than 5 number of elements

const countries1 = [
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

const webTechs1 = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

// 3.) Find the length of your array
// 4.) Get the first item, the middle item and the last item of the array

console.log(countries1.length)
console.log(countries1[0])
console.log(countries1[5])
let lastIndex = countries1.length - 1;
console.log(countries1[lastIndex])

// 5.) Declare an array called mixedDataTypes, put different data types in the array and find the length of the array.
// The array size should be greater than 5

const mixedDataTypes = [
    "Abhay",
    "Anand",
    19,
    52.5,
    true
]

console.log(mixedDataTypes)
console.log(mixedDataTypes.length)

// 6.) Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
// 7.) Print the array using console.log()
// 8.) Print the number of companies in the array
// 9.) Print the first company, middle and last company
// 10.) Print out each company

const itCompanies = [
    "Facebook",
    "Google",
    "Microsoft",
    "Apple",
    "IBM",
    "Oracle",
    "Amazon"
]

console.log(itCompanies)
console.log(itCompanies.length)
console.log(itCompanies[0])
console.log(itCompanies[3])
console.log(itCompanies[itCompanies.length - 1])
console.table(itCompanies.toString())

// 11.) Change each company name to uppercase one by one and print them out

let formatChange = itCompanies.toString()
let upperCase = formatChange.toUpperCase()
console.log(upperCase)

// 12.) Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

console.log(itCompanies.join(', ') + " are big IT companies.")

// 13.) Check if a certain company exists in the itCompanies array.
// If it exist return the company else return a company is not found

// let userInput = prompt("Enter company name: ")
let index = itCompanies.indexOf('Apple')

if(index != -1){
    console.log(index)
} else {
    console.log('This company does exist in the array')
}

// 14.) Filter out companies which have more than one 'o' without the filter method

// TODO


// 15.) Sort the array using sort() method
// 16.) Reverse the array using reverse() method

console.log(itCompanies.sort())
console.log(itCompanies.reverse())

// 17.) Slice out the first 3 companies from the array
// 18.) Slice out the last 3 companies from the array
// 19.) Slice out the middle IT company or companies from the array

console.log(itCompanies.slice(0, 3))
console.log(itCompanies.slice(itCompanies.length - 3, itCompanies.length))
console.log(itCompanies.slice(2, 5))

// 20.) Remove the first IT company from the array
// 21.) Remove the middle IT company or companies from the array
// 22.) Remove the last IT company from the array
// 23.) Remove all IT companies

console.log(itCompanies.shift())
console.log(itCompanies)

let indexApple = itCompanies.indexOf("Apple")
console.log(itCompanies.splice(indexApple, 1))
console.log(itCompanies)

console.log(itCompanies.pop())
console.log(itCompanies)

console.log(itCompanies.splice())




