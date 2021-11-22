const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Bought {
  _id: ID
  item: String
  qty: Int
}

type Purchase {
  _id: ID
  item: [Bought]
  BoughtAt: String
}

type Users {
  _id: ID
  username: String
  email: String
  history: [Purchase]
}

type User {
    _id: ID
    username: String
    email: String
    history: [Purchase]
}

type Items {
    _id: ID
    name: String
    cost: String
    category: String
    description: String
    stock: Int
    AddedAt: String
}

type Item {
    _id: ID
    name: String
    cost: String
    category: String
    description: String
    stock: Int
    AddedAt: String
}

type Auth {
    token: ID!
    user: User
}

type Query {
    me: User
    users: [User]
    user(username: String!): User
    items(category: String): [Items]
    item(name: String!): Item
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addItem(name: String!, cost: String!, category: String!, description: String!, stock: Int!): Item
    addCart(item: String!, qty: Int!): Bought
    addPurchase(item: [Bought]!): Purchase
  }
`;

module.exports = typeDefs;
