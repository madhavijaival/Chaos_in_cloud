const os = require('os');
os.type("ulimit -n 100000");
//Creating probability of delay
const config= {
     'probability' :0.5,
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


function sleep(delay) {
return new Promise(resolve => setTimeout(resolve, delay), console.log(`injecting [${delay}ms] latency...`));

}

exports.handler = async (event) => {

     //Setting sleep delay here
      await sleep(delay);

  const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;

};






//Creating probability of delay
// const probability =  0.5, enabeled = true;
// const minDelay=  100, maxDelay = 1000;
