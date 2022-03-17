import gql from 'graphql-tag';

export const QUERY_ME = gql`
{
    me {
      _id
      email
      items {
        itemId
        name
        price
        quantity
        threshold
        storage
        category
      }
    }
  }
`;