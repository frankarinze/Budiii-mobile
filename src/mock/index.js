import { SchemaLink } from 'apollo-link-schema';
import { addMockFunctionsToSchema, makeExecutableSchema } from 'graphql-tools';

const typeDefs = `
type Query {
  users: [User]
}
type User {
  id: ID!,
  first_name: String!,
  last_name: String!,
}
type Mutation {
  createUser(first_name: String!): User
}
`;

const users = [{
    id: 1001,
    first_name: 'John',
    last_name: 'Joe',
}];

const mocks = {
    Mutation: () => ({
        addUser: (_root: unknown, { first_name, last_name }: { first_name: string, last_name: string }) => users.push({
            first_name,
            last_name,
            id: Date.now(),
        }),
    }),
    Query: () => ({
        users: () => users,
    }),
};

const schema = makeExecutableSchema({ typeDefs });
addMockFunctionsToSchema({ mocks, schema });

export const mockedLink = new SchemaLink({ schema });

export default null;