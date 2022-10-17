'use strict';
const AWS = require('aws-sdk');
//*/ get reference to S3 client 
const os = require('os');
os.type("ulimit -n 100000");
const s3 = new AWS.S3();
//Creating probability of delay
const config= {
     'probability' :2.5,
     'enabeled' : true,
     'minDelay' : 100,
     'maxDelay' : 1000
};

let delay;
let randomNum = Math.random();
if(config.enabeled ===  true && randomNum < config.probability){
let delayRange = config.maxDelay - config.minDelay;
    delay = Math.floor(config.minDelay + randomNum * delayRange);
}

exports.handler = (event, context, callback) => {
    
  let params = {
  "Bucket": "lambdaimagetest1",
  "Key": "Test2.jpg" 
    };
    s3.getObject(params, function(err, data){
       if(err) {
           
           callback(err, null);
       } else {
           let image = Buffer.from(data.Body).toString('base64');
           image = "data:"+data.ContentType+";base64,"+image;
           let response = {
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Origin": "*",
            'Content-Type': data.ContentType
        },
        "body":image,
        "isBase64Encoded": true
    };
           callback(null, response);
    //Setting sleep delay here
          setTimeout(function () {
    console.log(`injecting [${delay}ms] latency...`);
  }, delay);
           
    }
    });
    
};

// //Creating probability of delay
// const probability =  0.5, enabeled = true;
// const minDelay=  100, maxDelay = 2000;
// let delay, randomNum = Math.random();

// if(enabeled ===  true && randomNum < probability){
// let delayRange = maxDelay - minDelay;
//     delay = Math.floor(minDelay + randomNum * delayRange);
// }





