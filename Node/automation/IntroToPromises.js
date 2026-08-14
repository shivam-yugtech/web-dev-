const { log } = require('console');
const { promises } = require('dns');
const fs = require('fs');

console.log("Before");

//synchronous working
//let data = fs.readFileSync("f1.txt");
// console.log(data+"");

//async working
// fs.readFile("f1.txt",cb);
// function cb(err,data)
// {
//     if(err){
//         console.log(error);
//     }
//     else console.log(data+"");
// }

//promises working
let promiseThatFilewillBeRead = fs.promises.readFile("f1.txt");
console.log(promiseThatFilewillBeRead);

// promiseThatFilewillBeRead.then(function printData(data){
//     console.log("promise is Fulfilled");
//     console.log(data+"");
// });

promiseThatFilewillBeRead.then(printData);
promiseThatFilewillBeRead.catch(printError);

console.log("After");

function printData(data)
{
    console.log("promise is Fulfilled");
    console.log(data+"");
}

function printError(err)
{
    console.log(err);
}