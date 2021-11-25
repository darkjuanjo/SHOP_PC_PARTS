import gql from 'graphql-tag';

export const QUERY_ITEMS = gql`
query Items{
  items{
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

export const QUERY_USERS = gql`
query user{
  users {
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
        _id
        username
        email
        orders{
          _id
        }
      }
    }
  }
`;
