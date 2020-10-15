module.exports `
    type Mutation {
        createPickupGame(start: Moment! end: Moment! loacation: BasketballField! host: Player!): PickupGame
        createPlayer(name: string!): Player
        updatePlayer(id: ID! name:string!): Player
        removePickupGame(id: ID!): PickupGame
        removePlayer(id: ID!): Player
        addPlayerToPickupGame(): PickupGame
        removePlayerFromPickupGame(): PickupGame
    }
`;

//eftir að setja í síðustu tvo og athuga hvort hinir séu réttir