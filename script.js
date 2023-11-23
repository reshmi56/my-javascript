let a = 10;//variable initialisation
let b = 20;
console.log(a + b);
//variables each takes 8 bytes
let amount = 1000;//stored as binary 1010
console.log("Your bill amount is Rs:" + amount);
/*dynamically typed language-can assign any type value*/

const pi = 3.14;
console.log(pi);

//**computes power
a = 5;
++a; //pre increment;a++ post increment
console.log(a);

g = 3.4e5;
console.log(g);
//shorthand assignment a+=2

console.log(typeof (g));
//to check type and value 
console.log(g === 5);
/* &&-both are 
||-either one is true*/

a = 6;
b = 7;
console.log(a & b);//bitwise and
console.log(a | b);//bitwise or
console.log(a ^ b);//bitwise xor
console.log(a << 1);//left shift

/*user input-default as a string-so typecast to Number(a)
let name =prompt("Enter name");
console.log("Hello",name);*/

/*h1 id="message" --DOM
let message =document.getElementById("message")
message.innerHTML="welcome"*/

console.log(Math.round(5.1))//rounds up
console.log(Math.ceil(5.1))//rounds up
console.log(Math.floor(5.1))//rounds down
console.log(Math.random(5))//btw 0 and 1

let str1 = "Strive for Excellence";
let str2 = "Value";

console.log(str1.concat(str2))//invoking a method
/*slice(start,end)
substring(start,end)
substr(start,length)
trim(removes extra spaces at start and end)
padEnd(lenght,'')
incudes() searches and returns boolean*/
console.log(str2.padEnd(10, '*'));
console.log(str1[1]);//gives index--str1.charAt(i)
console.log(str1.charCodeAt(1));//gives unicode values
console.log(str1.indexOf('e'));
console.log(str1.search("e"));//searches specific character

//Template literals
let fName = "xxx";
let lName = "yyy";
let city = "fff";

console.log(`${fName} ${lName} lives in ${city}`);//string interpolation
//multiline string
let msg = `happy
birthday`
console.log(msg);
//single and double quotes
let s1 = `cat's name is "toto"`;
console.log(s1);

//array last element
let arr = ["a", "b", "c", 1, 3];//mix of int and string
console.log(arr[arr.length - 1]);

//2d array
let matrix = [[1, 2, 3], [3, 4, 5], [6, 7, 8]];
console.log(matrix[0][2]);

/*array methods
push-add element to end and returns new length
pop-removes "" and returns that value
shift-removes element from start and returns removed value
unshift-opp of shift*/

//splice(index,no of elements to remove,val to insert)-removes specified
console.log(arr.splice(2, 2));
//slice(start index,end index)-returns excluding last index

//join-converts array to string
let str = arr.join()
console.log(str);
//split-str to array
let str4 = "a,b,c,d,e";
let arr4 = str4.split(',')
console.log(arr4);

//spread operator
let arr5 = [1, 2, 3];
let arr6 = [6, 7, 8];
let arr7 = [...arr5, ...arr6];
console.log(arr7);

//ternary operator
let age = 18;
let vote = (age >= 18) ? 'eligible' : 'not eligible'
console.log(vote);

//objects
let student = {
  name: 'name',
  price: 'price',
  buy: function() {
    console.log('item bought')
  }
  /*dimensions: {
    length: 7,
    breadth: 8,
  }*/
}
console.log(student);
console.log(student.name);
console.log(student.buy());//method invoke
//adding new property
student.age = 18;
console.log(student);
//another way--let student=new Object();codes

//loops
//for loop
for(let i=0;i<4;i++){
  console.log(i);
}
//while loop
let h=4;
while(h>0){
  console.log(h);
  h--;
}
do{
  console.log(h);
  h--;
}while(h>=1)
//break--stops loop
//continue--skips current iteration
for(let i=0;i<4;i++){
  if(i%3==0)
    continue
  console.log(i);
}
//for of loop
let arr8=["1","2","3"]
for(let num of arr8){
  console.log(num);
}
/*for in --to access vals in obj
console.l-og(key,obj[key])*/
//functions--performs a task by calling it i/p as parameters
function isPositive(a){//parameters
  return a>0;
}
console.log(isPositive(-4));//argument

//hoisting
console.log(product(4,3));
function product(a,b){
  return a*b;
}

//recursion---func calls itself
function factorial(n){
  if(n==1)
    return 1
  return n*factorial(n-1)
}
console.log(factorial(5));

//hoisting not occurs in func expression
let v=[2,3,4,5];
let sum=function(v){
  let sum=0;
  for(let val of v){
    sum+=val;
  }
  return sum
}
//arrow functions
let area=r=>3.14*r*r;
console.log(area(5));
//rest para--collects all args
let add=(...args)=>{
  let result=0;
  for(let val of args)
    result*=val;
  return result
}
console.log(add(2,3,4));
//generators--generates value one by one
function* indexGen(){
  let index=1
  while(true){
    yield index++
  }
}
const gen=indexGen();
console.log(gen.next().value)

