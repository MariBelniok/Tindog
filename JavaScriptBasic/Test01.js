//Ask the name
let name = prompt("What's your name?")
//slice first letter
let firstLetter = name.slice(0,1)
//make the first letter uppercase
let firstUp = firstLetter.toUpperCase()
//slice the rest
let restLetters = name.slice(1, name.length)
//make the rest lowercase
let restLower = restLetters.toLowerCase()
//pop up the edited name
alert(`Hello, ${firstUp}${restLower}`)
