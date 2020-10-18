const playerResolver = require("./playerResolver");
const pickupGameResolver = require('./pickupGameResolver');
const basketballFieldResolver = require('./basketballFieldResolver');
const moment = require('../schema/scalar/Moment');
module.exports = {
    Query: {
        ...playerResolver.queries,
        ...pickupGameResolver.queries,
        ...basketballFieldResolver.queries
    },
    Mutation: {
        ...pickupGameResolver.mutations,
        ...playerResolver.mutations,
    },
    Moment: moment
};

