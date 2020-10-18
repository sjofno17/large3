const moment = require('moment');
const pickupGameSchema = require('../data/db').PickupGame;
const playerSchema = require("../data/db").Player;

module.exports = {
    mutations: {
        createPickupGame: async (_, {start, end, basketBallFieldId, hostId}, {dataSources: { BasketballFieldService}}) => {
            try {
                const field = await BasketballFieldService.getById(basketBallFieldId);
                if (!field || field.status === 'CLOSED') {
                    return null;
                }
            } catch(_e) {
                return null;
            }
            const now = moment().unix();
            const startTimestamp = moment(start).unix();
            const startDate = moment(start).toDate();
            const endDate = moment(start).toDate();
            const endTimestamp = moment(end).unix();

            if (startTimestamp < now || endTimestamp < now) {
                return null;
            }
            const diff = ((endTimestamp - startTimestamp)) / 60;
            if (diff <  5 || diff > 120) {
                return null;
            }
            const x = await pickupGameSchema.findOne(
                {
                    location: basketBallFieldId,
                    $and: [
                        {$or: [{start: {$gte: startDate, $lte: endDate}}, {end: {$gte: startDate, $lte: endDate}}]}
                    ]
                }
            );

            if (x) {
                return null;
            }
            return new Promise((resolve, reject) => {
                pickupGameSchema.create({deleted: false, start, end, location: basketBallFieldId, registeredPlayers: [hostId], host: hostId}, (err, results) => {
                    if (err || results == null) {
                        console.log(err);
                        return resolve(null);
                    }
                    resolve(results);
                })
            })
        },
        removePickupGame: (_, {id}) => {
            return new Promise((resolve, reject) => {
                pickupGameSchema.findOneAndUpdate({_id: id, deleted: false}, {deleted: true}, (err, result) => {
                    if (err || result == null) {
                        return resolve(false);
                    }
                    resolve(true);
                });
            });
        },

        addPlayerToPickupGame: async (_, {playerId, pickupGameId}, { dataSources: { BasketballFieldService }}) => {
            const player = await playerSchema.findOne({_id: playerId, deleted: false});
            if (!player) {
                return null;
            }
            const game = await pickupGameSchema.findById(pickupGameId);
            const {start, end, location, registeredPlayers} = game;

            try {
                const field = await BasketballFieldService.getById(location);
                if (!field) {
                    return null;
                }
                if (field.capacity <= registeredPlayers.length) {
                    return null;
                }
            } catch(_e) {
                return null;
            }
            const gameoverlap = await pickupGameSchema.findOne(
                {
                    registeredPlayers: playerId,
                    id: {$ne: pickupGameId},
                    $and: [
                        {$or: [{start: {$gte: start, $lte: end}}, {end: {$gte: start, $lte: end}}]}
                    ]
                }
            );
            if (gameoverlap) {
                return null;
            }
            return new Promise((resolve, reject) => {
            const dateNow = new Date();
            pickupGameSchema.findOneAndUpdate({_id: pickupGameId, deleted: false, registeredPlayers: {
                "$ne": playerId
            },
            end: {$gte: dateNow}
            }, {
                $push: {registeredPlayers: playerId}
            }, (err, results) => {
                if (err || !results) {
                    return resolve(null);
                }

                resolve({
                    ...results,
                    registeredPlayers: [...results.registeredPlayers, player]
                });
            });
            });
        },

        removePlayerFromPickupGame: (_, {playerId, pickupGameId}) => {
            const dateNow = new Date();
            return new Promise((resolve, reject) => {
            pickupGameSchema.findOneAndUpdate({_id: pickupGameId, deleted: false, registeredPlayers: {$all: [playerId]},
                end: {$gte: dateNow}
            }, {
                $pull: {registeredPlayers: playerId}
            }, async (err, results) => {
                if (err || !results) {
                    return resolve(false);
                }
                const { registeredPlayers, host } = results;
                if (host.id === playerId) {
                    if (registeredPlayers.length === 1) {
                        await pickupGameSchema.findByIdAndUpdate(pickupGameId, {deleted: true});
                   } else  {
                        const newHost = registeredPlayers.filter((e) => e.id !== playerId).sort((a, b) => a.name.localCompare(b.name)).find((e) => e);
                        await pickupGameSchema.findByIdAndUpdate(pickupGameId, {host: newHost});
                    }
                }


                resolve(true);
            });
            });
        }
    },
    queries: {
        allPickupGames: async (_, {}, { dataSources: { BasketballFieldService }}) => {
            var results = (await pickupGameSchema.find({deleted: false})).map(async (e) => {
                const id = e.id.toString();
                const registeredPlayers = e.registeredPlayers;
                const location = await BasketballFieldService.getById(e._doc.location);
                const host = e.host;
                return {
                    ...e._doc,
                    id,
                    registeredPlayers,
                    host,
                    location
                }
            });
            return Promise.all(results);
        },
        pickupGame: async (_,{id}, { dataSources: { BasketballFieldService }}) => {
            var result = await pickupGameSchema.findById(id);
            const registeredPlayers = result.registeredPlayers;
            const location = await BasketballFieldService.getById(result._doc.location);
            const host = result.host;
            return {
                ...result,
                id,
                registeredPlayers,
                host,
                location
            };
        }
    }
}