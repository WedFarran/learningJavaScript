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
console.log(person,person.email)

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
]*/
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
console.log(add(20))

//oop
// constructor function
function Person(firstName , lastName , dob){
    this.firstName = firstName
    this.lastName = lastName
    this.dob = new Date(dob)*/
 /*   this.getBirthYear = function () {//not really good aproach
        return this.dob.getFullYear()
    }
    this.getFullName = function () {//not really good aproach
        return `this is ${this.firstName} ${this.lastName}`;
    }
}
// the better aproach 
Person.prototype.getBirthYear=function (){
    return this.dob.getFullYear()
}

Person.prototype.getFullName=function (){
    return `this is ${this.firstName} ${this.lastName}`
}

//class   syntactic sugar 
class Personn{
    constructor(firstName,lastName,dob){
        this.firstName = firstName
    this.lastName = lastName
    this.dob = new Date(dob)
    }
    getBirthYear(){return this.dob.getFullYear()}
    getFullName(){return `this is ${this.firstName} ${this.lastName}`}
} 
// instatiate object 
const person1 = new Person('wed', 'farran','9/5/1998') 
const person2 = new Person('both', 'sh','5/9/1997')

const person3= new Personn('wed', 'farran','9/5/1998') 
const person4 = new Personn('both', 'sh','5/9/1997')
console.log(person1.dob)
console.log(person1.getBirthYear())
console.log(person1.getFullName()) 

console.log(person3.getBirthYear()) 
console.log(person3.getFullName()) 

//Single element selector 
console.log(document.getElementById('my-form'))
console.log(document.querySelector('h1'))
//Multipiple element selector 
console.log(document.querySelectorAll('.item'))
console.log(document.getElementsByClassName('item'))
console.log(document.getElementsByName('li'))

const items = document.querySelectorAll('.item')
items.forEach((item)=>console.log(item))
const ul =document.querySelector('.items')
//console.log(ul.remove())
//ul.lastElementChild.remove()
ul.firstElementChild.textContent = 'Hello'
ul.children[1].innerText = 'wed'
ul.lastElementChild.innerHTML = '<h1> Hello</h1>'
const btn = document.querySelector('.btn')
//btn.style.background = 'red'

btn.addEventListener('click',(e)=>{
    e.preventDefault()
   // document.querySelector('#my-form').style.background = 'red'
    document.querySelector('body').classList.add('bg-dark')
    document.querySelector('.items').lastElementChild.innerHTML = '<h1> Hello</h1>'

})*/


const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const msg = document.querySelector('.msg')
const userList = document.querySelector('#users')

myForm.addEventListener('submit', onsubmit)

function onsubmit(e){
    e.prevenDefault()
     if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error')
        msg.innerHTML = 'pleads enter fields'
  setTimeout(()=>msg.remove(),3000)
     }else {
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`))
        userList.append(li)

        nameInput.value=''
        emailInput.value=''
     }
}