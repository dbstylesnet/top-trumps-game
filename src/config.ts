import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

// GraphQL query
export const GET_STARSHIPS_AND_PEOPLE = gql`
  query starshipsPeople {
    allStarships {
      starships {
        id
        name
        hyperdriveRating
      }
    }
    allPeople {
      people {
        id
        name
        height
      }
    }
  }
`;
