const { connectionDefinitions, globalIdField, connectionFromArray, connectionArgs } = require("graphql-relay")
const { GraphQLObjectType, GraphQLString, GraphQLID } = require("graphql");
const RaceType = require("./RaceType")
const db = require("./database")
const {nodeInterface} = require("./nodeInterface");

const { connectionType: raceConnection } = connectionDefinitions({
  nodeType: RaceType,
});

const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'A user who loves to run',
  interfaces: [nodeInterface],
  fields: () => ({
    id: globalIdField(),
    username: { type: GraphQLString, description: 'The name of the user' },
    email: { type: GraphQLString },
    races: {
      type: raceConnection,
      description: 'The races for a specific user',
      args: connectionArgs,
      resolve: async (user, args) => {
        const userRaces = await db.getRaces(user.id);
        // Very powerful helper function below. This is what gives us many of our paging options
        // ... first, last, after, before
        return connectionFromArray([...userRaces], args);
      },
    },
  }),
});

module.exports = UserType;