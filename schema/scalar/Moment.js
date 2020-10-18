var moment = require('moment');
moment.locale('is');

const { GraphQLScalarType } = require('graphql');
module.exports = new GraphQLScalarType({
    name: 'Moment',
    serialize: function(value) {
        let date = moment(value);
        if(!date.isValid){
            throw new GraphQLError('Field serialize error: value is an invalid Date');
        }
        return date.format('llll');
    },
    parseValue: function(value) {
        return moment(value, 'llll').toISOString();
    }
});

