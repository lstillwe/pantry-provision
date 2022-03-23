import React from 'react';
import { getFA_Icon } from '../utils/misc';
import { useMutation } from '@apollo/client';
import { UPDATE_INVENTORY } from '../utils/mutations';
import { QUERY_ME } from '../utils/queries';
export default function ItemCard({
    category,
    name,
    price,
    quantity,
    threshold,
    _id,
}) {
    const [updateInventory, { data }] = useMutation(UPDATE_INVENTORY, {
        refetchQueries: [
            {
                query: QUERY_ME,
            },
        ],
    });
    async function handleClick(e) {
        const newQuantity = quantity + parseInt(e.target.value);
        try {
            const response = await updateInventory({
                variables: { itemId: _id, quantity: newQuantity },
            });
        } catch (e) {
            console.log(JSON.stringify(e, null, 2));
        }
    }
    return (
        <div className={'item-card'}>
            <h2>{name}</h2>
            {getFA_Icon(category)}
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
            <p>Threshold: {threshold}</p>
            <button value={1} onClick={handleClick}>
                Increase
            </button>
            <button value={-1} onClick={handleClick}>
                Decrease
            </button>
        </div>
    );
}