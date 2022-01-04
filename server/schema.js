const { GraphQLSchema } = require("graphql")
const query = require("./QueryType");

module.exports = new GraphQLSchema({
    query
})