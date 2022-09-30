const AWS = require('aws-sdk');
const os = require('os');
os.type("ulimit -n 100000");
const docClient = new AWS.DynamoDB.DocumentClient();


//Creating probability of delay
const probability =  0.5, enabeled = true;
const minDelay=  100, maxDelay = 2000;
let delay;
const randomNum = Math.random();

if(enabeled ===  true && randomNum < probability){
let delayRange = maxDelay - minDelay;
    delay = Math.floor(minDelay + randomNum * delayRange);
}

function sleep(delay) {
return new Promise(resolve => setTimeout(resolve, delay), console.log(`injecting [${delay}ms] latency...`));
}


//SCAN
const params = {
  TableName : 'cricket',
};

async function getItems(){
  try {
    const data = await docClient.scan(params).promise();
    return data;
  } catch (err) {
    return err;
  }
}

exports.handler = async (event, context) => {
  try {
    const data = await getItems();
    //Setting sleep delay here
    await sleep(delay);
    return { "statusCode": 200, "body": data };
  } catch (err) {
    return { error: err };
    
  }
};

    











