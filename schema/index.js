const enums = require('./enums');
const inputs = require('./inputs');
const mutations = require('./mutations');
const queries = require('./queries');
const types = require('./types');


module.exports = `
  ${enums}
  ${inputs}
  ${mutations}
  ${queries}
  ${types}
`;

//Arnar gerði svona á eftir að skoða betur hvort þetta virki svona