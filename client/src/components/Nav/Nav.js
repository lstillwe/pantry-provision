import React from 'react';
import { capitalizeFirstLetter } from '../components/utils/helpers.js';

function Nav() {
    const currentCategory = {
        name: 'pantry',
        description: 'items categorized as foods belonging in the pantry'
    };
    return (
        <section>
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.name}</p>
        </section>
    );
}

export default Nav;