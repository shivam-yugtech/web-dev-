// 3 types of function

// 1. Normal Function

//Function definition
function function_name(par1,par2)
{
    //do something
}

// function invoke or call 
// function_name(arg1,arg2);

// function add(a,b)
// {
//     return a+b;
// }

// let ans = add(2,6);
// console.log(ans);

// function are treated as first clas citizens in javascript
// -> functions can be returned 
// -> functions can be passed as Parameters/argument 

function Calculator(str,a,b)
{
    if(str == "add")
    {
        return function add(){
            console.log(a + b);
        }
    }
    else if(str == "sub")
    {
        return function sub(){
            return a-b;
        }    
    }
}

let returnedfunc = Calculator('add',2,8);
console.log("returned function is \n"+ returnedfunc);
returnedfunc(); 


// 2. Function Expression

let variable_name = function (){
    // do something
}
// name of a variable is used to invoke the function
// variable_name();

let sayHi = function (){
    console.log("hello guys is am function Expression");
}

console.log("line 59\n" + sayHi);   
sayHi();
// abcd(); //error abcd is not defined 


//  3. IIFE -> Imediately invoke function expression

function add(a,b){
    return a+b;
}
// let a= add(2,3);
// console.log(a);

let additionIIFE = (function add(a,b){
    return a+b;
   // console.log(a+b);
})(20,30);

console.log(additionIIFE);
// console.log(additionIIFE(20,30));


