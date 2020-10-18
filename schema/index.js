const enums = require('./enums/BasketballFieldStatus');
const inputs = require('./input/input');
const mutations = require('./mutations/mutations');
const queries = require('./queries/queries');
const types = require('./types/types');

module.exports = `
  ${enums}
  ${inputs}
  ${mutations}
  ${queries}
  ${types}
`;