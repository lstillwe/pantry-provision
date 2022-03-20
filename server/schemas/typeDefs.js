const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
type User {
    _id: ID
    email: String
    items: [Item]
}
type Item {
    itemId: ID
    name: String
    price: Float
    quantity: Int
    threshold: Int
    storage: String
    category: String
}
type Auth {
    token: ID!
    user: User
}
type Query {
    me: User
}
input ItemInput {
    itemId: ID
    name: String
    price: Float
    quantity: Int
    threshold: Int
    storage: String
    category: String
}
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(email: String!, password: String!): Auth
    addItem(itemData: ItemInput!): User
    updateItem(
        itemId: ID!,
        name: String,
        price: Float,
        quantity: Int,
        threshold: Int,
        storage: String,
        category: String,
    ): User
    deleteItem(itemId: ID!): User
    updateInventory(itemId: ID!, quantity: Int): User
}
`;

// export the typeDefs
module.exports = typeDefs;
