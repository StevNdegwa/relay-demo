//Entry types
const { GraphQLObjectType, GraphQLID } = require("graphql");
const { fromGlobalId } = require("graphql-relay")
const db = require("./database");

const UserType = require("./UserType");
const RaceType = require("./RaceType");
const { nodesField, nodeField } = require("./nodeInterface");

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve: async (_, args) => {
        const { id } = fromGlobalId(args.id);
        console.log(id);
        return db.getUser(id);
      },
    },
    race: {
      type: RaceType,
      args: { id: { type: GraphQLID } },
      resolve: (_, args) => {
        const { id } = fromGlobalId(args.id);
        console.log(id);
        return db.getRace(id);
      },
    },
    viewer: {
      type: UserType,
      resolve: () => db.getViewer(),
    },
    node: nodeField,
    nodes: nodesField
  }),
});

module.exports = Query;