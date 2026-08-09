// const puppeteer = require("puppeteer");
// let { email, password } = require('./secrets');

// let cTab;
// let broswerOpenPromises = puppeteer.launch({
//     headless: false,
//     defaultViewport:null,
//     args: ["--start-maximized"],
// });

// broswerOpenPromises //fulfill
//     .then(function(browser){
//         console.log("open browser");
//         // console.log(browser);
//         //An array of all open pages inside the browser.
//         let alltabsPromises = browser.pages();
//         return alltabsPromises;
// })
// .then(function(alltabsArr){
//     cTab = alltabsArr[0];
//     console.log("new Tab");
//     //URL to navigate pages to 
//     let visitingLoginPagePromises = cTab.goto("https://www.hackerrank.com/auth/login");
//     return visitingLoginPagePromises;
// })
// .then(function(){
//     console.log("Hackerrank login page opended");
//     let emailWillBeTypedPromises = cTab.type("input[name='username']",email);
//     return emailWillBeTypedPromises;
// })
// .then(function(){
//     console.log("email is typed");
//     let passwordWillBeTypedPromises = cTab.type("input[name='password']",password);
//     return passwordWillBeTypedPromises;
// })
// .then(function(){
//     console.log("password has been typed");
//     let WillBeLoggedInPromises = cTab.click(".c-cUYkx.c-cUYkx-dshqME-variant-primary.c-cUYkx-fGHEql-isFullWidth-true.c-cUYkx-ABeol-size-large.hr-inline-flex.hr-justify-center.hr-align-center.hr-p-y-1");
//     return WillBeLoggedInPromises;
// })
// .then(function(){
//     console.log("logged into hackerrank successfully");
//     //waitAndClick will wait for the seclector to load, and then click on the node
//     let algorithmTabWillBeOpenedPromise = waitAndClick("//span[contains(text(), 'Algorithms')]");
//     return algorithmTabWillBeOpenedPromise
// })
// .then(function(){
//     console.log("algorithm pages is open");
    
// })
// .catch(function(err){
//     console.log(err);
// });

// function waitAndClick(algoBtn){
//     let myPromise = new Promise(function(resolve,reject){
//         let waitForSelectorPromise = cTab.waitForSelector(algoBtn);
//         waitForSelectorPromise
//             .then(function(){
//                 let clickPromise = cTab.click(algoBtn);
//                 return clickPromise;
//             })
//             .then(function(){
//                 resolve();
//             })
//             .catch(function(err){
//                 console.log(err);
//             })
//     });
//     return myPromise;
// }

const puppeteer = require("puppeteer");
let { email, password } = require("./secrets");

let cTab;

let browserOpenPromise = puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
});

browserOpenPromise
    .then(function (browser) {

        console.log("open browser");

        // Get all open tabs/pages
        let allTabsPromise = browser.pages();

        return allTabsPromise;
    })

    .then(function (allTabsArr) {

        // Select first tab
        cTab = allTabsArr[0];

        console.log("new Tab");

        // Open HackerRank login page
        let visitingLoginPagePromise =
            cTab.goto("https://www.hackerrank.com/auth/login");

        return visitingLoginPagePromise;
    })

    .then(function () {

        console.log("Hackerrank login page opened");

        // Wait for username input
        let emailWillBeTypedPromise =
            cTab.waitForSelector("input[name='username']");

        return emailWillBeTypedPromise;
    })

    .then(function () {

        // Type email
        let emailWillBeTypedPromise =
            cTab.type("input[name='username']", email);

        return emailWillBeTypedPromise;
    })

    .then(function () {

        console.log("email is typed");

        // Wait for password input
        let passwordWillBeTypedPromise =
            cTab.waitForSelector("input[name='password']");

        return passwordWillBeTypedPromise;
    })

    .then(function () {

        // Type password
        let passwordWillBeTypedPromise =
            cTab.type("input[name='password']", password);

        return passwordWillBeTypedPromise;
    })

    .then(function () {

        console.log("password has been typed");

        // Click Login button
        let loginButtonPromise =
            cTab.click(
                ".c-cUYkx.c-cUYkx-dshqME-variant-primary.c-cUYkx-fGHEql-isFullWidth-true.c-cUYkx-ABeol-size-large.hr-inline-flex.hr-justify-center.hr-align-center.hr-p-y-1"
            );

        return loginButtonPromise;
    })

    .then(function () {

        console.log("logged into Hackerrank successfully");

        // Wait and click Algorithms
        let algorithmTabPromise =
            waitAndClick("Algorithms");

        return algorithmTabPromise;
    })

    .then(function () {

        console.log("Algorithm page is open");
        let allQuesPromise = cTab.waitForSelector('a[data-analytics="ChallengeListChallengeName"]');
        return allQuesPromise;
    })
    .then(function(){
        function getAllQueslinks(){
            let allElemArr = document.querySelectorAll('a[data-analytics="ChallengeListChallengeName"]');
            let linkArr = [];
            for(let i=0;i<allElemArr.length;i++){
                linkArr.push(allElemArr[i].getAttribute("href"));
            }
            return linkArr;
        }
        let linkArrPromise = cTab.evaluate(getAllQueslinks);
        return linkArrPromise;
    })
    .then(function(linkArr){
        console.log("link to all ques recived");
        console.log(linkArr);
    })

    .catch(function (err) {

        console.log("ERROR:");
        console.log(err);

    });


// --------------------------------------------------
// Function to wait for an element containing text
// and then click it
// --------------------------------------------------

function waitAndClick(text) {

    return new Promise(async function (resolve, reject) {

        try {

            // Wait until the elements with this class appear
            await cTab.waitForSelector("span.hr-title-sm");

            // Get all elements having this class
            let elements =
                await cTab.$$("span.hr-title-sm");

            // Check every element
            for (let element of elements) {

                // Get text inside the element
                let elementText =
                    await element.evaluate(function (el) {
                        return el.innerText;
                    });

                console.log("Found:", elementText);

                // Compare text
                if (elementText.trim() === text) {

                    // Click Algorithms
                    await element.click();

                    console.log(text + " clicked");

                    resolve();
                    return;
                }
            }

            // If element wasn't found
            reject("Element not found: " + text);

        }
        catch (err) {

            reject(err);

        }

    });
}