// 1.) Write a code which can give grades to students according to theirs scores:
//     90-100, A
//     70-89, B
//     60-69, C
//     50-59, D
//     0-49, F

let marks = 1
// let marks = prompt("Enter the marks out of 100: ")

if (marks >= 90) {
    console.log('A')
} else if (marks >= 70 && marks <= 89) {
    console.log('B')
} else if (marks >= 60 && marks <= 69) {
    console.log('C')
} else if (marks >= 50 && marks <= 59) {
    console.log('E')
} else {
    console.log('F')
}

// 2.) Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     September, October or November, the season is Autumn.
//     December, January or February, the season is Winter.
//     March, April or May, the season is Spring
//     June, July or August, the season is Summer

// let season = prompt("Enter the Month name: ")
let season = 'Unknown'

if (season === 'September' || season === 'October' || season === 'November') {
    console.log("The season is Autumn")
} else if (season === 'December' || season === 'January' || season === 'February') {
    console.log("The season is Winter")
} else if (season === 'March' || season === 'April' || season === 'May') {
    console.log("The season is Spring")
} else if (season === 'June' || season === 'July' || season === 'August') {
    console.log("The season is Summer")
} else {
    console.log("Enter a valid Month name!")
}

// 3.) Check if a day is weekend day or a working day. Your script will take day as an input.
//
//     What is the day  today? Saturday
//     Saturday is a weekend.
//
//     What is the day today? saturDaY
//     Saturday is a weekend.
//
//     What is the day today? Friday
//     Friday is a working day.
//
//     What is the day today? FrIDAy
//     Friday is a working day.

// let dayUserInput = prompt('What day is today ?')
let dayUserInput = 'Sunday'
let day = dayUserInput.toLowerCase()

switch (day) {
    case 'monday':
        console.log(day + " is a working day.")
        break
    case 'tuesday':
        console.log(day + " is a working day.")
        break
    case 'wednesday':
        console.log(day + " is a working day.")
        break
    case 'thursday':
        console.log(day + " is a working day.")
        break
    case 'friday':
        console.log(day + " is a working day.")
        break
    case 'saturday':
        console.log(day + " is a weekend.")
        break
    case 'sunday':
        console.log(day + " is a weekend.")
        break
    default:
        console.log('It is not a week day.')
}




