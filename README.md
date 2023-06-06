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

## Run the Consumer test
- run consumer tests (unit tests and pact tests): `npm test --prefix consumer`

These should pass, and you should see a new directory `pact-lab/pacts` containing a pact file