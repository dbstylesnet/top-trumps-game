import express from 'express';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';

const app = express();
app.use(cors());

export const starships = [
  { id: "1", name: "Millennium Falcon", hyperdriveRating: 0.5, maxSpeed: 1050, crewSize: 4, cargoCapacity: 100000.0 },
  { id: "2", name: "X-wing", hyperdriveRating: 1.0, maxSpeed: 1050, crewSize: 1, cargoCapacity: 110.0 },
  { id: "3", name: "TIE Advanced x1", hyperdriveRating: 1.0, maxSpeed: 1200, crewSize: 1, cargoCapacity: 150.0 },
  { id: "4", name: "Star Destroyer", hyperdriveRating: 2.0, maxSpeed: 975, crewSize: 37085, cargoCapacity: 36000000.0 },
  { id: "5", name: "Death Star", hyperdriveRating: 4.0, maxSpeed: 1, crewSize: 342953, cargoCapacity: 1000000000000.0 },
  { id: "6", name: "Slave I", hyperdriveRating: 3.0, maxSpeed: 1000, crewSize: 1, cargoCapacity: 70000.0 },
  { id: "7", name: "Naboo Starfighter", hyperdriveRating: 1.0, maxSpeed: 1100, crewSize: 1, cargoCapacity: 65.0 },
  { id: "8", name: "Republic Cruiser", hyperdriveRating: 2.0, maxSpeed: 900, crewSize: 9, cargoCapacity: 2000000.0 },
  { id: "9", name: "Jedi Interceptor", hyperdriveRating: 1.5, maxSpeed: 1500, crewSize: 1, cargoCapacity: 60.0 },
  { id: "10", name: "A-wing", hyperdriveRating: 1.0, maxSpeed: 1300, crewSize: 1, cargoCapacity: 20.0 },
  { id: "11", name: "B-wing", hyperdriveRating: 2.0, maxSpeed: 950, crewSize: 1, cargoCapacity: 45.0 },
  { id: "12", name: "TIE Defender", hyperdriveRating: 1.0, maxSpeed: 1400, crewSize: 1, cargoCapacity: 100.0 },
  { id: "13", name: "Imperial Shuttle", hyperdriveRating: 1.0, maxSpeed: 850, crewSize: 6, cargoCapacity: 80000.0 },
  { id: "14", name: "Mon Calamari Cruiser", hyperdriveRating: 1.0, maxSpeed: 950, crewSize: 5400, cargoCapacity: 5000000.0 },
  { id: "15", name: "Venator Star Destroyer", hyperdriveRating: 1.0, maxSpeed: 975, crewSize: 7400, cargoCapacity: 20000000.0 }
];

export const people = [
  { id: "1", name: "Luke Skywalker", height: 172, mass: 77, birthYear: 19, forceSensitivity: 95 },
  { id: "2", name: "Darth Vader", height: 202, mass: 136, birthYear: 41, forceSensitivity: 100 },
  { id: "3", name: "Leia Organa", height: 150, mass: 49, birthYear: 19, forceSensitivity: 85 },
  { id: "4", name: "Han Solo", height: 180, mass: 80, birthYear: 29, forceSensitivity: 0 },
  { id: "5", name: "Obi-Wan Kenobi", height: 182, mass: 77, birthYear: 57, forceSensitivity: 98 },
  { id: "6", name: "Yoda", height: 66, mass: 17, birthYear: 896, forceSensitivity: 100 },
  { id: "7", name: "Chewbacca", height: 228, mass: 112, birthYear: 200, forceSensitivity: 0 },
  { id: "8", name: "R2-D2", height: 96, mass: 32, birthYear: 33, forceSensitivity: 0 },
  { id: "9", name: "C-3PO", height: 167, mass: 75, birthYear: 112, forceSensitivity: 0 },
  { id: "10", name: "Padmé Amidala", height: 165, mass: 45, birthYear: 46, forceSensitivity: 0 },
  { id: "11", name: "Mace Windu", height: 188, mass: 84, birthYear: 72, forceSensitivity: 97 },
  { id: "12", name: "Qui-Gon Jinn", height: 193, mass: 89, birthYear: 92, forceSensitivity: 96 },
  { id: "13", name: "Anakin Skywalker", height: 188, mass: 84, birthYear: 41, forceSensitivity: 100 },
  { id: "14", name: "Rey", height: 170, mass: 54, birthYear: 15, forceSensitivity: 99 },
  { id: "15", name: "Kylo Ren", height: 189, mass: 89, birthYear: 5, forceSensitivity: 98 }
];

const schema = buildSchema(`
  type Starship {
    id: ID
    name: String
    hyperdriveRating: Float
    maxSpeed: Int
    crewSize: Int
    cargoCapacity: Float
  }

  type StarshipConnection {
    starships: [Starship]
  }

  type Person {
    id: ID
    name: String
    height: Int
    mass: Int
    birthYear: Int
    forceSensitivity: Int
  }

  type PeopleConnection {
    people: [Person]
  }

  type Query {
    allStarships: StarshipConnection
    allPeople: PeopleConnection
  }
`);

const root = {
  allStarships: () => ({ starships }),
  allPeople: () => ({ people }),
};

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(4000, () =>
  console.log('Local GraphQL running at http://localhost:4000/graphql')
);
