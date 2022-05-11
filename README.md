# Social-API

![GitHub](https://img.shields.io/github/license/robertschwartz603/Social-API)

## Description
an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. This uses Express.js for routing, a MongoDB database, and the Mongoose ODM

## User-Story
```
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance-Criteria
```
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia Core for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia Core
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

```

## Table of Contents
- [Description](#description)
- [User-Story](#User-Story)
- [Acceptance-Criteria](#Acceptance-Criteria)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation

To install this application, clone the repo, and open in terminal. Then, install npm by entering the command ```npm install``` into the terminal.  Install express and mongoose by entering ```npm i express``` and ```npm i mongoose```e into the CLI.


## Usage
1. Clone the package from GitHub

2. Install npm and dependencies: ```npm install```

3. Open Insomnia and test API GET, POST, PUT, and DELETE routes to interact with thoughts, users, friends, and reactions

## License
This project and it's contents are licensed under: MIT

## Tests
This product has been tested with insomnia and general use-case scenarios. debugging ongoing.

## Questions

Github: https://github.com/robertschwartz603
