const errors = require("../errors");

module.exports = {
    queries: {
        player: async (parent, args, { db }) => {
            const player = find(i => i.id === args.id);
        },
        allPlayers: () => players
    },
    mutations: {
        //createPlayer:
        //updatePlayer
        //removePlayer:
    }
};