const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerShcema = new Schema({
    id: {type: String, required: true},
    name: {type: String, required: true},
    playedGames: {type: Array}
}, {collection: "Player"});
module.exports = playerShcema;