// Write a program which tells the number of days in a month.
//     Enter a month: January
//     January has 31 days.
//
//     Enter a month: JANUARY
//     January has 31 day
//
//     Enter a month: February
//     February has 28 days.
//
//     Enter a month: FEbruary
//     February has 28 days.

// let month = prompt("Enter a month: ")
let monthUserInput = 'JAnuARY'
let month = monthUserInput.toLowerCase()

switch (month) {
    case 'january':
        console.log(day + " has 31 day.")
        break
    case 'february':
        console.log(day + " has 28 day.")
        break
    case 'march':
        console.log(day + " has 31 day.")
        break
    case 'april':
        console.log(day + " has 30 day.")
        break
    case 'may':
        console.log(day + " has 31 day.")
        break
    case 'june':
        console.log(day + " has 31 day.")
        break
    case 'july':
        console.log(day + " has 31 day.")
        break
    case 'august':
        console.log(day + " has 31 day.")
        break
    case 'september':
        console.log(day + " has 30 day.")
        break
    case 'october':
        console.log(day + " has 31 day.")
        break
    case 'november':
        console.log(day + " has 30 day.")
        break
    case 'december':
        console.log(day + " has 31 day.")
        break
    default:
        console.log('It is not a month name.')
}
