const { gql } = require('apollo-server-express');

const typeDefs = gql`
input Order {
  product: ID
  qty: Int
}

type Product {
  _id: ID
}

type Users {
  _id: ID
  username: String
  email: String
  orders: [String]
}

type User {
    _id: ID
    username: String
    email: String
    orders: [Product]
}

type Items {
    _id: ID
    name: String
    price: Float
    category: String
    description: String
    stock: Int
    image: String
    AddedAt: String
}

type Item {
  _id: ID
  name: String
  price: Float
  category: String
  description: String
  stock: Int
  image: String
  AddedAt: String
}

type Purchased_Item {
  _id: ID
  name: String
  cost: String
  category: String
  description: String
  qty_bought: Int
}

type Purchased {
  order_id: String
  products: [Purchased_Item]
  order_cost: Int
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
    getOrders(orders: [String]!): [Purchased]
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    add_to_Inventory(name: String!, cost: String!, category: String!, description: String!, stock: Int!): Item
    addOrder(product: [Order]!, cost: Int!): User
  }
`;

module.exports = typeDefs;