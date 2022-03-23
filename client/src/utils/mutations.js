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
    mutation addUser($password: String!, $email: String!) {
        addUser(email: $email, password: $password) {
            token
            user {
                _id
                email
            }
        }
    }
`;

export const ADD_ITEM = gql`
    mutation addItem(
        $name: String
        $price: Float
        $quantity: Int
        $threshold: Int
        $category: String
    ) {
        addItem(
            name: $name
            price: $price
            quantity: $quantity
            threshold: $threshold
            category: $category
        ) {
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

export const DELETE_ITEM = gql`
    mutation deleteItem($itemId: ID!) {
        deleteItem(itemId: $itemId) {
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

export const UPDATE_ITEM = gql`
    mutation updateItem(
        $itemId: ID!
        $name: String
        $price: Float
        $quantity: Int
        $threshold: Int
        $category: String
    ) {
        updateItem(
            _id: $itemId
            name: $name
            price: $price
            quantity: $quantity
            threshold: $threshold
            category: $category
        ) {
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

export const UPDATE_INVENTORY = gql`
    mutation updateInventory($itemId: ID!, $quantity: Int) {
        updateInventory(itemId: $itemId, quantity: $quantity) {
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