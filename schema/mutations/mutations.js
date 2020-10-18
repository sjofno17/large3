  
module.exports = `
scalar Moment
type Mutation {
    createPickupGame(start: Moment! end: Moment! basketBallFieldId: String! hostId: String!): PickupGame
    createPlayer(name: String!): Player
    updatePlayer(id: ID! name:String!): Player
    removePickupGame(id: ID!): PickupGame
    removePlayer(id: ID!): Player
    addPlayerToPickupGame(playerId: ID! pickupGameID: String! ): PickupGame
    removePlayerFromPickupGame(playerId: ID! pickupGameId: String! ) : PickupGame
}
`;