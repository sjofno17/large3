const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pickupGameShcema = new Schema({
    id: {type: String, required: true},
    start: {type: String, required: true},
    end: {type: String, required: true},
    location: {type: String, required: true},
    registeredPlayers: Array,
    host: {type: String, required: true},
}, {collection: "PickupGame"});
module.exports = pickupGameShcema;