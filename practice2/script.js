"use strict";
// console.log("Hello World");

// var firstname = "Arham";
// console.log(firstname);

// var firstName = "Hasan";
// console.log(firstname);

// var boy = "arham"; 
// var boy = "haasa";
// console.log(boy);

// const pi = 3.14;
// // pi = 3.15;
// console.log(pi*2*3);

// let name = "Arham";
// console.log(name.length);


// let fname  = "     Arham      ";
// console.log(fname.length);
// fname = fname.trim();
// console.log(fname.length);

// console.log(fname.toUpperCase());
// console.log(fname.toLowerCase());

// console.log(fname.slice(2));

// let arham = 16;
// console.log( typeof(+(arham+" ")));

// string concatenation
// let fname = +"17";
// let lname = +"10";

// console.log(fname+lname);

// template string

// let age = 18;
// let fname = "Arham";
// // let about_me = "My name is " + fname + " and my age is "+age;
// let about_me = `My name is ${fname} and my age is ${age}`;
// console.log(about_me);  

// undefined
// let fname;
// console.log(fname);
// fname = "arham";
// console.log(fname);

// null 
// let fname = null;
// console.log(fname);
// fname = "arham";
// console.log(fname);
// console.log(typeof null);

// BigInt /n
// let num = BigInt(123);
// let num2 = 234n; 
// console.log(num+num2);

// let age = 18;
// let drink = age>18 ? "hy": "bye" ;
// console.log(drink);

// let name = prompt("Enter a name");
// console.log(name);

// let num = 10;
let total = 0;

// let i = 1;
// while(i<=num){
//     total+=i;
//     i++;
// }
// console.log(total);


// for(let i=1; i<=10; i++){
//     total+=i;
// }
// console.log(total);

// let fruits = ["apple", "banana","mango"];
// console.log(fruits);
// fruits[1] = "kela";
// console.log(typeof fruits);
// console.log(Array.isArray(fruits));

// let array1  = ["item1","item2"];
// let array = ["item3","item4"];
// let array2 =  array1.slice(0);
// let array2 = [].concat(array1);
// // let array2 = [...array1];
// console.log(array1);
// console.log(array2);
// let array3 = array1.concat(array);

// for(let item in array3){
//     console.log(array3[item]);
// }

// let[var1,,var2] = array3;
// console.log(var1,var2);

// const person = {
//     name: "Arham", 
//     age: 20, 
//     hobbies: ["cricket","football"],
// };
// person.gender = "Male";
// // console.log(person["gender"]);

// for(let key in person){
//     console.log(`${key}: ${person[key]}`);
// }

// console.log(Object.keys(person));
// console.log(Array.isArray(Object.keys(person)));

// for(let ite of Object.keys(person)){
//     console.log(ite);
// }

// const key1 = "keyyy1";
// const key2 = "keyyy2";

// const value1 = "valueee1";
// const value2 = "valueee2";

// const obj = {
//     [key1] : value1,
//     [key2] : value2,
// }

// const obj = {};
// obj[key1] = value1;
// obj[key2] = value2;
// console.log(obj);

// let var1 = [1,2,3];
// let var2 = [4,5,6];

// let newvar = [..."aaaabbbaaa"];
// console.log(newvar);

// const obj1 = {
//     key1 : "value1",
//     key2 : "value2", 
// }
// const obj2= {
//     key3 : "value3",
//     key4 : "value4",
// }
// const newobj = {..."abc"};
// console.log(newobj)

// let arr = [
//     {firstname: "arham", lastname:"hasan"},
//     {firstname: "akhzer", lastname: "hasan"}
// ]
// for (let att of arr){
//     console.log(att);
// }
// let [{firstname},{lastname}] = arr;
// console.log(firstname);
// console.log(lastname);


// function avg(num1,num2){
//     console.log( (num1+num2)/2);
// }
// let n1 = +prompt("Enter first number");
// let n2 = +prompt("Enter second number");
// avg(n1,n2)

// let average = (num1,num2) => {
//     console.log( (num1+num2)/2);
// }
// let n1 = +prompt("Enter first number");
// let n2 = +prompt("Enter second number");
// average(n1,n2)


// const myFunc = function(a,b=0){
//     // if(b===undefined){
//     //     b = 0;
//     // }
//     console.log(a+b);
// }
// myFunc(4,9);

// const my = function(...a){
//     // console.log("a is",a);
//     // console.log("b is",b);
//     // console.log("c is",c);
//     let ans = 0;
//     for(let sum of a){
//         ans+=sum;
//     }
//     console.log(ans);
// }
// my(3,4,5,6,7);

