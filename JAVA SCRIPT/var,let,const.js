console.log(x);
var x=10;
let b=100;
console.log(b);

// block scope -> variable declared in a block are accesible inside that block , those 
// variable are known to be block scoped
// variable declared using let and const are blocked scoped
// var is function scoped 

var a=100;
{
    var a=10;
    let b=20;
    const c=30;
    console.log(a);
    console.log(b);
    console.log(c);
}

console.log(a);
console.log(b);

let b=10;
{
    var a=10;
    let b=20;
    const c=30;
    console.log(a);
    console.log(b);
    console.log(c);
}

console.log(b);

