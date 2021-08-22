# REST API for Premise take-home project

This Node project wraps the Breaking Bad API, it was built as an example of Charles Forsyth's coding ability for Premise.

A web project was also created which consumes this API.

---

<br />

## Documentation

Launch application (See below), and browse to the following path for swagger documentation: http://localhost:8000/

---

<br />

## Launching the service

### `npm install`

Install dependency packages

### `npm run dev`

Launch application locally, with watch.

### `npm start`

Launch application locally, without watch.

### `npm test`

This command will run eslint, unit tests and prettification.

---

<br />

## Build and Run within a Docker Container locally

### 1\. `npm run docker:build`

Builds the docker image.

### 2\. `npm run docker:run`

Runs the docker image locally.

### 3\. `npm run docker:healthcheck`

Checks the health of the docker image running on local machine
