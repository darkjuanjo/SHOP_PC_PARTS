import gql from 'graphql-tag';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_INVENTORY = gql`
mutation add_to_Inventory($name:String!, $price:String!, $category:String!, $description: String!, $stock: Int!, $image:String){
  add_to_Inventory(name: $name, price: $price, category: $category, description: $description, stock: $stock, image: $image) {
    _id
    name
    price
    category
    description
    stock
    image
  }
}
`;

export const REMOVE_INVENTORY = gql`
mutation delete_from_Inventory($name:String!){
  delete_from_Inventory(name: $name) {
    _id
    name
    price
    category
    description
    stock
    image
  }
}
`;

export const ADD_ORDER = gql`
mutation addOrder($input:[Order]!,$cost:Float!){
  addOrder(product:$input,cost:$cost ){
    _id
    username
    email
    orders
  }  
}
`;

