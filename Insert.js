const fileToImport = require("./fileToImport.json");
const AWS = require('aws-sdk');
const os = require('os');
os.type("ulimit -n 100000");
const dynamoDb = new AWS.DynamoDB.DocumentClient();

//Creating probability of delay
const probability =  0.5, enabeled = true;
const minDelay=  100, maxDelay = 4000;
let delay;
const randomNum = Math.random();

//This will generate delay in ms
if(enabeled ===  true && randomNum < probability){
let delayRange = maxDelay - minDelay;
    delay = Math.floor(minDelay + randomNum * delayRange);
}

function sleep(delay) {
return new Promise(resolve => setTimeout(resolve, delay),console.log(`injecting [${delay}ms] latency...`));
}

//function for random number generation which takes 2 values...
  function getRandomNum(low, high){
        return  Math.floor(Math.random()*(high-low) + low);
    }
 
exports.handler = async (event, context) => {
      try {
        //Setting sleep delay here
        await sleep(delay);
       const randomNumber =  getRandomNum(1, 50);
       //console.log("This is Random number", randomNumber);
       const resObject = fileToImport.find(item => item.id === randomNumber);

        // console.log("This is my object :", resObject);
        await dynamoDb.put( {"TableName": "cricket",
              "Item": resObject
             }).promise();
             
              const response = {
               "statusCode": 200,
                "body": resObject
               };
               
             return response;
             
        } catch (err) {
          
       return { error: err };
      }

};

