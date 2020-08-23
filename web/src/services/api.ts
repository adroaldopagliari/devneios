import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

export default new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:3333/graphql',
  }),
});