// const person = {
//     firstName: "Arham",
//     gender: "male",
// }

// function print({firstName,gender,age}){
//     console.log(firstName);
//     console.log(gender);
//     console.log(age);
// }
// print(person);

// function myfunc(callback){
//     callback();

// }
// function myfunc2(){
//     console.log("hello2");
// }
// const ans = myfunc(myfunc2);


// function myfun(){
//     function myfunc2(){
//         return "heelo";
//     }
//     return myfunc2;
// }

// let ans = myfun();
// console.log(ans());

// const data = [
//     {firstName: "arham",age: 19},
//     {firstName: "hasan",age: 29},
//     {firstName: "akhzer",age: 29},
//     {firstName: "hassan",age: 29},
// ];


// data.forEach(function(obj){
//     console.log(obj.firstName);
// })

// const arr= [1,2,3,4];

// const obj = [
//     {first:"Arham",age:19},
//     {first:"Akhzer",age:19},
//     {first:"Hasan",age:19},
    
// ]

// const ans = obj.map((obj)=>{
//     return (obj.first)
// })
// console.log(ans);


// const arr = [1,2,3,4,5,6];

// function checkEven(num){
//     return (num%2===0);
// }

// const ans = arr.filter(checkEven);
// console.log(ans);

// const arr = [
//     {product: "Banana",price:120},
//     {product:"Apple",price:200},
//     {product:"Grapes",price: 300},
// ]
// const sum = arr.reduce((total,curr)=>{
//     return total+curr.price;
// },0)
// console.log(sum);

// const arr = [500,41,3000,1,20];
// const arr= [
//     {id :123,price:2000},
//     {id :124,price:3000},
//     {id :125,price:1000},
//     {id :126,price:500},
    
// ]
// arr.sort((a,b)=>a.price-b.price)
// console.log(arr);

// const arr = [
//     {userId : 1, name:"arham"},
//     {userId : 2, name:"arhm"},
//     {userId : 3, name:"aram"},
//     {userId : 4, name:"aham"},
// ]
// const get = arr.find((det)=>det.userId ===3);
// console.log(get);

// const arr = [2,4,6,8,10];
// const arr = [
//     {product:"Mobile",price:22000},
//     {product:"Tablet",price:29000},
//     {product:"Watch",price:29990},
// ]

// const ans = arr.every((num)=>num.price<30000);
// console.log(ans);

// const arr = [2,3,5,7,9];
// const arr = [
//         {product:"Mobile",price:22000},
//         {product:"Tablet",price:29000},
//         {product:"Watch",price:29990},
//     ]

// const ans = arr.some((num)=>num.price>29000);
// console.log(ans);

// const myArray = new Array(10).fill(1);
// const myArray = [1,2,3,4,5,6,7,8,9];
// myArray.fill(-1,3,7);
// console.log(myArray)


// const items = ["item1","item2","item3"];
// const ans = items.splice(1,2,"items ins1","item ins 2");
// console.log(items);
// console.log(ans);


// const set = new Set();
// set.add(1);
// set.add(2);
// set.add("Arham");
// set.add(["item1","item2"]);
// set.add(["item1","item2"]);
// if(set.has(4)){
//     console.log("true");
// }else{
//     console.log("false");
// }

// console.log(set);
// let length = 0;
// for(let num of set ){
//     length++;
// }
// console.log(length);


// const arr = new Map();
// arr.set('Name','Arham');
// arr.set('Age',19);
// arr.set(1,'one');
// arr.set([1,2],"numberArray");
// arr.set({Name:"arham"}, "contact info")

// for(let key of arr){
//     console.log(key);
// }
// for(let [key,value] of arr){
//     console.log(key,value);
// }
// console.log(arr.keys());

// const arr = new Map([["Name","Arham"],['age',19]]);
// console.log(arr);

// const obj = {
//     Name:"Arham",
//     Age: 19,
// }

// const arr = new Map();
// arr.set(obj,{gender:"male"});

// console.log(arr.get(obj).gender);

// const obj1 ={
//     id:1,
//     Name: "Arham",
// }

// let obj2 = Object.assign({},obj1);
// obj1.gender = "male";
// console.log(obj1,obj2);


// function print(){
//     console.log(`my name is ${this.firstname} and my age is ${this.age}`);
// }

