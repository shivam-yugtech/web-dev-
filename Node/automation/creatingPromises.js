// const { log } = require("console");

//constructing our own promises

let myPromise = new promise(function(resolve,reject){
    let num1 = 1;
    let num2 = 1;
    let string = "Value is equal to 2";
    if(num1 + num2 == 2){
        //resolve();
            resolve(string);
    }
    else{
        reject("No, value are not equal");
    }
})

myPromise.then(function(string){
    console.log("In .then",string);
})
.catch(function(err){
    console.log(err);
});