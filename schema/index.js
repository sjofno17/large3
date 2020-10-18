const enums = require('./enums/BasketballFieldStatus');
const inputs = require('./input/Input');
const mutations = require('./mutations');
const queries = require('./queries');
const types = require('./types/Types');

module.exports = `
  scalar Moment
  ${enums}
  ${inputs}
  ${mutations}
  ${queries}
  ${types}
`;
