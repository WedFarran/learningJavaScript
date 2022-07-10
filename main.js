/*console.log('Hello World ')
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

// objects
const person ={firstName:'Wed',lastName:'Farran',age:23,hobbies:['music','movies','Kdrama'],addres:{city:'makkah'}}
console.log(person,person.hobbies[1],person.addres.city)

person.email = 'wedfarran6@gmail.com'
console.log(person,person.email)*/

const todos = [
    {
        id:1 ,
        text: 'clean bedroom',
        isCompleted:true
    },
    {
        id:2 ,
        text: 'CCNA course',
        isCompleted:false
    },
    {
        id:3 ,
        text: 'English lesson',
        isCompleted:false
    },
    {
        id:4 ,
        text: 'complete SRS documentation',
        isCompleted:false
    }
]
/*console.log(todos)
console.log(todos[1].text)

const todoJSON = JSON.stringify(todos)
console.log(todoJSON)

// loops
//for
for(let i=0; i<10;i++){
    console.log(`for loop number ${i}`)
}

//while 
let i =0
while(i<10){
    console.log(i)
    i++
}

for(let i=0; i<todos.length;i++){
    console.log(`for loop  ${todos[i].text}`)
}

for(todo of todos)
{
    console.log(todo.isCompleted)
}
//forEach , map , filter
//////////////// is for data manipulation ///////////////////////////
todos.forEach(function(todo){console.log(todo.id)})

const todoText =todos.map(function(todo){return todo.text})
console.log(todoText)

const todoCompleted =todos.filter(function(todo){return todo.isCompleted ===true}).map(function(todo){return todo.text})
console.log(todoCompleted)

// conditions 

//if 
const w =10 
const e= 23
// if i added a third equal that means it also will check the data type if it matches
// or not but incase of a double equals it only checks if the values are the same rather than the data types 
if(w===10||e>=23 ){
    console.log('x=10')
}else if(x>10){
    console.log('x>10')
}else {
    console.log('x!=10')
}


const q=10 
const color = q>10?'Red':'Blue'
console.log(color)

switch(color){
    case 'Red':
        console.log('color is red ')
        break;
        case 'Blue':
            console.log('color is blue')
            break;
            default:
                console.log('none')
                break
}
//functions 
function addNum(num1=1,num2=1){
return num1+num2
}

console.log(addNum(5,15))
console.log(addNum())

const addNumber = (num1=3,num2=4)=>num1*num2
console.log(addNumber(5,8))

const add = num1 =>num1+5
console.log(add(20))*/

//oop


