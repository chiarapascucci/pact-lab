# PACT LAB

This is a copy of Pact's own JS workshop with some modifications to be used for a short hands-on lab on PACT

For the original and full workshop see: https://github.com/pact-foundation/pact-workshop-js/tree/master


## Prerequisites:
- NodeJS
- npm
- docker
- docker compose

## Basic Set Up
- clone this repository
- from base directory run `npm install`

Then you can try and start the consumer and provider to see what the application looks like and try it out
`npm start`

Make sure to then stop both consumer and provider to free up the ports

## STARTING POINT
You should be able to complete the steps below successfully as the starting point of this lab. Ensure you have run `docker compose up`
Visit `http://localhost:8000/` in your browser and login with the credentials in the `docker-compose` file to check that the Pact Broker is up and running
1. Run the Consumer test
run consumer tests (unit tests and pact tests): `npm test --prefix consumer`
These should pass, and you should see a new directory `pact-lab/pacts` containing a pact file
2. run `npm run pact:publish --prefix consumer` and navigate back to the Pact Broker. You should see your newly generated Pact published to the broker. It is not verified yet!
3. run `npm test --prefix provider` this will run the test suites for the provider. The Pact tests will read the Pact file from the pact broker and verify the requests against the provider
4. navigate back to the Pact Broker and check that the contract is now showing as verified. Should look something like:
![Screenshot 2023-06-08 at 14.19.25.png](..%2F..%2F..%2F..%2F..%2Fvar%2Ffolders%2Fgw%2Flsm4cvbn1mn0cwf2rwz4pzj80000gp%2FT%2FTemporaryItems%2FNSIRD_screencaptureui_hoQshP%2FScreenshot%202023-06-08%20at%2014.19.25.png)

## DEPRECATE PRODUCT TYPE FIELD IN PROVIDER API
The Provider team have decided to remove any information on Product Type from their data store and to delete this field from the information provided in their API.
1. implement this change. You may want to have a look at the `provider/product/product.repository.js` and the `provider/product/product.js` files.
2. update the provider version in the `provider/product/product.pact.test.js` pact set up
3. run `npm test --prefix provider`. The Pact is no longer verified. Navigate to the Pact Broker to see what that looks like

## UPDATE THE CONSUMER
There is no way around it, Product Type information can no longer be provided.
1. update the consumer pact tests to reflect this change (`consumer/api.pact.spect.js`). *Note*: this change would require changing what information is rendered in the UI, this is an optional step for the purpose of this lab.
2. commit your changes
3. run `npm test --prefix consumer` (all tests should pass)
4. run `npm run pact:publish --prefix consumer` 
5. navigate to the Pact Broker to check what this looks like
