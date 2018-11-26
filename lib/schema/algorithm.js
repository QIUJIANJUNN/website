const graphql = require('graphql')
const {
  mul,
  sub,
  add,
  round,
} = require('../../utils/calculation')

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLList,
  GraphQLInt,
  GraphQLFloat,
} = graphql

const liquidityAlgorithmBaseOnDepositReserveRatio = ({
  base,
  rate,
}) => {
  let tempBase = base
  let total = base
  while (tempBase > 0.1) {
    const amountCanBeUsed = sub(tempBase, mul(tempBase, rate))
    total = add(total, amountCanBeUsed)
    tempBase = amountCanBeUsed
  }
  return round(total, 2)
}


const MiningRigInformationType = new GraphQLObjectType({
  name: 'MiningRigInformationType',
  fields: {
    breakEventDay: {
      type: GraphQLString,
      resolve: () => '1',
    },
  },
})

const LiquidityType = new GraphQLObjectType({
  name: 'LiquidityType',
  fields: {
    byDepositReserveRatio: {
      type: GraphQLString,
      args: { ratio: { type: GraphQLString } },
      resolve: (parent, args) => liquidityAlgorithmBaseOnDepositReserveRatio({
        base: parent.base,
        rate: args.ratio,
      }),
    },
  },
})

const AlgorithmType = new GraphQLObjectType({
  name: 'AlgorithmType',
  fields: {
    liquidity: {
      type: LiquidityType,
      args: { base: { type: GraphQLString } },
      resolve: (parent, args) => args,
    },
    miningRigInformation: {
      type: MiningRigInformationType,
      resolve: x => x,
    },
  },
})

module.exports = AlgorithmType
