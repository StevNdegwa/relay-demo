const fs = require("fs");

const { printSchema } = require("graphql");

const schema = require("./schema");

fs.writeFileSync("./server/schema/schema.graphql", printSchema(schema))