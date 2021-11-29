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

input User {
    username: String
    email: String
    password: String
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
  price: String
  category: String
  description: String
  qty_bought: Int
}

type Purchased {
  order_id: String
  products: [Purchased_Item]
  order_cost: Float
}

type Auth {
    token: ID!
    user: Users
}

type Query {
    me: Users
    users: [Users]
    user(username: String!): Users
    items(category: String): [Items]
    item(name: String!): Item
    getOrders(orders: [String]!): [Purchased]
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    add_to_Inventory(name: String!, cost: String!, category: String!, description: String!, stock: Int!): Item
    addOrder(product: [Order]!, cost: Float!): Users
    editUser(input: User!, username: String): Users
    deleteUser(username: String!): String
  }
`;

module.exports = typeDefs;