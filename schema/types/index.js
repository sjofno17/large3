
module.exports = `
    type BasketballField {
        id : ID!
        name : string! 
        capacity : int!
        yearOfCreation : Moment!
        pickupGames [PickupGame]
        status: BasketballFieldStatus!
    }
    type PickupGame {
        id : ID!
        start : Moment!
        end : Moment!
        location : BasketballField!
        registeredPlayers : [Player]
        host : Player!
    }
    type Player {
        id : ID!
        name : string!
        playedGames : [PickupGame] 
    }
`;
