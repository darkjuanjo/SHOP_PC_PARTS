import gql from 'graphql-tag';

export const QUERY_ITEMS = gql`
query getItems($input:String){
  items(category:$input){
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
query getOrder($input:String!) {
  getOrder(order:$input)
  {
    item{
      _id
      name
      cost
      category
      description
      stock
      AddedAt  
    }
    qty
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
