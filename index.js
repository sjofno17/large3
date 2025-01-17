const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server
    .listen() //listens on port 4000 by default
    .then(({ url }) => console.log(`GraphQL Service is running on ${ url }`));
