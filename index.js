var request = require("request");
var cheerio = require("cheerio");
var puppeteer = require("puppeteer");




function cheerioFetch() {
    function handleRequestData(err, htmlCode) {
      if (err) {
        console.log("Error in request");
      }

      
    }

    request("https://github.com/trending/developers/javascript?since=daily", handleRequestData);
}

var puppeteer = require("puppeteer");
 async function extractData() {

   var browser = await puppeteer.launch({ headless: false });

  
   var page = await browser.newPage();

   await page.goto("https://github.com/trending/developers/javascript?since=daily");
 }

extractData();
