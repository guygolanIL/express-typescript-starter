import { buildSchema } from "graphql";

export const schema = buildSchema(`
    type Query {
        users: [User]
        user(id: Int!): User
    }
    type User {
        name: String
        email: String
    }
`);
