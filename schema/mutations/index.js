module.exports = `
    type Mutation {
        createPickupGame(start: Moment! end: Moment! basketBallFieldId: String! hostId: String!): PickupGame
        createPlayer(name: String!): Player
        updatePlayer(id: ID! name:String!): Player
        removePickupGame(id: ID!): Boolean
        removePlayer(id: ID!): Boolean
        addPlayerToPickupGame(playerId: ID! pickupGameId: String! ): PickupGame
        removePlayerFromPickupGame(playerId: ID! pickupGameId: String! ) : Boolean
    }
`;


