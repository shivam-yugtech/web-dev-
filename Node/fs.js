// fs -> file system module -> it helps us to make files/folders append data in them, delete data, read data
const fs = require("fs"); //require("path_of_the_file");
// const f1= require("./f1.txt");
const abc = require("../JAVA SCRIPT/temp");
// required method , goes to the file that is needed to be required. executes that file. and if there 
// is something that is exported  we get that in variable 'abc'
console.log(abc);

// let ans = abc.add(45,4);
// console.log(ans);



//appendFileSync appends data into a file ,if file  is not present, it creates the file and then append the data 
                //file path, data to be append
fs.appendFileSync("f1.txt","hello i am f1 file\n");
fs.appendFileSync("f1.txt","you guys are smart");
// console.log(res);

// let data=fs.readFileSync("f1.txt","utf-8");
//data recieved is an object type , data is in buffer format.
// for it to be readble , we convert it from buffer to string. 
// console.log(data+"");   //automatic type conversion se buffer string mein convert ho gyi h.    

// let data=fs.readFileSync("f1.txt","utf-8");
// console.log(data);




