import React from 'react';
import './Cosmetic.css';

const Cosmetic = (props) => {
    const {name, price, id} = props.cosmetic;

    const addToCart = (id) => {
        console.log('item added', id);
    }

    const addToCartWithPera = () => addToCart(id);
    return (
        <div className='product'>
            <h2>Buy this: {name}</h2>
            <p>Only For: ${price} </p>
            <p>It has Id: {id}</p>
            {/* <button onClick={addToCartWithPera}>Add to cart</button> */}
            <button onClick={() => addToCart(id)}>Add to cart</button>
        </div>
    );
};

export default Cosmetic;