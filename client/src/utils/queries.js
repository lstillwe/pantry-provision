import gql from 'graphql-tag';

export const QUERY_ME = gql`
    {
        me {
            _id
            email
            items {
                _id
                name
                price
                quantity
                threshold
                category
            }
        }
    }
`;