const BasketballFieldResolver = require('./basketballFieldResolver');
const PickupGameResolver = require('./pickupGameResolver');
const PlayerResolver = require('./playerResolver');

module.exports = {
    Query: {
        ...BasketballFieldResolver.queries,
        ...PickupGameResolver.queries,        
        ...PlayerResolver.queries,
    },
    Mutation: {
        ...PickupGameResolver.mutations,
        ...PlayerResolver.mutations
    }
};

//hér þarf að skoða betur