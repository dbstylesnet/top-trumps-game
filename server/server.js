import express from 'express';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';

const app = express();
app.use(cors());

export const starships = [
  { id: "1", name: "Millennium Falcon", hyperdriveRating: 0.5 },
  { id: "2", name: "X-wing", hyperdriveRating: 1.0 },
  { id: "3", name: "TIE Advanced x1", hyperdriveRating: 1.0 },
  { id: "4", name: "Star Destroyer", hyperdriveRating: 2.0 },
  { id: "5", name: "Death Star", hyperdriveRating: 4.0 },
  { id: "6", name: "Slave I", hyperdriveRating: 3.0 },
  { id: "7", name: "Naboo Starfighter", hyperdriveRating: 1.0 },
  { id: "8", name: "Republic Cruiser", hyperdriveRating: 2.0 },
  { id: "9", name: "Jedi Interceptor", hyperdriveRating: 1.5 },
  { id: "10", name: "A-wing", hyperdriveRating: 1.0 },
  { id: "11", name: "B-wing", hyperdriveRating: 2.0 },
  { id: "12", name: "TIE Defender", hyperdriveRating: 1.0 },
  { id: "13", name: "Imperial Shuttle", hyperdriveRating: 1.0 },
  { id: "14", name: "Mon Calamari Cruiser", hyperdriveRating: 1.0 },
  { id: "15", name: "Venator Star Destroyer", hyperdriveRating: 1.0 }
];

export const people = [
  { id: "1", name: "Luke Skywalker", height: 172 },
  { id: "2", name: "Darth Vader", height: 202 },
  { id: "3", name: "Leia Organa", height: 150 },
  { id: "4", name: "Han Solo", height: 180 },
  { id: "5", name: "Obi-Wan Kenobi", height: 182 },
  { id: "6", name: "Yoda", height: 66 },
  { id: "7", name: "Chewbacca", height: 228 },
  { id: "8", name: "R2-D2", height: 96 },
  { id: "9", name: "C-3PO", height: 167 },
  { id: "10", name: "Padmé Amidala", height: 165 },
  { id: "11", name: "Mace Windu", height: 188 },
  { id: "12", name: "Qui-Gon Jinn", height: 193 },
  { id: "13", name: "Anakin Skywalker", height: 188 },
  { id: "14", name: "Rey", height: 170 },
  { id: "15", name: "Kylo Ren", height: 189 }
];

const schema = buildSchema(`
  type Starship {
    id: ID
    name: String
    hyperdriveRating: Float
  }

  type StarshipConnection {
    starships: [Starship]
  }

  type Person {
    id: ID
    name: String
    height: Int
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
