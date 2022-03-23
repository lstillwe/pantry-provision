import React from 'react';
import ItemCard from '../components/ItemCard';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

export default function Inventory() {
    //check to make sure we are logged in
    if (!Auth.getToken()) {
        window.location.assign('/');
    }
    console.log(Auth.getProfile());

    const { loading, data } = useQuery(QUERY_ME);
    const userData = data?.me || {};
    const items = userData?.items || [];
    if (loading) {
        return <h2>LOADING...</h2>;
    }
    return (
        <>
            <div>
                <h1>Inventory</h1>
                <div className={'item-container'}>
                    {items &&
                        items.length > 0 &&
                        items.map((item, i) => {
                            return (
                                <ItemCard {...item} key={`item-card-${i}`} />
                            );
                        })}
                </div>
                <div className={'add-item-wrap'}>
                    <Link className="add-item btn" to={'/detail'}>
                        Add Item
                    </Link>
                </div>
            </div>
        </>
    );
}