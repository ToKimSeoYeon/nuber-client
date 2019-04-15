import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "graphql-endpoint"
});

export default client;
