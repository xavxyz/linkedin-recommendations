import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';

import typeDefs from '../api/schema.graphql';
import resolvers from '../api/resolvers';
import mocks from '../api/mocks';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

addMockFunctionsToSchema({ schema, mocks });

createApolloServer({
  schema,
});
