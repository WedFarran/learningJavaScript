console.log('Hello World ')
// const ,let 
const name = 'wed';
const age = 23;
const rating =5.0;
const isCool = true;
const x = null; //cause error
const y = undefined;
let z;
console.log(typeof isCool)

//concatination 
console.log('my name is '+name+' and i am '+ age) // the old way 
const hello = `my name is ${name} and im ${age} years old` //back tecks حرف الذال 
console.log(hello)

//functions 
const s = 'Hello World'

console.log(s.toUpperCase().substring(0,5))
// split is a method to break sentencse to an array 
console.log(s.split(' '))

// arrays 
const numbers = new Array(1,2,3,4,5,6) // the old way 
console.log(numbers)

const fruits = ['apples','oranges','pears',23,true]
console.log(fruits)
fruits[5]='wed'
console.log(fruits)
fruits.push('mangooo')
console.log(fruits)
fruits.unshift('strawb')
console.log(fruits)
fruits.pop()
console.log(fruits)

