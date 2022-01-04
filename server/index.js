const express = require("express");
const path = require('path');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql')
const schema = require("./schema");

const app = express();
app.use(express.json())

app.use('/build', express.static(path.join(__dirname, '../build')))


app.use('/graphql', 
    graphqlHTTP({
        schema,
        graphiql: true
    })
)

app.listen(5000, ()=>console.log("Running on 5000"))