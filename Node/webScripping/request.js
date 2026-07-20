const request = require("request");

console.log("Before");

request("https://www.worldometers.info/co2-emissions/", cb);

// cb -> call back function
function cb(err, res, body){ 
    console.log("error", err);
    // console.log(res);
    console.log(body);
    console.log(typeof body);
}

console.log("After");

