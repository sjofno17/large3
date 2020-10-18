const basketBallFields = require("./basketballField");
const pickupGame = require("./pickupGame");
const player = require("./player");

module.exports = `
    ${basketBallFields}
    ${pickupGame}
    ${player}
`;