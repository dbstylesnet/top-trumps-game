# Top Trumps game
Typescript React project, utilising React functional components with hooks.

### Tech stack:
* Typescript
* React (hooks)
* GraphQL served with local express server with Apollo
* Modern UI (styled-components, flexbox)
* Enzyme tests

![alt text](https://github.com/dbstylesnet/top-trumps-game/blob/master/screenshot.png)

## In order to start game locally:

### Install dependencies with
`npm install` command in project folder

### The project includes a local GraphQL API in server/server.js.
`npm start` command launches both the React app and the GraphQL server:
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## In order to run tests:

### In order to run tests
Run `npm test` command in project folder
Results will be displayed in the console.

## Gameplay Overview
On each turn, players receive either People or Starships
Player I selects a card attribute:
Height (for people)
Hyperdrive Rating (for starships)
Highest value wins the round
Scores persist until you start a new game
