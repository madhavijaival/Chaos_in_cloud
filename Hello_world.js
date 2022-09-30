const os = require('os');
os.type("ulimit -n 100000");

//Creating probability of delay
// const probability =  2.5, enabeled = true;
// const minDelay=  100, maxDelay = 5000;

let element= {
     'probability' : 0.5,
     'enabeled' : true,
     'minDelay' : 100,
     'maxDelay' : 3000
};

let delay;
let randomNum = Math.random();
if(element.enabeled ===  true && randomNum < element.probability){
let delayRange = element.maxDelay - element.minDelay;
    delay = Math.floor(element.minDelay + randomNum * delayRange);
}


function sleep(delay) {
return new Promise(resolve => setTimeout(resolve, delay), console.log(`injecting [${delay}ms] latency...`));

}

exports.handler = async (event) => {

    // TODO implement
     //Setting sleep delay here
      await sleep(delay);

  const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;

};

