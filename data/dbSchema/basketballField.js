const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const basketballFieldSchema = new Schema({
    id: {type: String, required: true},
    name: {type: String, required: true},
    capacity: {type: Number, required: true},
    yearOfCreation: {type: String, required: true},
    pickupGames: Array,
    status: {type: String, required: true},
}, {collection: "BasketballField"});
module.exports = basketballFieldSchema;