// const obj1 = {
//     firstname : "Arham",
//     age: 19,
//     about: print,
// }
// const obj2 = {
//     firstname : "Akhzer",
//     age: 17,
//     about:print,
// }

// obj1.about();


// "use strict"
// console.log(this);
// function arr(){
//     console.log("Hello");
// }
// arr.call();

// "use strict"
// const obj1 = {
//     firstName: "arham",
//     age: 20,
//     about: function(){
//         console.log(this.firstName,this.age);
//     }
// }

// const obj2 = {
//     firstName: "hasan",
//     age: 19,
// }

// const ans = obj1.about.bind(obj1,"cricket","pilao");
// ans();

// const arr = obj1.about.bind(obj1);
// arr();


// const userMerhods = {
//     about: function(){
//         return(`my name is ${this.firstName} and my age is ${this.age}`);
//     },
//     is18 : function is18(){
//         return this.age >=18;
//     }
// }

// const createObj = function(firstName, lastName, email,age){
//     const user = Object.create(createObj.prototype);
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.sing = function(){
//         return ("tnana");
//     }
//     return user;
// }
// createObj.prototype.about = function(){
//     return(`my name is ${this.firstName} and my age is ${this.age}`);
// };
// createObj.prototype. is18 = function is18(){
//     return this.age >=18;
// }

// const ans = createObj("arham","hasan","arhamhasan70@gmail.com",20);
// console.log(ans.is18());
 
// function createUser(firtName,age){
//     this.firstName = firtName;
//     this.age = age;
// }
// createUser.prototype.about = function(){
//     console.log(this.firstName,this.age);
// }

// const user1 = new createUser("Arham",19);
// console.log(user1);

// const CreateObj = function(firstName, lastName, email,age){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.age = age;
//     this.sing = function(){
//         return ("tnana");
// }
// }
// CreateObj.prototype.about = function(){
//     return(`my name is ${this.firstName} and my age is ${this.age}`);
// };
// CreateObj.prototype. is18 = function is18(){
//     return this.age >=18;
// }

// const ans = new CreateObj("arham","hasan","arhamhasan70@gmail.com",20);
// // console.log(ans.is18());

// for (let key in ans){
//     if(ans.hasOwnProperty(key)){
//         console.log(key)
//     }
// }


// let numbers = [1,2,3];
// let numbers = new Array(1,2,3);
// console.log(Array.prototype)
// console.log(numbers);

// function myFunc(power){
//     return function(number){
//         return number ** power;
//     };
// }
// const square = myFunc(3);
// const ans = square(2);
// console.log(ans);


// function myFunc(){
//     let counter = 0;
//     return function(){
//         if(counter<1){
//             console.log("Hi,You called me!");
//             counter++;
//         }else{
//             console.log("I am already called");
//         }
//     }
// }

// const ans = myFunc();


const bucket = ["vegetables","salt","rice","fruits"];

// const prm = new Promise((resolve,reject)=>{
//     if(bucket.includes("vegetables")&& bucket.includes("salt")&& bucket.includes("rice")){
//         resolve("Rice has made");
//     }else{
//         reject("Rice has not made");
//     }
// })

// prm.then((value)=>{
//     console.log(value);
// })
// prm.catch((value)=>{
//     console.log(value);
// })


// function prm(){
//     const bucket = ["vegetables","salt","rice","fruits"];
//     return new Promise((resolve, reject)=>{
//         if(bucket.includes("vegetables")&& bucket.includes("salt")&& bucket.includes("rice")){
//             resolve("Rice has made");
//         }else{
//             reject("Rice has not made");
//         }
//     })
// }

// prm().then((value)=>{
//     console.log(value);
// }).catch(value=>{
//     console.log(value);
// })

// function prm (){
//     return new Promise((resolve,reject)=>{
//         let value = false;
//         setTimeout(()=>{
//             if(value){
//                 resolve("Resolved");
//             }else{
//                 reject("Rejected");
//             }
//         },2000);
//     })
// }
// prm().then((value)=>{
//     console.log(value);
// }).catch((value)=>{
//     console.log(value);
// })

// const val = Promise.resolve(5);
// val.then(value=>{
//     console.log(value);
// })

// function prm (){
//     return new Promise((resolve,reject)=>{
//         resolve("arham");
//     })
// }
// prm().then(value=>{
//     console.log(value);
//     value+= " hasan";
//     return value;
// }).then(value=>{
//     console.log(value);
//     value+= " 39";
//     return value;
// }).then(value=>{
//     console.log(value);
// })

