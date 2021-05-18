// split(): The split method splits a string at a specified place.

let string = '30 Days Of JavaScipt'
console.log(string.split())     // ["30 Days Of JavaScript"]
console.log(string.split(' '))  // ["30", "Days", "Of", "JavaScript"]

let firstName = 'Abhay'
console.log(firstName.split())  // ["Abhay"]
console.log(firstName.split(''))  // ["A", "b", "h", "a", "y"]

let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'
console.log(countries.split(',')) // ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(', '))   //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]
