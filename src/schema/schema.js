const graphql = require('graphql')
const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLSchema } = graphql
const _ = require('lodash')

const users = [
  { id: '23', firstName: 'Harry', age: 20 },
  { id: '47', firstName: 'Ron', age: 21 },
  { id: '50', firstName: 'Hermione', age: 19 }
]

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt }
  }
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return _.find(users, { id: args.id })
      }
    }
  }
})

module.exports = new GraphQLSchema({ query: RootQuery })
