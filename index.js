console.log('hello world');
console.error('this is an error');
console.warn('this is a warning');
let score; 
 console.log(score);
const ascore=20;
console.log(ascore);
const name = "prakash";
const age = 30;
const rating = 4.5;
const iscool =true;
const x= null;
const y=undefined;
let z;
console.log(typeof age);
console.log(typeof name);
console.log(typeof rating);
console.log(typeof iscool);
console.log(typeof x)
console.log(typeof y)
console.log(typeof z)
console.log('hi this is' + name + 'my age is'+ age )
console.log(`my name is ${name} and my age is ${age}`)
const hello=`my name is ${name} and my age is ${age}`
console.log(hello)
const a="hello, world"
console.log(a.length)
const b="hello world"
const c="hello world"
const d="hello world"
console.log(b.toUpperCase())
console.log(c.toLowerCase())
console.log(c.substring(0,5).toUpperCase())
console.log(a.split(', '))
const fruits=['apple','grapes','orange']
fruits[3]='pears'
console.log(fruits)
fruits.push("mango")
fruits.unshift('strawberries')
fruits.pop()
console.log(Array.isArray(fruits))
console.log(fruits.indexOf('orange'))
const person = {
firstname:'ram',
lastname:'hasya',
agee:40,
hobbies:['music','movies','sports'],
address:{
  street:'vizag',
  city:'vizag',
  state:'ap',
}
}
console.log(person)
console.log(person.firstname,person.lastname)
console.log(person.hobbies[1])
console.log(person.address.city)
const {firstname,lastname,agee,address:{city}} = person;
console.log(city)
person.email ="ram@gmail.com"
console.log(person)
const todos=[
  {
    id:1,
    text:'take out trash',
    iscompleted: false,
  },
  {
    id:2,
    text:'meat the boss',
    iscompleted: true,
  },
  {
    id:3,
    text:'take out trash',
    iscompleted: true,
  }
]

console.log(todos)
console.log(todos[1].id)
const todoJSON =JSON.stringify(todos)
console.log(todoJSON)
//for loop
for(let i=0; i<=10; i++){
  console.log(`for loop number ${i}`)
}
//while loop
let i=0;
while(i<=10){
console.log(`while loop nummbers ${i}`);
i++;
}
for(let i=0;i<todos.length;i++){
  console.log(todos[i].text)
}
for(let todo of todos){
  console.log(todo)
}
//forEach
todos.forEach(function(a){
  console.log(a.id)
});
//map
const hasya = todos.map(function(hasya){
  return hasya.iscompleted;
})
console.log(hasya)
//filter
const todoiscompleted = todos.filter(function(todo){
  return todo.iscompleted===true;
}).map(function(todo){
  return todo.text
})
console.log(todoiscompleted)
// if ,ifelse,else
const jo = 5
if(jo === 10){
  console.log('jo is equal to 10')
}else if (jo>10){
  console.log('jo is grater then 10')
}else{
  console.log('jo is less then 10')
}


const x1 =11
const x2 =22
if(x1>10 &&x2>20){
  console.log('x1 is grater then 10 "or" x2 is grater then 20')
}
const y1 =22;
const y2 =3;
if(y1<10||y2<20){
  console.log('y1 is less then 10 "and"y2 is grater then 20')
}
 
const z1 =11;
const color =z1<10 ? 'blue':"red";
switch(color){
  case 'red':
    console.log('this is red');
    break;
    case 'blue':
      console.log('this is blue');
      break;
      default:
        console.log('this is not red and blue');
        break;
}


function addnum(num1,num2){
  console.log(num1+num2);
}
addnum(18591290824,781269087);

const addnumbers=(num3,num4)=>console.log(num3+num4);
addnumbers(645645,456546);

const love = num5 => num5 +6;
console.log(love(2))

const person1 =new Person('ram','prakash','4-11-2000');
const person2 =new Person('pentakota','bangaruthalli','6-30-1974')

function Person(firstname,lastname,dob){
this.firstname =firstname;
this.lastname =lastname;
this.dob =new Date(dob);
/*this.getfullname =function(){
  return`${this.firstname}${this.lastname}`
}
this.getfullyear =function(){
  return this.dob.getFullYear();
}*/
}

Person.prototype.getfullyear=function(){
  return this.dob.getFullYear()
}
Person.prototype.getfullname=function(){
  return `${this.firstname}${this.lastname}`
}
console.log(person1);
console.log(person2);
console.log(person1.getfullname())
console.log(person2.getfullname())
console.log(person1.getfullyear());
console.log(person2.getfullyear())