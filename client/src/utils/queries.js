import gql from 'graphql-tag';

export const QUERY_ITEMS = gql`
query getItems($input:String){
  items(category:$input){
    _id
    name
    cost
    category
    description
    stock
    AddedAt
  }
}
`;

export const QUERY_USER = gql`
query($username:String!) {
  user(username:$username) {
    _id
    username
    email
    orders{
      _id
    }
  }
}
`;

export const QUERY_ORDER = gql`
query getOrders($input:[String]!) {
  getOrders(orders:$input)
  {
    order_id
    products {
      _id
      name
      cost
      category
      description
      qty_bought
    }
    order_cost
  }
}
`;

export const QUERY_ME_BASIC = gql`
  {
    me {
      users {
        username
      }
    }
  }
`;
