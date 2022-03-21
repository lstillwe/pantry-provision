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
      email
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
                _id
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
                _id
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
    mutation updateItem($itemId: ID!, $name: String, $price: Float, $quantity: Int, $threshold: Int, $storage: String, $category: String) {
        updateItem(itemId:$itemId, name:$name, price:$price, quantity:$quantity, threshold:$threshold, storage:$storage, category:$category) {
            _id
            email
            items {
                _id
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
    mutation updateInventory($itemId: ID!, $quantity: Int) {
        updateInventory(itemId:$itemId, quantity:$quantity) {
            _id
            email
            items {
                _id
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