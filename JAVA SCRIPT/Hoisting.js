console.log(a);  //Undefined
greet();
console.log(hello);
hello();
var a=10;

//function
function greet()
{
    console.log("hello shivam");
}

//function expression
var hello = function ()
{
    console.log("you guys rocked ");    
}

//hello();


//JavaScript Hoisting refers to the  process whereby the interpreter appears to move 
// the declaration of function, variables to the top of their scope, prior to 
// execution of the code.


// my definition of hoisting
// we can acess the variable and function even before we have declared it