const graphql = require('graphql')
const _ = require('lodash')
const moment = require('moment')
const fetch = require('node-fetch')
const AlgorithmType = require('./algorithm')

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLList,
  GraphQLInt,
  GraphQLFloat,
} = graphql

const BalanceType = new GraphQLObjectType({
  name: 'BalanceType',
  fields: {
    pair: { type: GraphQLString },
    amount: { type: GraphQLString },
  },
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    algorithm: {
      type: AlgorithmType,
      resolve: () => ({}),
    },
    balances: {
      type: new GraphQLList(BalanceType),
      resolve: () => ([
        { pair: 'BTC', amount: '11122.33' },
        { pair: 'ETC', amount: '11122.33' },
      ]),
    },
  },
})


module.exports = new GraphQLSchema({
  query: RootQuery,
  // mutation: Mutation,
})
