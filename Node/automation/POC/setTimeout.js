// const { log } = require("console");
// {
// function yolo(){  //yolo -> you only live once
//     var a=10;
//     function cb(err,res){
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log("hello how are you");
//         }
//     }
//     //function to be executed (callback fun) , time(ms) after which cb to be executed
//     //1 second = 1000 milli second
//     setTimeout(cb,5000);
//     console.log(a);  

// }

// yolo();
// let b=200;
// console.log(b);

// }


// const request = require("request");
// let url = "https://www.worldometers.info/coronavirus/"
// function yolo(){
//     var a=10;
//     function cb(err,res,body){
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log("hello how are you");
//             console.log("statusCode is ",res.statusCode);
            
//         }
//     }
//     //function to be executed (callback fun) , time(ms) after which cb to be executed
//     //1 second = 1000 milli second
//     request(url,cb);
//     console.log(a);  

// }

// yolo();
// let b=100;
// console.log(b);


// for(var i=1;i<=10;i++){
//     //hint: clousures and scope -> wrapping
//     function outer(a){
//         setTimeout(function(){
//             console.log(a);
//         }, 2000* a);
//     }
//     outer(i);   
// }



// for(var i=1;i<=10;i++){
//     function cb(a){
//         console.log(a);
//     };
//     setTimeout(cb,2000 * i, i);
// }


// fetch() API

console.log("before");
setTimeout(function (){
    console.log("time over");
},5000);
fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(function (response) { 
        return response.json() // when a promised is returned, it creates a promises and then 
     })                        // return it, which is obviously of fulfilled state
    .then(function (json) { 
        console.log(json) 
    });
console.log("after");

