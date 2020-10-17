/**
 *  db.js - The connection to the MongoDB database. The database should be
 *  accessible via the context
 *  (https://www.apollographql.com/docs/apolloserver/security/authentication/#putting-user-info-on-the-context)
 */

const mongoose = require('mongoose');
const basketballFieldSchema = require('./dbSchema/basketballField');
const pickupGameShcema = require('./dbSchema/pickupGame');
const playerSchema = require('./dbSchema/player');
const connection = mongoose.createConnection("", { useNewUrlParser: true,
useCreateIndex: true,
autoIndex: true,
keepAlive: true,
useUnifiedTopology: true  });

module.exports = {
    BasketballFields: connection.models('BasketballFields', basketballFieldSchema),
    Player: connection.models('Player', playerSchema),
    pickupGame: connection.models('PickupGame', pickupGameShcema)
}