
module.exports = `
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
`;