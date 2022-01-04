const { nodeInterface } = require("./nodeInterface");
const { GraphQLObjectType, GraphQLString, GraphQLID } = require("graphql")
const { globalIdField } = require("graphql-relay");
const db = require("./database");

const RaceType = new GraphQLObjectType({
  name: 'Race',
  interfaces: [nodeInterface],
  fields: () => ({
    id: globalIdField(),
    date: { type: GraphQLString, description: 'Date of the race' },
    type: { type: GraphQLString, description: 'Type of race' },
    time: { type: GraphQLString, description: 'Finish time of the race' }
  }),
});

module.exports = RaceType;