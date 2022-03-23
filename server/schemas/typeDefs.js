const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    email: String
    items: [Item]
  }
  type Item {
    _id: ID
    name: String
    price: Float
    quantity: Int
    threshold: Int
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
    name: String
    price: Float
    quantity: Int
    threshold: Int
    category: String
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(email: String!, password: String!): Auth
    addItem(
      name: String
      price: Float
      quantity: Int
      threshold: Int
      category: String
    ): User
    updateItem(
      _id: ID!
      name: String
      price: Float
      quantity: Int
      threshold: Int
      category: String
    ): User
    deleteItem(itemId: ID!): User
    updateInventory(itemId: ID!, quantity: Int): User
  }
`;

// export the typeDefs
module.exports = typeDefs;