function add7toStringNumber(input) {
    const convertInput = Number.parseInt(input)
    return convertInput + 7
}

function checkFalsyValue(input) {
    if(input) {
        return "Invalid"
    }
    return "valid"
}

function print1To10SkiEvenNumbers() {
    for(let i = 0;i<11;i++) {
        if(i%2 ==0) {
            continue
        }
        console.log(i)
    }
}

function filterEvenNumbers(input) {
    return input.filter((e)=> e%2 == 0)
}

function mergeArray() {
    const array1 = [1, 2, 3]
    const array2 = [4, 5, 6]
    return  [...array1, ...array2]
}

function dayOfTheWeek(day_number) {
    switch(day_number) {
        case 1: return "Monday"
        case 2: return "Tuesday"
        case 3: return "Wednesday"
        case 4: return "Thursday"
        case 5: return "Friday"
        case 6: return "Saturday"
        case 7: return "Sunday"
        default: return "Please type known day number"
    }
}

function lengthArrayElements(input) {
    return input.map((e)=>e.length)
}

function dividedByThreuuAndFive(input) {
    if(input %3 ===0 && input % 5 === 0) {
        return "Divisible by both"
    }
    return "Not Divisible by both"
}
const result = (input) => {
    return input * input
}

function destructObjectAndReturnFormatedString(input) {
    const {name, age}= input
    return `${name} is ${age} years old`
}
console.log(destructObjectAndReturnFormatedString({name: 'John', age: 25}))


function sum (...numbers) {
   let sum = 0;
   numbers.forEach(n => sum +=n)
   return sum
}

function resolvePromiseAfter3Seconds() {
    return new Promise((resolve, reject)=> {
        setTimeout(()=>resolve("Success"), 3000)
    })
}

resolvePromiseAfter3Seconds().then(e=>console.log(e))


function largestNumberInArray(input) {
   let e = input[0]
   input.forEach(element => {
    if(element > e) {
        e = element
    }
   })
   return e
}
function getKeysFromObject(object) {
    return Object.keys(object)
}

function splitStringIntoArray(input) {
    return input.split(" ")
}



//PART 2
/*
1. For Of is a build in loop we can use it on none iterable object
foreach is used mainly for array and not for iterable object 
other differences are:
for of we can use promises
foreach we can not use promises inside

-----------------------------------------------------

2. Hoisting is seperating the declaration from the assignement. Javascript first charge the definition and after assign the value. Example

console.log(x)
var x = 10

here javascript first will search for the declaration (which is var x) so the value of x is undifined and after in ORDER  will search for the assignement/execution console.log(x) and after x = 10
so we will print(undifined)

With let and const we have TDZ so instead of having jhoisting we will have reference error
so x instead of having hoisting it will stay in the TDZ

-----------------------------------------------

3.The main differences is == check only the value and === check the value and the type

4.Try catch is a way to catch exceptions so we open the block of try and we put the code that we want to execute and we catch the exception in the catch block
in async operations since we do not have like then a catch method we need to use the try catch block to catch exceptions.

-------------------------------------------------------------

5. Type conversion and type coercion. So the first one is for casting types like:
let a = Number("10")
and  coercion is the javascript engine who will do it automatically like:
let a = "3" + 1
so the output of a will be 4
*/ 
