import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation loginUser($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
    }
  }
}
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $password: String!, $email: String!) {
  addUser(username: $username,  email: $email, password: $password) {
    token
    user {
      _id
    }
  }
}
`;

export const ADD_ITEM = gql`
    mutation addItem($itemData: ItemInput!) {
      addItem(itemData: $itemData)
        {
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

export const DELETE_ITEM = gql`
    mutation deleteItem($itemId: ID!) {
        deleteItem(itemId:$itemId) {
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

export const UPDATE_ITEM = gql`
    mutation updateItem($itemData: ItemInput!) {
        updateItem(itemData: $itemData) {
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

export const UPDATE_INVENTORY = gql`
    mutation updateInventory($itemId: ID!, $quantity: Int!) {
        updateInventory(itemId:$itemId, quantity:$quantity) {
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