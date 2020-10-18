const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pickupGameShcema = new Schema({
    start: {type: Date, required: true},
    end: {type: Date, required: true},
    location: {type: String, required: true},
    registeredPlayers: [{type: Schema.Types.ObjectId, ref: 'Player', autopopulate: true}],
    host: {type: Schema.Types.ObjectId, ref: 'Player', required: true, autopopulate: true},
    deleted: {type: Boolean, default: false}
}, {collection: "PickupGame"});
pickupGameShcema.plugin(require('mongoose-autopopulate'));
pickupGameShcema.set('toObject', {
    virtuals: true
});
module.exports = pickupGameShcema;