//graphql yoga server
const { GraphQLServer } = require('graphql-yoga');
//pulling in my graphql mutations and queries
const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');
//pulling in db
const db = require('./db');

function createServer() {
  return new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers: {
      Mutation,
      Query
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false
    },
    context: req => ({ ...req, db })
  });
}

module.exports = createServer;
