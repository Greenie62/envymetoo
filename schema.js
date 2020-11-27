const {GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLInt, GraphQLList} = require('graphql');


const MemberType = new GraphQLObjectType({
    name:"Member",
    fields:()=>({
        username:{type:GraphQLString},
        password:{type:GraphQLString},
        balance:{type:GraphQLInt},
    })
})

const ItemType = new GraphQLObjectType({
    name:"Item",
    fields:()=>({
        itemname:{type:GraphQLString},
        price:{type:GraphQLInt},
        quantity:{type:GraphQLInt},
        itemtype:{type:GraphQLString}
    })
})

const RootQuery = new GraphQLObjectType({})



module.exports = new GraphQLSchema({
    query:RootQuery
})