//callback--func passed as argument
function greeting(name){
  console.log("hi",name)
}
function greet(callback){
  callback('Ram')
}
greet(greeting)

//forEach(val,index,arr)--method (invoked with obj .)
arr=['deepa','suresh','ram']
arr.forEach(print)
function print(val){
  console.log(val)
}
arr.forEach(val=>console.log(val))

//creating dropdown
arr=['ECE','IT','CSE','EEE']
arr.forEach(val=>{
  const opt=document.createElement('option')
  opt.textContent=val//to show text 
  opt.value=val
  document.getElementById('branch').appendChild(opt)
})

/*map-executes callback for each array element/returnsnew arr
 also builts new arr foreach doesnot*/
  priceUSD=[20,35,40]
 let priceINR=priceUSD.map(x=>x*2)
 console.log(priceINR)

 //map in func
 let priceUSD=priceINR.map(convert)
 function convert(val){
  return val*2
 }
 console.log(priceINR)

 const input=[//arr of obj
             {name :'xxx',age:5},
             {name :'yy',age:8},
             {name :'zz',age:9},
]
const ages=input.map(x=>x.age)
console.log(ages)

/*filter--returns new arr by checking each value of 
          original arr using callbackvfor condi*/
cost=[3,5,10,13]
cost1=cost.filter(x=>x<100)
console.log(cost1)
/*reduce-executes reducer callback and returns result */
let cost=[3,4,5,6]
let cost2=cost.reduce((total,ele)=>total+ele)
console.log(cost2)

arr=[
  ['a','b','s'],
  ['g','k','u']
]//result counts each element
let count=arr.flat().reduce(
  (accumulator,currVal)=>{
    if(accumulator[currVal])
        accumulator[currVal]++
      else
         accumulator[currVal]=1
        return accumulator
  }
,{});
console.log(count)

//returning functions-higher order funcs
//lexical scoping-inner scope can access outer one
function outer(){
      let outerVar='Bread'
      function inner(){
        let innerVar='Butter'
        console.log(innerVar)
        console.log(outerVar)

      }
      inner()
}
outer()
//closure-combo of func bundled together with refernces to surrounding state environment
function makeAdder(x){
  return function(y){
    return x+y
  }
}
let add5=makeAdder(5)
console.log(add5(10))

/*primitive data type-stack
object-heap memory */

/*set object-collection of vals with unique 
strict for primitive type*/
let arre=[1,2,3,5,7,3,2,8,8]
let mySet=new Set[arre]
console.log(arre)
console.log(mySet)//returns unique
//operations
let mySet3=new Set()
mySet3.add(4)
mySet3.add('pqr')

//map-key value pairs with key unique
 map1=new Map();
  map1.set('a',1)
  map2.set('b',5)

for (let i of map1){
  console.log(i)
}
for(let[k,v]of map1){
  console.log(k)//returns key
}
//OOP
/*class-template for properties methods */
class User{
  static users=0;//common for class
  constructor(name,age){
    //instance vars-allocated to each and everyone
         this.name=name;
         this.age=age;
  }
  login(){//non static-invoked with objects
    console.log('Hi',this.name)
    console.log('You are logged')
  }
  logout(){
    console.log('You are logged out')
  }
  static displayTotal(){//invoked with class
    console.log('total users')
  }
}
let user=new user('Vidya',21)//obj

//primitive data are stored in wrapper class

//Inheritance-extends keyword,super to point base class constructor

//get and set
class Temperature{
  constructor(temp){
    this._temp=temp
  }
  get temp(){
    return `${this._temp} celsius`
  }
  set temp(temp){
    if(temp>100)
       temp=100
      this._temp=temp
  }
}
/*type-modules 
export default classname
import c,{methods} from src file*/

//Asynchronous-simultaneous execution
console.group('step 1')
console.group('step 2')
console.group('step 3')

setTimeout(()=>console.log('step1'),4000)
setTimeout(()=>console.log('step2'),2000)
setTimeout(()=>console.log('step3'),3000)

/*promises--object,to handle async ops easily,eventual completion or failures
Promise.all--resolves all promises
pending,resolved,rejected*/
const tatkal=new Promise((resolve,reject)=>{
  let booking=true
  if(booking)
     resolve()
  else
     reject()
})
tatkal.then(success)
.catch(failure)
function success(){
  console.log("thanks")
}
function failure(){
  console.log("Omg so sad")
}
//error handling
try{
  num=prompt("Enter number")
  if(isNaN(num))
      throw "enter valid number"
    console.log(num**2)
}
catch(error){
  console.log(error)
}
finally{
  console.log("bye")
}
/*async-always returns promise
await-used inside async,waits till promise is fulfilled
mostly inside try catch*/
async function status(){
  res=await tatkal
  console.log(res)
}
//JSON-javascript object notation
let json=[
  {
    "Stock":"TCS",
    "Price":3500
  },
  {
    "Stock":"HCL",
    "Price":4000
  }
]
let parsed=JSON.parse(json)
console.log(parsed[1].price)//access the specified
console.log(JSON.stringify(parsed))//convert to string
/*API-interaction b/w two programs
first convert to json-.json*/




























































































































































































































































