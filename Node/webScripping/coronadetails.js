const request = require("request");
//cheerio
// cheerio parses HTML and it traverses the html so that data can be manipulated according to user's needs
const cheerio = require("cheerio");
request("https://www.worldometers.info/coronavirus/", cb);

// cb -> call back function
function cb(err, res, body){ 
    if(err){
        console.log("error", err); //err -> error
    }
    else{
        handleHtml(body);
    }
}
// console.log(res); // res -> 
    // console.log(body); // body -> html in response
    // extract krle data html se 

function handleHtml(html){

    let selectTool = cheerio.load(html);

    let coronaStats = selectTool(".maincounter-number");

    // console.log(coronaStats.text());

    let totalCases = selectTool(coronaStats[0]).text();
    console.log("Total Cases -> " + totalCases);

    let totalDeaths = selectTool(coronaStats[1]).text();
    console.log("Total Deaths -> " + totalDeaths);

    let totalRecorved = selectTool(coronaStats[2]).text();
    console.log("Total Recorved -> " + totalRecorved);
    
}