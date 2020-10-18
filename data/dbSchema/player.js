const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerShcema = new Schema({
    name: {type: String, required: true},
    playedGames: [{type: Schema.Types.ObjectId, ref: 'PickupGame', autopopulate: true}],
    deleted: {type: Boolean, default: false}
}, {collection: "Player"});
playerShcema.plugin(require('mongoose-autopopulate'));
playerShcema.set('toObject', {
    virtuals: true
});
module.exports = playerShcema;