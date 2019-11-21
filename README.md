# JavaScript Practice

This repository contains a number of problems solved using JavaScript over a period of weeks.
Note that the last 2 weeks required user to build the full test suite from scratch.
Also note that there were no exercises provided for weeks 5-7.

All functions have been developed with full TDD using the [Jest](https://jestjs.io) testing library.

### Running the tests

[Node.js](https://nodejs.org/en/) must be installed if not already.

First, clone this repository and install dependencies:

    npm install

To run the test suite:

    npm test


### Linting

To help write "clean", tidy code,  Linting has been included with [EsLint](https://eslint.org/) in this repository.

EsLint will tell you when you have incorrectly formatted your code, or when it suspects an error such as an undefined variable.

This is hugely beneficial, as it alerts you to many errors before you even run your code! It also helps you write code that will be easy for you and other developers to read in the future.

Is is configured with a set of standard rules, which can be viewed [here](https://eslint.org/docs/rules/).

For reporting as-you-type, install and enable the EsLint extension for VSCode (click the square symbol on the left hand bar for extensions).

To check all linting errors, run:

    npm run eslint

Errors have been fixed before adding and commiting code.
