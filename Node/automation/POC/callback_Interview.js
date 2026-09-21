// q1 read 3 files f1.txt , f2.txt and f3.txt by using callbacks 

const fs = require("fs");

//callback hell -> pyramid of doom , it's not easy to maintain & difficult to read 
// fs.readFile("f1.txt", function cb1(err,res){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(res + "");
//     fs.readFile("f2.txt", function cb2(err,res){
//         if(err){
//             console.log(err);
//         }else{
//             console.log(res + "");
//         fs.readFile("f3.txt", function cb3(err,res){
//             if(err){
//                 console.log(err);
//             }else{
//                 console.log(res + "");
//                 console.log("All files read");
//                 }
//             })
//         }
//     });
// }
// });

// //1st way to overcome callback hell is to seprate the callback functions 

// fs.readFile("f1.txt", cb1);

// function cb1(err,res){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(res + "");
//         fs.readFile("f2.txt", cb2);
//     }
// }

// function cb2(err,res){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(res + "");
//         fs.readFile("f3.txt", cb3);
//     }
// }

// function cb3(err,res){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(res + "");
//         console.log("Data Printed");
//     }
// }

// q2 read 3 files f1.txt , f2.txt and f3.txt parallely using callbacks

fs.readFile("f1.txt",cb);
fs.readFile("f2.txt",cb);
fs.readFile("f3.txt",cb);

function cb(err,res){
    if(err){
        console.log(err);
    }else{
        console.log(res + "");
    }
}

