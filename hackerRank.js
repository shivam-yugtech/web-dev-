const puppeteer = require("puppeteer");
const {email,password} = require("./secrets");

let cTab;
let broswerOpenPromises = puppeteer.launch({
    headless: false,
    defaultViewport:null,
    args: ["--start-maximized"],
});

broswerOpenPromises //fulfill
    .then(function(browser){
        console.log("open browser");
        // console.log(browser);
        //An array of all open pages inside the browser.
        let alltabsPromises = browser.pages();
        return alltabsPromises;
})
.then(function(alltabsArr){
    cTab = alltabsArr[0];
    console.log("new Tab");
    //URL to navigate pages to 
    let visitingLoginPagePromises = cTab.goto("https://www.hackerrank.com/auth/login");
    return visitingLoginPagePromises;
})
.then(function(){
    console.log("Hackerrank login page opended");
    let emailWillBeTypedPromises = cTab.type("input[name='username']",email);
    return emailWillBeTypedPromises;
})
.then(function(){
    console.log("email is typed");
    let passwordWillBeTypedPromises = cTab.type("input[name='password']",password);
    return passwordWillBeTypedPromises;
})
.then(function(){
    console.log("password has been typed");
    let WillBeLoggedInPromises = cTab.click(".c-cUYkx.c-cUYkx-dshqME-variant-primary.c-cUYkx-fGHEql-isFullWidth-true.c-cUYkx-ABeol-size-large.hr-inline-flex.hr-justify-center.hr-align-center.hr-p-y-1");
    return WillBeLoggedInPromises;
})
.then(function(){
    console.log("logged into hackerrank successfully");
    
})
.catch(function(err){
    console.log(err);
});
