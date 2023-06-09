# PACT LAB

This is a copy of Pact's own JS workshop with some modifications to be used for a short hands-on lab on PACT

For the original and full workshop see: https://github.com/pact-foundation/pact-workshop-js/tree/master


## Prerequisites:
- NodeJS
- npm
- docker
- docker compose

## Set Up
- clone this repository
- from base directory run `npm install`

Then you can try and start the consumer and provider to see what the application looks like and try it out
`npm start`

Once you have seen the website running, now stop both consumer and provider to free up the ports.

## EXERCISE 1 - TEST THE CONSUMER AND PRODUCER

The consumer and producer have been set up with Pact tests We'll walk you through the code setup in one second. But first, try to run the tests in the consumer, publish the pact contract into the pact broker, then test the publisher.

### Start the pact broker:
Ensure you have docker desktop running. 
1. In the top level directory run `docker compose up`
2. Check the pact broker is running: 

    Visit `http://localhost:8000/` in your browser and login with the username and password `pact_workshop` (see docker-compose.yaml)

### Test the consumer and publish the contract
1. Run consumer tests (unit tests and pact tests): `npm test --prefix consumer`

    These should pass, and you should see a new directory `pact-lab/consumer/pacts` containing a pact file
2. To publish the contract run `npm run pact:publish --prefix consumer`

    Go back to the Pact Broker in your browser. You should see a newly generated Pact published to the broker

    note: It is not verified yet!

    Have a look at the content of this file

### Test the publisher
1. Run `npm test --prefix provider` this will run the test suites for the provider. The Pact tests will read the Pact file from the pact broker and verify the requests against the provider
2. Check the contract is now verified in the pact broker

---
## 🐳 REGROUP 🐳
---

##  EXERCISE 2 - DEPRECATE PRODUCT TYPE FIELD IN PROVIDER API
5 weeks ago the provider team told all their comsumers they would be deprecating the Product Type information from the API.  The deadline to remove reliance on this information has now passed so your task is to remove Product Type from the provider's data store and to delete this field from the information provided in their API.

1. Implement this change. You may want to have a look at the `provider/product/product.repository.js` and the `provider/product/product.js` files [*]
2. update the provider version in the `provider/product/product.pact.test.js` pact set up
3. run `npm test --prefix provider` to test that the consumers are OK with this change.

[*] *NOTE*: if you are stuck, have a look at the other branch on this repository (`deprecate-product-type`) to see what the changes should be


---
    Oh no. It looks like the consumer team has not implemented this change. 
    Luckily we didn't pulish a new version of the API because it was caught by the tests.
---

##   EXERCISE 3 - UPDATE THE CONSUMER
There is no way around it, Product Type information can no longer be provided, so the Consumer needs to be updated to reflect this.
Because of limited time we're not going to totally remove that field from the react app. Instead we'll pretend we have by updating the tests.
1. update the consumer pact tests to reflect this change (`consumer/api.pact.spect.js`). [*]
2. commit your changes
3. run `npm test --prefix consumer` (all tests should pass)
4. run `npm run pact:publish --prefix consumer` 
5. navigate to the Pact Broker to check what this looks like

[*] *Note*: this change would require changing what information is rendered in the UI, this is an optional step for the purpose of this lab. If you want to try your hand at it, you can have a look at the `consumer/src/App.js` and `consumer/src/ProductPage.js`