const { nodeDefinitions, fromGlobalId }  = require("graphql-relay")
const db = require("./database");
const RaceType = require("./RaceType");

const {nodeInterface, nodeField, nodesField} = nodeDefinitions((globalId) => {

    const {type, id} = fromGlobalId(globalId);

    if (type === 'User') 
        return db.getUser(id);
    
    if (type === 'Race') 
        return db.getRace(id);
    
    return null;
}, (obj) => {

    if (obj.email) {
        return UserType;
    }

    if (obj.time) {
        return RaceType;
    }
    
    return null;
},);

module.exports = {
    nodeInterface,
    nodeField,
    nodesField
}
