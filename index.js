const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const { BasketballFieldService } = require('./services/basketballFieldService.js');
const db = require('./data/db');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
        return {
            BasketballFieldService: new BasketballFieldService()
        }
    },
    context: db
});

server
    .listen() //listens on port 4000 by default
    .then(({ url }) => console.log(`GraphQL Service is running on ${ url }`));
