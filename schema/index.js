

//það á örugglega að færa allt þetta i sér möppur undir schema

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



    type PickupGameInput {
        start : Moment!
        end : Moment!
        basketballFieldId : string!
        hostId : string!
    }
        
    type PlayerInput {
        name : string!
    }

    type SignupPlayerInput {
        playerId : string!
        pickupGameId : string!
    }



    enum BasketballFieldStatus {
        OPEN
        CLOSED
    }
`;