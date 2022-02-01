import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

export const isDarkModeVar = makeVar(true);
export const userVar = makeVar(null);

// Apollo GraphQL client.
const client = new ApolloClient({
  headers: {
    authorization: `ApiKey ${process.env.NEXT_PUBLIC_CODE_ESI_APOLLO_API_KEY}`,
  },
  uri: `${process.env.NEXT_PUBLIC_CODE_ESI_GRAPHQL_API}`,
  cache: new InMemoryCache(),
});

export default client;
