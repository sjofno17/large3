const playerSchema = require("../data/db").Player;

module.exports = {
    mutations: {
        createPlayer: (_, {name}) => {
            return new Promise((resolve, reject) => {
                playerSchema.create({name, deleted: false}, (err, results) => {
                    if (err || results == null) {
                        return resolve(null);
                    }
                    resolve(results);
                });
            })

        },
        updatePlayer: (_, {id, name}) => {
            return new Promise((resolve ,reject) => {
                playerSchema.findOneAndUpdate({_id: id, deleted: false}, {name}, (err, result) => {
                    if (err) {
                        return resolve(null);
                    }
                    resolve({
                        ...result,
                        name
                    });
                });
            })
        },
        removePlayer: (_, {id}) => {
            return new Promise((resolve, reject) => {
            playerSchema.findOneAndUpdate({_id: id, deleted: false}, {deleted: true}, (err, result) => {
                if (err || result == null) {
                    return resolve(false);
                }
                resolve(true);
            });
            });
        }
    },
    queries: {
        allPlayers: () => playerSchema.find({deleted: false}),
        player: async (_,{id}) => {
            var result = await playerSchema.find({_id: id, deleted: false});
            return result;
        }
    }
}