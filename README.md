# load-test

## Using Artillery for testing

Installed `serverless`, `artillery` and `serverless-artillery`

> Serverless artillery is the result of combining the serverless framework with artillery.io. When serverless and artillery are combined, we get serverless-artillery, which allows fast, low-cost, and easy performance testing at scale. Serverless-artillery enables us to quickly and easily test the performance and functionality of our services without the use of servers or testing infrastructure.

```bash
$ npm install --global serverless
$ npm install --global artillery
$ npm install --global serverless-artillery
```
### Automated Testing Approach
Go to the example artillery directory, cd load-test(github repo)

and then run the following command:

`slsart invoke --stage script.yml`

> This will trigger a set requests in the `hello-world` example.

If we want the output to be dump to a file,  file as follow:
`slsart invoke -p script.yml > results.json`


## Installation of the `Hey` tool on Ubuntu 
HTTP load generator, ApacheBench (ab) replacement.
hey is a tiny program that sends some load to a web application.<br/>
Commands to install Hey:

```
$sudo apt update
$sudo apt install snapd
$sudo snap install hey
```

Command to test :
```
$ hey -n 2000 -c 50 "<https://xxxxxxx.execute-api.us-east-1.amazonaws.com>"
```

<img src="/2000_Request1.JPG" width="650">



Thanks :grinning:

