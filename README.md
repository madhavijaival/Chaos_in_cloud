# load-test

## Using Artillery for testing

Installed `serverless`, `artillery` and `serverless-artillery`


```bash
npm install --global serverless
npm install --global artillery
npm install --global serverless-artillery

### Automated Testing Approach
Go to the example artillery directory, cd load-test(github repo)

and then run the following command:

`slsart invoke --stage script.yml`

This will trigger a set requests for each of the languages we are currently benchmarking in the `hello-world` example.

If you want the output to be dump to a file,  file as follow:
`slsart invoke -p script.yml > results.json`
