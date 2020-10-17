var moment = require('moment');
const { GraphQLScalarType } = require('graphql');
//stolin kóði
module.exports = new GraphQLScalarType({
    name: 'Moment',
    serialize: function(value) {
        let date = moment(value);
        if(!date.isValid){
            throw new GraphQLError('Field serialize error: value is an invalid Date');
        }
        return date.format();
    }
});

