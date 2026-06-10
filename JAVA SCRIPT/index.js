//starting JS -> javascript
//var, let, const

//variable declaration
var a;      //int string float ?

//variable initialization
a = 10;
//variable reinitialization
 a = 20;
// console.log(typeof a);
// console.log(a);

a="Hello";          // re initialization of variable 'a'
// console.log(a);

//typeof operator -> it tells us the type of data stored in a variable 
// console.log(typeof a);

a= true;
// console.log(a);
// console.log(typeof a);

a= null;
// console.log(a);
// console.log(typeof a);   //bug in JS -> it should return null but it returns object

//Number
var num = 10;
// console.log(num);

var float = 2.5;
// console.log(float);

//boolean
var t = true;
var f = false;
// console.log(t);
// console.log(f);

//string
//'', "", ``
//single quotes, double quotes, backticks
var str = 'a';
// console.log(typeof str);
str = "how you doin?\ni am fine. what about you?";
// backslash n("\n") -> new line
// console.log(str);

var b = `hi hope you guys are 
able to grasp the concepts`;
// console.log(b);

var num = 24356;
// ${}
// console.log(`half of ${num} is ${num/2}`); 


// var has some problem
// 1. redeclaration is allowed
var r = "hello";
// console.log(r);

var r = 100;
// console.log(r);


// isko overcome karne ke liye "let" and "const" aaye
// let -> redeclaration not allowed, re initialization allowed
let l = 200;
// console.log(l);

//  let l = "hello";   //SyntaxError: Identifier 'l' has already been declared
// console.log(l);

//we can reinitialize a variable but we cannot redeclare it
l=300;
// console.log(l);


//loops in js
var num = 10;

// for(var i=0; i < num;i++){
//     if(i%2==0){
//         console.log("num is even");
//     }
// }

// 2nd problem with var keyword
// var keyword is function scoped in case of function else it is global scope 
// let keyword is block scoped

let j= 20;
for( var i=0; i < num;i++){
    let j=20;
    if(i%2==0){
        let hello = 1000;
        console.log(i);
        console.log(hello);
        
    }
    console.log("inner "+i);
}
console.log("outer "+j);
console.log("value of i is "+ i);
 console.log(hello);    // error dega hello is not defined
 

// const keyword -> redeclaration and re initialization both are not allowed
const n = 2;
// console.log(n);
        //na hi redeclaration na reinitialization
//const a=5;
//  n=4;    //TypeError: Assignment to constant variable.
// console.log(n);





